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

## 5. vue中cascader级联选择器
```html
<template>
  <el-cascader v-model="currentAddressStr" :props="props" @change="addressHandleChange" />
</template>

<script>
// api

export default {
  data () {
    return {
      currentAddressStr: this.addressStr,  // vue不推荐直接在子组件中修改父组件传来的props的值
      props: {
        lazy: true,
        // heckStrictly: true,
        lazyLoad: (node, resolve) => {
          // 级联控件 - 选地址
          this.selectAddress(node, resolve)
        }
      },
    }
  },

  props: {
    // 级联控件数据 - 结果数据
    addressStr: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    /**
     * api
     */
    // 获取服务区地址 - 省
    getProvinceAreaList () {
      return new Promise((resolve, reject) => {
        getProvinceAreaList().then(res => {
          resolve(res.rows)
        }).catch(err => {
          reject(err)
        })
      })
    },

    // 根据code获取区域地址
    getRegionsByCode (code) {
      return new Promise((resolve, reject) => {
        getRegionsByCode(code).then(res => {
          if (res.data) {
            resolve(res.data.serviceAreaList)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },

    /**
     * 控件
     */
    // 级联控件 - 选地址
    async selectAddress (node, resolve) {
      const { level } = node;

      if (level === 0) {
        let provinceAreaList = await this.getProvinceAreaList()
        // console.log(provinceAreaList)

        const nodes = provinceAreaList.map(item => ({
          value: item.regionCode,
          label: item.regionName,
          leaf: node.level >= 2,
        }))
        resolve(nodes);
      }

      if (level === 1) {
        if(node.value === 'xxx') {
            let data
            resolve(data)
            return
        }

        let regionsList = await this.getRegionsByCode(node.value)

        const nodes = regionsList.map(item => ({
          value: item.id.toString(),
          label: item.serviceAreaName + "(" + item.geographicalDivision + ")",
          leaf: node.level === 1,
        }))

        resolve(nodes);
      }
      
      // 到最后一级的时候消除加载圈及禁止继续请求
      if(level === 2) {
        let data
        resolve(data)
        return
      }
    },

    // 切换区域响应事件
    addressHandleChange (val) {
    //   console.log("tools", val)

      // 父组件修改子组件model时触发
      this.currentAddressStr = val

      if (val[0] === 'xxx') {
        return
      }

      this.$emit("addressHandleChange", val)
    }
  }
}
</script>

<!-- cascaderFlag 执行时显示，触发回调，走业务 -->
<cascader-tool ref="cascaderRef" @addressHandleChange="addressHandleChange" :addressStr="addressStr" v-if="cascaderFlag" />
```

## 6. 使用vue-simple-uploader分片上传
- 安装vue-simple-uploader并使用
- yarn add vue-simple-uploader
```js
// main.js
import uploader from 'vue-simple-uploader';
Vue.use(uploader)
```
- uploadToolsBig
```html
<template>
  <!-- 上传器 -->
  <uploader ref="uploader" :options="options" :autoStart=false :file-status-text="fileStatusText"
    @file-added="onFileAdded" @file-success="onFileSuccess" @file-progress="onFileProgress" @file-error="onFileError"
    class="uploader-ui">
    <uploader-unsupport></uploader-unsupport>
    <uploader-drop>
      <div>
        <uploader-btn id="global-uploader-btn" :attrs="attrs" ref="uploadBtn">选择文件<i
            class="el-icon-upload el-icon--right"></i></uploader-btn>
      </div>
    </uploader-drop>
    <uploader-list></uploader-list>
  </uploader>
</template>

<script>
import { ACCEPT_CONFIG } from './config';
import SparkMD5 from 'spark-md5';
import { mergeFile } from "@/api/common";

export default {
  data() {
    return {
      options: {
        //目标上传 URL，默认POST
        // target: process.env.VUE_APP_PROX + "/uploader/chunk",
        target: process.env.VUE_APP_BASE_UPLOAD_API + "/uploader/chunk",
        //分块大小(单位：字节)
        chunkSize: '2048000',
        //上传文件时文件内容的参数名，对应chunk里的Multipart对象名，默认对象名为file
        fileParameterName: 'upfile',
        //失败后最多自动重试上传次数
        maxChunkRetries: 3,
        //是否开启服务器分片校验，对应GET类型同名的target URL
        testChunks: true,
        /*
        服务器分片校验函数，判断秒传及断点续传,传入的参数是Uploader.Chunk实例以及请求响应信息
        reponse码是successStatuses码时，才会进入该方法
        reponse码如果返回的是permanentErrors 中的状态码，不会进入该方法，直接进入onFileError函数 ，并显示上传失败
        reponse码是其他状态码，不会进入该方法，正常走标准上传
        checkChunkUploadedByResponse函数直接return true的话，不再调用上传接口
        */
        checkChunkUploadedByResponse: function (chunk, response_msg) {
          let objMessage = JSON.parse(response_msg);
          if (objMessage.skipUpload) {
            return true;
          }
          return (objMessage.uploadedChunks || []).indexOf(chunk.offset + 1) >= 0;
        }
      },
      attrs: {
        accept: ACCEPT_CONFIG.getAll()
      },
      fileStatusText: {
        success: '上传成功',
        error: '上传失败',
        uploading: '上传中',
        paused: '暂停',
        waiting: '等待上传'
      },
    }
  },
  methods: {
    onFileAdded(file) {
      this.computeMD5(file);
    },
    /*
    第一个参数 rootFile 就是成功上传的文件所属的根 Uploader.File 对象，它应该包含或者等于成功上传文件；
    第二个参数 file 就是当前成功的 Uploader.File 对象本身；
    第三个参数就是 message 就是服务端响应内容，永远都是字符串；
    第四个参数 chunk 就是 Uploader.Chunk 实例，它就是该文件的最后一个块实例，如果你想得到请求响应码的话，chunk.xhr.status就是
    */
    onFileSuccess(rootFile, file, response, chunk) {
      //refProjectId为预留字段，可关联附件所属目标，例如所属档案，所属工程等
      file.refProjectId = "123456789";
      mergeFile(file).then(responseData => {
        if (responseData.data.code === 415) {
          console.log("合并操作未成功，结果码：" + responseData.data.code);
        }
      }).catch(function (error) {
        console.log("合并后捕获的未知异常：" + error);
      });
    },
    onFileError(rootFile, file, response, chunk) {
      console.log('上传完成后异常信息：' + response);
    },

    /**
     * 计算md5，实现断点续传及秒传
     * @param file
     */
    computeMD5(file) {
      file.pause();

      //单个文件的大小限制2G
      let fileSizeLimit = 2 * 1024 * 1024 * 1024;
      console.log("文件大小：" + file.size);
      console.log("限制大小：" + fileSizeLimit);
      if (file.size > fileSizeLimit) {
        this.$message({
          showClose: true,
          message: '文件大小不能超过2G'
        });
        file.cancel();
      }

      let fileReader = new FileReader();
      let time = new Date().getTime();
      let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
      let currentChunk = 0;
      const chunkSize = 10 * 1024 * 1000;
      let chunks = Math.ceil(file.size / chunkSize);
      let spark = new SparkMD5.ArrayBuffer();
      //由于计算整个文件的Md5太慢，因此采用只计算第1块文件的md5的方式
      let chunkNumberMD5 = 1;

      loadNext();

      fileReader.onload = (e => {
        spark.append(e.target.result);

        if (currentChunk < chunkNumberMD5) {
          loadNext();
        } else {
          let md5 = spark.end();
          file.uniqueIdentifier = md5 + time;
          file.resume();
          console.log(`MD5计算完毕：${file.name} \nMD5：${md5 + time} \n分片：${chunks} 大小:${file.size} 用时：${new Date().getTime() - time} ms`);
        }
      });

      fileReader.onerror = function () {
        this.error(`文件${file.name}读取出错，请检查该文件`)
        file.cancel();
      };

      function loadNext() {
        let start = currentChunk * chunkSize;
        let end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

        fileReader.readAsArrayBuffer(blobSlice.call(file.file, start, end));
        currentChunk++;
        console.log("计算第" + currentChunk + "块");
      }
    },
    close() {
      this.uploader.cancel();
    },
    error(msg) {
      this.$notify({
        title: '错误',
        message: msg,
        type: 'error',
        duration: 2000
      })
    },
    onFileProgress(e) {
      console.log(e)
    }
  }
}
</script>

<style>
.uploader-ui {
  padding: 15px;
  margin: 40px auto 0;
  font-size: 12px;
  font-family: Microsoft YaHei;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.uploader-ui .uploader-btn {
  margin-right: 4px;
  font-size: 12px;
  border-radius: 3px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
}
.uploader-ui .uploader-list {
  max-height: 440px;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
```
- axios.js
```js
import axios from 'axios'

const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env.VUE_APP_BASE_UPLOAD_API,
    timeout: 5000
});

export const requestApi = (option) => {
  if (option.isJson && JSON.stringify(option.data) !== {}) {
    return service({
      method: option.method,
      url: `${option.url}`,
      data: option.data,
      headers: {
          'Content-Type': 'application/json'
      }
    })
  } else if (option.isJson && JSON.stringify(option.data) === {}) {
    return service({
      method: option.method,
      url: `${option.url}`,
      data: option.data,
      headers: {
          'Content-Type': 'application/json'
      }
    })
  } else if (!option.isJson && JSON.stringify(option.data) !== {}) {
    return service({
      method: option.method,
      url: `${option.url}`,
      params: option.data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  } else if (!option.isJson && JSON.stringify(option.data) === {}) {
    return service({
      method: option.method,
      url: `${option.url}`
    })
  }
}
```
- api.js
```js
import {requestApi} from '@/utils/axios'

export const mergeFile = data => {
  return  requestApi({
      url: '/uploader/mergeFile',
      method: 'post',
      isJson: true,
      data: JSON.stringify(data)
  });
}
```

## 7.图表电池样式
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

## 8. 柱状图定制
```js
seriesType: 'bar',
barWidth: 4,
lendTextStyle: {
  color: 'rgba(255,255,255,0.6)',
  fontSize: 10,
},
legendIcon: 'rect',
legendItem: 8,
yAxisLine: false,

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
    height: '87%',
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
      color: '#f00',
      itemWidth: this.legendItem,
      itemHeight: this.legendItem,
      left: 'left',
      textStyle: this.lendTextStyle
    }, 
    {
      data:[
        {
          name: '存活增长比率',
          icon: this.legendIcon
        }
      ],   
      itemWidth: this.legendItem,
      itemHeight: this.legendItem,
      left: 'left',
      left:'15%' ,//调整位置
      textStyle: this.lendTextStyle
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
      textStyle: this.lendTextStyle
    },
  ],
  xAxis: {
    type: 'category',
    offset: 18,
    axisTick:{
      show: false,  // 隐藏刻度线
    },
    axisLabel: {
      padding: [0, 0, 0, -23],
      interval: 0, // 横轴信息全部显示
      rotate: 40,
      textStyle: {
        align:'left',
        fontSize: 10,
        color: '#fff'
      },
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
      min: 0,
      max: 100,
      interval: 20,
      splitLine: {
        show: this.yAxisLine,
      },
      axisLabel: {
        formatter: '{value}%'
      }
    },
    {
      type: 'value',
      splitLine: {
        show: this.yAxisLine,
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
        normal: {
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
        }
      },
      data: yData1,
    },
    {
      name: '存活增长比率',
      type: this.seriesType,
      barWidth: this.barWidth,
      itemStyle: {
        normal: {
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
        }
      },
      data: yData2
    },
    {
      name: '应收账款增长率',
      type: this.seriesType,
      barWidth: this.barWidth,
      itemStyle: {
        normal: {
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
        }
      },
      data: yData3
    }
  ]
}
```

## 9. 图表横向重叠
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