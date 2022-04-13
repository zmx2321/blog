# vue脚手架
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. Webpack5搭建Vue环境
### 1.1. 安装并配置vue
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

### 1.2. webpack中的服务
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
      host: "0.0.0.0",
      port: 7777,
      open: true,
      // compress: true,
      proxy: {
        "/api": {
          target: "http://localhost:8888",
          pathRewrite: {
            "^/api": ""
          },
          secure: false,
          changeOrigin: true
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
    
## 2. vite2搭建Vue环境


## 3. Vite3新增语法



代码笔记：
  https://github.com/zmx2321/blog_code/tree/master/accumulation/front/cour-vue3-ts-note/webpack_demo/webpack_vue