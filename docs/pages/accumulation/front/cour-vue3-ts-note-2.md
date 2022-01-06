# vue3基础语法

## 1. vue基础模板
- 模板
```html
<body>
  <!-- 放vue渲染的template -->
  <div id="app"></div>
  
  <template id="why">
    <h2>{{ message }}</h2>
  </template>

  <script src="https://unpkg.com/vue@next"></script>
  <script>
    const App = {
      // template的id
      template: '#why',
      data() {
        return {
          message: "hello"
        }
      }
    }

    // 挂载到#app上
    Vue.createApp(App).mount("#app");
  </script>
</body>
```
- 在vscode中创建代码片段
    - 文件 => 首选项 => 用户片段
    - 进入到[快捷生成代码片段地址](https://snippet-generator.app/)
    - 复制代码，左边的是名称如`create vue app`，右边的是快捷生成代码片段的输入如`vueapp`

## 2. vue的模板语法
- react的开发模式
    - react使用的jsx，所以对应的代码都是编写类似于js的一种语法
    - 之后通过babel将jsx编译成React.createElement函数调用
- vue也支持jsx的开发模式
    - 但是在大多情况下，使用基于html的模板语法
    - 在模板中，允许开发者以声明的方式将DOM和底层组件实例的数据绑定在一起
    - 在底层的实现中，vue将模板编译成虚拟dom渲染数据