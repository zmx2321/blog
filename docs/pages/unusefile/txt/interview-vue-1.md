# 大厂前端面试题汇总之Vue专题一
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 谈一谈你对MVVM原理的理解
> 我们最早的架构模型是MVC
- 前端到后台统一称为MVC
  - 前端叫视图层(view)，后端有自己的数据库(model)
  - 用户如果操作界面获取一些数据，他会向后端发起请求,请求会被我们的路由拦截到
  - 这时候他会转发给对应的控制器(control)进行处理
  - 最终将数据回显到视图上
  - 这种方向是单向的，而且是针对我们整个应用的架构
  - 当前端的应用越来越复杂，不单单只是通过后端来渲染了
  - 所以有了前端的单页应用
  - 我们于是把前端的视图这一层又进行了抽离
  - 抽离出了一个mvvm

> MVVM
- 把曾经前端的视图层(view)划分成了MVVM结构
  - 这里的view指的是dom元素 - 视图(view)
  - 数据就是model层 - 前端的静态数据，或者接口请求来的数据 - 模型(model)
    - 之前都是手动操作数据，然后将数据放到页面上(innerHTML...)
    - 即要手动的操作dom
  - 而类似vue的框架，就充当了我们中间层 - viewModel
    - 我们可以把数据直接挂到vue数据上
    - 通过vue，我们可以直接渲染视图
    - 同样的我们视图也可以直接更改，vue会监听当前视图变化，将数据再写回我们数据层中(model)
      - 这就是一个双向的过程
      - 所以MVVM就是一个双向绑定的过程
      - 在vue里面，我们的数据都是响应式的
      - 数据变化会驱动视图
      - 同样的，视图更改了，比如像v-model，他就实现了双向绑定的功能

> 完善MVVM概念

## 2. 请说一下响应式数据的原理
> 核心点 => object.defineProperty
- 默认vue在初始化数据时，会给data中的属性使用`object.defineProperty`重新定义所有属性，当页面取到对应属性时，会进行依赖收集(收集当前组件的watcher)，如果属性发生变化，会通知相关依赖进行更换操作
  - vue在初始化的时候，我们会传入一个data，这个data在内部会默认地把这个对象进行遍历，都使用了`object.defineProperty`重新定义了属性
  - 为什么要用`object.definePropery`呢？
    - 这个方法有一个特点，他可以使我们对数据的获取和设置都增加一个拦截的功能
    - 我们可以在获取和设置的时候增加一些自己的逻辑，这个逻辑叫做依赖收集
    - 例如：我们取数据的时候，我们可以收集一些功能，一会数据变化了，我可以告诉我收集的这些依赖进行更新
      - 我们收集的这个东西就叫watcher，watcher有很多种类（渲染的watcher）
      - 页面刚开始渲染的时候，会对数据进行取值，取值的时候就可以把当前的渲染watcher先存下来，对应到数据上
      - 当我们取更新数据的时候，告诉对应的watcher去更新，就ok了，这样就实现了一个响应式的数据原理

> 简述原理
- 拦截属性的获取 - 进行依赖收集 - 拦截属性的更新操作 - 对相关依赖进行更新
- initData => 初始化用户传入的data数据
  - core/instance/state.js - line:113
  - vue初始化的时候会调一个initData方法，拿到当前用户传入的数据
  ```js
  export function initState (vm: Component) {
    ...
    const opts = vm.$options;
    if (opts.data) {
      initData(vm) // 初始化data
    } else {
      observe(vm._data = {}, true /* asRootData */)
    }
    ...

    // 初始化data
    function initData (vm: Component) {
      let data = vm.$options.data  // 拿到用户的数据
      ...

      // 对用户的数据进行观测
      observe(data, true /* asRootData */)
    }
  }
  ```
- new Observer => 将数据进行观测
  - core/observer/index.js - line:124
  - 然后对数据进行观测(创建一个观测类)
  ```js
  // observe文件是专门做数据响应式控制的
  export function observe (value: any, asRootData: ?boolean): Observer | void {
    // 判断数据是否已经被观测过了
    if(hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__
    }else if(...){
      // 如果没有被观测过，创建一个观测类
      ob = new Observer(value)
    }

    ...

    return ob
  }

  // 观测类
  export class Observer {
    constructor (value: any) {
      // 观测分为两种，一种是数组，一种是对象
      if (Array.isArray(value)) {
        ...
        this.observeArray(value)
      } else {
        // 进行对象的处理
        this.walk(value)
      }
    }
  }
  ```
- this.walk(value) => 进行对象的处理
  - core/observer/index.js - line:64
  - 如果我们的数据是对象类型(非数组)，他就会调this.walk方法
  ```js
  // 进行对象的处理
  // 将我们传过来的对象进行循环
  walk (obj: Object) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      // 这个属于vue中比较核心的代码 - 定义响应式
      defineReactive(obj, keys[i])  // 定义对象的所有属性
    }
  }
  ```
- defineReactive => 循环对象属性定义响应式变化
  - core/observer/index.js - line:135
  - 内部会把我们数据进行遍历
  ```js
  export function defineReactive(...) {
    ...

    // 如果当前对象的值还是对象，则继续进行观测
    let childOb = !shallow && observe(val)  // 递归观测
    // 使用Object.defineProperty定义属性
    Object.defineProperty(obj, key, {
      ...,
      // 只要用户获取数据了，就会调get方法
      // 调get方法的时候，就收集依赖
      get: function reactiveGetter(){
        const value = getter ? getter.call(obj) : val
        if (Dep.target) {
          dep.depend()  // 收集依赖 通知watcher
          if (childOb) {
            childOb.dep.depend()  // 收集依赖
            if (Array.isArray(value)) {
              dependArray(value)
            }
          }
        }
        return value
      },
      // 等数据变了，就通知这个watcher更新数据
      set: function reactiveSetter(newVal){
        ...
        const value = getter ? getter.call(obj) : val
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }

        ... 

        // 如果这个值不一样的话，会调一个核心的方法
        // 这个notify的过程就会通知我们的视图进行更新
        dep.notify()  // 触发数据对应的依赖进行更新
      }
    })
  }
  ```
- Object.defineProperty => 使用Object.defineProperty重新定义数据
  - core/observer/index.js - line:157
  - 用defineReactive重新定义

## 3. Vue中如何检测数组变化
