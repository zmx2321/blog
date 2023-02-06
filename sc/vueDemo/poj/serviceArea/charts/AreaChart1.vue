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
    },
    isDemonstration: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      chart: null,
      nowDate: ""
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
    let date = new Date();
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      if (parseInt(m) < 10) {
        m = '0' + m
      }
      // this.nowDate = y + '-' + m
      this.nowDate = y
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
    },
    setOptions({ pieFieldData } = {}) {
      this.chart.setOption(
        // option-start
        {
          tooltip: {
          trigger: 'item',
        },
          title: {
            // subtext: this.globalInfo.noDataInfo1,
            subtextStyle: {
              color: this.chartFontColor,
            },
            // text: `【${this.nowDate}】` + '今年业态数量及营收',
            text: `【${ this.$store.getters.betDate1 }】`+'业态数量及营收',
            textStyle: {
            //文字颜色
            color: this.chartFontColor,
            //字体大小
            fontSize: 20
            }
          },
          series: [{
            name: '今年业态数量及营收',
            type: 'pie',
            radius: ['50%', '65%'],
            center: ["20%", "60%"],
            itemStyle: {
              normal: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
                color: params=> {
                  let colorList = [
                    {
                      c1: '#2F69FF',
                      c2: '#7ECCFF'
                    },
                    {
                      c1: ' #16CD72',
                      c2: '#9BEAD7'
                    },
                    {
                      c1: ' #FFA91B',
                      c2: '#FFDE9F'
                    },
                    {
                      c1: ' #FF9BA4',
                      c2: '#FF4A5C'
                    },
                    {
                      c1: '#09DBD9',
                      c2: '#B5FFFE'
                    }
                  ]
                  return new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    offset: 0,
                    color: colorList[params.dataIndex].c1
                  }, {
                    offset: 1,
                    color: colorList[params.dataIndex].c1
                  }])
                }
              }
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: false,
                fontSize: '16',
                color: "#292929",
                fontWeight: 'bold',
                formatter: (value)=> {
                  return value.data.name + '\n\n' + value.data.value
                },
              }
            },
            labelLine: {
              show: false
            },
            color: ['#4C8DFF', '#2DD283', '#FFBD4D', '#47E8E6', '#FF717E'],
            data: pieFieldData
          }],
          legend: {
            top: '30%',
            right: '16%',
            height: '200%',
            orient: "vertical",
            icon: "circle",
            textStyle: {
              padding : [-5, 0, 7, 3],
              color: '#000' ,
              fontSize: 12
            },
            formatter: name=> {
              // 获取legend显示内容
              let data = pieFieldData
              let total = 0
              let tarValue = 0
              let value = 0
              for (let i = 0, l = data.length; i < l; i++) {
                total += Number(data[i].value)
                if (data[i].name === name) {
                  tarValue = Number(data[i].value)
                  value = data[i].value
                }
              }
              let p = (tarValue / total * 100).toFixed(2)

              p = parseInt(p) < 10 ? `  ${p}` : p

              if(isNaN(p)) {
                p = 0
              }

              switch(name.length) {
                case 2:
                  return '\n' + name + 'ㅤㅤㅤㅤㅤㅤ|ㅤㅤㅤ' + p + '%' + 'ㅤㅤㅤ|ㅤㅤㅤ' + value + '万元'
                case 3:
                  return '\n' + name + 'ㅤㅤㅤㅤㅤ|ㅤㅤㅤ' + p + '%' + 'ㅤㅤㅤ|ㅤㅤㅤ' + value + '万元'
                case 4:
                  return '\n' + name + 'ㅤㅤㅤㅤ|ㅤㅤㅤ' + p + '%' + 'ㅤㅤㅤ|ㅤㅤㅤ' + value + '万元'
                case 5:
                  return '\n' + name + 'ㅤㅤㅤ|ㅤㅤㅤ' + p + '%' + 'ㅤㅤㅤ|ㅤㅤㅤ' + value + '万元'
                case 6:
                  return '\n' + name + 'ㅤㅤ|ㅤㅤㅤ' + p + '%' + 'ㅤㅤㅤ|ㅤㅤㅤ' + value + '万元'
              }
            }
          },
        }
        // option-end
      )
    }
  }
}
</script>
