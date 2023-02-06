<template>
  <picture-box-content :areaImage="areaImage" />
</template>

<script>
import areaImage from '@/assets/images/area_list/changan/changanS.png'  // 长安南

import PictureBoxContent from '../PictureBoxContent'
export default {
  components: { PictureBoxContent },
  data() { return { areaImage } },
}
</script>

<style lang="scss" scoped>
@import "./scss/box2.scss";
</style>
