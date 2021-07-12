# 测试-1

<span v-for="i in 3">{{ i }} </span>

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

ttt


// 显示影像和模型
    showTerrainModel(viewer, url) {
        // 添加所有地形效果
        this.addAllTerrainEffect(viewer);

        // 显示影像图
        this.showTerrain(viewer);
        
        // 跳转视点
        viewer.gsp.centerAt({"x":120.413355, "y":31.91815, "z":2610.07, "heading": 16.8, "pitch": -51.4, "roll": 0.1 });

        // let lay = layerWork
        layerWork = gsp3d.layer.createLayer({
            "type": "3dtiles",
            "name": "马桥社区",
            "url": url,
            // "url": "http://data.marsgis.cn/3dtiles/jzw-shanghai/tileset.json",
            "offset": { "z": 20 },
            // 屏幕容错率
            "maximumScreenSpaceError": 0,
            // 缓存切片的最大GPU内存量（放大模型会加载更精细的层次）
            "maximumMemoryUsage": 2050,
            // "flyTo": true,
            "showClickFeature":true,
            "visible": true,
            "calback": function (tileset) { 
                // 设置模型位置【参数(经纬度等)】
                // this.setModelPosition(tileset, 120.418003, 31.936300, 0);

                let longitude = 120.418003, latitude = 31.936300, height = 0;

                // 模型加载完毕后的回调
                tileset.readyPromise.then(function () {
                    // 1、旋转
                    let hpr = new Cesium.Matrix3()
                    // new Cesium.HeadingPitchRoll(heading, pitch, roll)
                    // heading围绕负z轴的旋转。pitch是围绕负y轴的旋转。Roll是围绕正x轴的旋转
                    let hprObj = new Cesium.HeadingPitchRoll(Math.PI, Math.PI, Math.PI)

                    //  Cesium.Matrix3.fromHeadingPitchRoll （headingPitchRoll，result）
                    hpr = Cesium.Matrix3.fromHeadingPitchRoll(hprObj, hpr)

                    // 2、平移
                    // 2.3储存平移的结果
                    let modelMatrix = Cesium.Matrix4.multiplyByTranslation(
                    // 2.1从以度为单位的经度和纬度值返回Cartesian3位置
                    // 2.2计算4x4变换矩阵
                    Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(longitude,latitude, height)), new Cesium.Cartesian3(), new Cesium.Matrix4()
                    )
                    /// 3、应用旋转
                    // Cesium.Matrix4.multiplyByMatrix3 （矩阵，旋转，结果）
                    Cesium.Matrix4.multiplyByMatrix3(modelMatrix, hpr, modelMatrix)
                    tileset._root.transform = modelMatrix
                })
                viewer.zoomTo(tileset)

                let boundingSphere = tileset.boundingSphere;
                
                // 限定缩放级别
                viewer.scene.screenSpaceCameraController.maximumZoomDistance = boundingSphere.radius * 5;

                // console.log(boundingSphere);
            }
        }, viewer); 


        // 模型优化
        // this.modelLstEve(viewer);

時年
js中调用vue中的方法
1、在vue的钩子函数中将需要调用的函数赋值给window。

mounted() {
    //将Vue方法传到全局对象window中
    window.updateSocket = this.onSubmit;
},
2、js直接使用即可。

<!-- <script type="text/javascript">
　　updateSocket();
</script> -->

name = "/www/web/lampym/index.php";
    pos = name.lastIndexOf('/');//'/所在的最后位置'
    str = name.substr(pos+1)//截取文件名称字符串
    url = name.substr(0,pos)//截取路径字符串
    alert(str);
    alert(url);
