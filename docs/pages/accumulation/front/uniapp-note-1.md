# uniapp工作积累
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 关于rpx
- rpx是基于整个屏幕为750px来进行匹配的
  - 即如果设置成375rpx,按照比例的话,它会是屏幕的一半
  - 如果换到其他不同分辨率的设备,它依旧会是占屏幕的一半

## uniapp中生命周期
- Page页面生命周期函数执行顺序
  - beforeCreate => onLoad => onShow => created => beforeMount => onReady => mounted
  - 刷新数据后
    - beforeUpdate => updated
- 页面加载过程： 
  - 加载=》显示=》加载完成=》页面隐藏=》页面卸载
- 触发页面生命周期： 
  - onLoad-监听页面加载 =》onShow-监听页面显示 =》 onReady-监听页面初次渲染完成 =》 onHide-监听页面隐藏 =》onUnload-监听页面卸载

## uniapp中使用地图
```vue
<template>
<map
  style="width: 100%; height: 300rpx"
  :show-location="true"
  :latitude="mapConfig.latitude"
  :longitude="mapConfig.longitude"
  :markers="mapConfig.marker"
  :scale="scale"
  @markertap="markertap"
  @callouttap="callouttap">
</map>
</template>

<script>
export default {
  data() {
    return {
      mapCtx: {},
      mapConfig: {
        latitude: 23.106574, //纬度
        longitude: 113.324587, //经度
        scale: 13, //缩放级别
        marker: [
          {
            id: 0,
            latitude: 23.13065, //纬度
            longitude: 113.3274, //经度
            iconPath: '', //显示的图标
            rotate: 0, // 旋转度数
            width: 20, //宽
            height: 30, //高
            //   title:'我在这里',//标注点名
            alpha: 0.5, //透明度
            callout: {
              //自定义标记点上方的气泡窗口 点击有效
              content: '天宝大厦', //文本
              color: '#ffffff', //文字颜色
              fontSize: 14, //文本大小
              borderRadius: 15, //边框圆角
              borderWidth: '10',
              bgColor: '#e51860', //背景颜色
              display: 'ALWAYS' //常显
            }
          },
          {
            id: 1234597,
            latitude: 23.106574, //纬度
            longitude: 113.324587, //经度
            iconPath: '', //显示的图标
            rotate: 0, // 旋转度数
            width: 20, //宽
            height: 30, //高
            //  title:'我在这里',//标注点名
            alpha: 0.5, //透明度
            //      label:{//为标记点旁边增加标签   //因背景颜色H5不支持
            //   color:'red',//文本颜色
            //      },
            callout: {
              //自定义标记点上方的气泡窗口 点击有效
              content: '广州塔', //文本
              color: '#ffffff', //文字颜色
              fontSize: 14, //文本大小
              borderRadius: 15, //边框圆角
              borderWidth: '10',
              bgColor: '#e51860', //背景颜色
              display: 'ALWAYS' //常显
            }
          },
          {
            id: 2,
            latitude: 23.1338, //纬度
            longitude: 113.33052, //经度
            iconPath: '', //显示的图标
            rotate: 0, // 旋转度数
            width: 20, //宽
            height: 30, //高
            alpha: 0.5, //透明度
            callout: {
              //自定义标记点上方的气泡窗口 点击有效
              content: '德隆大厦', //文本
              color: '#ffffff', //文字颜色
              fontSize: 14, //文本大小
              borderRadius: 15, //边框圆角
              borderWidth: '10',
              bgColor: '#e51860', //背景颜色
              display: 'ALWAYS' //常显
            }
          },
          {
            id: 3,
            latitude: 23.136455, //纬度
            longitude: 113.329002, //经度
            iconPath: '', //显示的图标
            rotate: 0, // 旋转度数
            width: 20, //宽
            height: 30, //高
            alpha: 0.5, //透明度
            callout: {
              //自定义标记点上方的气泡窗口 点击有效
              content: '羊城国际商贸中心', //文本
              color: '#ffffff', //文字颜色
              fontSize: 14, //文本大小
              borderRadius: 15, //边框圆角
              borderWidth: '10',
              bgColor: '#e51860', //背景颜色
              display: 'ALWAYS' //常显
            }
          },
          {
            id: 4,
            latitude: 23.224781, //纬度
            longitude: 113.293911, //经度
            iconPath: '', //显示的图标
            rotate: 0, // 旋转度数
            width: 20, //宽
            height: 30, //高
            alpha: 0.5, //透明度
            callout: {
              //自定义标记点上方的气泡窗口 点击有效
              content: '天瑞广场A座', //文本
              color: '#ffffff', //文字颜色
              fontSize: 16, //文本大小
              borderRadius: 15, //边框圆角
              borderWidth: '12',
              bgColor: '#e51860', //背景颜色
              display: 'ALWAYS' //常显
            }
          },
          {
            id: 5,
            latitude: 23.072726, //纬度
            longitude: 113.277921, //经度
            iconPath: '', //显示的图标
            rotate: 0, // 旋转度数
            width: 20, //宽
            height: 30, //高
            alpha: 0.5, //透明度
            callout: {
              //自定义标记点上方的气泡窗口 点击有效
              content: '大米和小米儿童康复(广州盈丰)中心', //文本
              color: '#ffffff', //文字颜色
              fontSize: 14, //文本大小
              borderRadius: 15, //边框圆角
              borderWidth: '8',
              bgColor: '#e51860', //背景颜色
              display: 'ALWAYS' //常显
            }
          }
        ]
      }
    }
  },

  computed: {
    marker1() {
      return [
        {
          id: 0,
          latitude: this.mapConfig.latitude, //纬度
          longitude: this.mapConfig.longitude, //经度
          iconPath: '', //显示的图标
          rotate: 0, // 旋转度数
          width: 20, //宽
          height: 30, //高
          title: '我在这里', //标注点名
          // alpha: 0.5, //透明度
          callout: {
            //自定义标记点上方的气泡窗口 点击有效
            content: '天宝大厦', //文本
            color: '#ffffff', //文字颜色
            fontSize: 14, //文本大小
            borderRadius: 15, //边框圆角
            borderWidth: '10',
            bgColor: '#e51860', //背景颜色
            display: 'ALWAYS' //常显
          },
          label: {
            content: '文本1',
            color: '#F76350',
            bgColor: '#fff',
            padding: 5,
            borderRadius: 4
          }
        }
      ]
    }
  },

  onReady() {
    this.mapCtx = wx.createMapContext('myMap')
    // console.log('onReady', this.mapCtx)
  },

  methods: {
    //地图点击事件
    markertap(e) {
      console.log('===你点击了标记点===', e)
    },
    //地图点击事件
    callouttap(e) {
      console.log('地图点击事件', e)
    }
  }
}
</script>
```

## uniapp中转圈动画
```vue
<view class="pgmbask_bot">
  <image src="/static/2.1/cust_ico_cng.png" style="transition: 1s all" :style="rotationStyle" />
  <span @click="changeQues">换一换</span>
</view>

<script>
this.rotate = 0
data() {
  rotationStyle: '',
}

methods: {
  changeQues(e) {
    this.rotate += 360
    this.rotationStyle = `transform: rotate(${this.rotate}deg);`

    // this.getData()
  },
}
</script>
```

## uniapp外链
```vue
<li @click="linkTo"><span>查看官网</span></li>

<script>
linkTo() {
  let webUrl = 'https://xxxx/xx.html' // URL是要跳转的外部地址 作为参数
  uni.navigateTo({
    url: '/pages/components/webLink?url=' + webUrl
  })
},
</script>
```
```vue
<template>
  <web-view :src="pageUrl"></web-view>
</template>

<script>
export default {
  data() {
    return {
      pageUrl: ''
    }
  },
  onLoad(item) {
    // console.log(this.url)
    // 传入需要跳转的链接 使用web-view标签进行跳转
    this.pageUrl = decodeURIComponent(item.webUrl)
  }
}
</script>
```

## uniapp的安全区
```css
padding-bottom: calc(0 + env(safe-area-inset-bottom));
```