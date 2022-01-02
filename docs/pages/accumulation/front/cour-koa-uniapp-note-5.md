# 视频类小程序首页开发
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 新建项目
- 新建uniapp空项目
- 配置
  - 在pages中新建页面
    - 新建页面会生成一个目录和文件，目录名和文件名相同，因为一个vue文件会被打包成四个文件放在一个文件夹里面
    - 新建页面pages.json会将页面做相应配置
  - 配置tabBar
    - 后期不需要使用tabbar
    ```js
    "tabBar": {
      "list": [
        {
          "pagePath": "pages/index/index",
          // "text": "index"
        },
        {
          "pagePath": "pages/follow/follow",
          // "text": "follow"
        }
      ]
    }
    ```
  - 隐藏tabBar
    - App.vue
    ```js
    onLaunch: function() {
      console.log('App Launch')
      
      // 隐藏tabbar
      // 后期不需要使用tabbar
      uni.hideTabBar()
    },
    ```
  - 隐藏导航栏
    - pages.json
    ```js
    "globalStyle": {
      "navigationBarTextStyle": "white",  // 导航栏字体颜色
      "navigationStyle":"custom",  // 后期导航栏需要自定义
    }
    ```

## 2. 自定义tab栏
- 创建目录和文件
  - components/tab.vue
  ```html
  <uni-list class="tab_box">
		<uni-list-item class="tab_list">首页</uni-list-item>
		<uni-list-item class="tab_list">关注</uni-list-item>
		<uni-list-item class="tab_list">加号</uni-list-item>
		<uni-list-item class="tab_list">消息</uni-list-item>
		<uni-list-item class="tab_list">我</uni-list-item>
	</uni-list>

  <style lang="scss" scoped>
  .tab_box {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #000;
    
    .tab_list {
      flex: 1;
      text-align: center;
      color: #FFFFFF;
    }
  }
  </style>

  <!-- index -->
  <tab />

  import tab from '../../components/tab'

  components: {
    tab
  },
  ```
- 配置阿里图标库
  - 在阿里图标库新建项目，并下载
  - 在项目中新建目录fontface
  - 将下载过来的.ttf以及.woff文件复制到fontface目录
  - 打开下载过来的iconfont.css文件
  - 将里面的内容全部复制到项目中的app.vue文件中
    - 注意字体路径
  - 在项目里面任意地方可以在class加上`iconfont icon-uavdjiahao`使用
    - icon-uavdjiahao是在app.vue中复制的类名
- 最终结果
  ```html
  <uni-list class="tab_box">
		<uni-list-item class="tab_list">首页</uni-list-item>
		<uni-list-item class="tab_list">关注</uni-list-item>
		<uni-list-item class="iconfont icon-uavdjiahao tab_list jiahao"></uni-list-item>
		<uni-list-item class="tab_list">消息</uni-list-item>
		<uni-list-item class="tab_list">我</uni-list-item>
	</uni-list>

  <style lang="scss" scoped>
  .tab_box {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #000;
    
    .tab_list {
      flex: 1;
      text-align: center;
      color: #FFFFFF;
    }
    
    .jiahao {
      height: 35px;
      line-height: 35px;
      margin-top: 7px;
      border-radius: 6px;
      font-size: 15px;
      color: #000000;
      background: #FFFFFF;
    }
  }
  </style>
  ```

## 3. 开发中的要点
- 视频上下滑动用swiper组件
  - swiper默认有固定高度，设置100%不行，给他或者父级容器设置100vh才行
  - 本地在data里面引入路径要用require

## 3. 开发中遇到的问题


---
<br />

<font color="#666" size="5">\~End~</font>