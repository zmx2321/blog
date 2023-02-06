<template>
  <section class="app-container main_wrap service_area_wrapper">
    <div class="service_area_cont">
      <!-- 选择器 -->
      <div class="select_wrap mb13">
        <cascader-tool ref="cascaderRef" @addressHandleChange="addressHandleChange" :addressStr="addressStr" v-if="cascaderFlag" />
      </div>

      <!-- 内容 -->
      <div class="servarea_wrap f-cb">
        <!-- 左 -->
        <div class="servarea_pic">
          <service-main class="shad_radiu_box f-fl mr10"
                        ref="serviceMainRef"
                        v-if="serviceMainFlag"
                        :regionsData="regionsData"
                        :currentAddress="currentAddress"
                        :areaSwitch="areaSwitch"
                        :bunkList="bunkList"
                        :positionType="positionType"
                        @setAreaSwitch="setAreaSwitch"
                        @clickArea="clickArea"
                        @checkDp="checkDp"
            />
        </div>

        ......
      </div>
    </div>

    <!-- 弹窗 -->
    <el-dialog :title="areaDetailTitle" :close-on-click-modal="false" :visible.sync="areaDetailVisible" class="area_detail_dialog" append-to-body>
      <area-detail ref="areaDetailRef" @resetAreaChartData2="resetAreaChartData2" :addressStr="addressStr" />
    </el-dialog>
  </section>
</template>

<script>
// 地址搜索
import CascaderTool from './components/CascaderTool'

// 商铺详情
import AreaDetail from './components/AreaDetail'

// charts
import AreaChart1 from './charts/AreaChart1'

import { getServerByCode, getBunkDataByCode, getDefaultCode } from '@/api/manager/merchant/serviceArea'

const areaChartData = {
  pieFieldData: [
  ],
}

import serviceMain from './components/serviceMain'

export default {
  name: "serviceArea",

  components: {
    CascaderTool,
    AreaDetail,
    AreaChart1,

    /**
     * 服务区图
     */
    serviceMain,
  },

  data () {
    return {
      serviceMainFlag: false,
      cascaderFlag: false,
      showChart: true,

      // 下拉框 - 选择地址
      addressStr: [],  // 默认萧山西区 - 服务区初始化时使用，和驾驶舱相关，新增服务区时可以无视
      currentAddress: "",
      currentServerList: [],  // 当前省服务区列表
      provinceCode: '',
      linkArr: "",

      /**
       * 图区域
       */
      areaSwitch: "",  // 区域选择块 - 东南西北
      regionsData: {},  // 区域数据
      regionsTestData: {},  // 区域数据 - 测试
      bunkList: [],  // 店铺列表 - 测试
      currentServiceAreaId: "",  // 当前服务区id
      positionType: "",

      /**
       * 图表数据
       */
      // 解构
      areaChartData1: areaChartData,
      numAll: 0,  // 图表总数

      /**
       * 弹窗
       */
      areaDetailTitle: "",  // 弹窗标题
      areaDetailVisible: false,  // 弹窗界面
      ysAllNum: "",
      maintotalAmount: "",
    }
  },

  methods: {
    /**
     * common
     * tools
     */
    // 初始化页面
    initPage() {
      // console.log("初始化界面")

      // 获取默认业务数据
      this.getDefaultData()
    },
    // 子组件事件
    // 点击区域
    clickArea(val) {
      // console.log(val)
      console.log(this.currentAddress)

      let tipNum = val
      let bunkList = this.$store.getters.currentBunkList

      let bunkInfo = {}
      bunkList.forEach(item=> {
        if(val === item.bunkNo) {
          bunkInfo = item
        }
      })

      // 点击刷新vuex数据
      this.$set(this.$store.getters.tipInfo, 'currentBunkInfo', bunkInfo)  // 使用set方法添加属性，否则视图不刷新
      this.$set(this.$store.getters.tipInfo.currentBunkInfo, 'currentAddress', this.currentAddress)  // 使用set方法添加属性，否则视图不刷新
      // console.log("123", this.$store.getters.tipInfo.currentBunkInfo)

      // 异步渲染弹窗数据
      this.asyncMethod(()=> {
        // vuex刷新完之后，子组件数据可能未渲染，需要重新渲染
        this.$refs.areaDetailRef.resetData()
      })

      this.areaDetailTitle = `${tipNum} 商铺详情`

      // 无数据支撑
      // 空铺不显示
      // if(bunkInfo.bunkemptyshopcolour !== '-1') {
        this.areaDetailVisible = true
      // }
    },
    // 异步方法
    asyncMethod(next) {
      let timer = setTimeout(()=> {
        next()

        clearTimeout(timer)
      }, 0)
    },

    // 弹窗图表初始化
    resetAreaChartData2() {
      // 执行dialog子组件方法，需要异步
      let timer = setTimeout(()=> {
        // 初始化图表
        this.$refs.areaDetailRef.resetChart()

        clearTimeout(timer)
      }, 0)
    },
    checkDp(e) {
      let { nodeName, textContent } = e.target

      let dpName = ''

      if(nodeName === 'SPAN' || nodeName === 'LI') {
        switch(nodeName) {
          case 'SPAN':
            dpName = textContent
            break;
          case 'LI':
            dpName = textContent.split(' ')[0]
        }
        // console.log(dpName)

        this.clickArea(dpName)
      }
    },
    // 服务区匹配
    replaceServer(str) {
      let serverName = ""
      const replaceStr = reg=> {
        if(reg.test(str)) {
          this.positionType = reg.toString().replace(/\//g,'')
          serverName = str.replace(reg, '')
        }
      }

      let reg1 = /服务区/
      let reg2 = /停车区/

      replaceStr(reg1)
      replaceStr(reg2)

      return serverName
    },


    /**
     * api tools
     */
    // 根据服务区编号查询铺位列表
    getBunkList(params1, params2) {
      return new Promise((resolve, reject)=> {
        getBunkDataByCode(params1, params2).then(res=> {
          resolve(res.rows)
        }).catch(err=> {
          reject(err)
        })
      })
    },

    /**
     * 表单控件数据绑定
     */
    // 地址选择下拉框
    async addressHandleChange(val) {
      console.log("index 选区触发 服务区id", val)

      this.addressStr = val

      this.provinceCode = val[0]

      // 异步方法
      this.asyncMethod(()=> {
        // 执行子组件方法获取接口数据
        this.$refs.cascaderRef.getRegionsByCode(val[0]).then(regionsList=> {
          console.log("服务区接口数据页面渲染", regionsList)
          this.currentServerList = regionsList

          regionsList.forEach(async item=> {
            if(item.id.toString() === val[1]) {
              console.log("当前服务区数据", item)

              this.currentServiceAreaId = item.serviceAreaId

              this.linkArr = [val[0], this.currentServiceAreaId]
              console.log('linkArr', this.linkArr)

              // 根据服务区编号查询铺位列表
              this.bunkList = await this.getBunkList(item.serviceAreaId, item.geographicalDivision)
              console.log("铺位列表", this.bunkList)

              // 将当前店铺列表存入vuex
              this.$store.dispatch("getCurrentBunkList", this.bunkList)  // 赋值到vuex
              // console.log("店铺列表", this.$store.getters.currentBunkList)

              // 渲染数据需要使用服务区id查询接口
              getServerByCode(item.serviceAreaId).then(res=> {
                // console.log(res)
                let { data } = res

                if(data) {
                  this.regionsData = data  // 赋值全局区域数据
                  // console.log(this.regionsData)
                  this.regionsData.dpzs = this.bunkList.length
                  // this.regionsData.totalBunkArea = parseFloat(this.regionsData.totalBunkArea).toFixed(1)

                  // 获取到数据后渲染图表
                  this.setCharts(this.regionsData)
                }
              })

              this.$store.dispatch("getTipInfo", item)  // 赋值到vuex
              // console.log(this.$store.getters.tipInfo)  // 取值

              // 显示方向
              this.areaSwitch = item.geographicalDivision
              // console.log(this.areaSwitch)

              // 匹配地区
              this.currentAddress = this.replaceServer(item.serviceAreaName)

              // 执行子组件方法
              if(this.$refs.serviceMainRef) {
                this.$refs.serviceMainRef.resetAreaSwitch(this.areaSwitch)
              }

              this.serviceMainFlag = true
            }
          })
        })
      })
    },
    setAddressStr(addressIds) {
      if(!addressIds) {
        // 获取默认数据
        getDefaultCode().then(res=> {
          this.cascaderFlag = true

          let { regionCode, id } = res.data
          this.addressStr = [regionCode, id.toString()]
          console.log("addressIds", this.addressStr)

          this.addressHandleChange(this.addressStr)
        }).catch({})
      } else {
        this.cascaderFlag = true
        // console.log("addressIds", addressIds)
        this.addressStr = addressIds

        this.addressHandleChange(addressIds)
      }
    },
    // 切换地区
    async setAreaSwitch(val) {
      this.currentServerList.forEach(item=> {
        // 服务区名称匹配，并且方向匹配
        // console.log(this.replaceServer(item.serviceAreaName), this.currentAddress)
        // console.log(item.geographicalDivision, val)
        if(this.replaceServer(item.serviceAreaName) === this.currentAddress && item.geographicalDivision === val) {
          this.addressStr = [this.provinceCode, item.id.toString()]
          console.log(this.addressStr)

          // 需要执行子组件方法 - 否则子组件不做触发
          this.$refs.cascaderRef.addressHandleChange(this.addressStr)
        }
      })

      // 传值给浮窗
      let tipContent = this.$store.getters.tipInfo
      this.$set(tipContent, 'geographicalDivision', val)
    },

    /**
     * 业务
     */
    // 渲染图表
    setCharts(val){
      console.log("渲染图表-服务区接口数据", val)

      // 执行dialog子组件方法，需要异步
      let timer = setTimeout(()=> {
        let { serviceAreaFormatList } = val
        console.log(serviceAreaFormatList)

        this.areaChartData1.pieFieldData = []
        let arr = []
        this.maintotalAmount = 0

        serviceAreaFormatList.forEach(item=> {
          // this.areaChartData1.pieFieldData.push({ value: item.contractCnt, name: item.businessType })
          arr.push({ value: item.totalAmount, name: item.businessType, num: parseInt(item.ratio) })
          this.maintotalAmount += item.totalAmount
        })
        console.log("000", arr)

        // arr = []

        if(arr.length === 0) {
          this.showChart = false
          return
        } else {
          this.showChart = true
        }

        this.ysAllNum = arr.length
        this.areaChartData1.pieFieldData = arr

        let num = arr.length <= 5 ? arr.length : 5
        console.log(num)

        arr = arr.slice(0,num)
        console.log(arr)

        // 初始化图表
        this.$refs.areaChart1Ref.resetChart()

        clearTimeout(timer)
      }, 0)
    },
    // 执行默认数据
    getDefaultData() {
      if(!this.$route.query.addressIds) {
        this.setAddressStr()
      } else {
        this.addressStr = JSON.parse(this.$route.query.addressIds)
        // this.addressStr = ['03', '10005930']

        this.setAddressStr(this.addressStr)
      }
    },
  },

  created() {
    this.initPage()  // 初始化页面
  },
}
</script>

<style lang="scss" scoped>
@import "./scss/common.scss";

.service_area_wrapper {
  overflow: auto;

  .service_area_cont {
    // min-width: 1882px;
    min-height: 795px;
    overflow: auto;

    .select_wrap {
      height: 40px;
      overflow: hidden;

      .el-cascader {
        width: 228px;
      }
    }

    .servarea_wrap {
      display: flex;
      min-height: 300px;

      // 左
      .servarea_pic {
        width: 1125px;
        margin-right: 15px;
      }

      // 右
      .servarea_info {
        // width: 39%;
        flex: 1;

        .info_tip_box {
          height: 156px;

          .inipbx_left {
            width: 23.8%;
            height: 100%;
            overflow: hidden;

            dl {
              dt, dd {
                width: 100%;
                height: calc(156px / 2);
              }

              dt {
                position: relative;
                background-image: linear-gradient(#1DA7FF, #A7DCFF);
                overflow: hidden;

                ul {
                  position: absolute;
                  width: 85%;
                  top: 52%;
                  left: 62%;
                  transform: translate(-50%, -50%);

                  li {
                    display: inline-block;

                    &:first-child {
                      width: 65px;
                      height: 65px;
                      overflow: hidden;

                      img {
                        width: 100%;
                        height: 100%;
                      }
                    }

                    &:last-child {
                      position: relative;
                      top: -22px;
                      width: 37px;
                      font-size: 14px;
                      color: #ffffff;
                    }
                  }
                }
              }

              dd {
                width: 100%;
                height: 100%;
                line-height: calc(156px / 2);
                text-align: center;
                font-size: 36px;
                font-weight: bold;
                color: #000;
              }
            }
          }

          .inipbx_right {
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
            width: 76%;
            height: 100%;

            .inpbr_list {
              width: 48.6%;
              height: 75px;
              overflow: hidden;

              dl {
                display: flex;
                width: 100%;
                height: 100%;
                cursor: pointer;

                dt {
                  flex: 0.38;

                  img {
                    position: relative;
                    width: 75px;
                    top: 55%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                  }

                  &.mpift_color1 {
                    background-image: linear-gradient(#1890ff, #bbdeff);
                  }
                  &.mpift_color2 {
                    background-image: linear-gradient(#14CD71, #9DEBD8);
                  }
                  &.mpift_color3 {
                    background-image: linear-gradient(#FFA91A, #FFE0A2);
                  }
                  &.mpift_color4 {
                    background-image: linear-gradient(#FF4A5C, #FF9BA4);
                  }
                }

                dd {
                  flex: 0.72;
                  width: 100%;
                  height: 100%;
                  margin-left: 5px;

                  ul {
                    margin-top: 15px;

                    li {
                      margin-bottom: 8px;
                      font-size: 14px;
                      height: 22px;

                      b {
                        font-size: 22px;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        // 中
        .info_txt_box {
          height: 225px;

          .main_cont {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .ifotxt_itme {
              width: 49%;
              min-height: 58.6px;
              box-shadow: 1px 3px 5px -2px #c5c5c5;
              border-radius: 5px;

              ul {
                display: flex;
                width: 100%;
                height: 100%;

                li {
                  height: 100%;

                  &, span {
                    font-size: 14px;
                    color: #292929;
                  }

                  &:first-child {
                    flex: 0.7;
                    padding-right: 10px;
                    background: #F3F3F3;

                    span {
                      position: relative;
                      display: block;
                      width: 80%;
                      margin: 23px 0 0 40px;

                      &::before {
                        content: "";
                        position: absolute;
                        top: 46%;
                        left: -18px;
                        width: 7px;
                        height: 7px;
                        border-radius: 3.5px;
                        background: $mainBtnColor;
                        transform: translateY(-50%);
                      }
                    }
                  }

                  &:last-child {
                    flex: 0.3;
                    background: #F9F9F9;
                    font-size: 15px;
                    padding-left: 8px;
                    // line-height: 58.6px;

                    span {
                      display: block;
                      margin-top: 22px;

                      &.demonstration_font_color {
                        margin-top: 25px;
                      }
                    }
                  }

                  &.two_row {
                    // color: #f00;

                    span {
                      margin: 17px 0 0 40px;
                    }
                  }
                }
              }
            }
          }
        }

        // 图表
        .info_chart_box {
          position: relative;
          height: 324px;

          span, b, dt, dd {
            color: #292929;
            font-size: 13px;
          }

          span {
            position: absolute;
            top: 13%;
            left: 38.5%;

            b {
              font-weight: initial;
              margin-left: 6px;
            }
          }

          dl {
            position: absolute;
            text-align: center;
            top: 49%;
            // left: 16.1%;
            left: 13.4%;
            width: 105px;

            dt {
              // font-size: 13px;
            }
            dd {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}

.chart_title {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 11;

  li {
    display: inline-block;
    font-size: 13px;

    &:not(:last-child) {
      margin-right: 118px;
    }
  }
}
.echTitle{
  font-size: 21px;
  // font-weight: 900;
  padding: 10px 15px;
  .font_19{
    font-size: 19px;
  }
}
</style>
