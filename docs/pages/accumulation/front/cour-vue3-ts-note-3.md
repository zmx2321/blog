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
// 这样打包并不会出问题，但页面渲染没出来
import { createApp } from 'vue'  // 将vue当成是一个模块直接去引入

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
  - 组件提供了template，但我们现在用的是runtime compilation，不支持对vue进行构建
  - vue在对我们的代码打包的时候有很多版本

### 1.2. vue打包不同版本解析
- vue(.runtime).global(.prod).js
  - 常用vue.global.js
  - runtime包括compiler
  - prod版本是做过压缩的
  - 直接通过浏览器script引入
  - 会暴露一个全局的vue来使用
- vue(.runtime).esm-brower(.prod).js

## 2. vite2搭建Vue环境

## 3. Vite3新增语法