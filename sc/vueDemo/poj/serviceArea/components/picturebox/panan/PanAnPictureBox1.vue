<template>
  <picture-box-content :areaImage="areaImage" />
</template>

<script>
import areaImage from '@/assets/images/area_list/panan/pananE.png'  // 磐安东

import PictureBoxContent from '../PictureBoxContent'
export default {
  components: { PictureBoxContent },
  data() { return { areaImage } },
}
</script>

<style lang="scss" scoped>
@import "./scss/box1.scss";
</style>
