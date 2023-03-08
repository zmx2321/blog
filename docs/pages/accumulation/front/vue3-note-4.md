# vue3工作积累
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## vue3模板
### vue3模板1
```js
<template>
  <section>
    <!-- 当我们在template模板中使用ref对象, 它会自动进行解包 -->
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <br />

    {{ name }} - {{ age }}
    <button @click="changeAge">+age</button>
    <br />

    <h2>{{ fullName }}</h2>
    <button @click="changeName">修改firstName</button>
  </section>
</template>

<script>
import { ref, toRefs, toRef, reactive, computed } from 'vue'

export default {
  props: {
    /* message: {
      type: String,
      default: '',
      required: true
    } */
  },
  setup() {
    // counter编程一个ref的可响应式的引用
    // counter = 100;
    let counter = ref(100)
    const firstName = ref('Kobe')
    const lastName = ref('Bryant')

    // 响应式数据
    const state = reactive({})
    const info = reactive({ name: 'why', age: 18 })
    // let { name, age } = toRefs(info)  // 对所有属性转换成响应式
    let { name } = info
    let age = toRef(info, 'age') // 对一个属性转换成响应式

    // 计算属性 - 数据需要响应式
    // const fullName = computed(() => firstName.value + ' ' + lastName.value)  // 只读,需要重写set方法
    const fullName = computed({
      get: () => firstName.value + ' ' + lastName.value,
      set(newValue) {
        const names = newValue.split(' ')
        firstName.value = names[0]
        lastName.value = names[1]
      }
    })

    // 局部函数
    const increment = () => {
      counter.value++
      console.log(counter.value)
    }
    const changeAge = () => {
      age.value++
      // info.age++
      console.log(age.value)
    }
    const changeName = () => {
      // firstName.value = "James"
      fullName.value = 'test ddd'
    }

    return {
      // reactive数据
      state,

      // 数据
      counter,
      name,
      age,
      fullName,

      // 方法
      increment,
      changeAge,
      changeName
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
```
### vue3模板2
```js
<template>
  <section>
    <!-- 当我们在template模板中使用ref对象, 它会自动进行解包 -->
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <br />

    {{ name }} - {{ age }}
    <button @click="changeAge">+age</button>
    <br />

    <h2>{{ fullName }}</h2>
    <button @click="changeName">修改firstName</button>
  </section>
</template>

<script setup>
import { ref, toRefs, toRef, reactive, computed, defineProps } from 'vue'

const props = defineProps({
  /* message: {
    type: String,
    default: '',
    required: true
  } */
})

// counter编程一个ref的可响应式的引用
// counter = 100;
let counter = ref(100)
const firstName = ref('Kobe')
const lastName = ref('Bryant')

// 响应式数据
const state = reactive({})
const info = reactive({ name: 'why', age: 18 })
// let { name, age } = toRefs(info)  // 对所有属性转换成响应式
let { name } = info
let age = toRef(info, 'age') // 对一个属性转换成响应式

// 计算属性 - 数据需要响应式
// const fullName = computed(() => firstName.value + ' ' + lastName.value)  // 只读,需要重写set方法
const fullName = computed({
  get: () => firstName.value + ' ' + lastName.value,
  set(newValue) {
    const names = newValue.split(' ')
    firstName.value = names[0]
    lastName.value = names[1]
  }
})

// 局部函数
const increment = () => {
  counter.value++
  console.log(counter.value)
}
const changeAge = () => {
  age.value++
  // info.age++
  console.log(age.value)
}
const changeName = () => {
  // firstName.value = "James"
  fullName.value = 'test ddd'
}
</script>

<style lang="scss" scoped>
</style>
```

## vue3 定义全局事件总线
- main.js
```js
// eventbus.js
import mitt from 'mitt'
const emitter = mitt()
export default emitter


// 引入事件总线库
import emitter from '@/utils/eventbus'

app.config.globalProperties.$emitter = emitter // 定义全局事件总线
```

## vue3的elementPlus中el-dropdown传参
```html
<el-dropdown
@command="
    (command) => {
    handleCommand(command, slotProps.row)
    }
">
<span class="el-dropdown-link">
    更多
    <el-icon class="el-icon--right">
    <arrow-down />
    </el-icon>
</span>
<template #dropdown>
    <el-dropdown-menu>
    <el-dropdown-item command="create">xxx</el-dropdown-item>
    </el-dropdown-menu>
</template>
</el-dropdown>

<script setup>
    const handleCommand = (command, row) => {}
</script>
```

## el-tree中不能全选
```css
:deep(.el-tree) {
  .el-icon.el-tree-node__expand-icon {
    &.is-leaf {
      display: none;
    }

    &:not(.is-leaf) {
      & + .el-checkbox {
        display: none;
      }
    }
  }
}
```

## vite跨域配置
```js
proxy: {
  '/proxyApi1': {
    target: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL1,
    ws: true, // 是否启用websockets
    changeOrigin: true, // 运行跨域
    rewrite: (path) => path.replace(/^\/proxyApi1/, '') // 重写路径
  }
}
```