<template>
  <section class="tab_info_wrap" v-if="isShowTxt">
    <div class="info_btn">
      <p>最近数据同步时间为 {{ updateTime }}，<a @click="showData">请点击查看</a><b @click="clearFix">x</b></p>
    </div>

    <info-frame ref="infoFrameRef" />
  </section>
</template>

<script>
import { getUpdateTime } from '@/api/dataCollect'

import InfoFrame from './InfoFrame'

export default {
  components: {
    InfoFrame
  },

  watch: {
    isShowTxt(val) {
      this.getConfig()
    }
  },

  /*  */

  data() {
    return {
      updateTime: '',
      isShowTxt: false,
    }
  },

  mounted() {
    this.$nextTick(()=> {
      this.getConfig()
    })
  },

  created() {
    this.initPage()
  },

  methods: {
    initPage() {
      getUpdateTime().then(res=> {
        // console.log(res)

        this.updateTime = res.msg
      })
    },

    getConfig() {
      this.getConfigKey("sys.index.dataQuality").then(res => {
        switch(res.msg) {
          case '1':
            this.isShowTxt = true
            break
          case '-1':
            this.isShowTxt = false
            break
        }

        console.log(this.isShowTxt)
      });
    },

    showData() {
      this.$refs.infoFrameRef.showData()
    },
    clearFix() {
      this.$emit('clearFix')
    },
  }
}
</script>

<style lang="scss" scoped>
$tabInfoHeight: 34px;

.tab_info_wrap {
  .info_btn {
    position: relative;
    width: 100%;
    height: $tabInfoHeight;
    background: #f5d4d4;
    border: solid 1px #f00;
    margin-bottom: 12px;
    overflow: hidden;

    p {
      position: relative;
      height: 35px;
      line-height: 34px;
      padding: 0 0 0 33px;
      font-size: 16px;

      &::before {
        content: "!";
        position: absolute;
        top: 45%;
        transform: translateY(-50%);
        left: 10px;
        background: #f00;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        text-align: center;
        line-height: 17px;
        font-size: 12px;
        color: #fff;
      }

      a {
        font-size: 14px;
        color: #00aeff;
      }

      b {
        position: absolute;
        right: 9px;
        color: #858585;
        cursor: pointer;
      }
    }
  }
}
</style>
