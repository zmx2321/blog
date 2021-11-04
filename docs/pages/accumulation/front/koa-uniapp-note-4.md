# uniapp的接口
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 基础api
> [api](https://uniapp.dcloud.io/api/log) 
- 看官网api

## 2. 网络请求
- 使用uni.request
  ```js
  <view v-for="(item,index) in list.list" :key="index">
    {{ item.id }}  {{ item.name }}
	</view>

  list: []

  // 这里要使用箭头函数，否则无法找到this
  uni.request({
    url: 'http://127.0.0.1:6080/json/test.json',
    success:(res)=> {
      this.list = res.data
    }
  })
  ```

## 3. 路由与页面跳转
- 使用uni.navigateTo
  ```js
  uni.navigateTo({
    url: '/pages/ddd/ddd?id=22'
  })
  ```
- 有5重方式，对应组件方式跳转的open-type
  - uni.switchTab
  - 其他看官网api

## 4. 数据缓存
- [api](https://uniapp.dcloud.io/api/storage/storage?id=setstorage)
- 示例
  - setstorage
    ```js
    <button type="default" @click="setInfo">存储</button>

    data: {
      return {
        setInfo() {
					uni.setStorage({
						key: 'name',
						data: 'zzds',
						success() {
							console.log("succ")
						}
					})
				}
      }
    }

    uni.getStorage({
        key: 'name',
        success: function (res) {
            console.log("sse", res.data);
        }
    });

    // 获取所有
    uni.getStorageInfo({
      success(res) {
        console.log(res.keys)
      }
    })

    // 移除
    uni.removeStorage({
      key: 'name',
      success() {
        console.log('移除成功')
      }
    })

    // 清除所有
    uni.clearStorage()
    ```
  - 其他看官网api
- 注意事项
  - 一般都使用异步存储，同步存储有等待的问题
  - 涉及到数据库存储或者支付的情况要使用同步存储
  - key相同会被覆盖

## 5. 媒体相关
- 上传图片
  ```js
  <button type="default" @click="getpic">getpic</button>

  getpic() {
    uni.chooseImage({
      success(res) {
        console.log(res)
      }
    })
  }
  ```
- 视频
  ```js
  <video id='myvideo' src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/360e4b20-4f4b-11eb-8a36-ebb87efcf8c0.mp4"></video>
  <button class="btn" @click="play">播放</button>
  <button class="btn" @click="pause">暂停</button>
  <button class="btn" @click="seek">跳转到指定位置</button>
  <button class="btn" @click="stop">停止</button>
  <button class="btn" @click="fullScreen">全屏</button>
  <button class="btn" @click="exitFullScreen">退出全屏</button>
  <button class="btn" @click="playbackRate">设置倍速</button>
  <button class="btn" @click="sendDanmu">发送弹幕</button>

  onReady() {
    this.context = uni.createVideoContext("myvideo", this);
  },
  methods: {
    play() {
      this.context.play();
    },
    pause() {
      this.context.pause();
    },
    seek() {
      this.context.seek(20);
    },
    stop() {
      this.context.stop();
    },
    fullScreen() {
      this.context.requestFullScreen({
        direction: 90
      });
    },
    exitFullScreen() {
      this.context.exitFullScreen();
    },
    sendDanmu() {
      this.context.sendDanmu({
        text: '要显示的弹幕文本',
        color: '#FF0000'
      });
    },
    playbackRate() {
      this.context.playbackRate(2);
    }
  }
  ```
- 具体看官网api

## 6. 设备相关
- 示例
  ```js
  <uni-list class="content">
    <uni-list-item>{{ info.model===undefined?"":info.model }}</uni-list-item>
    <uni-list-item>{{ info.pixelRatio===undefined?"":info.pixelRatio }}</uni-list-item>
    <uni-list-item>{{ info.windowWidth===undefined?"":info.windowWidth }}</uni-list-item>
    <uni-list-item>{{ info.windowHeight===undefined?"":info.windowHeight }}</uni-list-item>
    <uni-list-item>{{ info.language===undefined?"":info.language }}</uni-list-item>
    <uni-list-item>{{ info.version===undefined?"":info.version }}</uni-list-item>
    <uni-list-item>{{ info.platform===undefined?"":info.platform }}</uni-list-item>
  </uni-list>
    
  <button type="default" @click="getInfo">getInfo</button>

  info: ''

  getInfo() {
    uni.getSystemInfo({
      // 需要使用箭头函数，否则无法找到this
      success: res=> {
        this.info = {
          model: res.model,
          pixelRatio: res.pixelRatio,
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,
          language: res.language,
          version: res.version,
          platform: res.platform,
        }
      }
    });

    // 拨打电话
    uni.makePhoneCall({
      phoneNumber: '114' //仅为示例
    });

    // 震动
    uni.vibrateLong({
      success: function () {
        console.log('success');
      }
    });

    // 剪切板
    // 略...
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  ```
- 具体看官网api

## 7. 界面相关
- 弹出框ui
  ```js
  getInfo() {
    uni.showToast({
      title: '标题',
      duration: 2000
    });
  }

  // loading
  uni.showLoading({
    title: '加载中'
  });
  
  setTimeout(function () {
    uni.hideLoading();
  }, 2000);

  // 导航栏
  uni.setNavigationBarTitle({
    title: '新的标题'
  });
  ```

## 8. 页面与窗体
- 传值
  ```js
  // 页面一
  <button type="default" @click="getInfo">getInfo</button>

  uni.$emit("change", {id: 1})
  // uni.$once("change", {id: 1})  // 只监听一次

  // 页面二
  onLoad() {
    uni.$on('change', data=> {
      console.log(data)
    })
  },
  ```
- 具体看官网api

## 9. 跨端兼容
- [api](https://uniapp.dcloud.io/platform?id=跨端兼容)
- 在 C 语言中，通过 #ifdef、#ifndef 的方式，为 windows、mac 等不同 os 编译不同的代码。 uni-app 参考这个思路，为 uni-app 提供了条件编译手段，在一个工程里优雅的完成了平台个性化实现
- API 的条件编译示例
  - 代码
    ```js
    // #ifdef APP_PLUS
    ... 仅 App 
    // #endif

    // #ifndef H5
    ... 禁 H5 
    // #endif

    // #ifdef APP_PLUS || H5
    ... 仅 App 和 H5 
    // #endif
    ```
  - 组件
    ```html
    <!--  #ifdef  %PLATFORM% -->
    平台特有的组件
    <!--  #endif -->
    ```
  - 样式
    ```js
    /*  #ifdef  %PLATFORM%  */
    平台特有样式
    /*  #endif  */
    ```
  - pages.json
    ```js
    // #ifdef  %PLATFORM%
    平台特有样式
    // #endif 
    ```

## 10. 分享
- uni.share只支持app
  ```js
  <button type="default" @click="getInfo">getInfo</button>

  getInfo() {
    // #ifdef APP-PLUS
    console.log("app")
    uni.share({
        provider: "weixin",
        scene: "WXSenceTimeline",
        type: 2,
        imageUrl: "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d8590190-4f28-11eb-b680-7980c8a877b8.png",
        success: function (res) {
            console.log("success:" + JSON.stringify(res));
        },
        fail: function (err) {
            console.log("fail:" + JSON.stringify(err));
        }
    });
    // #endif
  }
  ```
- 微信小程序要使用官方api
  ```js
  onShareAppMessage(res) {
    return {
      title: '自定义分享标题',
      path: '/pages/test/test?id=123'  // ?后面表示参数
    }
  },
  ```

## 11. 原生子窗体
- 由来
  - video、map等组件层级最高，无法用z-index调节
  - 微信已经解决，app未解决
- 子窗体的内容会覆盖在上方
  - 子窗体是nvue文件
  - 子窗体不支持微信小程序
  ```js
  // 创建nvue文件
  // /pages/test/subNVue/hello.nvue

  // 在pages.json里面配置
  {
    "path" : "pages/test/test",
    "style": {
      ...
      // 在下面添加
      "app-plus": {
        "titleNView": false , // 禁用原生导航栏
        // 对象数组，可以添加多个原生子窗体
        "subNVues":[
          {
            "id": "hello", //subNVue 的 id，可通过 uni.getSubNVueById('') 获取
            "path": "pages/test/subNVue/hello", // nvue 路径
            // 展现方式
            // "type": "navogationBar",  // 导航栏
            // "type": "popup",  // 导航栏
            "style": { //webview style 子集，文档可暂时开放出来位置，大小相关配置
              "position": "popup", // 除 popup 外，其他值域参考 5+ webview position 文档
              "width": "50%",
              "top": "50%"
            }
        }]
      }
    }
  }

  // 在vue文件中添加，因为只支持app，加了条件编译
  // 父组件或者子组件皆可
  <!-- #ifdef APP-PLUS -->
  <button type="default" @click="getInfo">显示子窗体</button>
  <button type="default" @click="hideInfo">隐藏子窗体</button>
  <!-- #endif -->

  subNVue: uni.getSubNVueById('hello')

  getInfo() {
    console.log(this.subNVue)
    this.subNVue.show()
  },
  hideInfo() {
    console.log(this.subNVue)
    this.subNVue.hide()
  }
  ```

---
<br />

<font color="#666" size="5">\~End~</font>