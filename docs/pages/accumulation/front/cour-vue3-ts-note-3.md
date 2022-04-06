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

## 2. vite2搭建Vue环境

## 3. Vite3新增语法



代码笔记：
  https://github.com/zmx2321/blog_code/tree/master/accumulation/front/cour-vue3-ts-note/webpack_demo/webpack_vue