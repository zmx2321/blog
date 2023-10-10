# 面试题汇总
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

1、vue的双向绑定原理是什么？里面的关键点在哪里？
Vue的双向绑定原理是基于Object.defineProperty或者Proxy来实现的，其关键点在于数据劫持，即对数据的读取和修改进行拦截，在数据发生变化时自动更新视图

2、实现水平垂直居中的方式？
实现水平垂直居中的方式有多种，比如使用Flex布局、绝对定位、margin负值等。

3、常用伪元素有哪一些？
常用的伪元素有before和after。

4、移动端如何适配不同屏幕尺寸？
移动端可以通过设置meta标签中的viewport属性来适配不同屏幕尺寸，例如设置width=device-width、initial-scale=1等。

5、本地存储有哪一些？他们三者有什么区别？
常见的本地存储方式有cookie、localStorage和sessionStorage，它们的区别在于作用域、存储容量和过期时间等方面。

6、JS的数据类型？如何判断js的数据类型?
JavaScript的数据类型包括Number、String、Boolean、Object、Null和Undefined等，可以使用typeof、instanceof和Object.prototype.toString.call()等方法来判断数据类型

7、说一下ES6的新特性有哪些？
ES6的新特性包括let和const关键字、箭头函数、模板字符串、解构赋值、类和继承、模块化等。

8、Let、const、var三者有什么区别？
let和const是块级作用域的关键字，var是函数作用域的关键字，let和const声明的变量不能重复声明，const声明的变量不可修改。

9、数组去重有哪些办法？
数组去重的方法包括利用构造函数Set的去重功能、使用循环遍历和对象属性去重等。

10、说一下深拷贝和浅拷贝，如何自己实现一个深拷贝？
深拷贝和浅拷贝是指在复制对象时，是否对其内部的子对象进行递归复制。实现深拷贝可以使用JSON.parse(JSON.stringify(obj))、递归复制等方法。

11、Vue的生命周期有哪一些？说一下它们每个阶段做什么操作？
Vue的生命周期包括beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy和destroyed等阶段，每个阶段对应着不同的操作，例如数据初始化、DOM挂载和销毁等。

12、组件通讯方式有哪一些？
组件通讯方式有props、$emit、$parent/$children、provide/inject和$refs等。

13、Vuex有几个属性及作用？
Vuex的属性包括state、getters、mutations、actions和modules等，它们用于管理Vue应用中的状态。

14、Vue的监听属性和计算属性有什么区别？
Vue的监听属性和计算属性都用于监测数据变化，但监听属性是一个函数，需要手动调用，而计算属性是一个属性，会自动计算并缓存结果

15、说一下防抖和节流。怎么实现？
防抖和节流是用于控制函数执行频率的方法，防抖是在一定时间内只执行最后一次操作，节流是在一定时间内只执行一次操作。可以通过setTimeout和时间戳等方式实现。

16、Vue的导航守卫有哪一些？
Vue的导航守卫包括全局前置守卫、全局后置钩子、路由独享守卫和组件内的守卫等

17、你的登录拦截怎么实现的？
登录拦截可以通过路由守卫、请求拦截和响应拦截等方式实现

18、有用过图表吗？用的多吗？
常见的图表库包括ECharts、Highcharts、D3等

19、闭包是什么？如何实现？
闭包是指函数内部可以访问外部函数的变量，可以用于封装私有变量和实现柯里化等操作。

20、Vue2.0和vue3.0有什么区别？
Vue2.0和Vue3.0的区别在于性能优化、组合式API、响应式系统和虚拟DOM等方面。

21、Vue常用的指令有哪些？
Vue常用的指令包括v-model、v-for、v-if、v-show、v-bind、v-on等。

22、v-If和v-show有什么区别？
v-if和v-show的区别在于前者在条件为false时会销毁对应的DOM元素，而后者只是在样式上隐藏元素。

23、v-for为什么要加一个key？
v-for需要加key属性是为了帮助Vue识别节点的唯一性，提高渲染效率。

24、你是如何封装一个组件的？
封装一个组件需要考虑组件的输入和输出，可以使用props和$emit等方式实现。

25、有自己从0到1搭建过项目吗？
从0到1搭建一个完整的项目需要考虑项目架构、技术选型、开发流程、测试和部署等方面

26、有用过uni-app吗？
uni-app是一款基于Vue的跨平台开发框架，可以用于快速开发小程序、H5、APP等应用。

27、你会写后台吗？有搞过服务端渲染吗？
后台开发需要掌握服务器端语言和数据库等技术，服务端渲染可以提高页面的首屏加载速度和SEO效果。

28、说一下你项目中遇到的难点，如何解决？
在项目中遇到的难点可能包括架构设计、性能优化和业务逻辑等方面，需要通过调试和优化等方式解决

29、Url到浏览器的一个过程有哪些步骤？
URL到浏览器的过程包括DNS解析、建立TCP连接、发送HTTP请求、服务器处理请求、浏览器解析渲染页面等步骤

30、如何实现小程序的request封装及拦截？
可以通过封装request函数和使用拦截器等方式实现小程序的请求封装和拦截。

31、在vue的项目应用中，不使用框架，怎么封装？
在Vue项目中不使用框架可以使用原生的HTML、CSS和JavaScript来实现，需要手动处理数据和事件等方面。

32、什么是Js原型？原型链是什么？
JavaScript的原型是指每个对象都有一个原型对象，原型对象又有自己的原型，形成了一条原型链。

33、组件通讯方式有哪些？
组件通讯方式包括props、$emit、$parent/$children、provide/inject和$refs等。

34、用闭包的原理做过哪些？
闭包可以用于实现柯里化、封装私有变量和缓存等操作。

35、作用域是什么？
作用域是指变量的可访问范围，JavaScript中有全局作用域和函数作用域等

36、操作数组的方式有哪些？
操作数组的方式包括遍历数组、添加和删除元素、数组去重和排序等。

37、0.1 + 0.2 等于 0.3吗？为什么？如何解决？
0.1 + 0.2不等于0.3，这是因为JavaScript采用的是IEEE 754浮点数标准，存在精度问题。可以使用toFixed方法处理。

38、keep-alive是什么？有哪几个生命周期阶段？
keep-alive是Vue中的一个组件，用于缓存组件实例，提高组件的渲染效率，其生命周期包括activated和deactivated等阶段

39、判断一个变量是否是数组，有哪些办法？
判断一个变量是否是数组可以使用Array.isArray和instanceof等方法。

40、判断一个变量是否是对象，有哪些办法？
判断一个变量是否是对象可以使用typeof和Object.prototype.toString.call()等方法。

41、对象/数组常用方法有哪些？
对象/数组常用方法包括push、pop、shift、unshift、slice、splice、concat、map、filter、reduce等。

42、创建一个空数组/空对象有哪些方式？
创建一个空数组可以使用[]或new Array()，创建一个空对象可以使用{}或new Object()。

43、哪些遍历方式会改变原数组？
使用forEach、map、filter、reduce等遍历方式不会改变原数组，而使用push、pop、shift、unshift、splice等方法会改变原数组

44、Set和Map各是什么？
Set是一种数据结构，用于存储唯一值，Map是一种键值对数据结构，用于存储任意类型的键和值

45、介绍一下promise。
Promise是一种异步操作管理的解决方案，用于解决回调地狱问题，其特点是链式调用和状态机制

46、Promise通常会解决三种问题

(1)链式回调

(2)同时发起几个异步请求，谁先有结果就拿谁的

(3)发起多个请求，等到所有请求后再做下一步处理

这三种方式promise是怎么处理的？

Promise可以通过then方法实现链式回调，通过Promise.all方法实现同时发起多个异步请求，通过Promise.race方法实现等待多个异步请求的结果

47、如何改变一个函数a的上下文？
可以使用bind、apply和call等方法改变一个函数的上下文

48、Call和replay有什么区别？
call和apply都是用于改变函数上下文的方法，区别在于传入参数的方式不同

49、Evenbus是什么东西？
EventBus是一种事件发布/订阅的机制，可以实现组件之间的通讯

50、Vue中普通的生命周期大概有哪些？
Vue中普通的生命周期包括beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy和destroyed等阶段。

51、父子组件生命周期执行顺序是怎么样的？
父子组件生命周期执行顺序是父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted。

52、mixins有几个生命周期阶段？
mixins有beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy和destroyed等生命周期阶段。

53、弹性布局，一行两列，一列固定宽，如何实现？
实现一行两列，一列固定宽的水平垂直居中布局可以使用Flex布局，父元素设置display: flex、align-items: center和justify-content: center，左侧元素设置flex: 1，右侧元素设置固定宽度

54、Flex：1 包含哪三种属性
Flex：1包含flex-grow、flex-shrink和flex-basis三个属性，分别表示元素在剩余空间中的占比、元素在空间不足时的缩放比例和元素的基准大小。