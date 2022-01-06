# 初识 vue3
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. vue 简介
- vue 是一套用于构建用户界面的渐进式框架
  - 渐进式框架表示我们可以在项目中一点点来引入和使用 vue，而不一定需要全部使用 vue 来开发整个项目
- vue3 兼容 vue2，基础概念是一模一样的
- 目前 vue3 社区类似 AntDesignVue、Element-Plus 都提供了对 vue3 的支持，越来越完善了，并且面试也问到越来越多的 vue3、vite2 相关的问题，所以目前来看还是比较推荐学习 vue3

## 2. vue3 带来的变化
- 从源码角度
  - 从 monorepo 的形式管理源代码
    - 单个 repository 仓库
    - 将许多项目的代码存储在一个 repository 中
    - 这样可以使多个包本身相互独立，可以有自己的功能逻辑、单元测试等，同时又在同一个仓库下方便管理
    - 模块的划分更清晰，可维护性可扩展性更强
    - 现在很多库都是用这种方式进行管理的
  - 源码全部使用 ts 进行重写
    - vue2x => 使用 flow 来进行类型检测
    - vue3x =? 源码全部使用 ts 进行重构，并且本身对 ts 的支持也更好了
- 从性能角度
  - vue3 是用 proxy 进行数据劫持
    - vue2x => 是使用 Object.definePropery 来劫持数据的 getter 和 Setter 方法的
      - 这种方法存在缺陷，给当前对象添加或者删除属性的时候，无法奏效，需要用 vue2 封装的$set或者$delete 方法来修改或者删除对象属性
  - 删除了一些不必要的 api
    - 移除了实例上的$on、$off、\$once
    - 移除了一些特性: filter、内联模块等
  - 编译上的优化
    - 生成的 Block Tree、Slot 编译优化、diff 算法优化
- 新的 api
  - 从 Options Api 到 Composition Api
    - vue2x => 我们会通过 Options Api 来描述对象
      - Options Api => 包括 data、props、methods、computed、生命周期等内容
      - 存在比较大的问题是多个逻辑可能在不同的地方
        - 比如 create 中会使用某一个 method 来修改 data 数据，代码内聚性不太好
    - Composition Api 可以将相关联的代码放到同一处进行处理，而不需要在多个 Options 之间寻找
  - 通过 hooks 函数增加代码的复用性
    - vue2x => 我们通常使用 mixins 在多个组件之间共享逻辑
      - mixins 有个很大的缺陷，mixins 也是由一堆 Optionss 组成的，并且多个 mixins 会存在命名冲突的问题
    - vue3x => 我们可以通过 hooks 函数，将一部分独立的逻辑抽取出去，并且他们还是响应式的

## 3、vue 的使用
> vue 的本质，就是一个 js 库
- 使用vue的方式
    - 通过cdn库引入
        - 通过相互连接的网络，利用最靠近每个用户的服务器，更快地将资源发送给用户
    - 手动引入
    - 通过npm包管理工具安装使用
    - 直接用脚手架
- 常用的cdn服务器
    - 自己可以购买cdn服务器： 一般云服务商都有
    - 开源的cdn服务器：国内用的比较多的是unpkg、jsdelivr、cdnjs

## 4、vue3初识示例
```html
<body>
<div id="app"></div>
  
<script src="https://unpkg.com/vue@next"></script>
<script>
    // dom模板
    const why = {
        template: '<h2>Hello World</h2>'
    }

    // createApp为vue的一个方法，里面放对象(dom对象)
    const app = Vue.createApp(why);
    // 将vue中createApp返回的内容挂载到id为app的dom节点上
    app.mount("#app")

    // 或者使用链式
    Vue.createApp({
        template: '<h2>Hello World</h2>'
    }).mount("#app")

    // createApp中的对象实际上不止有template一个属性，还包含其他的属性，那些属性实际上是vue中的的各种api,即钩子
    Vue.createApp({
        template: '<h2>Hello World</h2>',
        // data是一个属性，只是这个属性对应的值为函数，但这个方法里面需要返回一个对象，这个对象中可以任意定义属性
        // 对象中定义的属性会被vue加入到响应式系统里面，并且是可以被模板使用的
        data() { return {} },
        // 这里的this实际上拿的是proxy的代理
        methods: {}
    }).mount("#app")
</script>
</body>
```

## 5、声明式编程和命令式编程
> 编程范式
- 原生js => 命令式编程 => how to do
    - 完成一个操作我们需要做哪些事情
    - 相当于给浏览器一条条命令，让他去完成
    - 包括jquery也是命令式编程
- vue => 声明式编程 => what to do
    - 你需要做什么
    - 不用关心怎么做，由框架完成 how 的过程
    - 目前大部分前端框架都是声明式编程
- vue的体系结构
    - 通常情况下，我们也常称vue是一个mvvm框架
    - 但vue官方其实有说明，vue虽然并没有完全遵守mvvm的模型，但是整个设计是受到他的启发的
    - dom => vue => js
        - dom => 相当于view
        - vue => 相当于viewmodel
            - dom事件监听使用vue操作到js => 如@click
            - js的dom渲染使用vue操作到dom => 如{{}}
        - js => 相当于model

## 6. vue中的template
### 简述
    - 要使用vue钩子里面的数据，必须要在template模板里面写，vue会帮助我们渲染的模板信息
    - 官方文档中已经说明，template中如果字符串是以 # 开头，，将被用作querySelector,并且匹配元素的innerHtml作为模板字符串
### 写法
#### 写法一
```html
<script type="x-template" id="why">
    <div>
        <h2>{{message}}</h2>
        <h2>{{counter}}</h2>
        <button @click='increment'>+1</button>
        <button @click='decrement'>-1</button>
    </div>
</script>
<script>
    Vue.createApp({
        // 相当于document.querySelector("#why")
        template: '#why',
    })
</script>
```
#### 写法二
- html里面本身就定义过template的，并不是vue特有的
    - 在原生js的定义中，template里面的东西不会被浏览器渲染的，其实就是给js读取的
    - mdn文档中写道，虽然解析器在加载页面时确实会处理template元素的内容，但这样做只是为了确保这些内容有效，但内容不会被渲染，他是一种用于保护客户端内容的机制，可以在运行的时候使用js实例化
```html
<template id="why">
    <div>
        <h2>{{message}}</h2>
        <h2>{{counter}}</h2>
        <button @click='increment'>+1</button>
        <button @click='decrement'>-1</button>
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
    Vue.createApp({
        // 把template交给vue去渲染，也可以当做document.querySelector("#why")
        template: '#why',
    })
</script>
```

## 7. vue中的data
-  data属性是传入一个函数，并且该函数需要返回一个对象
    - vue2x => 也可以传入对象，但官方推荐是函数
    - vue3x => 必须传入函数，否则报错
- data中返回的对象会被Vue的响应式系统劫持，之后对该对象的修改或者访问都会在劫持中处理
    - 所以在template中可以通过 {{}} 访问数据
    - 所以我们在修改data中的值得时候，template中的{{}}也会发生改变
- 具体原因就涉及到响应式原理

## 8. vue中的methods
- methods属性是一个对象，通常我们会在这个对象中定义很多方法
    - 这些方法可以被绑定到template中
    - 在该方法中，我们可以使用this关键字来直接访问到data中返回的对象的属性
    - 不能用箭头函数，因为箭头函数不绑定this，会向上层作用域中去找，而定义对象时的方法块里面不算是作用域，此时this指向window
        - `Vue.createApp({})` => 里面实际上只是一个对象，而不是函数，所以不是作用域
    - methods里面的this实际上是调用了 bind(proxy)
![vueym1](/blog/images/accumulation/front/cour-vue3-ts-note/vueym1.png)

## 9. vue中的其他属性
- props、computed、watch、emit、setup等
- 还包括生命周期

## 10. 如何看vue源码
- github搜索vue-next,建议使用git下载
    - 使用压缩的方式下载的，可能运行不起来
- vue的源代码是用yarn管理的
    - 下载下来需要安装依赖
        - yarn install
- 其中的packages为源码
- 在package.json中修改
    - `"dev": "node scripts/dev.js --sourcemap",` 可以定位到具体的ts文件，否则只能定位到打包的js文件
    - 会生成一个`vue.global.js.map`文件
    - 代码映射
    - `yarn dev` 打包
- 可以通过`packages/vue/dist/vue.global.js`中调试代码

---
<br />

<font color="#666" size="5">\~End~</font>