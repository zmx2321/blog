<template>
  <!-- 盒子模板-获取主事件和数据 -->
  <picture-box-template :areaImage="areaImage" @getTipContent="getTipContent">
    <!-- 自定义tool-tip组件，定义插槽 -->
    <tool-tip :class="['bok-' + item.bunkNo,
                      {'soon': item.bunkemptyshopcolour === '1'},
                      {'empty': item.bunkemptyshopcolour === '-1'}]"
              :data-content="item.bunkNo"
              v-for="(item, index) in this.$store.getters.currentBunkList" :key="index">
      <!-- 自定义tool-tip内容组件，为插槽 -->
      <info-content slot="info" :tipInfo="tipInfo" />
      <!-- 普通按钮，显示文本，为插槽 -->
      <el-button slot="btn">
        <!-- 编号 -->
        <b>{{ item.bunkNo }}</b>
        <!-- 空白，默认不显示，需要时以样式填充 -->
        <div class="blank" :class="[{'soon': item.bunkemptyshopcolour === '1'},
                                    {'empty': item.bunkemptyshopcolour === '-1'}]"></div>
        <div class="blank1" :class="[{'soon': item.bunkemptyshopcolour === '1'},
                                    {'empty': item.bunkemptyshopcolour === '-1'}]"></div>
        <div class="blank2" :class="[{'soon': item.bunkemptyshopcolour === '1'},
                                    {'empty': item.bunkemptyshopcolour === '-1'}]"></div>
      </el-button>
    </tool-tip>
  </picture-box-template>
</template>

<script>
import PictureBoxTemplate from './PictureBoxTemplate'
import ToolTip from './ToolTip'
import InfoContent from './InfoContent'

export default {
  components: {
    PictureBoxTemplate,
    ToolTip,
    InfoContent
  },

  props: {
    areaImage: {
      type: String,
      default: ""
    },
  },

  data() {
    return {
      tipInfo: {},   // 数据
    }
  },

  created() {
    this.setWhite()
  },

  methods: {
    // 配置
    setConfig(blankList) {
      blankList.forEach(item=> {
        // console.log(item)
        let blankItem = document.defaultView.getComputedStyle(item, null)
        // 白
        if(blankItem.backgroundColor === 'rgb(255, 255, 255)') {
          // console.log(blankItem)
          this.$nextTick(()=> {
            item.className += " white"
          })
        }
      })
    },
    // 配置白色块
    setWhite() {
      this.$nextTick(()=> {
        let blankList = document.querySelectorAll('.blank')
        let blankList1 = document.querySelectorAll('.blank1')
        let blankList2 = document.querySelectorAll('.blank2')

        this.setConfig(blankList)
        this.setConfig(blankList1)
        this.setConfig(blankList2)
      })
    },

    // 移入
    getTipContent(val) {
      // console.log(val)
      this.tipInfo = val
    },
  },
}
</script>
