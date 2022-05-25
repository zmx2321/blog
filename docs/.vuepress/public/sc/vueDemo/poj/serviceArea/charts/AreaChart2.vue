<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from '@/utils/mixins/resize'

import variables from "@/assets/styles/variables.scss";

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
      default: '350px'
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
    }
  },
  data() {
    return {
      chart: null,
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
      // console.log( this.$store.getters.tipInfo.currentBunkInfo.bunkemptyshopcolour)
    },
    setOptions({ fieldData,  yData1, yData2, yData3 } = {}) {
      this.chart.setOption(
        // option-start
        {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            padding: [5, 10]
          },
          title: {
            // text: this.$store.getters.tipInfo.currentBunkInfo.bunkemptyshopcolour !== '-1' ? '门店营业期内营收趋势' : '上家门店营业期内营收趋势',
            text: '经营周期内门店营收趋势',
            // subtext: '暂无数据',
            subtextStyle: {
              color: process.env.VUE_APP_PROX_DEMONSTRATION === "true" ? variables.demonstrationColor : '#292929',
            },
            left: 10,
            top: 10,
            textStyle: {
              //文字颜色
              color: this.chartFontColor,
              //字体大小
              fontSize: 16
            }
          },
          grid: {
            left: '1.8%',
            right: '3%',
            bottom: 18,
            containLabel: true
          },
          legend: {
            // data: ['2018年', '2019年', '2020年'],
            top: 10,
            left: '26%',
            icon: 'rect'
          },
          xAxis: {
            type: 'category',
            data: fieldData,
            axisLine: {
              lineStyle: {
                color: this.chartFontColor,
                // color: process.env.VUE_APP_PROX_DEMONSTRATION === "true" ? variables.demonstrationColor : this.chartFontColor,
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: this.chartFontColor,
                // color: process.env.VUE_APP_PROX_DEMONSTRATION === "true" ? variables.demonstrationColor : this.chartFontColor,
              }
            }
          },
          series: [
          // {
          //   // name: '2018年',
          //   name: '前年',
          //   type: 'line',
          //   symbol: "none",
          //   itemStyle: {
          //     normal: {
          //       color: '#e7950a',
          //     },
          //   },
          //   /* areaStyle: {
          //     normal: {
          //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //         {
          //           offset: 0,
          //           color: '#e7950a',
          //         },
          //         {
          //           offset: 1,
          //           color: '#FFFFFF',
          //         },
          //       ], false),
          //     },
          //   }, */
          //   data: yData1,
          //   animationDuration: 2800,
          //   animationEasing: 'cubicInOut'
          // },
          {
            // name: '2019年',
            name: '去年',
            type: 'line',
            symbol: "none",
            itemStyle: {
              normal: {
                color: '#0080FF',
                // color: '#6A9955',
              },
            },
            /* areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#e7950a',
                  },
                  {
                    offset: 1,
                    color: '#FFFFFF',
                  },
                ], false),
              },
            }, */
            data: yData2,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          },
          {
            // name: '2020年',
            name: '今年',
            type: 'line',
            symbol: "none",
            itemStyle: {
              normal: {
                color: '#f00',
              },
            },
            /* areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#FF714C',
                  },
                  {
                    offset: 1,
                    color: '#FFFFFF',
                  },
                ], false),
              },
            }, */
            data: yData3,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          }]
        }
        // option-end
      )
    }
  }
}
</script>
