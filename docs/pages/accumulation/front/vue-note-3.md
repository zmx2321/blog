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

## 4. 在vue项目中使用高德地图的geojson
- 安装vue-amap
- 在main.js中配置
    ```js
    AMap.initAMapApiLoader({
        // 高德key
        key: 'key',
        // 插件集合 （插件按需引入）
        plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation', 'AMap.DistrictSearch', 'AMap.Marker']
    })
    ``` 
- 在vue文件中引入并使用
    - 基础使用
    ```html
    <el-amap ref="map" class="amap-box" :vid="'amap-vue'" :center='center' :zoom='zoom' :events="events"></el-amap>

    <script>
    export default {
        data () {
            return {
                /**
                * 地图基础属性
                */
                center: [107.943579, 30.131735],
                zoom: 7,
                events: {
                    init: o=> {
                        // 供出地图的实例
                        window.amapview = o

                        // 获取geojson
                        this.getGeoJson()
                    }
                },
            }
        },

        computed: {
        },

        methods: {
            // 获取地图信息
            getMapInfo() {
                console.log("AMap", AMap)

                // 必须是异步
                setTimeout(() => {
                    console.log("amapview", window.amapview)

                    window.amapview.on('click', e=> {
                        // console.log("地图点击事件", e)

                        // 地图坐标
                        this.getPosition(e)
                    })

                    window.amapview.on('moveend', ()=> {
                        this.logMapinfo()
                    })
                }, 0);
            },

            // 获取地图信息
            logMapinfo() {
                console.log("当前级别", window.amapview.getZoom())
                console.log("当前中心点", window.amapview.getCenter())
            },

            // 地图坐标
            getPosition(e) {
                console.log('您在 ['+e.lnglat.getLng()+','+e.lnglat.getLat()+'] 的位置点击了地图');
            },
            
            // 获取geojson
            getGeoJson() {
                this.axios.get("https://a.amap.com/jsapi_demos/static/geojson/chongqing.json").then(res=> {
                    // console.log(res.data)

                    // 获取geojson数据
                    let geoJSONData = res.data;

                    // 初始化geojson，获取geojson地图对象
                    let geojsonLayer = new AMap.GeoJSON({
                        geoJSON: geoJSON,

                        // 还可以自定义getMarker和getPolyline
                        getPolygon: function(geojson, lnglats) {
                            // 计算面积
                            var area = AMap.GeometryUtil.ringArea(lnglats[0])

                            return new AMap.Polygon({
                                path: lnglats,
                                fillOpacity: 1 - Math.sqrt(area / 8000000000),// 面积越大透明度越高
                                strokeColor: 'white',
                                fillColor: 'red'
                            });
                        }

                        this.$message.success("geojson加载成功")

                        // 设置地图
                        geojsonLayer.setMap(window.amapview);
                }).catch({})
            },
        },

        created() {
            
        },

        mounted() {
        }
    }
    </script>

    ```
    - 将geojson功能封装并添加点击事件
        - GeojsonMap.vue
        ```html
        <template>
            <section class="main_cont amap-wrapper">
                <el-amap ref="map" class="amap-box" :vid="'amap-vue'" :center='center' :zoom='zoom' :events="events"></el-amap>
            </section>
        </template>

        <script>
        export default {
            name: "geojsonmap",

            props: {
                /* selCityName: {
                    type: String,
                    default: ""
                }, */
            },

            components: {

            },

            data () {
                return {
                    /**
                    * 地图基础属性
                    */
                    center: [107.943579, 30.131735],
                    zoom: 7,
                    events: {
                        init: o=> {
                            // 供出地图的实例
                            window.amapview = o

                            // 获取geojson
                            this.getGeoJson()
                        }
                    },
                    // polygon相关
                    polygonInitColor: "#f00",  // polygon初始化颜色
                    polygonMarkerColor: "#00f",  // polygon遮罩颜色
                    // geojson
                    globalGeoJsonData: {},  // 全局geojson
                }
            },

            computed: {
            },

            methods: {
                /**
                * geojsoon初始配置
                */
                // 初始化geojson配置，返回面
                initGeojsonLayer(data, fillColor) {
                    return new AMap.GeoJSON({
                        // 要加载的标准GeoJSON对象
                        geoJSON: data,

                        // 指定面要素的绘制方式，缺省时为Polygon的默认样式。
                        // geojson为当前要素对应的GeoJSON对象，lnglats为对应的面的路径
                        getPolygon(geojson, lnglats) {
                            // console.log(geojson)

                            let area = AMap.GeometryUtil.ringArea(lnglats[0])

                            return new AMap.Polygon({
                                // 路径
                                path: lnglats,
                                // 面
                                fillOpacity: 1 - Math.sqrt(area / 8000000000),// 面积越大透明度越高
                                // fillOpacity: 0.5,
                                fillColor: fillColor,
                                // 线
                                strokeColor: '#fff',
                                strokeWeight: 0.6,    //线宽
                                strokeStyle: "solid",
                                strokeOpacity: 1, //线透明度
                            });
                        }
                    })
                },
                // 跳转到geojson
                jumpToGeojson() {
                    window.amapview.setZoom(this.zoom); //设置地图层级
                    window.amapview.setCenter(this.center); //设置地图层级
                },
                // 初始化geojson
                initGeojsonPolygon() {
                    let polygonArr = window.amapview.getAllOverlays('polygon')

                    window.amapview.remove(polygonArr)
                },
                // 重置geojson
                resetMap() {
                    this.jumpToGeojson()  // 跳转到geojson

                    this.initGeojsonPolygon()  // 初始化geojson
                    this.setGeojsonMap(this.globalGeoJsonData)  // 加载geojson地图
                },

                /**
                * 获取并配置geojson
                */
                // 获取geojson - 并执行一系列方法
                getGeoJson() {
                    this.axios.get("https://a.amap.com/jsapi_demos/static/geojson/chongqing.json").then(res=> {
                        // console.log(res.data)

                        // 获取geojson数据
                        let geoJsonData = res.data

                        // 使geojson对象变成全局
                        this.globalGeoJsonData = geoJsonData

                        // 获取城市列表
                        this.$emit("getcityArray", geoJsonData)

                        // 加载geojson地图
                        this.setGeojsonMap(geoJsonData)

                        this.$message.success("geojson加载成功")
                    }).catch({})
                },

                // 初始化geojson并绑定事件
                setGeoJsonLayer(geoJsonData, color, event, next) {
                    // 获取第一层geojson地图对象
                    let geojsonLayer = this.initGeojsonLayer(geoJsonData, color)

                    // 第一层地图对象触发事件 - 初始化geojson并在地图上渲染
                    geojsonLayer.setMap(window.amapview);

                    // 遍历第一层地图对象遮罩层
                    geojsonLayer.eachOverlay(iterator => {
                        iterator.on(event, e=> {
                            // geojson地图对象事件内容 - 高亮
                            next(e, iterator)
                        })
                    })
                },

                // 加载geojson地图
                setGeojsonMap(geoJsonData) {
                    // 初始化geojson，获取geojson地图对象
                    this.setGeoJsonLayer(geoJsonData, this.polygonInitColor, 'click', (e, iterator)=> {
                        this.resetMap()

                        // 给当前面添加事件
                        this.getGeoEvent(e, iterator, geojsonItem=> {
                            // 处理业务流程
                            // console.log("处理geojson业务流程")

                            // 使用geojson示例
                            this.getGeoJsonData(geojsonItem)
                        })
                    })
                },

                // 配置geojson事件
                getGeoEvent(e, geoitem, next) {
                    // 将当前地图对象转换成geojson格式以便获取数据
                    let geojsonItem = geoitem.toGeoJSON()

                    // 处理业务流程
                    next(geojsonItem)

                    // 获取第二层geojson地图对象
                    let geojsonLayerItem = this.initGeojsonLayer(geojsonItem, this.polygonMarkerColor)

                    // 第二层地图对象触发事件 - 设置地图
                    geojsonLayerItem.setMap(window.amapview);

                    // console.log(geojsonItem)

                    // 第二层地图对象触发事件
                    this.geojsonEvent(geojsonLayerItem, ()=>{})
                },

                // 第二层地图对象触发事件
                geojsonEvent(geojsonLayerItem, next) {
                    // console.log(geojsonLayerItem)

                    // 第二层地图对象触发事件 - 鼠标移除
                    geojsonLayerItem.on('mouseout', e=> {
                        // console.log("鼠标移除事件")

                        // 鼠标移出，移除面
                        geojsonLayerItem.hide()
                    })

                    // 第二层地图对象触发事件 - 鼠标点击
                    geojsonLayerItem.on('click', ()=> {
                        console.log("鼠标点击事件")

                        // 鼠标点击，移除面
                        geojsonLayerItem.hide()
                        next()
                    })
                },

                /**
                * 供出地图数据，以方便业务使用
                * 业务流程
                */
                // 使用geojson示例
                getGeoJsonData(geojsonItem) {
                    // console.log("处理geojson业务流程")

                    let cityName = ""

                    if(typeof geojsonItem === "string") {
                        cityName = geojsonItem
                    } else {
                        cityName = geojsonItem.properties.name
                    }

                    this.$emit("getGeoJsonData", cityName)
                },

                // 根据按钮选择地图
                selectName(val) {
                    this.resetMap()

                    let pointPolygon = {}  // 选中面

                    this.globalGeoJsonData.features.forEach(item=> {
                        let geojsonLayerItem = this.initGeojsonLayer(item, this.polygonMarkerColor)
                        // console.log(geojsonLayerItem)

                        if(item.properties.name === val) {
                            // 拷贝对象
                            pointPolygon = geojsonLayerItem
                            // console.log(pointPolygon)

                            // 第二层地图对象触发事件
                            this.geojsonEvent(geojsonLayerItem, ()=>{
                                // console.log("第二层地图对象", item)

                                // 执行业务流
                                this.getGeoJsonData(val)
                            })
                        }
                    })

                    window.amapview.add(pointPolygon)
                    // pointPolygon.setMap(window.amapview);
                },
            },

            created() {
                
            },

            mounted() {
            }
        }
        </script>

        <style lang="less" scoped>
        .amap-wrapper {
            padding: 0;
            position: relative;
            width: 100%;
            height: 100%;

            .amap-box {
                position: absolute;
            }

            .amap-box {
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                
            }
        }
        </style>
        ```
        - exam.vue
        ```html
        <template>
            <section class="main_cont">
                <div class="filter_wrap">
                    <el-button type="primary" @click="resetMap">初始化</el-button>
                    <el-select v-model="selCityName" placeholder="请选择城市" @change="selectName">
                        <el-option v-for="item in cityArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </div>

                <GeojsonMap ref="geojsonmap"
                    @getcityArray="getcityArray" 
                    @getGeoJsonData="getGeoJsonData"
                />

                <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    >
                    <span>这是一段信息</span>
                    <p>城市名称：{{ cityName }}</p>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false, resetForm()">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false, saveForm()">确 定</el-button>
                    </span>
                </el-dialog>
            </section>
        </template>

        <script>
        import GeojsonMap from '@/components/tools/GeojsonMap'

        export default {
            name: "testmap8",

            components: {
                GeojsonMap,
            },

            data () {
                return {
                    /**
                    * 业务
                    */
                    dialogVisible: false,
                    cityName: "",  // 存储当前城市名称
                    cityArr: [],  // 下拉框
                    selCityName: "",  // 点击按钮选择城市
                }
            },

            computed: {
            },

            methods: {
                /**
                * 地图
                */
                // 初始化地图
                resetMap() {
                    this.$refs.geojsonmap.resetMap()

                    this.resetForm()
                },

                // 初始化表单
                resetForm() {
                    this.selCityName = ""
                },

                /**
                * 业务流程
                */
                // 获取城市列表
                getcityArray(geoJsonData) {
                    // console.log("获取城市列表", geoJsonData)

                    geoJsonData.features.forEach(item=> {
                        // console.log(item.properties.name)
                        this.cityArr.push({
                            label: item.properties.name,
                            value: item.properties.name
                        })
                    })
                },

                // 获取geojson数据 - 处理geojson业务流程
                getGeoJsonData(cityName) {
                    console.log("获取geojson数据 - 处理geojson业务流程", cityName)

                    this.cityName = cityName

                    this.dialogVisible = true  // 显示弹窗
                },

                // 根据按钮选择地图
                selectName(val) {
                    console.log(val)
                    this.$refs.geojsonmap.selectName(val)
                },

                // 保存
                saveForm() {
                    this.selCityName = this.cityName
                }
            },

            created() {
            },

            mounted() {
            }
        }
        </script>

        <style lang="less" scoped>
        .main_cont {
            position: relative;
            width: 100%;
            height: 100%;
            padding: 0;

            .filter_wrap {
                position: absolute;
                z-index: 1;
                top: 10px;
                left: 10px;

                .el-button, .el-select {
                    margin-right: 15px;
                }
            }
        }
        </style>
        ```