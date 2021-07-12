# 测试-1

<span v-for="i in 3">{{ i }} </span>

C:\Windows\System32\drivers\etc
ipconfig /flushdns  刷新DNS缓存

{{ $page }}

<my-demo></my-demo>

::: v-pre
`{{ This will be displayed as-is }}`
:::

[百度](http://baidu.com)

![blog](/blog/blog.png)

![图片alt](/blog/logo.png)
![图片alt](/blog/test/test.jpg)

<!-- <video src="https://www.w3school.com.cn/i/movie.ogg" controls="controls" width="500" height="300">您的浏览器不支持播放该视频！</video> -->
<video src="/blog/test/movie.ogg" controls="controls" width="500" height="300">您的浏览器不支持播放该视频！</video>

<audio controls="controls">
  <source src="http://t.cn/A6henj8b" type="audio/ogg">
  <source src="http://t.cn/A6henj8b" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

autoplay	autoplay	如果出现该属性，则音频在就绪后马上播放。
controls	controls	如果出现该属性，则向用户显示控件，比如播放按钮。
loop	loop	如果出现该属性，则每当音频结束时重新开始播放。
muted	muted	规定视频输出应该被静音。
preload	preload	
如果出现该属性，则音频在页面加载时进行加载，并预备播放。

如果使用 "autoplay"，则忽略该属性。

src	url	要播放的音频的 URL。


npm install taco --global === yarn global add taco —— 一如既往，请谨慎使用 global 标记。


::: tip 提示
this is a tip
:::

::: warning 注意
this is a tip
:::

::: danger 警告
this is a tip
:::


| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

# Emoji
:tada: :100:
:tada: :100: :100: :cyclone: :dog: :joy: :sparkling_heart: :syringe: :fire: :hankey: :-1: :family: :convenience_store:
https://www.webfx.com/tools/emoji-cheat-sheet/
https://www.jianshu.com/p/dd480882b483
https://www.webfx.com/tools/emoji-cheat-sheet/

<!-- 高亮
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```




::: tip 提示
this is a tip
:::

::: warning 注意
this is a tip
:::

::: danger 警告
this is a tip
:::


::: tip 提示
this is a tip
:::

::: warning 注意
this is a tip
:::

::: danger 警告
this is a tip
:::



```
let text2 = ()=> {
  console.log('22222222222')
};

    let text1 = ()=> {

      return new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve(console.log('1111111111'));//返回写函数里面你要执行的内容
        },3000)



      })

};



text1().then(() => {
     text2()
 })
```


#### 概要
<h6> 1. Express介绍 </h6>
<h6> 2. Express中间件 </h6>
<h6> 3. Express路由 </h6>
<h6> 4. Express错误处理 </h6>
<h6> 5. Express模板引擎 </h6>

---
<br />

## 1. Express介绍

---
<br />

## 2. Express中间件

---
<br />

## 3. Express路由

---
<br />

## 4. Express错误处理

---
<br />

## 5. Express模板引擎

---
<br />

<font color="#666" size="5">\~End~</font> -->

<!-- 
/**
 * 定时刷新页面
 */
let myrefresh = ()=> {
    window.location.reload();
}

// 获取刷新时间（分钟）
let getFreshTime = (min) => {
    return 1000*60*min;
}

setTimeout('myrefresh()', getFreshTime(0.5)); //指定1秒刷新一次 -->


increase-memory-limit

npm install rimraf -g
rimraf node_modules

yarn clean cache


// 字符串中不包含关键字
            let addReg = /(北京)|(上海)/.test(this.carId);

            if(this.carId !== "" || !addReg) {
                this.carId = this.carId + "省"
            }



<!-- var productItems = ["a", "b", "c", "d"];
 
var indexs = [1, 2];

indexs.sort(function(a, b) { return b - a});

indexs.forEach(function(index) { productItems.splice(index, 1) })
console.log(productItems);



在vue的js引入图片，就需要使用require（“路径”）进来


// 根据索引删除数组元素
delArrEleByIndex(arr, indexsArr) {
    indexsArr.sort(function(a, b) { return b - a});
    
    indexsArr.forEach(function(indexsArr) { arr.splice(indexsArr, 1) })

    return arr;
}, -->

<!-- <img :src=" require('../../assets/images/equipmentmaintain/icon' + (index+1) + '.png') " alt=""> -->

<!-- event.stopPropagation();  // 阻止冒泡-使点击眼睛只触发当前事件


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
 -->







<!-- <div class="kongtiaojifang" ref="kongtiao" @mousedown="mouseDownHandleelse($event)" @mouseup="mouseUpHandleelse($event)">
</div>


<script>
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
      this.moveDataelse.x = event.pageX - this.$refs.kongtiao.offsetLeft
      this.moveDataelse.y = event.pageY - this.$refs.kongtiao.offsetTop
      event.currentTarget.style.cursor = 'move'
      window.onmousemove = this.mouseMoveHandleelse
    },
    mouseMoveHandleelse (event) {
      let moveLeft = event.pageX - this.moveDataelse.x + 'px'
      let moveTop = event.pageY - this.moveDataelse.y + 'px'
      this.$refs.kongtiao.style.left = moveLeft
      this.$refs.kongtiao.style.top = moveTop
    },
    mouseUpHandleelse (event) {
      window.onmousemove = null
      event.currentTarget.style.cursor = 'move'
      console.log('鼠标松开了')
    }
  }
}
</script>


<style scoped lang='scss'>
 .kongtiaojifang{
    height: 200px;
    width: 400px;
    position: fixed;
    top: 150px;
    left: 550px;
    cursor: pointer;
  }
</style> -->


<!-- // 如果名称(字符串)中有消防栓则执行
                    if(treeDataList[item].name.indexOf("消防栓")!=-1){
                        console.log(treeDataList[item].name);
                    } -->


<!-- https://leancloud.cn/dashboard/app.html -->
<!-- https://valine.js.org/quickstart.html -->

<!-- https://leancloud.cn/dashboard/data.html -->

<!-- var str = "blog.123csdn.net";
console.log(str.replace("123","")); 
js删除字符串中指定字符最简单的办法 
-->


<!-- 21.6*1024/(5*1024/8) =34.56s

21.6MB 是你刚才整个网站的大小。。 单位  Byte
21.6*1024  换成KB
 5Mb是你的带宽大小 单位 b  bit
5*1024/8   
1Byte =8bit -->


// 引入vuex
import store from '../../../src/store'

// 获取点位信息
let pointList = [11, 22, 33];

// 点位信息存入vuex
store.commit('pointList', pointList)

console.log(store.state.pointList);


pointList: "",  // 位置信息（6个参数）

// 位置信息（6个参数）
pointList(state, newVal) {
    state.pointList = newVal;
},


// 执行vue方法
updateSocket();

mounted() {
// 将Vue方法传到全局对象window中
window.updateSocket = this.onSubmit;
},

methods: {
  onSubmit() {}
}

<!-- test1(func,str){
    if(str==null){
        func();
    }else{
        func(str);
    } 
},

test2(str){
    alert(str);
},

this.test1(this.test2,'hello'); -->


<!-- 用noopener noreferrer就是告诉浏览器，新打开的子窗口不需要访问父窗口的任何内容（【同一站点】的概念： 同一站点会共享同一个渲染进程），这是为了防止一些钓鱼网站窃取父窗口的信息。 -->


a(callback){    
            console.log("我是parent函数a！");
            console.log("调用回调函数");
            callback();
        },

var b = ()=>{
                console.log("我是回调函数b");
            };

//回调函数
            this.a(b);

<!-- 数组取反转json字符串 -->
JSON.stringify(arr.reverse())


<!-- 字符串截取数字 -->
"123agdfsf1241425aa".replace(/[^0-9]/ig, "")
"123agdfsf1241425aa".replace(/\D+/g, "")


<!-- setSyrkclClass: "",
setSyrkclClass(state, newVal) {
    state.setSyrkclClass = newVal;
},
this.$store.commit('setSyrkclClass', 'syrkgcls');
this.$store.state.setSyrkclClass

this.$store.commit('setSyrkclClass', ''); -->

/* color: new echarts.graphic.LinearGradient(
    0, 0, 0, 1,
    [
        {offset: 0, color: '#2378f7'},
        {offset: 0.7, color: '#2378f7'},
        {offset: 1, color: '#83bff6'}
    ]
) */
color: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
        {
        offset: 0,
        color: "yellow" // 0% 处的颜色
        },
        {
        offset: 1,
        color: "red" // 100% 处的颜色
        }
    ],
    globalCoord: false // 缺省为 false
}

mode: 'history',//配合nginx本地才能正常的使用history模式
  base: '/PA/',

  publicPath: '/PA/',
  outputDir: 'PA',

# 测试环境
server {
    listen       3030;
    server_name  localhost;

    location / {
        root   F:\_poj\debug;
        index  index.html index.htm;

        try_files $uri $uri/ /PA/

        include       nginx_cors;
    }


    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}

├── README.md                         // 项目说明文档
├── node_modules                       // 项目依赖包文件夹
├── build                                // 项目构建(webpack)相关代码
│   ├── build.js                                          // 生产环境构建代码
│   ├── check-versions.js                        // 检查node、npm等版本
│   ├── dev-client.js                                 // 热重载相关
│   ├── dev-server.js                                // 构建本地服务器
│   ├── utils.js                                           // 构建工具相关
│   ├── vue-loader.conf.js                       // 处理.vue文件的配置文件
│   ├── webpack.base.conf.js                 // webpack基础配置
│   ├── webpack.dev.conf.js                   // webpack开发环境配置
│   └── webpack.prod.conf.js                 // webpack生产环境配置
├── config                                                 // 项目基本设置文件夹
│   ├── dev.env.js                               // 开发配置文件
│   ├── index.js                               // 配置主文件
│   └── prod.env.js                    // 编译配置文件
├── index.html                                // 项目入口文件
├── package-lock.json                         // npm5 新增文件，优化性能
├── package.json                             // 项目依赖包配置文件
├── src                                      // 我们的项目的源码编写文件
│   ├── App.vue                            // APP入口文件
│   ├── assets                             // 初始项目资源目录，回头删掉
│   │   └── logo.png
│   ├── components                       // 组件目录
│   │   └── Hello.vue         // 测试组件，回头删除
│   ├── main.js                            // 主配置文件
│   └── router                            // 路由配置文件夹
│       └── index.js                    // 路由配置文件
└── static                                  // 资源放置目录


父组件
<ZhuZhuangTu ref="zzt" :zzt='zzt' />
// 柱状图信息
zzt: {
    area: [],  // 柱状图省份
    cityNum: [],  // 柱状图数据
},

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

mouted
getTrackCountByProList


子组件
// 接受父组件的值
    props: {
      zzt: Object,
    },

// 柱状图数据
            province_name:[],
            cityNum: [],

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



获取数组最后一位
this.personalList.pop()

increase-memory-limit



// 上传图片
const uploadImg = ()=> {
    let formData = new FormData();

    $("#fUpload").change(()=> {
        let file = $("#fUpload")[0].files[0];

        formData.append('multipartFile', file);

        // console.log(formData.get("multipartFile"));  // 获取formData对象

        $.ajax({
           url: URL + "/api/upload/file",
           type: "POST",
           data:formData,
           processData: false,
           contentType:false,
           cache:false,
           headers: {
                "X-Token":sessionStorage.getItem("token")//此处放置请求到的用户token
           },
           success: ()=> {
               alert("上传成功");
           },
           error: err=> {
               console.log(err);
           }
        });
    });
}

<!-- 获取问号后面的值 -->
window.location.href.split('?')[1]

// 封装ajax方法
    let ajaxMed = (pam, url, suc)=> {
        $.ajax({
            type: "POST",//方法类型
            dataType: "json",//预期服务器返回的数据类型
            data: pam,
            url: url,
            headers: {
                "X-Token":sessionStorage.getItem("token")//此处放置请求到的用户token
            },
            success: function (res) {
                 suc(res);
            },
            error : function() {
                alert("异常！");
            }
        });
    }

    // 调用成功后的数据
    ajaxMed(params, URL+"/api/record/list", suc = (res)=> {
        console.log("调用成功后的回调", res);
    });

    // 调用拒绝时数据
    params.auditStatus = -1;  // 设置拒绝时的状态
    ajaxMed(params, URL+"/api/record/list", suc = (res)=> {
        console.log("调用拒绝时数据", res);
    });

打开键盘快捷方式
[
    { "key": "alt+/",  "command": "editor.action.triggerSuggest","when": "editorTextFocus" },
    { "key": "ctrl+alt+down","command": "editor.action.copyLinesDownAction", "when": "editorTextFocus" },
    { "key": "ctrl+alt+up", "command": "editor.action.copyLinesUpAction", "when": "editorTextFocus" },
    { "key": "ctrl+shift+c","command": "editor.action.commentLine","when": "editorTextFocus" },
    { "key": "ctrl+d","command": "editor.action.deleteLines","when": "editorTextFocus" },
    { "key": "ctrl+k","command": "editor.action.addSelectionToNextFindMatch","when": "editorFocus"},
    { "key": "ctrl+shift+f","command": "editor.action.format","when": "editorTextFocus"},
    { "key": "ctrl+shift+x","command": "editor.action.transformToUppercase","when": "editorTextFocus"},
    { "key": "ctrl+shift+y","command": "editor.action.transformToLowercase","when": "editorTextFocus"},
    { "key": "ctrl+shift+alt+x","command": "workbench.view.extensions" },
    { "key": "ctrl+shift+alt+y","command": "workbench.debug.action.toggleRepl"},
]


/* global qs */
console.log(qs.stringify(this.loginForm));