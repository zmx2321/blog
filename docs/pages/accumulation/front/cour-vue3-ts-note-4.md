# vue3入门
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## vue2其他注意事项
1. 在父传子的时候,如果props里面是对象,并且需要给他默认值的时候,需要写成方法
  - 因为使用组件的时候会多次使用,即会创建多个组件实例,每个组件实例中都有一个props属性,props里面的默认对象也是一样的,他们都指向的是一个对象,如果一个组件改了值,那么所有的使用了那个组件的对象的值都会发生改变
  - 所以是引用类型的话,需要写成函数,否则新的实例使用的都是那个数据的引用而不是单独的数据
  - 在vue中的data中必须要return也是这个原因
  2. 因为浏览器渲染大小写不敏感,他会将所有的大写转换成小写,所以在props里面使用驼峰的命名之后,在dom上最好使用短横线来代替驼峰,不过在vue中,template中的内容是被vue-loader解析的,所以用驼峰也不会出现问题
  3. 当我们传递给组件某个属性,但该属性并没有对应的props或者emits时,就称之为非prop的Attribute,常见的包括class,style,id等
    - 这里就涉及到了Attribute继承的概念,当组件有个根节点时,非prop的Attribute将自动添加到根节点的Attribute中
    - 如果不希望继承,可以在组件中设置inheritAttrs: false
    - 我们可以通过$attrs来访问所有的非prop的Attribute
      - 即在父组件中使用自组件并定义一个id,在自组件不需要写props,只需要写上:id="$attrs.id"
    - 如果在子组件的标签上写了多个,但不想在子组件一个个地加,可以直接使用v-bind="$attrs"
    - 如果子组件有多个根元素,必须要在子元素指定数据需要绑定在哪个根元素上

## vue3使用说明
vue3传值
  父传子  prop
  子传父  emit(写法上有区别)
  父传孙  provide父组件定义数据   inject孙组件接收数据
  事件总线 eventBus   使用mitt库
  全局状态管理  vuex  pinia


## vue3种父子组件通信和vue2的区别
- vue3和vue2父传子不变
- vue3中子组件传递数据到父组件需要多一个步骤
```js
// 注册本组件会用到的事件
// 也可以写成对象写法,主要用来做参数的验证
emit: ['add', 'sub'],
methods: {
  test() {
    console.log('test')
    // 使用事件
    this.$emit('add')
  }
}

// 在子组件标签上的使用和vue2相同
```
