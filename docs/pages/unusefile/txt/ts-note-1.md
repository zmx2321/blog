# vue+ts入门
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 简述vue+ts项目结构
- 创建一个空vue组件模板

```js
<template>
  <div class="test">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
// Component属于装饰器，用于装饰在class的上面
import { Component, Vue } from 'vue-property-decorator';

// 这个class继承于vue的构造函数
@Component
export default class Test extends Vue {
    msg = "ts+vue";
}
</script>

<style scoped lang="less">

</style>
```