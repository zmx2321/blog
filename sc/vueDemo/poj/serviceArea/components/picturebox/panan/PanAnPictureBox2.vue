<template>
  <picture-box-content :areaImage="areaImage" />
</template>

<script>
import areaImage from '@/assets/images/area_list/panan/pananW.png'  // 磐安西

import PictureBoxContent from '../PictureBoxContent'
export default {
  components: { PictureBoxContent },
  data() { return { areaImage } },
}
</script>

<style lang="scss" scoped>
@import "./scss/box2.scss";
</style>
