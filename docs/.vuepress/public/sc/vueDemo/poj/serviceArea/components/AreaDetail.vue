<template>
  <section class="area_detail">
    <!-- 头 -->
    <div class="ardl_top_wrap shad_radiu_box mb13">
      <div class="ardl_top_cont">
        <div class="adltop_tip">
          <dl>
            <!-- <dt class="mr20">{{ bunkDetail.bunkName }}</dt>
            <dd class="mr10">{{ bunkDetail.bunktype }}</dd>
            <dd>{{ currentBunkInfo.currentAddress }}及周边招商</dd> -->
            <dt class="mr20">{{ bunkDetail.companyName }} <span class="msg_cont"> {{ bunkDetail.id == null ? warningMsg : '' }} </span></dt>
            <!-- <dd class="mr10">浙江老字号</dd> -->
            <!-- <dd>{{ currentBunkInfo.currentAddress }}及周边招商</dd> -->
          </dl>
        </div>
        <span class="adltop_link" @click="linktoBrand" v-show="false">品牌详情</span>
      </div>
    </div>

    <!-- 数据 -->
    <div class="ardl_data_wrap shad_radiu_box mb13">
      <div class="ardl_data_row">
        <ul>
          <li>门店业态</li>
          <li>{{ bunkDetail.businessType }}</li>
        </ul>
        <ul>
          <li>盈亏状况(万元)</li>
          <li>{{ parseInt(bunkDetail.profitAmount) === 0 ? "" : bunkDetail.profitAmount }}</li>
        </ul>
      </div>
      <div class="ardl_data_row">
        <ul>
          <li>经营模式</li>
          <li>{{ bunkDetail.accountingType }}</li>
        </ul>
        <ul>
          <li>经营面积（平方米）</li>
          <!-- <li>{{ bunkDetail.bunkArea }}</li> -->
          <li>{{ parseInt(bunkDetail.bunkArea) === 0 ? "" : bunkDetail.bunkArea }}</li>
        </ul>
      </div>
      <div class="ardl_data_row">
        <ul>
          <li>经营单位</li>
          <li>{{ bunkDetail.companyName }}</li>
        </ul>
        <ul>
          <li>累计对客营收（万元）</li>
          <li>{{ parseInt(bunkDetail.totalRevenueAmount) === 0 ? "" : bunkDetail.totalRevenueAmount }}</li>
        </ul>
      </div>
      <div class="ardl_data_row">
        <ul>
          <li>当前分区营收（万元）</li>
          <!-- <li>{{ bunkDetail.thisPartTotalAmount }}</li> -->
          <li>{{ parseInt(bunkDetail.thisPartTotalAmount) === 0 ? "" : bunkDetail.thisPartTotalAmount }}</li>
        </ul>
        <ul>
          <li>保底对客营收/租金（万元）</li>
          <!-- <li>{{ bunkDetail.guaranteedRevenueOrRent }}</li> -->
          <li>{{ parseInt(bunkDetail.guaranteedRevenueOrRent) === 0 ? "" : bunkDetail.guaranteedRevenueOrRent }}</li>
        </ul>
      </div>
      <div class="ardl_data_row">
        <ul>
          <li>提成比例(%)</li>
          <!-- <li>{{ bunkDetail.guaranteedRatio }}</li> -->
          <li>{{ parseInt(bunkDetail.guaranteedRatio) === 0 ? "" : bunkDetail.guaranteedRatio }}</li>
        </ul>
        <ul>
          <li>完成保底比例(%)</li>
          <!-- <li>{{ bunkDetail.completeGuaranteedProportion }}</li> -->
          <li>{{ parseInt(bunkDetail.completeGuaranteedProportion) === 0 ? "" : bunkDetail.completeGuaranteedProportion }}</li>
        </ul>
      </div>
      <div class="ardl_data_row">
        <ul>
          <li>合同开始时间</li>
          <li>{{ bunkDetail.startTime }}</li>
        </ul>
        <ul>
          <li>合同结束时间</li>
          <li>{{ bunkDetail.endTime }}</li>
        </ul>
      </div>
      <div class="ardl_data_row">
        <ul>
          <li>经营周期</li>
          <li>{{ bunkDetail.periodYear }}</li>
        </ul>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>

    <!-- 图表 -->
    <div class="ardl_chart_wrap shad_radiu_box mb13">
      <area-chart-2 ref="areaChart2Ref" :chart-data="areaChartData2" :height="'307px'" />
    </div>

    <!-- 按钮 -->
    <div class="ardl_btn_wrap">
      <ul>
        <li class="mr42">
          <el-button plain @click="linktoContract">查看合同</el-button>
        </li>
        <!-- 临期 -->
        <li v-if="currentBunkInfo.bunkemptyshopcolour === '1'">
          <el-button type="primary" @click="linktoAttract">智能招商</el-button>
          <!-- <el-button type="primary" @click="globalInfo.linkToRes('htcx')">智能招商</el-button> -->
        </li>
        <!-- 空余 -->
        <li v-if="currentBunkInfo.bunkemptyshopcolour === '-1'">
          <el-button type="primary" @click="kylinktoAttract">智能招商</el-button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
// charts
import AreaChart2 from '../charts/AreaChart2'

const areaChartData = {
  fieldData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  yData1: [120, 132, 101, 134, 90, 400, 100, 333, 145, 324, 123, 10],
  yData2: [220, 182, 55, 100, 290, 10, 310, 500, 140, 210, 110, 600],
  yData3: [111, 182, 510, 100, 290, 442, 310, 133, 88, 210, 110, 63]
}

import { getBunkDetailByCode } from '@/api/manager/merchant/serviceArea'

export default {
  name: "AreaDetail",

  components: {
    AreaChart2,
  },

  data() {
    return {
      currentBunkInfo: {},
      bunkDetail: {},
      // areaChartData2: areaChartData,
      areaChartData2: {
        fieldData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      },
      warningMsg: "当前铺位未录入合同信息，请前往数字商业平台进行录入"
    }
  },

  props: {
    // id
    addressStr: {
      type: Array,
      default: ()=> []
    }
  },

  methods: {
    /**
     * common
     * tools
     */
    // 跳转到品牌库
    linktoBrand() {
      // this.$router.push('/attract/brandLibrary')

      window.open(this.globalInfo.zhaoshanglink, '_self')
    },
    // 跳转到合同
    linktoContract() {
      console.log(this.addressStr)
      // sessionStorage.setItem('tab', 'first')
      // this.bunkDetail
      if(!this.bunkDetail.id) {
        this.$message.warning(this.warningMsg)
        return
      }
      let obj = {
        addressStr: this.addressStr,
        id: this.bunkDetail.id
      }
      // console.log(JSON.stringify(obj))

      this.$router.push({
        path: '/merchant/contract/viewContract',
        query: {
          // id: this.bunkDetail.id
          obj: JSON.stringify(obj)
        }
      })

      // this.$router.push('/merchant/contract/viewContract?status=0&id=17039')
    },
    // 跳转到招商
    linktoAttract() {
      // console.log(this.bunkDetail.id)
      if(!this.bunkDetail.id) {
        this.$message.warning(this.warningMsg)
        return
      }

      let obj = {
        addressStr: this.addressStr,
        id: this.bunkDetail.id
      }
      // console.log(JSON.stringify(obj))

      this.$router.push({
        path: '/attract/pojwarning/components/attractInvestment/attractInvestment',
        query: {
          // id: this.bunkDetail.id
          obj: JSON.stringify(obj)
        }
      })
    },

    kylinktoAttract () {
      console.log("ky")
      // console.log(this.bunkDetail.id)
      if(!this.bunkDetail.id) {
        this.$message.warning(this.warningMsg)
        return
      }

      let obj = {
        addressStr: this.addressStr,
        id: this.bunkDetail.id
      }
      // console.log(JSON.stringify(obj))

      this.$router.push({
        path: '/attract/pojwarning/components/attractInvestment/shopAttractInvestment',
        query: {
          // id: this.bunkDetail.id
          obj: JSON.stringify(obj)
        }
      })
    },

    /**
     * api tools
     */
    // 根据code查店铺详情
    getBunkDetail(berthId, serviceAreaId) {
      return new Promise((resolve, reject)=> {
        getBunkDetailByCode(berthId, serviceAreaId).then(res=> {
          resolve(res.data)
        }).catch(err=> {
          reject(err)
        })
      })
    },

    /**
     * 业务
     */
    // 初始化图表
    resetChart() {
      // console.log("初始化图表", this.$refs.areaChart2Ref)

      // 初始化图表
      this.$refs.areaChart2Ref.resetChart()
    },
    // 渲染弹窗数据
    async resetData() {
      console.log("渲染弹窗数据", this.$store.getters.tipInfo.currentBunkInfo)

      // 每次弹窗需要执行一次方法，否则数据可能不渲染
      this.currentBunkInfo = this.$store.getters.tipInfo.currentBunkInfo
      let { berthId, serviceAreaId } = this.currentBunkInfo
      this.bunkDetail = await this.getBunkDetail(berthId, serviceAreaId)
      console.log("店铺详情", this.bunkDetail)

      // 图表
      /* if(this.currentBunkInfo.bunkNo === "E-09") {
        this.areaChartData2.yData1 = [120, 132, 101, 134, 90, 400, 100, 333, 145, 324, 123, 10]
        this.areaChartData2.yData2 = [220, 182, 55, 100, 290, 10, 310, 500, 140, 210, 110, 600]
        this.areaChartData2.yData3 = [111, 182, 510, 100, 290, 442, 310, 133, 88, 210, 110, 666]
      } else {
        this.areaChartData2.yData1 = [120, 132, 333, 134, 90, 400, 100, 333, 145, 324, 123, 10]
        this.areaChartData2.yData2 = [220, 182, 55, 100, 666, 10, 555, 500, 777, 210, 110, 333]
        this.areaChartData2.yData3 = [111, 182, 510, 100, 290, 442, 310, 133, 88, 210, 110, 444]
      }  */
      let { selectBunkThisYearRevenueList, selectBunkLastYearRevenueList, selectBunkBeforeLastYearRevenueList } = this.bunkDetail
      console.log(selectBunkThisYearRevenueList, selectBunkLastYearRevenueList, selectBunkBeforeLastYearRevenueList)
      this.areaChartData2.yData1 = []
      this.areaChartData2.yData2 = []
      this.areaChartData2.yData3 = []

      selectBunkBeforeLastYearRevenueList.forEach(item=> {
        item.lastYearTotalRevenue === 0 ? item.lastYearTotalRevenue = null : item.lastYearTotalRevenue = item.lastYearTotalRevenue

        // 前年
        this.areaChartData2.yData1.push(item.lastYearTotalRevenue)
      })
      selectBunkLastYearRevenueList.forEach(item=> {
        item.lastYearTotalRevenue === 0 ? item.lastYearTotalRevenue = null : item.lastYearTotalRevenue = item.lastYearTotalRevenue

        // 去年
        this.areaChartData2.yData2.push(item.lastYearTotalRevenue)
      })
      selectBunkThisYearRevenueList.forEach(item=> {
        item.lastYearTotalRevenue === 0 ? item.lastYearTotalRevenue = null : item.lastYearTotalRevenue = item.lastYearTotalRevenue

        // 今年
        this.areaChartData2.yData3.push(item.lastYearTotalRevenue)
      })

      // 弹窗图表初始化
      this.$emit('resetAreaChartData2')
    },
  },

  mounted() {
  },

  created() {
  }
}
</script>

<style lang="scss" scoped>
$topHeight: 55px;
$dataRowHeight: 34px;

.msg_cont {
  position: absolute;
  top: -5px;
  left: 170px;
  color: #f00;
}

.area_detail {
   width: 100%;

  .ardl_top_wrap {
    width: 100%;
    height: $topHeight;

    .ardl_top_cont {
      display: flex;
      justify-content: space-between;
      width: 96.8%;
      height: 100%;
      margin: 0 auto;

      .adltop_tip {
        dl {
          dt, dd {
            display: inline-block;
          }

          dt {
            line-height: $topHeight;
            font-size: 18px;
          }

          dd {
            padding: 3px 18px;
            color: #ffffff;
            background: #4595FF;
            border-radius: 10px;
          }
        }
      }
    }

    .adltop_link {
      position: relative;
      margin-right: 27px;
      line-height: $topHeight;
      font-size: 16px;
      cursor: pointer;

      &::after {
        content: ">>";
        position: absolute;
        right: -27px;
      }
    }
  }

  .ardl_data_wrap {
    width: 100%;
    min-height: calc(#{$dataRowHeight} * 3);
    border: solid 1px $borderColor;
    border-bottom: none;

    .ardl_data_row {
      display: flex;
      width: 100%;
      height: $dataRowHeight;
      overflow: hidden;

      ul {
        display: flex;
        flex: 1;
        border-bottom: solid 1px $borderColor;

        &:not(:last-child) {
          border-right: solid 1px $borderColor;
        }

        li {
          line-height: $dataRowHeight;
          padding: 0 0 0 18px;

          &:first-child {
            flex: 0.46;
            background: #F2F2F2;
            white-space: nowrap;
            text-overflow: ellipsis;
            word-break: break-all;
            overflow: hidden;
          }

          &:last-child {
            flex: 0.54;
          }
        }
      }
    }
  }

  .ardl_chart_wrap {
    width: 100%;
    min-height: 307px;
    overflow: hidden;
  }

  .ardl_btn_wrap {
    margin-top: 20px;

    ul {
      text-align: center;

      li {
        display: inline-block;
      }
    }
  }
}
</style>
