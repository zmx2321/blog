<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

// .page
//   padding-bottom 2rem
//   display block
//   overflow: hidden;

//   .theme-default-content:not(.custom) {
//     max-width: 1920px;
//     overflow hidden
//     padding: 2rem 0
//   }

//   @media (min-width: $MQMobile)
//     .theme-default-content:not(.custom)
//       max-width: 1400px;
</style>
