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

## vue3日期选择器截止昨天
```html
<el-date-picker
          v-model="form.endTime"
          style="width: 238px"
          type="date"
          placeholder="请选择时间"
          :disabled-date="disabledDate"
          format="YYYY-MM-DD"
          value-format="YYYY-MM-DD"></el-date-picker>

<script setup>
  const disabledDate = (time) => {
    return time.getTime() < Date.now() - 8.64e7
  }
</script>
```

## el-tree以及checkbox单选
```js
// @check-change="handleSelectedTreeUser"
const handleSelectedTreeUser = (val, selected) => {
  if (val.type === 2 && selected) {
    refMyTree.value.setCheckedKeys([])
    refMyTree.value.setChecked(val, true)
    selectedUsers.value = [val]
    // console.log(selectedUsers.value)
  }
}

// @change="getSingleUser(item)"
const getSingleUser = (val) => {
  console.log(val)

  selectedUsers.value = selectedUsers.value.includes(val) ? [val] : []
}
```

## form表单中自定义校验
```js
const validDataBank = (rule, value, callback) => {
  // const pattern = /[`~!-\·\.@#$^&*()=|{}':;',\\\[\]\.<>\/\+?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g
  const pattern1 = /([\u4e00-\u9fa5])/g // 中文
  // const pattern2 = /[`~,.<>;':"\/\[\]\|{}()-=_+]/g // 特殊字符
  const pattern2 = /[`@&<>~\+\-=_,.\/\[\]\|{}()]/g // 特殊字符
  // const pattern2 = /[~,.<>;':"\/\[\]\|{}()-=_+]/g // 特殊字符
  if (value) {
    var newValue = value.replace(pattern1, '').replace(pattern2, '')
    if (value !== newValue) {
      callback(new Error('不可使用特殊字符'))
    }
    callback()
  }
}

{ validator: validDataBank, trigger: 'blur' }
```

## el-table动态合并单元格
```vue
<template>
  <el-table
    :data="tableData"
    :border="true"
    show-summary
    height="800"
    :summary-method="getSummaries"
    style="width: 100%"
    :span-method="arraySpanMethod"
    :cell-style="cellStyleMethod">
    <el-table-column type="index" width="82" label="序号" fixed min-width="200" />
    ......
  </el-table>
</template>

<script setup>
import { ref, toRefs, toRef, reactive, computed, nextTick } from 'vue'

let tableData = ref([])
let tableColumn = ref([])
let mergeDate = []
let temData = {}
let spanNameArr = []  // 处理要合并的数据

const getSummaries = (param) => {
  const { columns, data } = param
  let temData = data.filter((item) => item.date === '汇总')
  const sums = []
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = '汇总计算'
      return
    }
    const values = temData.map((item) => Number(item[column.property]))
    if (!values.every((value) => isNaN(value))) {
      sums[index] = values.reduce((prev, curr) => {
        const value = Number(curr)
        if (!isNaN(value)) {
          let temValue1 = prev + curr
          let temValue2 = temValue1.toString().match(/^\d+(?:\.\d{0,2})?/)
          return Number(temValue2)
        } else {
          return prev
        }
      }, 0)
      sums[index]
    } else {
      sums[index] = '-,--'
    }
  })
  mergeDate = sums
  return sums
}

function arraySpanMethod({ row, column, rowIndex, columnIndex }) {
  if (row.date === '汇总') {
    if (columnIndex === 1) {
      return [0, 0]
    } else if (columnIndex === 2) {
      return [1, 1]
    }
  } else {
    if (columnIndex == 1) {
      const _row = spanNameArr[rowIndex]
      const _col = _row > 0 ? 1 : 0
      return {
        // [0,0] 表示这一行不显示， [2,1]表示行的合并数
        rowspan: _row,
        colspan: _col
      }
    }
  }
}

function cellStyleMethod({ row, column, rowIndex, columnIndex }) {
  if (row.date === '汇总' || row.name === '汇总计算') {
    if (columnIndex !== 0) {
      return { backgroundColor: 'var(--el-table-row-hover-bg-color)', fontWeight: 500 }
    }
  }
}
</script>
```

## vue3数组应用
- 过滤sizeOptions对象数组，判断val数组中是否包含id，将包含该id的对象数组返回
- 改造对象数组，用map获取值，改造直接返回
```js
// val是一个[1,2,3]
sizeTableData.value = sizeOptions.value
    .filter((item) => val.includes(item.id))
    .map((item) => ({
      sizeTypeId: item.id,
      sizeTypeName: item.name,
      price: '',
      sequence: ''
    }))
```