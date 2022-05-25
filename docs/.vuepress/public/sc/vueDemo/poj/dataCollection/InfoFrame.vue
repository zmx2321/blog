<template>
  <!-- 弹窗 -->
  <el-dialog title="数据收集情况" :close-on-click-modal="false" :visible.sync="dataCollectVisible" append-to-body>
    <el-tabs tab-position="left" v-model="tabValue" @tab-click="setCollectData">
      <el-tab-pane :label="item.label" v-for="(item, index) in sideBarList" :key="index" :name="item.label" :id="item.id">
        <!-- 内容 -->
        <info-detail ref="infoDetailRef" :dataInfoLabel="item.label" v-if="tabValue === item.label" />
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<script>
import { sideBarList } from './data'

import InfoDetail from './InfoDetail'

export default {
  components: {
    InfoDetail
  },

  data () {
    return {
      dataCollectVisible: false,

      tabValue: "",
      sideBarList: sideBarList,
      infoData:[],
    }
  },

  created(){
    // this.showData()  // 测试，直接打开弹窗
  },

  methods: {
    /**
     * tools
     */
    asyncTools(next) {
      let timer = setTimeout(()=> {
        next()

        clearTimeout(timer)
      }, 0)
    },

    // 父组件执行方法
    showData() {
      this.dataCollectVisible = true  // 弹窗
      this.tabValue = this.sideBarList[0].label  // tab赋值

      // 页面初始化
      this.initPage()
    },

    // 页面初始化
    initPage() {
      // console.log("页面初始化")

      this.setCollectData()
    },
    setCollectData(tab) {
      const setRefMethods = item=> {
        this.asyncTools(()=> {
          this.$refs.infoDetailRef.forEach(refItem=> {
            if(refItem.dataInfoLabel === item.label) {
              refItem.setDetail(item.id, false)  // 遍历ref，执行子组件方法，并传值给子组件  第二个参数为是否仅列表查询，这里要查所有
            }
          })
        })
      }

      this.sideBarList.forEach(item=> {
        if(!tab) {
          setRefMethods(item)
        } else {
          if(item.label === tab.label) {
            setRefMethods(item)
          }
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
  // width: 65%;

  .el-dialog__header {
    padding: 0;
    height: 35px;
    background: #bfbfbf;
    margin-bottom: 10px;

    .el-dialog__title {
      line-height: 35px;
      padding-left: 20px;
      font-size: 16px;
      font-weight: bold;
    }

    .el-dialog__headerbtn {
      top: 8px;
    }
  }

  .el-dialog__body {
    padding: 0;

    .el-tabs {
      .el-tabs__header {
        background: #ededed;
        min-height: 444px;
      }

      .el-tabs__content {
        width: 80%;
        padding-left: 25px;

        .el-tabs {
          .el-tabs__header {
            min-height: initial;
            background: initial;
          }

          .el-tabs__content {
            width: initial;
            padding: 0;
          }
        }
      }
    }
  }
}
</style>
