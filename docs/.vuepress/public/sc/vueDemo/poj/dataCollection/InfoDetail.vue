<template>
  <el-tabs v-model="tabValue">
    <el-tab-pane label="数据分析" name="数据分析">
      <div id="chartContent" class="chart_cont">
        <data-collect-chart ref="chartRef" :dataInfoLabel="dataInfoLabel" :chart-data="dataCollectChartData" />
      </div>
    </el-tab-pane>
    <el-tab-pane label="数据列表" name="数据列表">
      <table-detile ref="tableRef" @handleQuery="handleQuery" :total="total" :queryParams="queryParams" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import * as dcApi from '@/api/dataCollect'

import DataCollectChart from './DataCollectChart'
import TableDetile from './TableDetile'

export default {
  data () {
    return {
      tabValue: "数据分析",
      dataCollectChartData: {},
      collectTabelData: [],
      total: null,  // 分页参数，总数

      // 查询参数 - 默认数据，以参数的形式传递给子组件
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        type: '0'
      },
    }
  },

  components: {
    DataCollectChart,
    TableDetile
  },

  props: {
    dataInfoLabel: {
      type: String,
      default: ''
    }
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

    /**
     * 接口
     */
    // 获取图表数据
    getChartData(api) {
      this.$refs.chartRef.showLoading()
      return new Promise((resolve, reject)=> {
        api().then(res=> {
          this.$refs.chartRef.hideLoading()
          resolve(res.data)
        }).catch(err=> {
          reject(err)
        })
      })
    },

    // 获取表格数据
    getTableList(api, params) {
      return new Promise((resolve, reject)=> {
        api(params).then(res=> {
          this.total = res.total  // 分页参数

          resolve(res.rows)
        }).catch(err=> {
          reject(err)
        })
      })
    },

    /**
     * 业务
     */
    // 处理数据
    async resolveItemData(chartApi, tableApi, id, params, isOnlyTable) {
      // console.log(tableApi)
      // if(!id) { id = tableApi }

      if(!isOnlyTable) {
        let chartData = await this.getChartData(chartApi)
        this.setChart(chartData, id)
      }

      // tableApi不存在或者为数字跳出
      // if(!tableApi || !isNaN(parseInt(tableApi))) { return }

      let tabelData = await this.getTableList(tableApi, params)
      this.setTabel(tabelData, id)
    },

    // 父组件执行事件,传值id,调接口,主入口方法
    setDetail(dataInfoId, isOnlyTable) {
      console.log("数据id和字段：", dataInfoId, this.dataInfoLabel)

      if(!isOnlyTable) {
        this.tabValue = "数据分析"
      }

      // 初始化
      this.dataCollectChartData = {
        fieldData: [],
        y1Data: [],
        y2Data: [],
        y3Data: [],
        y1Name: '',
        y2Name: '',
        y3Name: '',
      }

      switch(dataInfoId) {
        case '1':
          this.resolveItemData(dcApi.getRevenue1, dcApi.getDataList1, dataInfoId, this.queryParams, isOnlyTable)
          break;
        case '2':
          this.resolveItemData(dcApi.getRevenue2, dcApi.getDataList2, dataInfoId, this.queryParams, isOnlyTable)
          break;
        case '3':
          this.resolveItemData(dcApi.getRevenue3, dcApi.getDataList3, dataInfoId, this.queryParams, isOnlyTable)
          break;
        case '4':
          this.resolveItemData(dcApi.getRevenue4, dcApi.getDataList4, dataInfoId, this.queryParams, isOnlyTable)
          break;
        case '5':
          this.resolveItemData(dcApi.getRevenue5, dcApi.getDataList5, dataInfoId, this.queryParams, isOnlyTable)
          break;
        case '6':
          this.resolveItemData(dcApi.getRevenue6, dcApi.getDataList6, dataInfoId, this.queryParams, isOnlyTable)
          break;
        case '7':
          this.resolveItemData(dcApi.getRevenue7, dcApi.getDataList7, dataInfoId, this.queryParams, isOnlyTable)
          break;
        case '8':
          this.resolveItemData(dcApi.getRevenue8, dcApi.getDataList8, dataInfoId, this.queryParams, isOnlyTable)
          break;
        case '9':
          this.resolveItemData(dcApi.getRevenue9, dcApi.getDataList9, dataInfoId, this.queryParams, isOnlyTable)
          break;
        case '10':
          this.resolveItemData(dcApi.getRevenue10, dcApi.getDataList10, dataInfoId, this.queryParams, isOnlyTable)
          break;
        case '11':
          this.resolveItemData(dcApi.getRevenue11, dcApi.getDataList11, dataInfoId, this.queryParams, isOnlyTable)
          break;
        case '12':
          this.resolveItemData(dcApi.getRevenue12, dcApi.getDataList12, dataInfoId, this.queryParams, isOnlyTable)
          break;
      }
    },

    // 设置图表数据
    setChart(chartData, id) {
      // console.log(this.dataInfoLabel, id)
      console.log("设置图表数据", chartData)

      this.asyncTools(()=> {
        chartData.forEach(item=> {
          switch(id) {
            case '1':
              this.dataCollectChartData.fieldData.push(item.day)
              this.dataCollectChartData.y1Data.push(item.bunkNum)
              this.dataCollectChartData.y2Data.push(item.num)
              this.dataCollectChartData.y3Data.push(item.validNum)
              this.dataCollectChartData.y1Name='门店铺位总数'
              this.dataCollectChartData.y2Name='获得数'
              this.dataCollectChartData.y3Name='匹配有效记录数'
              break;
            case '2':
              this.dataCollectChartData.fieldData.push(item.serviceAreaName1)
              this.dataCollectChartData.y1Data.push(item.bunkNum)
              this.dataCollectChartData.y2Data.push(item.validNum)
              this.dataCollectChartData.y1Name='门店铺位总数'
              this.dataCollectChartData.y2Name='匹配有效记录数'
              this.dataCollectChartData.dataZoom1 = {
                show: true, // 为true 滚动条出现
                realtime: true,
                type:'slider',
                height: 20, // 表示滚动条的高度，也就是粗细
                start: 1, // 表示默认展示20%～80%这一段。
                end: 15
              }
              this.dataCollectChartData.dataZoom2 = {
                type: 'inside',

              }
              break;
            case '3':
              this.dataCollectChartData.fieldData.push(item.day)
              this.dataCollectChartData.y1Data.push(item.serviceAreaNum)
              this.dataCollectChartData.y2Data.push(item.num)
              this.dataCollectChartData.y3Data.push(item.validNum)
              this.dataCollectChartData.y1Name='有数据服务区对数'
              this.dataCollectChartData.y2Name='总记录数'
              this.dataCollectChartData.y3Name='匹配有效记录数'
              break;
            case '4':
              this.dataCollectChartData.fieldData.push(item.day)
              this.dataCollectChartData.y1Data.push(item.serviceAreaNum)
              this.dataCollectChartData.y2Data.push(item.num)
              this.dataCollectChartData.y3Data.push(item.validNum)
              this.dataCollectChartData.y1Name='有数据服务区对数'
              this.dataCollectChartData.y2Name='总记录数'
              this.dataCollectChartData.y3Name='匹配有效记录数'
              break;
            case '5':
              this.dataCollectChartData.fieldData.push(item.day)
              this.dataCollectChartData.y1Data.push(item.serviceAreaNum)
              this.dataCollectChartData.y2Data.push(item.num)
              this.dataCollectChartData.y3Data.push(item.validNum)
              this.dataCollectChartData.y1Name='有数据服务区对数'
              this.dataCollectChartData.y2Name='总记录数'
              this.dataCollectChartData.y3Name='匹配有效记录数'
              break;
            case '6':
              this.dataCollectChartData.fieldData.push(item.day)
              this.dataCollectChartData.y1Data.push(item.num)
              this.dataCollectChartData.y2Data.push(item.validNum)
              this.dataCollectChartData.y1Name='总记录数'
              this.dataCollectChartData.y2Name='匹配有效记录数'
              break;
            case '7':
              this.dataCollectChartData.fieldData.push(item.day)
              this.dataCollectChartData.y1Data.push(item.serviceAreaNum)
              this.dataCollectChartData.y2Data.push(item.num)
              this.dataCollectChartData.y3Data.push(item.validNum)
              this.dataCollectChartData.y1Name='有数据服务区对数'
              this.dataCollectChartData.y2Name='总记录数'
              this.dataCollectChartData.y3Name='匹配有效记录数'
              break;
            case '8':
              this.dataCollectChartData.fieldData.push(item.day)
              this.dataCollectChartData.y1Data.push(item.serviceAreaNum)
              this.dataCollectChartData.y2Data.push(item.num)
              this.dataCollectChartData.y3Data.push(item.validNum)
              this.dataCollectChartData.y1Name='有数据服务区对数'
              this.dataCollectChartData.y2Name='总记录数'
              this.dataCollectChartData.y3Name='匹配有效记录数'
              break;
            case '9':
              this.dataCollectChartData.fieldData.push(item.day)
              this.dataCollectChartData.y1Data.push(item.serviceAreaNum)
              this.dataCollectChartData.y2Data.push(item.num)
              this.dataCollectChartData.y3Data.push(item.validNum)
              this.dataCollectChartData.y1Name='有数据服务区对数'
              this.dataCollectChartData.y2Name='总记录数'
              this.dataCollectChartData.y3Name='匹配有效记录数'
              break;
            case '10':
              this.dataCollectChartData.fieldData.push(item.day)
              this.dataCollectChartData.y1Data.push(item.num)
              this.dataCollectChartData.y2Data.push(item.validNum)
              this.dataCollectChartData.y1Name='总记录数'
              this.dataCollectChartData.y2Name='匹配有效记录数'
              break;
            case '11':
              this.dataCollectChartData.fieldData.push(item.day)
              this.dataCollectChartData.y1Data.push(item.num)
              this.dataCollectChartData.y2Data.push(item.validNum)
              this.dataCollectChartData.y1Name='总记录数'
              this.dataCollectChartData.y2Name='匹配有效记录数'
              break;
            case '12':
              this.dataCollectChartData.fieldData.push(item.day)
              this.dataCollectChartData.y1Data.push(item.businessTypeNum)
              this.dataCollectChartData.y2Data.push(item.num)
              this.dataCollectChartData.y3Data.push(item.validNum)
              this.dataCollectChartData.y1Name='三级业态总数'
              this.dataCollectChartData.y2Name='总记录数'
              this.dataCollectChartData.y3Name='匹配有效记录数'
              break;
          }
        })

        this.$refs.chartRef.resetChart()
      })
    },

    // 设置表格数据
    setTabel(tabelData, id) {
      // console.log(this.dataInfoLabel, id)
      console.log("设置表格数据", tabelData)

      this.asyncTools(()=> {
        this.$refs.tableRef.resetTable(tabelData, id)
      })
    },

    // 来自子组件的查询
    handleQuery(obj) {
      console.log("来自子组件的查询", obj)
      let { dataInfoId, queryParams } = obj

      this.queryParams = queryParams

      this.setDetail(dataInfoId, true)
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
