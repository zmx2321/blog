# vue工具库
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

## 2. upload不直接上传
```html
<el-upload
    class="upload_wrap"
    ref="upload"
    action="#"
    :limit="1"
    :show-file-list="true"
    :file-list="fileList"
    :on-exceed="handleExceed"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :on-change="uploadChange"
    :auto-upload="false">
    <el-button slot="trigger" size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">支持扩展名：.doc .docx .pdf，文件小于5MB</div>
</el-upload>

<script>
data() {
    return {
        // 上传图片参数
        rawFile: {},  // 传值
        fileList: [],  // 页面显示
    }
}

/**
 * el-upload common
 */
// 删除文件之前的钩子
beforeRemove(file) {
    return this.$confirm(`确定移除 ${ file.name }？`);
},
handleExceed() {
    this.$message.warning(`文件超出上限`);
},
// 删除之后触发
handleRemove() {
    this.rawFile = []
},
// 上传文件时触发
uploadChange(file) {
    // console.log(file)

    this.rawFile = file.raw
},
</script>
```

## 3. 选项卡异步切换
```js
// 选项卡异步切换
switchTab(tab) {
    // console.log(tab)

    for (let [key] of Object.entries(this.tabRefresh)) {
    if (key == tab) {
        this.tabRefresh[key] = true;
    } else {
        this.tabRefresh[key] = false;
    }
    }
},

// 刷新节点
refreshNodes(tab) {
    // console.log(tab.label)

    this.tableData = []

    switch (tab.label) {
    case "aa":
        this.switchTab('jsgzVisible');
        break;
    case "bb":
        this.switchTab('znzzVisible');
        break;
    case "cc":
        this.switchTab('xxcyxmVisible');
        break;
    case "dd":
        this.switchTab('gcwlxmVisible');
        break;
    case "ee":
        this.switchTab('gyhlwptVisible');
        break;
    case "ff":
        this.switchTab('czfcxmVisible');
        break;
    }

    this.getTable()
},

// 刷新所有列表 - 判断当前tab项刷新
refreshList() {
    // console.log(this.librarybActive)

    this.tableData = []

    switch(this.librarybActive) {
    // 技术改造库
    case "jsgz":
        this.aa()
        break;
    // 智能制造库
    case "znzz":
        this.bb()
        break;
    // 新兴产业项目库
    case "xxcyxm":
        this.cc()
        break;
    // 工厂物联网项目库
    case "gcwlxm":
        this.dd()
        break;
    // 工业互联网平台项目库
    case "gyhlwpt":
        this.ee()
        break;
    // 财政扶持项目库
    case "czfcxm":
        this.ff()
        break;
    }

    this.getTable()
},
```