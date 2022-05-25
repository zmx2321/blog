<template>
  <div class="info_content">
   <ul v-if="tipInfo.currentBunkInfo">
     <li class="color1 mb5">{{ tipInfo.geographicalDivision }} {{ tipInfo.currentTipNum }}</li>
     <li class="color2 mb5 txt_cont empty" v-if="tipInfo.currentBunkInfo.bunkemptyshopcolour === '-1'">空铺</li>

     <li class="color2 mb5 txt_cont" :class="[{'soon': tipInfo.currentBunkInfo.bunkemptyshopcolour === '1'},
                                              {'empty': tipInfo.currentBunkInfo.bunkemptyshopcolour === '-1'}]"
                                      v-if="tipInfo.currentBunkInfo.bunkemptyshopcolour !== '-1'">
       {{ tipInfo.currentBunkInfo.bunktype }}
     </li>

     <li class="color3" v-if="tipInfo.currentBunkInfo.bunkemptyshopcolour !== '-1'">
       {{ tipInfo.currentBunkInfo.bunkname }}
       <!-- {{ tipInfo.currentBunkInfo }} -->
     </li>

     <li class="color4 time" v-if="tipInfo.currentBunkInfo.bunkemptyshopcolour === '1'">剩余{{ tipInfo.currentBunkInfo.diffDay }}天</li>
   </ul>
  </div>
</template>

<script>
export default {
  props: {
    // 商铺信息
    tipInfo: {
      type: Object,
      default: ()=> {}
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

$fontColor1: #9D9898;
$fontColor2: #333333;
$fontColor3: #585858;
$fontColor4: #FF5B5B;

.info_content {
  .color1 { color: $fontColor1; font-size: 14px;}
  .color2 { color: $fontColor2; font-size: 16px;}
  .color3 { color: $fontColor2; font-size: 12px;}
  .color4 { color: $fontColor3; font-size: 16px;}

  ul {
    margin-left: 10px;

    li {
      font-family: Microsoft YaHei;

      &.time {
        &:last-child {
          margin-top: 15px;
        }
      }

      &.txt_cont {
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: 8px;
          left: -11px;
          width: 6px;
          height: 6px;
          border-radius: 3px;
          border: solid 1px #707070;
          background: $normalColor;
        }
        &.soon {
          &::before {
            background: $soonColor;
          }
        }
        &.empty {
          &::before {
            background: $emptyColor;
          }
        }
      }
    }
  }
}
</style>

