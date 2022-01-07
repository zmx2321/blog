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
### 简介
- react的开发模式
    - react使用的jsx，所以对应的代码都是编写类似于js的一种语法
    - 之后通过babel将jsx编译成React.createElement函数调用
- vue也支持jsx的开发模式
    - 但是在大多情况下，使用基于html的模板语法
    - 在模板中，允许开发者以声明的方式将DOM和底层组件实例的数据绑定在一起
    - 在底层的实现中，vue将模板编译成虚拟dom渲染数据
### vue的模板语法
- mustache的基本使用
    - 即双大括号语法
- 可以写表达式
    - `{{ msg.split('').reverse().join('') }}` => 切割后做反转
    - 可以写三元运算符
    - 不能写赋值语句
- 可以写方法
- 可以直接用计算属性
### v-once指令
- 用于制定元素或者组件只渲染一次
  - 当数据发生变化时，元素或者组件，以及其所有的子元素将视为静态内容并且跳过
  - 该指令可以用于性能优化
  ```html
  <!-- data中定义的数据，加了v-once,不会再修改div下的数据，不重新渲染 -->
  <!-- 不常用 -->
  <div v-once>
    <h2>{{counter}}</h2>
    <h2>{{message}}</h2>
  </div>
  ```
### v-pre指令
- 用于跳过元素和他的子元素的编译过程，显示原始的Mustache标签
  - 跳过不需要编译的节点，加快编译的速度
```html
<!-- 直接在页面显示{{message}} -->
<!-- 不常用 -->
<h2 v-pre>{{message}}</h2>
```
### v-cloak指令
- 这个指令保持在元素上知道关联组件实例结束编译
  - 和Css规则，如`[v-cloak]{display: none}`一起用时，这个指令可以隐藏未编译的Mustache标签，直到组件实例准备完毕
    - 开开始是隐藏，解析完成后，vue如果发现有v-cloak的话，会将其删除，css的隐藏就不起作用了，就显示出来了
```html
<!-- 浏览器上先显示了双发括号的msg，然后再显示最终的数据，因为dom没来得及解析，可能会一闪而过 -->
<!-- 但现在vue3一般不会出现这个过程，所以不常用 -->
<h2 v-cloak>{{message}}</h2>
```

### 其他基本指令
- `v-text`
  - 等价于双大括号语法
- `v-html`
  - 解析html
