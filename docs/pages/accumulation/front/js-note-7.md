# echarts问题集锦
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. vue中echarts图表
- `yarn add echarts`
- main.js
```js
import echarts from 'echarts'

Vue.prototype.echarts = echarts;
```
- 父组件
```js
<ZhuZhuangTu ref="zzt" :zzt='zzt' />

data() {
  return {
    // 柱状图信息
    zzt: {
        area: [],  // 柱状图省份
        cityNum: [],  // 柱状图数据
    },
  }
}

methods: {
  // 人员进出省份统计
  getTrackCountByProList() {
      this.listLoading = true;

      let params = {
          stime: new DateTime().getTheDate() + " 00:00:00",
          etime: new DateTime().getTheDate() + " 23:59:59"
      }

      getTrackCountByPros(params).then(res=> {
          this.listLoading = false;

          let trackCountByProsList = res.data.data.data;

          // console.log(trackCountByProsList);

          for(let item in trackCountByProsList) {
              if(typeof trackCountByProsList[item] !== 'function') {
                  // console.log(trackCountByProsList[item]);

                  // 获取城市名称数组
                  this.province_name.push({
                      name: trackCountByProsList[item].name
                  });

                  // 获取城市人流量
                  this.zzt.cityNum.push({
                      num: trackCountByProsList[item].num
                  });
              }
          }

          // 柱状图
          this.zzt.area = this.province_name;

          this.$refs.zzt.getChartData();
      }).catch({});
  },
}

mouteds: {
  this.getTrackCountByProList();
}
```
- 子组件
```js
// 接受父组件的值
props: {
  zzt: Object,
},

// 柱状图数据
methods: {
  province_name:[],
  cityNum: [],
}

methods: {
  // 获取柱状图数据
  getChartData(){
      // console.log(this.zzt);

      // 获取省份
      for(let item in this.zzt.area) {
          if(this.zzt.area[item].name != "") {
              this.province_name.push(this.zzt.area[item].name);
          }
      }
      // console.log("获取省份", this.province_name);

      // 获取城市数据
      for(let item in this.zzt.cityNum) {
          if(this.zzt.cityNum[item].num !== undefined) {
              this.cityNum.push(this.zzt.cityNum[item].num);
          }
      }
      // console.log("获取城市数据", this.cityNum);

      // 渲染柱状图
      this.drawCal();
  },

  // 渲染柱状图
  drawCal() {
      var myChart = this.echarts.init(document.getElementById('echarts'))

      let option = {
          xAxis: {
              type: 'category',
              data: this.province_name,
              axisLabel: {
                  inside: false,
                  textStyle: {
                      color: '#b9b7b7',
                  },
                  interval: 0,  // 加上这个强制显示
                  rotate: 63
              },
              axisTick: {
                  show: false
              },
              axisLine: {
                  show: false
              },
              z: 10
          },
          yAxis: {
              name: "单位/人",
              nameTextStyle: {
                  color: '#9FA9BC',
                  padding : [0, 0, 0, -50],
              },
              axisLine: {
                  show: false
              },
              axisTick: {
                  show: false
              },
              axisLabel: {
                  textStyle: {
                      color: '#b9b7b7'
                  }
              }
          },
          dataZoom: [
              {
                  type: 'inside'
              }
          ],
          series: [
              {
                  type: 'bar',
                  itemStyle: {
                      color: 'rgba(0,0,0,0.05)',
                  },
                  barGap: '-100%',
                  barCategoryGap: '40%',
                  data: this.dataShadow,
                  animation: false,
              },
              {
                  type: 'bar',
                  itemStyle: {
                      barBorderRadius: [4.6, 4.6, 0, 0],

                      color: {
                          type: "linear",
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [
                              {
                                  offset: 0,
                                  color: "#03C2AC" // 0% 处的颜色
                              },
                              {
                                  offset: 1,
                                  color: "#000" // 100% 处的颜色
                              }
                          ],
                          globalCoord: false // 缺省为 false
                      },
                  },
                  emphasis: {
                      itemStyle: {
                          color: {
                              type: "linear",
                              x: 0,
                              y: 0,
                              x2: 0,
                              y2: 1,
                              colorStops: [
                                  {
                                  offset: 0,
                                  color: "#000" // 0% 处的颜色
                                  },
                                  {
                                  offset: 1,
                                  color: "#03C2AC" // 100% 处的颜色
                                  }
                              ],
                              globalCoord: false // 缺省为 false
                          },
                      },
                  },
                  data: this.cityNum,
                  label: {
                      show: true, //开启显示
                      position: 'top', //在上方显示
                      textStyle: { //数值样式
                          color: '#9FA9BC',
                          fontSize: 12
                      }
                  },
              }
          ]
      };

      /* var zoomSize = 6;
      myChart.on('click', function (params) {
          console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
          myChart.dispatchAction({
              type: 'dataZoom',
              startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
              endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
          });
      }); */

      myChart.setOption(option);
  },
}
```


## 2.图表电池样式
```js
// var barData = [0, ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100)];
var barData = [60, 30, 52, 34, 90];
var lineData = [63, 63, 63, 63, 100]
this.chart.setOption(
  // option-start
  {
    grid: [{//图形的位置
        top: "-1%",
        left: "0%",
        right: "0%",
        bottom: "4%",
    }],
    xAxis: {
      show: false,//是否展示X轴
    },
    yAxis: {
      axisLine: {
        show: false//不展示刻度
      },
      type: "category",
      inverse: true,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        inside: true,
      },
      data: ['服务器数（台）', '计算容量（核）', '内存容量（GB）', '存储容量（PB）'],
    },
    series: [
      // 下层块
      { 
        name: '',
        type: 'pictorialBar',
        symbol: 'roundRect',
        barWidth: '3%',
        barMaxWidth: '20%',
        symbolOffset: [75, 0],
        itemStyle: {
          normal: {
            color: 'rgba(255,255,255,0.2000)'
          }
        },
        z: -11,
        symbolRepeat: true,
        symbolSize: [6, 16],
        data: lineData,
        barGap: 50,
        barCategoryGap: 0,
        animationEasing: 'elasticOut',
      },
      // 上层块
      { 
        // name: '', // blue bar
        type: 'pictorialBar',
        symbol: 'roundRect',
        barWidth: '2%',
        barMaxWidth: 100,
        symbolOffset: [75, 0],
        itemStyle: {
          normal: {
            barMaxWidth: '20%',
            barBorderRadius: 100,
            color: '#00C0FF',
          }
        },
        symbolRepeat: true,
        symbolSize: [6, 16],
        data: barData,
      },
    ],
  }
  // option-end
)
```
```js
symbolSize: [6, 10],  // 电池大小
symbolOffset: [75, 0],  // 电池位置

{
  //图形的位置
  grid: [{
    top: -1,
    left: "-28%",
    right: '29%',
    bottom: 0,
  }],
  xAxis: {
    show: false,//是否展示X轴
  },
  yAxis: {
    axisLine: {
      show: false//不展示刻度
    },
    type: "category",
  },
  series: [
    // 下层块(总)
    // var barData = [0, ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100)];
    { 
      type: 'pictorialBar',
      symbol: 'roundRect',
      // barWidth: 0,
      symbolOffset: this.symbolOffset,
      itemStyle: {
        normal: {
          color: 'rgba(255,255,255,0.2000)'
        }
      },
      symbolRepeat: true,
      symbolSize: this.symbolSize,
      barGap: 50,
      barCategoryGap: 0,
      animationEasing: 'elasticOut',
      data: lineData,
    },
    // 上层块
    { 
      type: 'pictorialBar',
      symbol: 'roundRect',
      // barWidth: 0,
      symbolOffset: this.symbolOffset,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#00C0FF',
            },
            {
              offset: 1,
              color: 'rgba(0,192,255,0.3000)',
            },
          ], false),
        }
      },
      symbolRepeat: true,
      symbolSize: this.symbolSize,
      data: barData,
    },
  ],
}
```

## 3. 柱状图定制
```js
{
  tooltip: {
    trigger: 'axis',
    textStyle: {
      color: '#fff',
      fontSize: 10,
    },
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#fff'
      }
    }
  },
  grid: {
    top: 30,
    left: 0,
    right: 0,
    bottom: 0,
    height: '83%',
    containLabel: true,
  },
  legend: [
    {
      data:[
        {
          name: '资产负债率',
          icon: this.legendIcon
        }
      ],
      itemWidth: this.legendItem,
      itemHeight: this.legendItem,
      left: 'left',
      textStyle: this.chartTextStyle
    }, 
    {
      data:[
        {
          name: '存货增长比率',
          icon: this.legendIcon
        }
      ],   
      itemWidth: this.legendItem,
      itemHeight: this.legendItem,
      left: 'left',
      left:'15%' , // 调整位置
      textStyle: this.chartTextStyle
    }, 
    {
      data:[
        {
          name: '应收账款增长率',
          icon: this.legendIcon
        }
      ],  
      itemWidth: this.legendItem,
      itemHeight: this.legendItem,
      left: 'right',
      textStyle: this.chartTextStyle
    },
  ],
  xAxis: {
    type: 'category',
    offset: 15,
    axisTick:{
      show: false,  // 隐藏刻度线
    },
    axisLabel: {
      padding: [0, 0, 0, -23],
      interval: 0, // 横轴信息全部显示
      rotate: 30,
      ...this.chartTextStyle,
      align:'left',
      formatter (val) {
        var strs = val.split(""); //字符串数组
        var str = "";
        for (var i = 0, s; (s = strs[i++]);) {
          //遍历字符串数组
          str += s;
          if (!(i % 4)) str += "\n"; //按需要求余
        }
        return str;
      }
    },
    data: fieldData,
  },
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: this.yAxisLine,
      },
      axisLabel: {
        ...this.chartTextStyle,
        formatter(val) {
          if(val === 0) {
            return val
          }

          return `${val}%`
        },
      },
      /* min: 0,
      max: 100,
      interval: 20, */
    },
    {
      type: 'value',
      splitLine: {
        show: this.yAxisLine,
      },
      axisLabel: {
        ...this.chartTextStyle,
        formatter(val) {
          if(val === 0) {
            return val
          }

          return `${val}%`
        },
      },
      min: 0,
      max: 2.5,
      interval: 0.5,
    }
  ],
  series: [
    {
      name: '资产负债率',
      type: this.seriesType,
      barWidth: this.barWidth,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(72,143,255,100)',
          },
          {
            offset: 1,
            color: 'rgba(5,32,115,0)',
          },
        ], false),
      },
      data: yData1,
    },
    {
      name: '存货增长比率',
      type: this.seriesType,
      barWidth: this.barWidth,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(175,143,255,100)',
          },
          {
            offset: 1,
            color: 'rgba(175,143,255,0)',
          },
        ], false),
      },
      data: yData2
    },
    {
      name: '应收账款增长率',
      type: this.seriesType,
      barWidth: this.barWidth,
      yAxisIndex: 1,  // 在单个图表实例中存在多个y轴的时候有用
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(26,175,135,100)',
          },
          {
            offset: 1,
            color: 'rgba(26,175,135,0)',
          },
        ], false),
      },
      data: yData3
    }
  ]
}
```

## 4. 图表横向重叠
```js
{
  color: this.lineColors,
  legend: {
    left: 'left',
    textStyle: this.lendTextStyle,
    itemWidth: this.legendItem,
    itemHeight: this.legendItem,
    /* formatter (val) {
      console.log(val)
    } */
  },
  grid: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  xAxis: {
    type: 'value',
    show: false,
    minorSplitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'category',
    data: [''],
    // 去除网格线
    axisLine: {
      show: false
    },
    // 去除刻度线
    axisTick: {
      show: false
    }
  },
  series: [],
}

this.setOptions(option=> {
  console.log(option)

  for(let i=0; i<this.chartData.fieldData.length; i++) {
    option.series.push({
      type: 'bar',
      stack: 'total',
      barWidth: '10px',
      label: {
        show: false,
      },
      emphasis: {
        focus: 'series'
      },
      name: this.chartData.legend[i],
      data: this.chartData.fieldData[i],
    })
  }

  this.chart.setOption(option)
})

export const industrialTalentData1 = {
  legend: ['华为', '中兴', '烽火', '瑞斯'],
  fieldData: [[320], [120], [220], [150]],
}
```

## 5. echarts在lend上添加百分比
```js
formatter (name) {
  let { fieldData, legend } = that.chartData
  let total = 0
  let curData

  for(let i=0; i<legend.length; i++) {
    total += parseInt(fieldData[i][0])

    if(legend[i] === name) {
      curData = parseInt(fieldData[i][0])
    }
  }
  var p = Math.round(((curData / total) * 100)) + '%'; //求出百分比

  return `${name} ${p}`
}

formatter (name) {
  let { fieldData } = that.chartData
  let curData

  for(let i=0; i<fieldData.length; i++) {
    if(fieldData[i].name === name) {
      curData = fieldData[i].percentage
    }
  }

  return `${name}(${curData}%)`
}
```

## 6. 在图例上做点击事件
```js
this.chart.on('legendselectchanged', obj=> {
  // console.log(this.chartData, obj)

  this.chart.setOption({
    legend:{ selected:{  [obj.name]: true}}
  })

  // ......
})
```