<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/utils/mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    chartFontColor: {
      type: String,
      default: '#000'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    },
    txtFontSize: {
      type: Number,
      default: 15
    },
    dataInfoLabel: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      chart: null,
      barWidth: 16,
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
      // console.log(this.dataInfoLabel)
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    // 初始化图表
    resetChart() {
      // console.log("初始化图表", this.chart)
      // 图表不存在跳出
      if (!this.chart) {
        return
      }

      // 销毁图表
      this.chart.dispose()
      this.chart = null

      // 重新启动图表
      this.initChart()
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    // 显示loading
    showLoading() {
      this.chart.showLoading({
        text: 'loading',
        color: '#c23531',
        textColor: '#000',
        maskColor: 'rgba(255, 255, 255, 0.2)',
        zlevel: 0,
      });
    },
    // 隐藏loading
    hideLoading() {
      this.chart.hideLoading()
    },
    setOptions({ fieldData, y1Data, y2Data, y3Data, y1Name, y2Name, y3Name, dataZoom1, dataZoom2 } = {}) {
      this.chart.setOption(
        // option-start
        {
          tooltip: {},
          title: {
            text: this.dataInfoLabel,
            top: 15,
            textStyle: {
              color: '#000',
              fontSize: 18,
              fontWeight: '400',
            }
          },
          legend: {
            itemGap: 50,
            top: "10%"
          },
          grid: {
            left: '1.8%',
            right: '3%',
            bottom: '1%',
            height: '78%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              axisTick: { show: false },
              data: fieldData,
              axisLabel :{
                interval:0, // 横轴信息全部显示
                // rotate:45
                }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: y1Name,
              type: 'bar',
              barGap: 0,
              barWidth: this.barWidth,
              emphasis: {
                focus: 'series'
              },
              itemStyle: {
                    color: '#0090FF'
                  },
              data: y1Data
            },
            {
              name: y2Name,
              type: 'bar',
              barWidth: this.barWidth,
              itemStyle: {
                    color: '#00CE86'
                  },
              emphasis: {
                focus: 'series'
              },
              data: y2Data
            },
            {
              name: y3Name,
              type: 'bar',
              barWidth: this.barWidth,
              itemStyle: {
                    color: '#FF6F00'
                  },
              emphasis: {
                focus: 'series'
              },
              data: y3Data
            },
          ],
          dataZoom: dataZoom1,dataZoom2
        }
        // option-end
      )
    }
  }
}
</script>
