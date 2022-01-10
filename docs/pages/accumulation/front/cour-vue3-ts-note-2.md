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

## 2. vue基本语法以及指令
### 2.1. 简介
- react的开发模式
    - react使用的jsx，所以对应的代码都是编写类似于js的一种语法
    - 之后通过babel将jsx编译成React.createElement函数调用
- vue也支持jsx的开发模式
    - 但是在大多情况下，使用基于html的模板语法
    - 在模板中，允许开发者以声明的方式将DOM和底层组件实例的数据绑定在一起
    - 在底层的实现中，vue将模板编译成虚拟dom渲染数据
### 2.2. vue的模板语法
- mustache的基本使用
    - 即双大括号语法
- 可以写表达式
  ```js
    // => 切割后做反转
    {{ msg.split('').reverse().join('') }} 
  ```
    - 可以写三元运算符
    - 不能写赋值语句
- 可以写方法
- 可以直接用计算属性
### 2.3. vue常用指令
#### 2.3.1. v-bind指令 - 绑定属性
##### 2.3.1.1. 简述
- 前端的一系列指令，主要是将值插入模板内容中
- 但是除了内容需要动态决定外，某些属性我们也希望动态绑定
  - 比如动态绑定a元素的href属性
##### 2.3.1.2. :class介绍
- 对象语法
  - `:class=''{active: boolean}` => 单个
  - `:class=''{active: boolean, title: false}` => 可以多个
  - 默认的class可以直接加
- 数组语法
  - `:class=['test', title, isActive ? 'active' : '']`
    - 可以放字符串，直接解
    - title在data中绑定
    - 还可以写三元运算符
  - `:class=['test', title, { isActive ? 'active' : '' }]`
    - 在数组里面可以继续写对象语法
##### 2.3.1.3. :style语法介绍
- :style语法基本和:class差不多
- 示例
```html
<!-- 对象语法 -->
<div :style="getFinalStyleObj()">呵呵呵呵</div>
<script>
data() {
  return {
    // 也可以在方法中return
    finalStyleObj: {
      'font-size': '50px',
      fontWeight: 700,
      backgroundColor: 'red'
    }
  }
}
</script>

<!-- 数组语法 -->
<div :style="[style1Obj, style2Obj]">哈哈哈</div>
<script>
data() {
  return {
    // 也可以在方法中return
    style1Obj: {
      'font-size': '50px',
      fontWeight: 700,
      backgroundColor: 'red'
    },
    style2Obj: {}
  }
}
</script>
```
##### 2.3.1.4. 动态绑定属性名称
- 示例
```html
<!-- 渲染结果 cba=kobe -->
<div :[name]="value">哈哈哈</div>
<script>
data() {
  return {
    name: "cba",
    value: "kobe"
  }
}
</script>
```
##### 2.3.5. 属性直接绑定一个对象
- 需要在div中显示对象的所有键值对
- 封装高阶组件非常重要
- 示例
```html
<!-- vue官方推荐写法 -->
<div v-bind="info">哈哈哈哈</div>
<!-- 或者 -->
<div :="info">哈哈哈哈</div>
<script>
data() {
  return {
    info: {
      name: "why",
      age: 18,
      height: 1.88
    }
  }
}
</script>
```
#### 2.3.2. v-on指令 - 绑定事件
- 前面我们绑定了元素的内容和属性，在前端开发中另外一个非常重要的特性就是交互
- 基本用法
  - `<button @click="btn1Click">按钮1</button>`
- 绑定一个表达式
  - `<button @click="counter++">{{counter}}</button>`
- 绑定一个对象
```html
<!-- 绑定多个事件 -->
<div class="area" v-on="{click: btn1Click, mousemove: mouseMove}"></div>
<!-- 或 -->
<div class="area" @="{click: btn1Click, mousemove: mouseMove}"></div>
```
- v-on修饰符
  - 对事件做了一些特殊处理
    - `<button @click.stop="btnClick">按钮</button>`
  - `.stop` => event.stopPropagation() => 阻止冒泡
  - `.prevent` => event.preventDefault() => 阻止默认行为
  - `.once` => 只触发一次回调
  - `.left` => 鼠标左键触发
  - `.right` => 鼠标右键触发
  - `.middle` => 鼠标中键触发
  - `<input type="text" @keyup.enter="enterKeyup">`
    - 如果不加enter表示所有键抬起的时候都会执行
    - 加了之后表示只有enter键抬起才会执行
### 2.4. vue不常用指令
#### 2.4.1. v-once指令
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
#### 2.4.2. v-pre指令
- 用于跳过元素和他的子元素的编译过程，显示原始的Mustache标签
  - 跳过不需要编译的节点，加快编译的速度
```html
<!-- 直接在页面显示{{message}} -->
<!-- 不常用 -->
<h2 v-pre>{{message}}</h2>
```
#### 2.4.3. v-cloak指令
- 这个指令保持在元素上知道关联组件实例结束编译
  - 和Css规则，如`[v-cloak]{display: none}`一起用时，这个指令可以隐藏未编译的Mustache标签，直到组件实例准备完毕
    - 开开始是隐藏，解析完成后，vue如果发现有v-cloak的话，会将其删除，css的隐藏就不起作用了，就显示出来了
```html
<!-- 浏览器上先显示了双发括号的msg，然后再显示最终的数据，因为dom没来得及解析，可能会一闪而过 -->
<!-- 但现在vue3一般不会出现这个过程，所以不常用 -->
<h2 v-cloak>{{message}}</h2>
```
### 2.5 其他基本指令
- `v-text`
  - 等价于双大括号语法
- `v-html`
  - 解析html

## 2.6. vue的条件渲染