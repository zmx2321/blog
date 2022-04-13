# vue2基础语法复习
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

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

## 3. vue的条件渲染
- 特性
  - 条件为true渲染
  - v-if是惰性的，为false时，内容完全不会渲染，或者被销毁
  - v-show无论是否显示，都会渲染，只有通过css的display来进行切换
  - 如果频繁使用，用v-show
- api
  - v-if
  - v-else
  - v-else-if
  - v-show

## 4. 数组更新检测
- vue将被侦听的数组的变更方法进行了包裹，所以他们也将会触发视图更新，这些被包裹的方法包括
  - 即数组变化，页面的数据也会随之变化
  - push()、pop()、shift()、unshift()、splice()、sort()、reverse()
- 上面的方法会直接修改原数组，但是方法不会替换原来的数组，而是会生成新的数组，比如filter()、concat()、slice()
  - 赋值之后数组才会发生改变

## 5. vue中key的作用
### 5.1. 官方说明
  - 在使用v-for进行列表渲染时，我们通常会给元素或者组件绑定一个key属性
  - key属性主要用在vue的虚拟dom算法，在新旧nodes对比时辨识vnodes
  - 如果不使用key，vue会使用一种最大限度减少动态元素并且尽可能地尝试就地修改、复用相同类型元素的算法
  - 而使用key时，他会基于key的变化，重新排列元素顺序，并且会移除、销毁key不存在的元素
  - v-for时，可以使用of作为分隔符，他更符合js迭代器语法
### 5.2. 问题
  - 没有key的时候，如何尝试修改和复用的
  - 有key的时候，如何基于key重新排列的
### 5.3. 概念
- vNode(virtual node) => 虚拟节点
  - 无论组件还是元素，他们最终在vue中表现出来的都是一个个vnode，即vuetemplate里面都是虚拟节点
    - vue先做一层解析
    - template => vnode => 真实dom
    - vnode最大的好处就是可以做多平台的渲染
      - 也可以做服务端渲染
      - 性能也会高一些
  - vnode的本质是一个js对象
  ```js
  const vnode = {
    type: 'div',
    props: {
      class: "title",
      style: {
        color: 'red'
      },
    },
    children: 'aaa'
    /* children: [
      // vnodes
      {},{}
    ] */
  }
  ```
- 虚拟dom(virtual dom)
  - 如果有很多元素，那么他们最终会形成一个vnode tree，即多个虚拟node形成的树结构为虚拟dom
  - 先形成虚拟dom之后，渲染之后形成真实dom，两个不一一对应
  - template => ast语法树 => render => 虚拟dom => 真实dom
### 5.4. key案例-插入F的案例
- v-for的时候，一般key放id，diff算法的性能是更高的
- key尽量不用index
- 如果不是从中间添加东西，只是从数组后面添加，key用index也没关系
- 这里的是vue3源码中的diff算法，vue2的diff算法不太一样
```html
<!-- 插入新的元素，数组发生变化，dom下得v-for肯定会重新遍历渲染 -->
<!-- 第一次遍历的时候会生成4个 vnode， 最终会渲染成真实的vdom，但如果在中间插入了一个f，如何使真实dom渲染的效率最高 -->
<!-- 一种是把原来的dom全删掉，重新生成vnode，然后再重新生成真实dom，效率不高 - 这种属于没有diff算法，vue中不存在这种情况 -->

<!-- 旧v-nodes与新v-nodes作对比的过程就是diff算法 -->
<!-- vue会对于有key或者没有key调用两种不同的方法 -->
<!-- 源码在render.ts文件中  -->

<!-- 有key，使用patchKeyedChildren方法 -->
<!-- 没有key，使用patchUnkeyedChildren方法 -->

<!-- 没有key的时候的diff算法 -->
<!-- a,b不变，把c改成f,d改成c,最后加一个d -->

<!-- 有key的时候的diff算法 - 最优 -->
<!-- 只在中间插入一个f -->

<!-- patch过程 -->
<!-- 如果patch()存在n1(旧节点)，进行更新操作 -->
<!-- 如果patch()不存在n1(null)，进行挂载 -->

<!-- diff大概过程 -->
<!-- 没有key的时候的比较（3步） -->
<!-- 获取新旧nodes的length，用math.min()获取最小的那个数组的长度（否则可能会数组越界），用比较小的长度遍历 -->
<!-- 从c1和c2里面分别取值，进行patch（比较），如果dom类型和值都一样，就不会做更新 -->
<!-- 如果patch不一样，会进行深度比较 -->
<!-- 如果类型一样，值不一样，就会把c更新成f，，，继续遍历 -->

<!-- 有key的时候的比较（5步） -->
<!-- 比较复杂，有5个步骤 -->
<!-- 第一步（从头遍历） -->
<!-- 用while循环(不知道什么时候结束，只有当类型不同的时候，才跳出)，从头部遍历 -->
<!-- 在遍历中做isSameVNodeType判断，就是判断 n1和n2的的type是否一样，n1和n2的key是否相同，有key，对比的时候，才认为他们是一个东西(一般key不变，内容也是不变的) -->
<!-- 第二步（从尾遍历） -->
<!-- while循环结束之后 -->
<!-- 从尾部遍历，操作同上 -->
<!-- 第三步（挂载） -->
<!-- 如果旧节点遍历完了，依然有新节点，那么新节点就是添加（mount），新节点比较多 -->
<!-- 即n1为null的pacth，就是挂载的操作 -->
<!-- 第四步（删除） -->
<!-- 如果旧节点比较多，卸载(unmount) -->
<!-- 第五步（不同的vnodes是无序的）unknow sequence -->
<!-- 尽可能地在旧的节点列表里面找到对应的一个个节点，这里面主要尽可能地做移动 -->
<!-- 如果旧节点有的，新节点没有，就删除 -->
<!-- 如果新节点有的，旧节点没有，就新增 -->

<!-- 如果旧的vnodes长度比新的长，就把多出来的vnodes全部卸载 -->
<!-- 如果新的节点更多，就创建新的节点 -->
<li v-for="item in letters" :key="item">{{item}}</li>
<!-- <li v-for="item of letters" :key="item">{{item}}</li> -->

<script>
data() {
  return {
    letters: ['a', 'b', 'c', 'd']
  }
},
methods: {
  insertF() {
    // 在下标为2的地方，删除0个元素，并插入f
    this.letters.splice(2, 0, 'f')
  }
}
</script>
```

## 6. 计算属性
### 6.1. 概念
- 在模板中可以直接通过插值语法显示一些data数据
- 但在某些情况下，我们可能需要对数据进行一些转化后再显示，或者需要将多个数据结合起来进行显示
  - 比如我们需要对多个data数据进行计算，三元运算符来决定结果，数据进行某种转化后显示
  - 在模板中使用表达式，可以比较方便地实现，但设计他们的初衷是用于简单的运算
  - 在模板中放入太多逻辑会让模板过重，难以维护
  - 并且如果很多地方使用，会有大量重复代码
- 我们可以将逻辑抽离到method中，但这种方法的弊端就是，data的使用过程都会变成方法的调用
- 另外一种办法就是使用计算属性 computed
  - 对于任何包含响应式数据的复杂逻辑，都应该使用计算属性
  - 计算属性将被混入组件实例中，所有getter和setter的this上下文自动地绑定为组件实例
- 计算属性一般来自于data，他不是元数据
- 一般很少侦听计算属性
### 6.2. 三种方法实现案例
- 插值语法
  - 模板中存在大量复杂逻辑，不便于维护（模板中表达式初衷是简单的计算）
  - 当有多次一样的逻辑时，存在重复代码
  - 多次使用的时候，很多运算也需要多次执行，没有缓存
```html
<div id="app"></div>

<template id="my-app">
  <h2>{{firstName + " " + lastName}}</h2>
  <h2>{{score >= 60 ? '及格': '不及格'}}</h2>
  <h2>{{message.split(" ").reverse().join(" ")}}</h2>
</template>

<script>
  const App = {
    template: '#my-app',
    data() {
      return {
        firstName: "Kobe",
        lastName: "Bryant",
        score: 80,
        message: "Hello World"
      }
    }
  }

  Vue.createApp(App).mount('#app');
</script>
```
- 方法
```html
<div id="app"></div>

<template id="my-app">
  <h2>{{getFullName()}}</h2>
  <h2>{{getResult()}}</h2>
  <h2>{{getReverseMessage()}}</h2>
</template>

<script>
  const App = {
    template: '#my-app',
    data() {
      return {
        firstName: "Kobe",
        lastName: "Bryant",
        score: 80,
        message: "Hello World"
      }
    },
    methods: {
      getFullName() {
        return this.firstName + " " + this.lastName;
      },
      getResult() {
        return this.score >= 60 ? "及格": "不及格";
      },
      getReverseMessage() {
        return this.message.split(" ").reverse().join(" ");
      }
    }
  }

  Vue.createApp(App).mount('#app');
</script>
```
- 计算属性
  - 计算属性是有缓存的, 当我们多次使用计算属性时, 计算属性中的运算只会执行一次
  - 计算属性会随着依赖的数据（data中的数据）的改变, 而进行重新计算.
    - 依赖的值不变，不计算，改变，重新计算，即执行
    - 面试会考计算属性的实现原理
  - 看起来是函数，但实际上是对象中getter的一个属性
```html
<div id="app"></div>

<template id="my-app">
  <h2>{{fullName}}</h2>
  <h2>{{result}}</h2>
  <h2>{{reverseMessage}}</h2>
</template>

<script>
  const App = {
    template: '#my-app',
    data() {
      return {
        firstName: "Kobe",
        lastName: "Bryant",
        score: 80,
        message: "Hello World"
      }
    },
    computed: {
      // 定义了一个计算属性叫fullname
      fullName() {
        return this.firstName + " " + this.lastName;
      },
      result() {
        return this.score >= 60 ? "及格": "不及格";
      },
      reverseMessage() {
        return this.message.split(" ").reverse().join(" ");
      }
    }
  }

  Vue.createApp(App).mount('#app');
</script>
```
### 6.3. 计算属性的缓存
- 计算属性会基于他们的依赖关系进行缓存
- 数据不发生变化时，计算属性不需要重新计算
- 如果依赖的数据发生变化，在使用时，计算属性会重新进行计算
- 而方法时每次都会执行
### 6.4. 计算属性的setter和getter
- 计算属性大多数情况下，只需要一个getter方法即可，所以我们会将计算属性直接写成一个函数
```js
const App = {
  // 计算属性
  computed: {
    // 写一个方法实际上就是计算属性的get方法
    fullName() {
      return this.firstName + " " + this.lastName;
    },

    // 比较少见 - 完整写法
    // get和set写法
    fullName: {
      get() {},

      // 给计算属性赋值，就会调用set方法
      set(newVal) {

      }
    }
  }
}
```
- 源码
  - 在`/packages/runtime-core/src/componentOptions.ts`中的`if(computedOptions){}`
    - 在源码中computedOptions是computed的别名
    ```js
    if (computedOptions) {
      for (const key in computedOptions) {
        const opt = (computedOptions as ComputedOptions)[key]
        // 根据我们写的是函数还是对象来决定到底在哪里取
        // get方法
        const get = isFunction(opt)
          ? opt.bind(publicThis, publicThis)
          : isFunction(opt.get)
            ? opt.get.bind(publicThis, publicThis)
            : NOOP
        if (__DEV__ && get === NOOP) {
          warn(`Computed property "${key}" has no getter.`)
        }

        // set方法
        const set =
          !isFunction(opt) && isFunction(opt.set)
            ? opt.set.bind(publicThis)
            : __DEV__
              ? () => {
                  warn(
                    `Write operation failed: computed property "${key}" is readonly.`
                  )
                }
              : NOOP  // export const NOOP = () => {} ，NOOP表示一个空函数，具体看源码 
        // 拿到get和set之后
        // 计算属性的响应式和缓存都是在这里实现的
        const c = computed({
          get,
          set
        })
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => c.value,
          set: v => (c.value = v)
        })
        if (__DEV__) {
          checkDuplicateProperties!(OptionTypes.COMPUTED, key)
        }
      }
    }
    ```

## 7. 侦听器(watch)
### 7.1. 概念
- 开发中我们在data返回的对象中定义了数据，这个数据通过插值语法等方式绑定到template中
- 当数据变化时，template会自动进行更新来显示最新的数据
- 但是在某些情况下，我们希望在代码逻辑中监听某个数据的变化，这个时候就需要用侦听器watch来完成了
### 7.2. 基本使用
```html
您的问题: <input type="text" v-model="question">

<script>
data() {
  return {
    // 侦听question的变化时, 去进行一些逻辑的处理(JavaScript, 网络请求)
    question: "Hello World",
  }
},
watch: {
  // question侦听的data中的属性的名称
  // newValue变化后的新值
  // oldValue变化前的旧值
  question: function(newValue, oldValue) {
    console.log("新值: ", newValue, "旧值", oldValue);
    // 数据发生变化，触发方法
    this.queryAnswer();
  }
},
methods: {
  // 需要在文本框输入内容时触发
  // 即在文本内容改变时触发，此时需要侦听 question 这个数据的值
  queryAnswer() {
    console.log(`你的问题${this.question}的答案是哈哈哈哈哈`);
    this.anwser = "";
  }
}
</script>
```
### 7.3. 配置选项
```html
<h2>{{info.name}}</h2>
<button @click="changeInfo">改变info</button>
<button @click="changeInfoName">改变info.name</button>
<button @click="changeInfoNbaName">改变info.nba.name</button>

<script>
data() {
  return {
    info: { name: "why", age: 18, nba: {name: 'kobe'} }
  }
},
watch: {
  // 默认情况下我们的侦听器只会针对监听的数据本身的改变(内部发生的改变是不能侦听) - 需要进行深度监听
  // info(newInfo, oldInfo) {
  //   console.log("newValue:", newInfo, "oldValue:", oldInfo);
  // }

  // 深度侦听/立即执行(一定会执行一次)
  info: {
    // 拿不到旧值，因为引用数据类型数据改变，地址还是同一个
    handler: function(newInfo, oldInfo) {
      // 打印出proxy对象   --  实际上vue的响应式数据是交给响应式系统(proxy)处理的（即被响应式系统劫持）
      // 所以这里以及data里面的数据都是在proxy对象里面的
      console.log("newValue:", newInfo.nba.name, "oldValue:", oldInfo.nba.name);
    },
    deep: true, // 深度侦听
    // immediate: true // 立即执行  - 数据还没改变的时候需要执行时
  }
},
methods: {
  changeInfo() {
    this.info = {name: "kobe"};
  },
  changeInfoName() {
    this.info.name = "kobe";
  },
  changeInfoNbaName() {
    this.info.nba.name = "james";
  }
}
</script>
```
### 7.4. 其他
```html
<h2>{{info.name}}</h2>
<button @click="changeInfo">改变info</button>
<button @click="changeInfoName">改变info.name</button>
<button @click="changeInfoNbaName">改变info.nba.name</button>
<button @click="changeFriendName">改变friends[0].name</button>

<script>
data() {
  return {
    info: { name: "why", age: 18, nba: {name: 'kobe'} },
    friends: [
      {name: "why"}, 
      {name: "kobe"}
    ]
  }
},
watch: {
  info(newValue, oldValue) {
    console.log(newValue, oldValue);
  },
  "info.name": function(newName, oldName) {
    console.log(newName, oldName);
  },
  "friends[0].name": function(newName, oldName) {
    console.log(newName, oldName);
  },
  // friends: {
  //   handler(newFriends, oldFriend) {
  //   },
  //   deep: true
  // }
},
methods: {
  changeInfo() {
    this.info = {name: "kobe"};
  },
  changeInfoName() {
    this.info.name = "kobe";
  },
  changeInfoNbaName() {
    this.info.nba.name = "james";
  },
  changeFriendName() {
    this.friends[0].name = "curry";
  }
},
created() {
  const unwatch = this.$watch("info", function(newInfo, oldInfo) {
    console.log(newInfo, oldInfo);
  }, {
    deep: true,
    immediate: true
  })
  // unwatch()  // 这种写法可以取消侦听
}
</script>
```
### 7.5. 侦听器和计算属性的区别
- 用法
  - computed一定有返回值，而watch不需要返回值
- 场景
  - computed是依赖的数据发生改变时重新调用, watch是监听的响应式数据发生改变时重新调用
  - watch不需要调用,并且只有监听数据发生改变时才会重新调用
  - 当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的
  - watch适合处理的场景是，侦听一个数的变化，当该数据变化，来处理其他与之相关数据的变化（该数据影响别的多个数据）
    - 当数据变化时，触发一系列方法（代码逻辑）
  - computed适合处理的场景是，获得一个值或者结果，该结果受其他的依赖的影响。（一个数据受多个数据影响）
    - 当数据变化时，通过各种计算，返回一个新的值

### 7.6. 浅拷贝和深拷贝
- 浅拷贝
```js
const info = {name: "why", age: 18, friend: {name: "kobe"}};
// {} 表示创建新的对象
// 会把info对象中所有的东西拷贝一份，放到新的对象中，并赋值给obj
// 如果对象中没有对象，他就是深拷贝，如果对象中还有对象，就是浅拷贝
// 如果对象中还有对象，Object.assign拷贝的是对象的引用（对象里的对象实际上也是开辟了一个内存空间）
const obj = Object.assign({}, info);

// 引入lodash库 https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// 也可以npm 引入
// import _ from 'lodash'
// Vue.prototype._ = _
// 下划线_作为lodash主要的对象
// lodash浅拷贝
const obj = _.clone(info);
```
- 深拷贝
```js
const info = {name: "why", age: 18, friend: {name: "kobe"}};
const obj = JSON.parse(JSON.stringify(info));

// 引入lodash库 https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// lodash深拷贝
const obj = _.cloneDeep(info)
```

## 8. v-model
- 基本概念
  - v-model本质是语法糖，他负责监听用户的输入事件来更新数据
  ```html
  <!-- v-model的本质 -->
  <!-- 1.v-bind value的绑定 2.监听input事件, 更新message的值 -->
  <!-- 双向绑定即，把message的值，永远绑定在input上，同时input里面的值改变，同时也会改变message的值 -->
  <input type="text" :value="message" @input="inputChange">

  <script>
    data() {
      return {
        message: "Hello World"
      }
    },
    methods: {
      inputChange(event) {
        // 触发输入框，输入框中的值改变，message的值也改变
        // 即双向绑定
        this.message = event.target.value;
      }
    }
  </script>
  ```
- v-model修饰符
  - `v-model-lazy` => input框敲一下回车触发
    - 他的本质是将`@input`的绑定改成了`@change`的绑定，即只有在提交(按回车)时才触发
  - `v-model-number` => 转换成数值类型
    - v-model默认永远是string类型
    - 很多地方能和数字进行比较，是因为js的隐式数据类型转换
    - 写上number修饰符之后，输入框在最开始就无法输入字符串了，但字符串可以跟在数字后面，双向绑定获取的值自动会将输入的字符串忽略，他获取的永远是第一个字符串之前的数值
  - `v-model.trim` => 忽略首尾空白字符（空格）
- 源码
  - 实际上v-model的原理更复杂，因为他是在template里面绑定的，这里面涉及到对模板的编译，并且要适配所有标签的绑定
  - 详见如下源码
  ![vueym2](/blog/images/accumulation/front/cour-vue3-ts-note/vueym2.png)
  ![vueym3](/blog/images/accumulation/front/cour-vue3-ts-note/vueym3.png)

## 9. 全局组件和局部组件
### 9.1. 认识组件
- 人处理问题的方式
  - 任何一个人处理信息的逻辑能力是有限的，所以当面对一个非常复杂的问题的时候，不太可能一次性解决
  - 但我们有一种与生俱来的能力，拆解问题
  - 如果将一个复杂的问题，拆解成一个个可以处理的小问题，复杂的问题的逻辑会变得清晰明朗
- 组件的思想
  - 如果我们将一个页面中所有逻辑放在一起，处理起来就会显得非常复杂，并且难以维护
  - 如果我们将一个页面拆分成一个个功能块，每个功能块完成属于自己这部分的独立功能，维护起来就大大方便了
  - 我们如果将一个个功能块拆分之后，就可以像搭积木一样来搭建我们的项目
  - vue中的createApp函数传入了一个对象App，这个对象实际上本质是一个组件，也是应用程序的根组件

### 9.2. 注册组件
- 全局组件
  - 意味着注册的这个组件可以在任何的组件模板中使用
```html
<div id="app"></div>

<!-- 根组件 -->
<template id="my-app">
  <h2>{{title}}</h2>

  <!-- 使用组件 -->
  <component-a></component-a>
  <component-b></component-b>
</template>

<!-- 组件a -->
<template id="component-a">
  <h2>{{title}}</h2>
</template>

<!-- 组件b -->
<template id="component-b">
  <h2>{{message}}</h2>
</template>

<script>
  // template
  const App = {
    template: "#my-app",
  };

  // 将template当做参数传入createApp方法
  const app = Vue.createApp(App);

  // 使用app注册一个全局组件app.component()
  // 全局组件: 意味着注册的这个组件可以在任何的组件模板中使用
  app.component("component-a", {
    template: "#component-a",
    data() {
      return {
        title: "我是标题a",
      };
    },
  });

  /*
   *  一个参数是组件的名称（有两种定义方式）
   * 1、短横线分隔符
   * 2. 驼峰
   *    但在组件中使用的时候不推荐，使用的时候用短横线
   *    使用驼峰定义组件，组件开头字母大写
   */
  app.component("component-b", {
    template: "#component-b",
    data() {
      return {
        message: "Hello World",
      };
    },
  });

  // 挂载组件到dom
  app.mount("#app");
</script>
```

- 局部组件
  - 通过components属性进行注册
```html
<div id="app"></div>

<template id="my-app">
  <h2>{{message}}</h2>
  <component-a></component-a>
</template>

<template id="component-a">
  <h2>我是组件A</h2>
  <p>我是内容, 哈哈哈哈</p>
</template>

<script>
  const ComponentA = {
    template: "#component-a"
  }

  const App = {
    template: '#my-app',
    components: {
      // key: 组件名称
      // value: 组件对象
      ComponentA: ComponentA
    },
    data() {
      return {
        message: "Hello World"
      }
    }
  }

  const app = Vue.createApp(App);
  // app.component("ComponentA", ComponentA);  // 全局注册
  app.mount('#app');
</script>
```

## 10. vue的开发模式
- 目前我们使用vue的过程都是在html文件中，通过template编写自己的模板，脚本逻辑，样式等
- 在真实开发中，我们通过后缀为.vue的单文件组件（single-file-components）来进行开发，并且可以使用webpack、vite或者rollup等构建工具对齐进行处理
  - 即SCF开发模式

## 11. 认识webpack
### 11.1. 梗概
- 由来
  - 开发过程中我们需要通过模块化进行开发
  - 需要用一些高级特性加快我们开发的效率或者安全性，如ts、sass等
  - 开发完成之后，需要对代码进行压缩合并及其他相关优化
- 概念
  - 静态的模块化打包工具，为现代的js应用程序（webpack is a static module bundler for modern javascript application）
  - 打包(bundler): webpack可以帮助我们进行打包
  - 静态的(static): 我们最终可以将代码打包成最终的静态资源
  - 模块化(module): webpack默认支持各种模块化开发，ES Module、CommonJS、AMD、CMD等
    - ES Module在浏览器中使用
      - export导出，import导入
      - 静态编译期间就确定模块的依赖
      - 在编译期间会将所有import提升到顶部
      - 导出的一个引用，内部修改可以同步到外部
      - 顶层this指向undefined
    - CommonJS在node中才能使用
      - module.exports导出，require导入
      - 运行时加载模块
      - 不会提升require
      - 导出的是一个值拷贝，会对加载结果进行缓存，一旦内部再修改这个值，则不会同步到外部
      - 顶层的this指向这个模块本身
    - 在webpack里面都可以使用
  - 现代的(modern): 正是因为现代前端开发面临的各种问题，才催生了webpack的出现和发展

### 11.2. vue项目加载的文件
- js的打包
  - 将es6转换成es5
  - ts处理，将其转换成js
- css处理
  - css文件模块的加载、提取
  - less/sass等预处理器的处理
- 资源文件img、font
  - 图片img文件的加载
  - 字体font文件的加载
- html资源的处理
  - 打包html资源文件
- 处理vue项目的SFC文件.vue文件
  - .vue、template等

### 11.3. webpack的安装和配置
#### 11.3.1. webpack和webpack-cli的关系
- 执行webpack命令，会执行node_modules下的.bin目录下的webpack
- webpack在执行时是依赖webpack-cli的，如果没有安装就会报错
- webpack-cli中执行代码时，才是真正利用webpack进行编译和打包的过程
  - webpack-cli的主要作用是，当我们需要用命令行去执行webpack的时候，对我们的命令去做一些读取
    - 类似于webpack -- xxx
    - 他的本质还是去调webpack
  - webpack有一系列调用过程
    - 我们执行webpack命令的时候，先执行webpack里面的东西
    - webpack去调webpack-cli
    - webpack-cli再去调webpack
- 所以在安装webpack时，我们需要同时安装webpack-cli（第三方脚手架事实上是没有使用webpack-cli的，而是类似于自己的vue-service-cli的东西）
  - 编译一个项目的时候并不需要webpack-cli（如vue、react脚手架）
  - 因为我们编译项目的时候不需要用 webpack -xxx 去执行

#### 11.3.2. 安装webpack
- 全局安装
  - npm install webpack webpack-cli -g
  - 建议全局安装
- 局部安装
  - npm install webpack webpack-cli -D
- 查看版本
  - webpack -version

#### 11.3.3. webpack的安装和基本打包
- 创建目录
  - 目录名暂定为basic_webpack
  - 需要创建一个src目录
    - src目录下放业务代码
    ```js
    // src/js/format.js
    const priceFormat = function() {
      return "¥99.88";
    }

    // CommonJS的导出
    module.exports = {
      priceFormat
    }

    // src/js/math.js
    // ES Module
    export const sum = (num1, num2)=> {
      return num1 + num2;
    }

    // src/index.js
    import { sum } from "./js/math";  // ES Module的导出
    const { priceFormat } = require('./js/format')  // CommonJS的导出

    // 浏览器无法直接运行
    console.log(sum(20, 30))
    console.log(priceFormat())  // 浏览器不能识别CommonJS，用webpack打包，浏览器就可以识别了
    ```
- 进入到webpack项目目录
  - 终端输入指令`webpack`
    - 如果项目目录下没有src文件夹会报错
    - 他是自动找到src下的index.js文件去进行打包的
    - 该目录下会多一个dist文件夹
    - 这时候html文件引入dist中的main.js浏览器就运行正常了
- 注意事项
  - 我们输入的webpack是全局的webpack
  - 但每个项目的webpack版本可能是不一样的
  - 所以在我们真实的开发中，我们一般很少用全局的webpack去打包某个项目
  - 我们会在每个项目中单独安装webpack
- 在项目中局部安装webpack
  - 进到项目目录  
  - 创建package.json
    - 帮助我们管理包依赖及项目信息
    - 使用`npm init -y` 创建
  - 局部安装webpack`yarn add webpack webpack-cli`
    - 默认是安装在生产环境
    - 如果需要在开发环境安装的话：`yarn add webpack webpack-cli -D`
    - `yarn.lock`文件记录了我们安装的真正的版本号，并且可以让我们在下次安装的时候从缓存里面读取
- 在局部安装的webpack中运行项目
  - 需要找到node_modules下的.bin下的webpack
    - `./node_modules/.bin/webpack`
  - 或者直接使用npx
    - `npx webpack`
    - npx可以直接找到node_modules下的./bin目录
  - 或者可以在package.json里面配置
    - 之后就直接输入指令 `yarn build` 来执行了
    ```json
    // 在脚本中不需要使用npx，他会自动在node_modules里面找指令去执行
    "scripts": {
      "build": "webpack"
    },
    ```

#### 11.3.4. webpack的配置文件
- 打包的时候是默认进入 `src/index.js`进行打包的
  - 如果需要指定入口需要使用指令: `webpack --entry ./src/main.js`
  - 指定出口的话：`webpack --entry ./src/main.js -- output-path ./build`
  - 此时我们可以改package.json文件
    - `"build": "webpack --entry ./src/main.js -- output-path ./build"`
    - 但这样就会显得很长，因为webpack配置不可能只有指定入口出口文件
    - 此时我们可以建webpack的配置文件
      - `webpack.config.js`
      - 一般不改名字
      - webpack.config.js为node环境，所以只能使用CommonJS
- webpack配置文件
  - 一旦有webpack.config.js配置文件，package.json里面的webpack会自动读取配置文件
  - 如果文件名改了就读取不到了
  - package.js里面依旧只要写 `"build": "webpack"`
  ```js
  const path = require('path')

  module.exports = {
    entry: "./src/main.js",  // 入口
    // 出口
    output: {
      // path: './build',  // 需要写绝对路径，这么写会报错
      // __dirname获取当前文件所在路径
      path: path.resolve(__dirname, './build'),
      filename: 'bundle.js'  // 出口文件名称,默认是main.js
    }
  }
  ```
- 如果配置文件名称改了
  - `"build": "webpack --config test.config.js"`
- 后面的webpack都是基于webpack.config.js这个配置文件展开的

### 11.4. webpack对css进行打包
- webpack依赖关系图（是一种数据结构）
  - 不是树结构
  - webpack首先需要有一个入口文件
  - 会从入口文件开始查找所有的依赖，将他们打包，但如果没有依赖的，就不会被打包
  - 如果一个文件未被打包，可以在任何一个被依赖的文件中将它引入
  - 他会标记哪些模块被加载过，不会有依赖冲突
  - webpack是一个强大的生态，他不止有核心的功能，还可以加载各种依赖和插件
- 将css引入并打包
  - 在src中创建js
  ```js
  // element.js

  import "../css/style.css";
  import "../css/title.less";

  const divEl = document.createElement("div");
  divEl.className = "title";
  divEl.innerHTML = "你好啊,李银河";

  document.body.appendChild(divEl);
  ```
  - 如果路径都没有错，他依旧会报错
    - webpack将css文件当成了模块，报错信息是需要一个合适的loader去处理这类型文件
    - webpack默认执行js，但不认识css
  - 需要下载css-loader
    - `yarn add css-loader -D`
  - 还需要在webpack进行配置来使用css-loder
    - 内联方式（不常用）
      - 在引入css的时候 `import "css-loader!../css/style.css";`
      - ! 必须要加
    - 配置方式
      - 可以在module中添加规则
      - 配置规则之后打包没问题，但还没有生效
  - css-loader只是负责解析.css文件，但不会将解析后的css插入到页面中
    - 插入的操作可以使用 style-loader
    - `yarn add style-loader -D`
    - loader的加载是有顺序的，他是从右向左（从下向上，从后向前）的
    ```js
    // 模块
    module: {
      // 规则
      rules: [
        // 配置规则之后打包没问题，但还没有生效
        {
          // 匹配到以css结尾的文件，都使用css-loader
          test: /\.css$/, // 正则表达式
          // 1.loader的写法(语法糖)
          // loader: "css-loader"
  
          // 2.完整的写法
          use: [
            //   {loader: "css-loader"}
            // 最常用的方式
            /// loader加载是有顺序的，他的加载顺序是从后往前的
            "style-loader",
            "css-loader",
          ]
        },
      ]
    }
    ```
- 引入less
  - `yarn add less -D`
  - 可以将less编译成css
    - `npx lessc ./test.scss demo.css`
    - 在根目录下生成demo.css
    - 因为在node-modules里面有lessc
    - 要对项目中的less文件进行批处理，可以使用webpack，需要使用less-loader这个工具
      - `yarn add less-loader -D`
  - webpack.js配置
  ```js
  // 测试less
  {
    test: /\.less$/,
    // 先将less编译成css、再解析css，最后插入css
    use: [
      "style-loader",
      "css-loader",
      "less-loader",
    ]
  }
  ```
- postCss工具
  - postCss是一个通过js来转化样式的工具
  - 可以在样式前加前缀，可以做浏览器的适配
  - 引入方式和上面差不多
  - postcss.config里面可以使用`postcss-preset-env`，功能更强大
  ```json
  "postcss": "^8.3.0",
  "postcss-cli": "^8.3.1",
  "postcss-loader": "^5.3.0",
  "postcss-preset-env": "^6.7.0",
  ```
  ```js
  // postcss.config.js
  module.exports = {
    plugins: [
      require("postcss-preset-env")
    ]
  }

  // webpack.config.js
  {
    test: /\.css$/, //正则表达式

    use: [
      "style-loader",
      "css-loader",
      "postcss-loader"
      // {
      //   loader: "postcss-loader",
      //   options: {
      //     postcssOptions: {
      //       plugins: [
      //         require("autoprefixer")
      //       ]
      //     }
      //   }
      // }
    ]
  },
  ```

### 11.5. webpack对静态资源进行打包
- 简述
  - 要处理图片，我们也需要相对应的loader：file-loader
    - file-loader的作用就是帮助我们处理`import/require()`方式引入的一个文件资源，并且会将它放到我们输出的文件夹中
  - webpack5已经不推荐使用file-loader了，但目前脚手架还没升级
- 安装并使用
  - `yarn add file-loader -D`
  ```js
  // 设置背景图片
  import "../css/image.css";
  const bgDivEl = document.createElement('div');
  bgDivEl.className = "image-bg";
  document.body.appendChild(bgDivEl);

  // 引入的图片
  import zzhnImage from '../img/zznh.png';
  const imgEl = document.createElement('img');
  imgEl.src = zzhnImage;
  document.body.appendChild(imgEl);

  // 匹配图片
  /* {
      test: /\.(jpe?g|png|gif|svg)$/,
      // 会生成两张图片，css-loader 6.0.0以上版本。对引入背景图片的url解析方式不一样，导致生成了两个图片（一个正常由file-loader解析生成，一个仅由css-loader解析引入）
      // 将css-loader版本由6降到5就行了
      // 官方推荐使用asset module 资源模块替换loader
      use: 'file-loader', 
  }, */
  // url-loader作用和file-loader作用相似，但可以将较小的文件转换成base64的uri
  // yarn add url-loader -D
  /* {
    test: /\.(jpe?g|png|gif|svg)$/,
    use: {
      loader: "url-loader",
      options: {
        // outputPath: "img",
        name: "img/[name]_[hash:6].[ext]",
        limit: 100 * 1024
      }
    }
  }, */
  // 直接使用资源模块类型（asset module type）
  // asset => url-loader+配置资源体积限制实现 => 在导出一个data uri和发送一个单独文件直接自动选择
  {
    test: /\.(jpe?g|png|gif|svg)$/,
    type: "asset",
    generator: {
      // [name]获取文件名称，[ext]表示扩展名
      filename: "img/[name]_[hash:6][ext]"
    },
    // asset类型需要做以下配置
    parser: {
      dataUrlCondition: {
        // 100kb*1024
        maxSize: 100 * 1024
      }
    }
  },
  ```
- 打包字体
  ```js
  // i元素
  import "../font/iconfont.css";  // 引入依赖图
  const iEl = document.createElement('i');
  iEl.className = "iconfont icon-ashbin";
  document.body.appendChild(iEl);

  // 直接使用资源模块类型（asset module type）
  // asset/resource => file-loader => 发送一个单独的文件并导出url
  // 字体 - 一般不转base64
  {
    test: /\.(eot|ttf|woff2?)$/,
    type: "asset/resource",
    generator: {
      filename: "font/[name]_[hash:6][ext]"
    }
  }
  ```
- 资源模块类型（asset module type）
  - webpack5之前，加载这些资源我们需要使用一些loader，如raw-loader、url-loader、file-loader
  - webpack5开始，我们可以直接使用资源模块类型（asset module type），来代替上面的类型
  - 即webpack5不需要安装url-loader、file-loader
  - asset/resource => file-loader => 发送一个单独的文件并导出url
  - asset/inline => url-loader => 导出一个资源的data uri
  - asset/source => raw-loader => 导出资源的源代码
  - asset => url-loader+配置资源体积限制实现 => 在导出一个data uri和发送一个单独文件直接自动选择

### 11.6. webpack中的插件(plugin)
- 简述
  - loader是用于特定的模块类型进行转换
  - plugin可以用于执行更广泛的任务，比如打包优化、资源管理、环境变量注入等
  - webpack的插件贯穿于整个webpack生命周期中
  - 比如我们用loader打包css，实际上是将css注入到html中的，我们可以使用插件来将所有css提取到独立的文件里面去
  - 插件必须手动导入
  - 一般插件都会封装成一个class
- CleanWebpackPlugin
  - 我们每次修改一些配置，重新打包时，都需要手动删除dist文件夹
  - 但我们可以借助cleanWebpackPlugin这个插件来帮我们完成这个操作
  - 安装并使用
    - `yarn add clean-webpack-plugin -D`
    - 引入 => `const { CleanWebpackPlugin } = require('clean-webpack-plugin')`
    - 导出的是一个对象，我们需要在这个对象中取出CleanWbpackPlugin（CleanWbpackPlugin是一个类）
    ```js
    // 插件
    plugins: [
      // 通过类创建对象
      // 删除dist
      new CleanWebpackPlugin(),
    ],
    ```
- HtmlWbpackPlugin
  - 我们的html文件时编写在根目录下的，而最终打包的dist文件夹中是没有index.html的
  - 在进行项目部署时，必然也是需要对应的入口文件index.html
  - 所以我们也需要对index.html进行打包处理
  - 使用了这个插件之后，我们可以不需要创建index.html，他会自动生成模板
  - 它内置了index.html模板，但如果不想用它内置的，可以自定义模板
  - 像vuecli中，他就是以public里面的index.html为模板打包的
  - 插件中引入没有顺序问题
  - 安装并使用
    - `yarn add html-webpack-plugin -D`
    ```js
    // 引入html-webpack-plugin插件
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    // 打包index.html
    // new HtmlWebpackPlugin()  // 默认
    new HtmlWebpackPlugin({
      title: 'Output Management',  // 标题
      //  如果模板里面有baseurl，需要定义
      // template: './public/index.html'  // 传入自定义模板
    })
    ```
- DefinePlugin
  - 在index.html模板中，可能会有 <%变量 %>，这个是EJS模块填充数据的方式
  - DefinePlugin允许在编译时创建配置的全局常量，是一个webpack内置的插件
  - 可以直接对webpack进行解构，拿到这个类
  ```js
  const { DefinePlugin } = require('webpack')
  // 创建全局常量
  new DefinePlugin({
    // 当前文件夹
    BASE_URL: "'./'",  // 这里的BASE_URL可用在传入的自定义模板中，类似于vuecli中的public
  }),
  ```
- copy-webpack-plugin
  - vue打包之后，public的内容会复制到打包文件中
  - 安装并使用
    - `yarn add copy-webpack-plugin -D`
    ```js
    const { CopyWebpackPlugin } = require('copy-webpack-plugin')

    // 拷贝文件
    new CopyWebpackPlugin({
      // 匹配规则
      patterns: [
        {
          // 从哪里开始复制
          from: 'public',
          // 复制到哪个文件夹
          to: './',  // 可以不写，当前目录
          globOptions: {
            // 忽略当前文件夹下所有index.html
            ignore: [
              '**/index.html'
            ]
          }
        }
      ]
    })
    ```

### 11.7. webpack中的模式
- 开发模式
  - mode: 'development',
  - devtool: 'source-map'  // 生成代码的时候，也会生成对应的map文件，浏览器控制台能显示报错的位置
- 生产模式
  - mode: 'production',

### 11.8. babel
- 简述
  - 将es6转es5，将jsx、ts转js等，都需要babel，现在前端所有的脚手架中几乎都内置了babel，所以学习babel对我们理解代码从编写到线上的转变过程至关重要
  - babel是一个工具链，主要用于旧浏览器或者环境中将es5+代码转换为向后兼容版本的js，包括语法转换，源代码转换等
  - babel本身可作为一个独立的工具(和postCss一样)，不和webpack等构建工具配置来单独使用
- 安装和使用
  - 如果希望在命令行尝试使用babel，需要安装如下库
    - @babel/core => baebl核心代码，必须安装
    - @babel/cli => 可以让我们在命令行使用babel
    - `yarn add @babel/core @babel/cli -D`
  - 使用 `npx babel demo.js --out-dir dist`
    - src => 源代码目录
    - --out-dir => 指定要输出的文件夹
    - 或者 `npx babel demo.js --out-file test.js`
    - 但转换的依然是es语法
- 插件
  -比如我们需要转换箭头函数，需要使用箭头函数转换相关的插件
    - `yarn add @babel/plugin-transform-arrow-functions -D`
    - `npx babel demo.js --out-file test.js --plugins=@babel/plugin-transform-arrow-functions`
  - 不使用块级作用域(const，let)
    - `yarn add @babel/plugin-transform-block-scoping`
    - `npx babel demo.js --out-file test.js --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping`
    - 所有const，let就变成var了
  - babel的预设(preset)
    - 如果转换的内容过多，一个个设置太过麻烦，我们可以使用预设
    - `yarn add @babel/preset-env -D`
    - `npx babel demo.js --out-file test.js --presets=@babel/preset-env`
    - 一般开发的时候不需要一个个去配置，直接写预设就可以了
- babel的底层原理
  - 概念
    - 这种将一种源代码(原生语言)转换成另一种源代码(模板语言)的工作，可以理解成编译器，即我们可以将babel看作是一个编译器
    - babel的作用就是将我们的源代码，转换成浏览器可以识别的另一种源代码
  - babel也有编译器的工作流程
    - 解析阶段(parsing)
    - 转生阶段(transformation)
    - 生成阶段(code generaation)
    - 可以参考网站 [https://github.com/jamiebuilds/the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)
  - babel的执行原理
    - 原生源代码 => 词法分析 => tokens数组 => 语法分析 => AST抽象语法树 => 遍历 => 访问 => 应用插件 => 新的AST => 目标源代码
- babel-loader
  - webpack是模块化打包工具，把很多资源当成是模块，然后将他们打包，担他不负责在打包的过程中做一系列转换
  - webpack虽然看起来是打包了，但是没有将es6代码转成es5的，所以配置webpack还需要使用babel
  - 在webpack中使用babel需要使用babel-loader
  - 安装和使用
    - `yarn add babel-loader -D`
    - 如果核心文件没有安装 `yarn add babel-loader @babel/core -D`
    ```js
    {
      // 执行js代码的时候，使用babel-loader
      test: /\.js$/,
      // 这么写直接build还不能转换代码，因为没有使用插件
      // loader: "babel-loader"
      use: {
        loader: "babel-loader",
        options: {
          // 使用插件
          /* plugins: [
            "@babel/plugin-transform-arrow-functions",
            "@babel/plugin-transform-block-scoping"
          ] */
          // 或者直接使用预设
          presets: [
            "@babel/preset-env"
            // 如果有参数可能要写成
            // ["@babel/preset-env", {.....}]
          ]
        }
      }
    }
    ```
  - 我们也可以将babel抽取到独立的文件中
    - babel提供了两种配置文件
      - babel.config.json(或者.js,.cjs,.mjs)
        - 比较推荐
      - .babelrc.json(或者.babelrc,.js,.mjs)
        - rc表示运行时编译 => runtime complier 
        - 比较早期的
    - 创建babel.config.js
      ```js
      module.exports = {
        presets: [
          "@babel/preset-env"
        ]
      }

      // 在外部对babel做配置
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
      ```

---
<br />

<font color="#666" size="5">\~End~</font>