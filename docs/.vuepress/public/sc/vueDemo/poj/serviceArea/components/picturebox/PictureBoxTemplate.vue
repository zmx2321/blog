<template>
  <section class="picture_box" @mouseover="getDataByEvent">
    <img :src="areaImage" />

    <!--
      服务区
        大按钮 有字 不用
        小按钮 无字 样式为none

        样式
          正常状态 不加
          空       empty
          临期     soon
     -->
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    areaImage: {
      type: String,
      default: ()=> {}
    }
  },

  data() {
    return {
      // tip信息
      tipNum: "",
    }
  },

  methods: {
    // 根据事件对象获取数据
    getDataByEvent(e) {
      let target = e.target
      let boxStatus = ""
      // console.log(target)

      // 检查状态
      const checkArea =(str1, str2)=> {
        if(str1.indexOf(str2) != -1) {
          boxStatus = str2
        }
      }

      // 改变状态
      const setStatus = tar=> {
        // 不管文字存在不存在，样式一直存在
        checkArea(tar, 'soon')
        checkArea(tar, 'empty')
      }

      // 如果是div
      if(target.nodeName === 'DIV') {
        // console.log(target.parentNode.textContent)
        this.tipNum = target.parentNode.textContent

        // console.log(document.defaultView.getComputedStyle(target, null).backgroundColor)
      }

      // 有文字
      if(target.nodeName === 'B') {
        this.tipNum = target.textContent

        // 作用在span上
        setStatus(target.parentNode.className)
      }

      // 触发button - 可能有文字也可能没有
      if(target.nodeName === 'BUTTON') {
        // 作用在button上
        setStatus(target.className)

        // 获取按钮下的span标签
        let oSpan = e.target.querySelector('span')
        // console.log(oSpan)

        // 如果文字不存在
        if(!oSpan) {
          this.tipNum = target.dataset.content
        } else {
          this.tipNum = target.textContent
        }
      }

      if(target.nodeName === 'IMG') {
        return
      }

      let bunkList = this.$store.getters.currentBunkList
      // console.log(bunkList)
      // console.log("店铺列表", bunkList, this.$store.getters.currentBunkList)

      let bunkInfo = {}

      bunkList.forEach(item=> {
        if(this.tipNum === item.bunkNo) {
          bunkInfo = item
        }
      })
      // console.log(this.tipNum)

      let tipContent = this.$store.getters.tipInfo
      this.$set(tipContent, 'currentTipNum', this.tipNum)  // 使用set方法添加属性，否则视图不刷新
      this.$set(tipContent, 'currentBoxStatus', boxStatus)  // 使用set方法添加属性，否则视图不刷新
      this.$set(tipContent, 'currentBunkInfo', bunkInfo)  // 使用set方法添加属性，否则视图不刷新

      // 获取全局数据，并发送自定义事件
      this.$emit("getTipContent", tipContent)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

.picture_box {
  position: relative;
  padding: 0;
  width: 1099px;
  height: 482px;
  overflow: hidden;
  animation: fadeRightBig .8s 0.2s ease both;

  ::v-deep .blank, ::v-deep .blank1, ::v-deep .blank2 {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 1;
    width: 100px;
    height: 100px;
    background: $normalColor;
    transition: 0.2s linear;
    // background: #fff;

    &.soon {
      background: $soonColor;
    }
    &.empty {
      background: $emptyColor;
    }
    // 空白
    &.white {
      opacity: 1 !important;
      background: #fff !important;
      cursor: default;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
}

@keyframes fadeRightBig{
  0%{
    opacity:0;
    transform:translateX(800px)
  }
  100%{
    opacity:1;
    transform:translateY(0)
  }
}
</style>
