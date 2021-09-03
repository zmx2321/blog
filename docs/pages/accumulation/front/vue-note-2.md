# vue工作积累
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 配置全局less
- 方法一
    - `npm i style-resources-loader -S`
    - 创建less文件
    - 在vue.config.js中进行配置
    ```js
    module.exports = {
        ......
        // 引入公共less
        pluginOptions: {
            'style-resources-loader': {
                preProcessor: 'less',
                patterns:  ['src/assets/less/demo.less', 'src/assets/less/global.less']
            }
        },
        ......
    }
    ```
- 方法二
    - vuecli3x+
    - vue add style-resources-loader
    - 安装完之后vue.config.js里面会自动出现以下内容
        ```js
        pluginOptions: {
            'style-resources-loader': {
                preProcessor: 'less',
                patterns: []
            }
        }
        ```

## 2. vue引入图片无法加载问题
在vue的js引入图片，就需要使用require（“路径”）进来
    - `<img :src=" require('../../assets/images/url/icon' + (index+1) + '.png') " alt="">`

## 3. vue中拖拽
### 1. 自定义指令 - 拖拽
```html
<!-- 自定义指令绑定元素 -->
<button v-drag>拖拽</button>
```
```js
export default {
    name: "",

    // 自定义指令 - 拖拽
    directives:{
        drag(el, bindings){
            el.onmousedown = function(e){
                var disx = e.pageX - el.offsetLeft;
                var disy = e.pageY - el.offsetTop;
                document.onmousemove = function (e){
                    el.style.left = e.pageX - disx+'px';
                    el.style.top = e.pageY - disx+'px';
                }
                document.onmouseup = function(){
                    document.onmousemove = document.onmouseup = null;
                }
            }
        }
    },
}
```

### 2. 通过事件触发 - 拖拽
```html
<div class="xxclass" ref="xxref" @mousedown="mouseDownHandleelse($event)" @mouseup="mouseUpHandleelse($event)"></div>
```
```js
export default {
  name: 'zhinengjifang',
  data () {
    return {
      moveDataelse: {
        x: null,
        y: null
      }
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  components: {
  },
  methods: {
    mouseDownHandleelse (event) {
      this.moveDataelse.x = event.pageX - this.$refs.xxref.offsetLeft
      this.moveDataelse.y = event.pageY - this.$refs.xxref.offsetTop
      event.currentTarget.style.cursor = 'move'
      window.onmousemove = this.mouseMoveHandleelse
    },
    mouseMoveHandleelse (event) {
      let moveLeft = event.pageX - this.moveDataelse.x + 'px'
      let moveTop = event.pageY - this.moveDataelse.y + 'px'
      this.$refs.xxref.style.left = moveLeft
      this.$refs.xxref.style.top = moveTop
    },
    mouseUpHandleelse (event) {
      window.onmousemove = null
      event.currentTarget.style.cursor = 'move'
      console.log('鼠标松开了')
    }
  }
}
```
```css
.xxclass{
    height: 200px;
    width: 400px;
    position: fixed;
    top: 150px;
    left: 550px;
    cursor: pointer;
}
```

## 4. vue中echarts图表
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

## 5. vue中将简体转成繁体
```js
// 引入包
yarn add language-tw-loader

// vue.config.js
configureWebpack: {
    module: {
        rules: [ // 可在package.json 配置顶层 sideEffects: false
        {
            test: /\.(js|vue)$/,
            loader: 'language-tw-loader',
        }
        ]
    },
},
```

## 6. 在eslint模式下，全局变量报错
```js
/* global qs */
console.log(qs.stringify(this.loginForm));
```

## 7. vuex存储对象基本用法
```js
// 主入口文件/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        user,
    },
    getters,
})

export default store

// store.js
const user = {
    state: {
        userRes: {},  // 存储登陆后用户值
    },

    mutations: {
        // 获取登录后用户信息
        SET_USER_RES: (state, userRes)=> {
        state.userRes = userRes;
        }
    }
}

// vue组件中
const userInfo = res.data.data;

// 将用户信息存入vuex中
this.$store.commit('SET_USER_RES', userInfo);

console.log(this.$store.state.user.userRes);
```

## 8. element 有搜索框input筛选的树形菜单
```js
//this.$refs.tree.getCheckedNodes()   //树选中的值
//this.$refs.tree.getCheckedKeys()  //树选中的id
//this.$refs.tree.setCurrentKey(id);//默认高亮
default-expand-all  				--默认展开全部
highlight-current   				--高亮
:filter-node-method="filterNode" 	--筛选input
:expand-on-click-node="false"   	--点击图标才展开
node-key="id"      					--getCheckedKeys必须绑定id
:props="{          					-- 格式化可写在标签内
    label: 'name',
    value:'id',
}"
```

```html
<div class="tree-box">
    <span class="tree-title">标题</span>
    <el-input
        placeholder="请输入"
        v-model="treeList.filterText"
        suffix-search="el-icon-date">
    </el-input>
    <el-tree
        class="filter-tree"
        :data="treeList.treeData"
        :props="treeList.treeProps"
        default-expand-all
        :expand-on-click-node="false"
        highlight-current
        :filter-node-method="filterNode"
        ref="tree"
        @node-click="treeClick">
    </el-tree>
</div>
```

```js
data() {
    return {
        treeList:{
            filterText:"",//树形菜单搜索框
            treeData:[],//树形菜单
            treeProps: {         //树形菜单格式化
                label: 'name',
                value:'id',
            }
        },
    }
}
//this.$refs.tree.getCheckedNodes()   //树选中的值
//this.$refs.tree.getCheckedKeys()  //树选中的id
//this.$refs.personTree.setCurrentKey(id);//默认高亮
//树点击
treeClick(data){
    console.log(data)
},
// 过滤树表单内容
filterNode(value, data) {
    if (!value) return true;
    return data.name.indexOf(value) !== -1;
},
watch: {
    // 监听树的搜索框
    'treeList.filterText'(val) {
        this.$refs.tree.filter(val);
    }
},
```

```css
.tree-box{
    width: 268px;
    height: 310px;
    border: solid 1px #e9e9e9;
    border-radius: 4px;
    margin-right: 20px;
    float: left;
    .tree-title{
        display: block;
        color: #666666;
        font-size: 14px;
        background-color: #f1f2f4;
        border-radius: 4px 4px 0 0;
        text-indent: 18px;
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
    .el-input{
        display: inherit;
        margin: 10px auto;
        width: 90%;
    }
    .el-tree{
        margin: 10px auto;
        height: 200px;
        width: 90%;
        /*background: #000;*/
        overflow: auto;
    }
}
```

## 9. 路由跳转，参数在url
```js
// 跳转页面
jumpPage() {
    this.$router.push({  
    path: '/message-module/approval',  
    // name: 'approval',
    query: {   
        jumpCurr: this.chkApproval.current,   
    }  
    })  
},

if(this.$route.query.jumpCurr !== undefined) {
    this.activeName = this.$route.query.jumpCurr;
}
```

## 10. vue2x使用proxy做代理解决跨域问题 
```js
//开发模式反向代理配置，生产模式请使用Nginx部署并配置反向代理
devServer: {
    port: 9527,
    proxy: {
        '/api': {
        changeOrigin:true,//允许跨域
        
        //本地服务接口地址
        target: 'http://xxx/',
        ws: true,  //如果要代理 websockets，配置这个参数
        secure: false,  // 如果是https接口，需要配置这个参数
        pathRewrite: {
            '^/api': '/'
        }
        },
        '/elasticApi': {
        changeOrigin:true,//允许跨域
        target: 'http://192.168.2.240:9200/',
        ws: true,
        pathRewrite: {
            '^/elasticApi': '/'
        }
        }
    }
}

export const getImgURI = params => {
    return  axios({
        url: `api/upload/uploadImage`,  // 这里api指代本地服务
        method: 'post',
        data: params
    });
};

location ^~/api {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_buffering off;
        rewrite ^/api/(.*)$ /$1 break;
        proxy_pass http://192.168.2.245:8031/;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

## 11. 在element配置上传文件
```html
<el-upload
        class="upload_wrap"
        ref="upload"
        limit="1"
        :action="uploadUrl"
        :before-remove="beforeRemoveFile"
        :on-exceed="handleExceed"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false"
        :on-change="changeFile">
    <el-button slot="trigger" type="text">选取文件</el-button>
</el-upload>

<script type="">
computed: {
    uploadUrl() {
        return (
            "https://jsonplaceholder.typicode.com/posts/"
        );
    },
},

// 文件上传
// 删除文件后操作
handleRemove(file, fileList) {
    console.log(file, fileList);
},

// 删除文件之前的钩子
beforeRemoveFile(file) {
    if (this.isCheck) {
    this.isCheck = false;
    return true;
    }
    return this.$confirm(`确定移除 ${file.name}？`);
},

// 限制提示
handleExceed() {
    this.$message.warning(`文件超出上限`);
},

// 点击获取文件信息
handlePreview(file) {
    console.log("点击获取文件信息", file);
},

// 文件改变后触发
changeFile(file, fileList) {
    console.log(file, fileList);
},
</script>
```

## 12. 在element表格编辑
```html
<el-table :data="tableData" border @cell-dblclick="celledit">
<el-table-column type="index" ></el-table-column>

<el-table-column prop="date" label="日期" width="180">
    <template slot-scope="scope">
    <el-date-picker v-if="scope.row.date.edit"
        v-model="scope.row.date.value"
        ref="date"
        style="width: 100%"
        type="date"
        value-format="yyyy-MM-dd"
        @blur="scope.row.date.edit = false">
    </el-date-picker>
    <span v-else>{{ scope.row.date.value }}</span>
    </template>
</el-table-column>

<el-table-column prop="name" label="姓名" width="180" edit="false">
    <template slot-scope="scope">
    <el-input v-if="scope.row.name.edit"
        ref="name"
        v-model="scope.row.name.value"
        style="width: 100%"
        @blur="scope.row.name.edit = false">
    </el-input>
    <span v-else>{{ scope.row.name.value }}</span>
    </template>
</el-table-column>

<el-table-column prop="address" width="260" label="地址">
    <template slot-scope="scope">
    <el-input v-if="scope.row.address.edit"
        ref="address"
        v-model="scope.row.address.value"
        style="width: 100%"
        @blur="scope.row.address.edit = false">
    </el-input>
    <span v-else>{{ scope.row.address.value }}</span>
    </template>
</el-table-column>
</el-table>

<script type="">
data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        edit: false
      }],
    }
}

//表格数据格式化成我们想要的数据
/* {
    date: {
    value: '',
    edit: false//编辑状态
    }
} */
formatData(){
    this.tableData.forEach(item => {
    for(let key in item) {
        item[key] = {
        value: item[key],
        edit: false
        }
    }
    })
    console.log(this.tableData)
},
celledit(row, column, cell, event){
    if(row[column.property]){
    row[column.property].edit = true
    setTimeout(() => {
        this.$refs[column.property].focus()
    }, 20)
    }
    
}
</script>
```

## 13. 在vue中compute的值改变，iframe无法渲染
```
<iframe :src="url" frameborder="0" :key="index"></iframe>

computed: {
    dashboardUrl(){
        return `url`
    }
},

check() {
    console.log("查询", this.filterData);

    this.index++
},
```

## 14. 在js中使用vue router
```js
/*
vue封装的公共方法js中使用router，页面可能报错

可在js中添加
*/

import Router from 'vue-router'
import router from '../router'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
}

// 引用
router.push('/path')
```

## scss全局使用
```js
css: {
    loaderOptions: {
        sass: {
            prependData: `@import "./src/assets/css/global.scss";`,
        },
    },
},
```