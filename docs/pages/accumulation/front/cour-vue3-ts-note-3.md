# vue脚手架
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. Webpack5搭建Vue环境
### 1.1. 安装并配置vue
> 代码笔记：https://zmx2321.github.io/blog_code/accumulation/front/cour-vue3-ts-note/webpack_demo/webpack_vue/webpack.config.js
- `yarn add vue`
  - 如果是安装下一个版本的 => `yarn add vue@next`
  - vue在开发环境和生产环境都需要使用，所以不能加 `-D`
  - 现在vue的默认版本已经是3.x了
- 模板文件(public/index.html)我们从其他vue文件可以复制过来
  - 但同时要做一些配置
  ```js
  new HtmlWebpackPlugin({
    title: 'vueTemplate',
    //  如果模板里面有baseurl，需要定义
    template: './public/index.html'  // 传入自定义模板
  }),
  // 创建全局常量
  new DefinePlugin({
    // 当前文件夹
    BASE_URL: "'./'",  // 这里的BASE_URL可用在传入的自定义模板中，类似于vuecli中的public
  }),
  ```
- 配置main.js
```js
// 单只写vue，这样打包并不会出问题，但页面渲染没出来
import { createApp } from 'vue/dist/vue.esm-bundler'  // 将vue当成是一个模块直接去引入

// vue代码
const app = createApp({
  template: "<h2>vue3  132546</h2>",
  data() {
    return {
      title: "hello"
    }
  },
})
app.mount('#app')
```
- 页面渲染不出的原因
  - 在浏览器上有这样一段警告：Component provided template option but runtime compilation is not supported in this build of Vue
  - 组件提供了template，但我们现在用的是runtime compilation，runtime版本没有编译器，不支持对vue进行编译
  - vue在对我们的代码打包的时候有很多版本

### 1.2. vue打包不同版本解析
- vue(.runtime).global(.prod).js
  - 常用vue.global.js
  - runtime
    - 完整版是同时包含编译器和运行时的版本，CDN引入所对应的文件名为vue.js或vue.min.js
      - 该版本有编译器，占用代码体积，所以比runtime版大40%的体积
    - runtime版本是只包含运行时的版本，没有编译器，CDN引入所对应的文件名为vue.runtime.js或vue.runtime.min.js
      - 因该版本无编译器，故占用代码体积小，但无法直接实现页面渲染，需要利用 render 里的 h 函数来创建 HTML 节点，vue.js的webpack引入和@vue/cli 引入都默认使用此版本
  - prod版本是做过压缩的
  - 直接通过浏览器script引入
  - 会暴露一个全局的vue来使用
- vue(.runtime).esm-brower(.prod).js
  - 用于通过原生ES模块导入使用(在浏览器中通过`<script type='module'>`来使用)
- vue(.runtime).esm-bundler.js
  - 用于webpack、rollup、parcel等构建工具
  - 构建工具中默认是vue.runtime.esm-bundler.js
  - 如果我们需要解析模板template，那么需要手动指定vue.esm-bundler.js
  - 所以在webpack中打包的代码无法在浏览器显示
- vue.cjs(.prod).js
  - 服务端渲染使用
  - 通过require在node.js中使用
- 总结：vue.js是完整版，包含运行时加编译器，vue.runtime.js仅包含运行时，runtime代码体积比完整版少40%，vue默认打包的版本是runtime无法直接在浏览器渲染，需要指定vue/dist/vue.esm-bundler
- 在vue中我们有三种方式编写dom元素
  - template模板的方式(之前经常使用的方式)
    - 这里的template我们必须通过源码中的一部分代码进行编译
  - render函数的方式，使用h函数来编写渲染的内容
    - h函数可以直接返回一个虚拟节点，即Vnode节点
  - 通过.vue文件中的template来编写模板
    - .vue文件中的template可以通过v-loader，再依赖另外一个库，对其进行编译和处理
- vscode对sfc的支持（single-file components[单文件组件]）
  - vetur，从vue2开发就一直在使用的vscode支持vue的插件
  - volar，官方推荐的插件（后续会继续volar开发官方的vscode插件）
- webpack解析sfc文件
  - 在开发环境安装vue-loader
    - 为了解析.vue文件
    - yarn add vue-loader@next -D => 会报错
    - yarn add vue/compiler-sfc - D
    ```js
    const { VueLoaderPlugin } = require('vue-loader/dist/index');
    new VueLoaderPlugin()
    ```
  - 警告的意思
    - `__vue_OPTIONS_API__` => 对vue2做适配
      - 默认为true，如果项目中没有vue2的语法，建议设置为false
    - `vue_prod_devtools` => vue调试工具
      - 一般建议生产环境关闭
    ```js
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,  // 是否兼容vue2
      __VUE_PROD_DEVTOOLS__: false  // 生产环境是否打开调试工具
    }),
    ```

### 1.3. webpack中的服务
> 代码笔记：https://zmx2321.github.io/blog_code/accumulation/front/cour-vue3-ts-note/webpack_demo/webpack-vue/webpack.config.js

> 希望当文件发生变化时，可以自动完成编译和展示
- 可实现的方案
  - webpack watch mode
  - webpack-dev-server(常用)
  - webpack-dev-middleware(比较少)
- webpack提供的watch模式 （webpack watch mode）
  - 该模式下，webpack依赖图中所有的文件，只要有一个发生了更新，那么代码将被重新编译
    - 但这个模式不能刷新浏览器，即不能实时重新加载（live reloading）
  - 开启的两种方式
    - 在导出的配置中，添加 watch: true
      - 在webpack.config.js中添加配置
    - 在webpack的命令中，添加 --watch标识 （在package.json中）
      - `"build": "webpack --watch"`,
      - webpack-cli会帮助我们处理--watch这个选项，最终变成watch: true的配置
      - 每次保存，会重新进行编译
- webpack-dev-server
  - 该指令会自动帮我们搭建一个本地服务器
    - 这个服务是基于node中的express框架的
  - 用这个指令，他不会帮我们打包代码（即生成build文件）的
    - 这个工具依然是会对我们的代码进行打包的，只是编译和打包的代码没有做文件的写入
    - 他是先将编译的内容放到内存中，再通过我们的express服务器来访问之前我们放到内存里面的资源，并直接读取到浏览器
    - 少了从文件到内存的过程，增加了开发效率，即浏览器访问也会更加快速一些
    - 事实上，webpack-dev-server使用了一个库叫memfs(memory-fs-webpack)(fs=>file-system=>文件系统)
    - 在node-modules中的webpack-dev-server文件的package.json中可以找到memfs这个库的引入
    - 这个不是webpack官方开发的，属于第三方的库
    - webpack官方开发的memory-fs在很久之前的webpack版本有用过，但已经很多年不维护了
  - 安装
    - `yarn add webpack-dev-server -D` => 开发时使用
    - 在package.json中 `"serve": "webpack serve"`
      - 执行serve命令之后，webpack内部会找到dev-server来帮助我们启动本地服务
      - 这个指令也是根据webpack的cli，来找到serve参数，然后根据这个参数，利用webpack-dev-server帮助我们启动本地服务
  - 在webpack.config.js中做一些配置
  ```js
  module.exports = {
    target: "web",  // 为什么环境打包的（node或者web），如果不设置模块热替换可能会出问题
    // ...
    devServer: {
      // 在开发环境中不想被复制，只在开发环境中使用的话，就需要在这里添加
      // contentbase代表html页面所在的相对目录，如果我们不配置项，devServer默认html所在的目录就是项目的根目录
      contentBase: "./public",  // 如果有资源没有在webpack中加载到（不在webpack的依赖图中），就会从public中加载
      hot: true,  // 模块热替换（HMR）  并不是浏览器刷新，而是局部改变局部刷新  不开启的时候，保存源代码，会刷新整个页面
      /**
       * 127.0.0.1：回环地址(loop back address)，表达的意思其实是我们主机自己发出去的包，直接被自己接收
       * 正常的数据包的获取会经过 应用层、传输层、网络层、数据链路层、物理层
       * 而回环地址，在网络层就被获取到了，在同一网段下的主机中，通过ip地址是不能访问的
       * 0.0.0.0：监听IPV4上所有的地址，再根据端口找到不同的应用程序
       * 即我们访问0.0.0.0时，在同一网段下的主机中，通过ip地址是可以访问的
       */
      host: "0.0.0.0",
      port: 7777,
      open: true,
      // 浏览器上常用的压缩格式为gzip，浏览器发现文件时gzip时，会自动进行解压并展示的
      // html不进行压缩，因为我们请求的时候，他默认会去找index.html,所以html文件一般不进行压缩
      // compress: true,  // 压缩，表示是否为静态资源开启gzip，默认false 
      proxy: {
        // "/api": "http://localhost:8888",  // 如果以这种方式做代理，资源会请求不到，如果请求的接口是 /api/user，代理会请求到 http://localhost:8888/api/user，这个/api实际上是多余的，需要重写路径
        // 将api代理到target里面
        "/api": {
          target: "http://localhost:8888",
          // 重写（正则）
          pathRewrite: {
            // 以/api为开头的这段字符串重写为空字符串
            "^/api": ""
          },
          secure: false,  // 默认不接收转发到https的服务器上，如果希望支持https，需要设置成false
          changeOrigin: true  // 他表示是否更新代理后请求的headers中的host地址，false的话不发送，如果后端需要验证header上的源是否匹配的话，就会拒绝链接，防止爬虫
        }
      }
    },
    plugins: [
      // 我们一般是打包的时候将public文件复制出来的，但如果不用CopyWebpackPlugin插件的话，我们可以使用devserver中的contentBase
      // 注释掉之后即没有被打包到内存中
      // new CopyWebpackPlugin({
      //   patterns: [
      //     {
      //       from: "public",
      //       to: "./",
      //       globOptions: {
      //         ignore: [
      //           "**/index.html"
      //         ]
      //       }
      //     }
      //   ]
      // }),
    ]
    // ...
  }
  ```
- 总结一下webpack-dev-server的执行逻辑
  - dev-server会帮我们编译打包，然后将所有的静态资源放到内存中（memfs）但不写入文件
  - 放到内存中之后，会开启一个express服务
  - 浏览器访问服务，第一次浏览器访问的是index.html
  - 假如这个index.html中引入的某个文件在webpack的打包文件中是不存在的
  - 我们可以通过devserver中的contentBase来进行配置一个文件夹
  - webpack就会根据contentBase配置的文件夹读到内存里面，再返回给index.html中
  - contentBase一般是用来指定被访问html页面所在目录的，我们的常用方法是`contentBase: "./public"`
  - 我们使用CopyWebpackPlugin这个插件也可以将文件复制到webpack打包的静态资源中
  - 如果在开发阶段不希望进行拷贝，就需要在devserver中做contentBase配置，特别是有一些视频资源的时候
  - 一般开发阶段用devserver中做contentBase，生产阶段用CopyWebpackPlugin
- 注意事项
  - 如果修改了webpack配置，都需要重新运行
  - 浏览器下面经常会出现一行字：\[HMR\] wating for update from wds...
    - 模块热替换正在等待webpack-dev-server更新
    - 这个来自于webpack中的socket服务器
    - 设置模块热替换之后，webpack不知道哪些文件需要进行这个设置，他依然还是刷新整个页面的，可以在main.js里面进行配置
      ```js
      import "./js/element";  // 第一次仍然需要引入
      if (module.hot) {
        module.hot.accept("./js/element.js", () => {
          console.log("element模块发生更新了");
        })
      }
      ```
    - 但在真实开发中，类似vue-loader已经帮我们做好了这些工作，开箱即用即可，但js需要自己设置
- 深入理解模块热替换（HMR）
  - HMR的基本原理
    - webpack-dev-server会创建两个服务：提供静态资源的服务(express)和socket服务(net.Socket)
    - express server负责直接提供静态资源的服务(打包之后的资源直接被浏览器请求和解析)
    - HMR服务的本质是一个socket server
  - HMR Socket Server是一个socket长链接
    - 服务端可以直接发送文件到客户端
    - 服务器监听到对应模块发生变化时，会生成两个文件（manifest.json、update chunk.js）,并直接发送给客户端(浏览器)
      - manifest.json描述文件，描述是哪一个部分发生了变化
      - update chunk.js表示具体变化的内容
    - 浏览器拿到两个新文件后，通过HMR runtime机制，加载这两个文件， 并针对修改的模块进行更新
    ![hmr原理](/blog/images/accumulation/front/cour-vue3-ts-note/hmr.png)
    
### 1.4. historyApiFallback
- 简介
  - historyApiFallback主要的作用是解决spa页面在路由跳转之后，页面进行刷新时，返回404的错误
  - devserver中实现historyApiFallback功能是通过connect-history-api-fallback库的
- 值
  - boolean：默认为false,如果为true，在刷新时，返回404错误时，会自动返回到index.html的内容
  - object：可以配置from来匹配路径，决定跳转到哪一个页面

### 1.5. resolve
- 简介
  - 用于设置模块如何被解析
  - resolve可以帮助webpack从每个require/import语句中农，找到合适的模块代码
  - webpack使用enhanced-resolve来解析文件路径
- webpack可以解析三种路径
  - 绝对路径（完整路径）
  - 相对路径
    - 在import/require中给定的相对路径，会拼接上下文路径，来生成模块的绝对路径
  - 模块路径
    - 比如`const path = require("path");`中的path
    - webpack中的resolve配置下，有个modules，即resolve.modules中指定的所有目录检索模块
      - 默认是node_modules,所以默认会从node_modules中查找文件
      ```js
      module.exports = {
        // ...
        resolve: {
          modules: ['node_modules'],  // 默认
          // 解析的文件类型有默认值的，所以在引入的时候可以不加js
          // webpack是根据根据extensions查找对应的文件的
          extensions: [".js", ".json", ".mjs", ".vue", ".ts", ".jsx", ".tsx"],
          // 设置别名
          alias: {
            // 将@设置为项目根目录下的src文件夹
            "@": path.resolve(__dirname, "./src"),
            "js": path.resolve(__dirname, "./src/js")
          }
        }
        // ...
      }
      ```
    - 还可以通过设置别名的方式来替换初识模块路径
- webpack解析文件流程
  - 确定是文件还是文件夹
  - 如果是文件
    - 如果有文件扩展名，则直接打包文件
    - 否则将使用resolve.modules选项作为文件扩展名解析
  - 如果是文件夹
    - 会在文件夹中根据resolve.mainFiles配置选项中指定的文件顺序进行查找
    - resolve.mainFiles默认值是['index']
    - 再根据extensions解析扩展名
    - 比如自己建了一个util文件夹，里面有个index.js
      - 他会找到util/index
      - 然后根据extensions配置拼接后缀，即index.js
      - 最终形成了util/index.js
    - 这是enhanced-resolve库的解析规则
- 配置自己的extensions，写法如上
- 配置自己的别名，写法同上

### 1.6. 如何区分开发环境
- 分出若干配置文件
  - webpack.comm.config.js
  - webpack.dev.config.js
  - webpack.prod.config.js
- 修改package.json
  ```js
  'build': 'webpack --config ./config/webpack.prod.conf'  // 生产环境
  'serve': 'webpack --config ./config/webpack.dev.conf'  // 开发环境
  ```
- 需要使用webpack官方的插件来引入公共配置
```js
// yarn add webpack-merge -D 
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.comm.config');

// 这个merge是一个方法
module.exports = merge(commonConfig, {
  mode: "",  // development 或者 production
})

// 因为xxx-config.js文件在config里面了，所以配置文件中的输出路径等要做修改，从当前目录修改到上一级目录
```

## 2. vue脚手架
### 2.1. cli简述
- 脚手架是一个建筑学上的概念，但软件工程中也会将一些帮助我们搭建项目的工具称之为脚手架
- cli（Command-Line Interface）,命令行界面
- vue-cli内置了webpack相关的配置，我们不需要从零来配置
### 2.2. 使用vue-cli搭建vue项目
- vue-cli是一个工具，要使用它必须得先安装
  - `npm install @vue/cli -g`  => 安装
  - `npm update @vue/cli -g`  => 升级
- 使用脚手架创建项目
  - `vue create xxx`
  - 脚手架中webpack的配置已经都配置好了，只要进行选择需要使用的依赖就可以使用了
  ![vuecreate](/blog/images/accumulation/front/cour-vue3-ts-note/vuecreate.png)
  - webpack里面babel,postcss等那些配置信息可以放在package.json里面，也可以放在外面作单独的配置文件，一般建议选择放在单独的文件中
  - .browserslistrc文件主要用来设置适配浏览器的范围
    - 哪些浏览器需要做适配，哪些不需要，可以在这里做配置
    ```js
    > 1%  // 市场份额大于1%
    last 2 versions  // 最后两个版本
    not dead  // 还在维护
    // ......
    ```
### 2.3. vue-cli原理简介
- 简述
  - 在package.json中执行`webpack`，他实际上是在node_modules里面去找`bin/webpack`
  - 同样的，package.json中执行`yarn serve`，即执行`vue-cli-service serve`，他实际上是在node_modules里面去找`bin/vue-cli-service`
  - `bin/vue-cli-service`文件中require的内容实际上是一个软连接(符号链接)，通过这个文件去查找`vue-cli-service`的真实代码 => `node_modules/@vue/cli-service`
  - 在`node_modules/@vue/cli-service`文件中，我们可以找到pacaage.json中，在bin对象中，有一段话`"vue-cli-service": "bin/vue-cli-service.js"`
    - 即我们在执行`yarn serve`的时候，实际上是在执行`vue-cli-service`,即真正执行的是`node_modules/@vue/cli-service/bin/vue-cli-service.js`文件中的内容
    - 他会从`.../cli-service/lib/Service.js`中拿到Service这个类，然后进行实例化(`new Service`)，最后执行Service类中的`run`方法
      - 实例化的时候，会自动执行其构造方法(constructor中的方法)
      - `vue-cli-service.js`中执行的`service.run(command, args, rawArgv)`中，command为传进来的值(serve,build...)，之后传给Service.js中的run方法进行处理
      - `vue-cli-service serve`，run方法里面command第一个参数就是serve,`vue-cli-service build`,run方法里面command第一个参数就是build
      - 在Service.js的run方法中，第一个参数为name，即从`vue-cli-service.js`传过来的参数，即从最外层`vue-cli-service serve`传过来的参数，`Service.js`中的run方法通过这个name获取到command这个对象
      - 再通过解构，获取到command这个对象中的fn函数，最终返回这个函数
      - 在这个run方法里，最核心的问题是如何获取到这个command对象的 => `let command = this.commands[name]`
      - 即`this.commands[name]`这段话究竟做了哪些操作
  - 总结来说，我们在外部执行`yarn serve`，实际上就是在执行Service这个类的构造器和run方法
  ```js
  // 最外层package.json
  // 通过webpack的认知，这里执行的东西是vue-cli-service的serve或者build
  // 即我们是在node_modules/bin中去找vue-cli-service这个指令（实际上是软连接，通过软连接找到真实代码）
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },

  // 在软连接中，我们可以找到@vue/cli-service这个包，这个包就是vue-cli-service运行的真实代码，在这个包中存在package.json文件
  // package.json
  "bin": {
    "vue-cli-service": "bin/vue-cli-service.js"
  },

  /**
   * 执行bin指令，找到vue-cli-service.js
   * vue-cli-service
   */
  const Service = require('../lib/Service')
  const service = new Service(process.env.VUE_CLI_CONTEXT || process.cwd())

  service.run(command, args, rawArgv).catch(err => {
    // ......
  })

  /**
   * Service
   */
  // service类
  module.exports = class Service {
    // 构造器
    constructor (context, { plugins, pkg, inlineOptions, useBuiltIn } = {}) {
      this.commands = {}  // commands对象默认为空
      this.plugins = this.resolvePlugins(plugins, useBuiltIn)  // commands真正赋值的地方，执行实例化类中的方法
      // 引入插件，并执行
      this.modes = this.plugins.reduce((modes, { apply: { defaultModes }}) => {
        return Object.assign(modes, defaultModes)
      }, {})
      // ......
    }

    // ......

    // run方法
    // 其实run方法最终是去调用serve.js中registerCommand函数中的异步函数
    async run (name, args = {}, rawArgv = []) {
      // resolve mode
      // prioritize inline --mode
      // fallback to resolved default modes from plugins or development if --watch is defined
      const mode = args.mode || (name === 'build' && args.watch ? 'development' : this.modes[name])

      // --skip-plugins arg may have plugins that should be skipped during init()
      this.setPluginsToSkip(args)

      // load env variables, load user config, apply plugins
      // 在构造器里面加载插件的时候，已经改造过plugins了
      this.init(mode)  // 加载环境变量

      args._ = args._ || []
      // 根据commands对象(默认空对象，但在初始化插件(resolvePlugins)的时候进行了赋值)和传进来的name去获取到command这个对象
      let command = this.commands[name]   // 最核心问题，this.commands[name]做了哪些工作
      
      // ...
      // 通过解构获取command对象中的fn方法，并最终调用了这个函数
      // 这个fn，实际上就是serve.js中被new PluginAPI出来的registerCommand函数中第三个参数的函数
      const { fn } = command
      return fn(args, rawArgv)
    },

    // 加载插件
    resolvePlugins (inlinePlugins, useBuiltIn) {
      const idToPlugin = id => ({
        id: id.replace(/^.\//, 'built-in:'),
        apply: require(id)
      })

      let plugins

      // 可以简单理解成映射，将数组中每一项弄成对象
      const builtInPlugins = [
        './commands/serve',
        './commands/build',
        './commands/inspect',
        './commands/help',
        // config plugins are order sensitive
        // 下面这些配置，同样会在初始化的时候执行，这里面包含很多默认的webpack配置
        './config/base',
        './config/css',
        './config/prod',
        './config/app'
      ].map(idToPlugin)

      // ......
      plugins = builtInPlugins.concat(projectPlugins)

      return plugins
    },
    // 加载环境变量
    init (mode = process.env.VUE_CLI_MODE) {
      // ...

      // 遍历所有插件
      // 在构造器里面加载插件的时候，已经改造过plugins了，每个plugins有id和apply两个属性
      // 并且调用apply方法  （require各种插件）
      // 即在调用apply方法的时候，实际上是在require各种插件，比如(./commands/serve)
      // 进到./commands/serve.js，即是把module.exports中的箭头函数导出了
      // 即调用apply方法的时候，实际上是执行require里面js中的箭头函数
      // 以serve.js举例
      // 将new PluginAPI(id, this)传到serve.js函数中，而PluginAPI.js中有registerCommand方法，就可以使用api.registerCommand来注册command了
      this.plugins.forEach(({ id, apply }) => {
        if (this.pluginsToSkip.has(id)) return
        apply(new PluginAPI(id, this), this.projectOptions)
      })

      // ...

      this.projectOptions = defaultsDeep(userOptions, defaults())

      // 下面是加载配置文件的一些东西，在下面讲解
      // ...
    }

    // ......
  }
  
  // 在PluginAPI.js中
  class PluginAPI {
    // ...
    registerCommand (name, opts, fn) {
      if (typeof opts === 'function') {
        fn = opts
        opts = null
      }
      // 将注册得函数传给了serve.js中的registerCommand
      this.service.commands[name] = { fn, opts: opts || {}}
    }
    // ...
  }

  // serve.js
  module.exports = (api, options) => {
    // 这里的异步fn指的是上文run方法最终执行的那个函数，即在serve.js中registerCommand函数的第三个参数
    // 实际上，在resolvePlugins方法里面所有command文件下的js文件都有fn这个方法，这里只是举了serve.js这个例子，实际上，
    api.registerCommand('serve', { /*...*/ }, async function serve (args) {
      // webpack就是在这里面导入的
      // webpack可以算是一个函数，拿到webpack的配置文件，然后去调用这个函数
      const webpack = require('webpack')  
      const WebpackDevServer = require('webpack-dev-server')
      // ...

      // 在这里获取webpack所有配置
      // 最终的处理config配置的在server.js这个文件中的resolveWebpackConfig方法
      // 最终所有配置信息会放在chainableConfig文件中，这是默认的配置
      // 在resolveWebpackConfig方法中会将默认配置(chainableConfig)和自定义的配置进行merge
      // 在resolveChainableWebpackConfig函数中，this.webpackChainFns实际上是一个个函数，我们在下面展开讲解
      const webpackConfig = api.resolveWebpackConfig()

      // webpack本质上是一个函数，调用这个函数，并且把之前拿到的配置文件传过来，最后拿到编译之后的结果
      const compiler = webpack(webpackConfig)

      // 将编译后的结果compiler拿过来，放到WebpackDevServer这个类中，这样就拿到这个server了，即serve（webpack serve）
      const server = new WebpackDevServer(compiler, Object.assign({
        // ...
      }, projectDevServerOptions, {
        // http配置，类似proxy代理之类，这里用的是node的express框架
      })

      return new Promise((resolve, reject) => {
        // ... server配置

        // 监听开启一个服务
        server.listen(port, host, err => {
          if (err) {
            reject(err)
          }
        })
      }
    }
  }

  // 根据const webpackConfig = api.resolveWebpackConfig()展开讲解
  // service.js
  module.exports = class Service {
    constructor (context, { plugins, pkg, inlineOptions, useBuiltIn } = {}) {
      // 这些都是自己的配置，只是使用了两种加载方法，chainWebpack或者configureWebpack
      this.webpackChainFns = []
      this.webpackRawConfigFns = []
      // ...
    }

    // 根据PluginAPI.js中resolveWebpackConfig函数下return this.service.resolveWebpackConfig(chainableConfig)找到service下的resolveWebpackConfig函数
    resolveWebpackConfig (chainableConfig = this.resolveChainableWebpackConfig()) {
      // ...

      let config = chainableConfig.toConfig()
      this.webpackRawConfigFns.forEach(fn => {
        if (typeof fn === 'function') {
          // function with optional return value
          const res = fn(config)
          if (res) config = merge(config, res)
        } else if (fn) {
          // merge literal values
          config = merge(config, fn)
        }
      })

      // 处理merge后的一些东西
      // ...

      return config
    }

    // resolveWebpackConfig函数的参数,也是函数，其中this.webpackChainFns是一堆方法，历然后在上面的方法中将他们遍一个个和this.webpackRawConfigFns进行merge
    resolveChainableWebpackConfig () {
      const chainableConfig = new Config()
      // apply chains
      this.webpackChainFns.forEach(fn => fn(chainableConfig))
      return chainableConfig
    }

    // 加载环境变量
    init (mode = process.env.VUE_CLI_MODE) {
      // ...

      // 项目的配置
      const userOptions = this.loadUserOptions()
      this.projectOptions = defaultsDeep(userOptions, defaults())

      // 全局搜索this.webpackChainFns
      // 以下都是来自项目中的配置文件(vue.config.js)
      // 主要就是this.projectOptions.chainWebpack
      if (this.projectOptions.chainWebpack) {
        this.webpackChainFns.push(this.projectOptions.chainWebpack)
      }
      if (this.projectOptions.configureWebpack) {
        this.webpackRawConfigFns.push(this.projectOptions.configureWebpack)
      }
    }

    // 判断入口配置文件信息,自己写的配置文件
    loadUserOptions () {
      // vue.config.c?js
      let fileConfig, pkgConfig, resolved, resolvedFrom
      const esm = this.pkg.type && this.pkg.type === 'module'

      const possibleConfigPaths = [
        process.env.VUE_CLI_SERVICE_CONFIG_PATH,
        './vue.config.js',
        './vue.config.cjs'
      ]

      let fileConfigPath
      for (const p of possibleConfigPaths) {
        const resolvedPath = p && path.resolve(this.context, p)
        // 文件流
        if (resolvedPath && fs.existsSync(resolvedPath)) {
          fileConfigPath = resolvedPath
          break
        }
      }

      // ......
      // if?  resolved = fileConfig
      // if?  resolved = pkgConfig
      // ...

      return resolved
    }

    // 框架默认的webpack配置，我们以config/base为例(在resolvePlugins函数里面的builtInPlugins数组中)
    // 从上文可见，这里的api实际上来自于PluginAPI，执行了chainWebpack方法，实际上是将这里面的函数push到了service.js里面的webpackChainFns数组中，之后的操作就和上文一样了
    // 所以this.webpackChainFns中实际上是包含了很多的函数，包括自定义的webpack配置和系统的webpack配置
    module.exports = (api, options) => {
      api.chainWebpack(webpackConfig => {
        // 大多是webpack配置
        // ...
      }
    }
  }
  ```
![vueym3](/blog/images/accumulation/front/cour-vue3-ts-note/vuecli1.png)
### 2.4. 
> 

## 3. Vite


---
<br />

<font color="#666" size="5">\~End~</font>