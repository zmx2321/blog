# 如何进行旧项目升级
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

> [Composition API官网](https://composition-api.vuejs.org/api.html)

## 响应式系统 API(Composition API)
> 响应式系统 API其实就是整个组合式api最核心的部分

### 重点api简介
- reactive
    - 对应的是Reference
- ref
    - 对应的是Reference
- computed
    - 计算属性
    - 传入一个 getter 函数，返回一个默认不可手动修改的 ref 对象。
    - 没有默认的set函数，必须手动设置一个set，才能够改变计算参数的属性，而且computed最终会返回一个组合式变量的值
    - 传入一个拥有 get 和 set 函数的对象，创建一个可手动修改的计算状态。
- readonly
    - 只读属性
- watchEffect
    - 它是执行了一个函数，函数中任意一个变量发生了变化之后，整个函数会重新执行
    - 会监听函数里面和它相关的变量里面的变化
    - 立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。
- watch
    - 相当于vue2中的watch，会监听具体的某一个变量
    - 监听单独的变量

computed、watchEffect、watch对比
- 影响力对比
    - watchEffect
    - computed
    - watch
- 从监听对比
    - computed
    - watchEffect
    - watch

### 概述
vue3解决了三大问题
1. vue2.x可读性不是很好
    - 有时候使用mixins，而它们藏得很深，不好找
    - 生命周期的方法中this指向当前vue的实例，有时候不知道他们是哪里来的
2. 当应用复杂度很高的时候，不容易进行逻辑的拆分
3. 对ts的支持更好(vue生态)
vue3引入了Composition API来解决这些问题，它实际上是一种函数式编程的api 。
- 相同逻辑中的部分，我们进行简单的抽离，只需要关心给这个方法传递什么参数，它会给我们一个返回值，这个返回值，会根据我们传入参数的不同而不同
- 如果我们传入的参数是相同的话，他的返回值一定是相同的，使用它的时候，不需要取关心它内在的逻辑，只用关心它给的结果。
- 它会让我们把相同类型的代码，写在同一个地方，这样方便我们进行复用
- 这样会降低我们写代码的难度和阅读的难度

### 使用入门
#### 1. 创建工程并升级到vue3
1. 使用vue create vue3_demo创建vue2工程
2. cd vue3_demo
3. 使用vue add vue-next
    - 安装了很多types，即ts里面的类型，用作写代码的时候的类型的提示
4. vscode中输入`code .`即可以打开新窗口

#### 2. 创建后文件对比
- 查看前后package.json
    - vue、router、vuex版本发生变化
    - 新增compiler-sfc(编译器)
        - vue3中最核心的部分
    - 新增vue-cli-plugin-vue-next
- 查看入口文件对比(main.js)
    - 创建实例的时候不同
        - 没有vue对象，直接import进来createApp
        - 通过传参的形式把模板文件传递到了createApp中
        - 使用链式编程使用router和store
            - `createApp(App).use(router).use(store).mount('#app')`
        - 一次性去new的时候，里面可能有些东西用不到，这时候webpack处理的时候，特别是对象中的属性，或者其他的编译器，无法处理这些动态语言上的某个属性

