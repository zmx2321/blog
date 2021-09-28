# 配置uniapp环境
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 运行
### 1.1. 运行uniapp到小程序
- 下载
  - [下载hbuilderx开发版](https://www.dcloud.io/hbuilderx.html)
  - [下载微信小程序工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- 启动hbuilderx
- 使用hbuilderx创建uniapp应用
- 配置
  - 运行 => 运行到小程序模拟器 => 运行设置
  - 在运行设置中写入小程序路径
    - `D:/微信web开发者工具`
  - 关闭界面 => 运行 => 运行到小程序模拟器 => 这里选择第一个，即微信开发者工具
- 如果报错: `Enable IDE Service (y/N) [27D[27C`
  - 打开微信开发者工具 => 设置->安全->服务器端口
  - 再在hbuilderx中运行
- 真机调试配置
  - 打开manifest.json
  - 跳转到微信小程序
  - 填写APPID

### 1.2. 运行到安卓手机
- 安装需要用usb与电脑相连
- 需要打开手机的开发者选项，usb调试
- 手机usb配置选择mtp传输
- 此时hbuilderx的运行里面就会显示手机的选项了
- 点击运行之后会在手机里面安装基座，即app
- 修改页面代码就会同步在手机端显示了，即热加载

### 1.3. 运行到Chrome浏览器
- 运行 => 运行到浏览器 => chrome

## 2. 目录结构简介
- pages => 业务页面存放路径
  - 里面每个文件夹表示一个页面
  - 里面都是vue文件
  - 可以把pages里面的vue文件提出来，但pages.json文件里面要做对应修改，而且编译后，小程序里面的pages文件就不是用文件夹包着的了
    - 安装原生的写法是一个页面一个文件夹，文件夹里面有wxml、json、wxss、js四个文件，如果uniapp里面不区分文件夹，那编译后的小程序pages目录里面就没有文件夹，会显得比较零散
- static => 静态资源
  - 图片、视屏
- unpackage => 编译后页面存放路径
- App.vue
  - 一些全局配置或监听全局
- main.js => 初始化入口文件
- manifest.json => 项目配置文件
  - 对项目进行配置
  - 启动图标、sdk(地图支付等)
- pages.json => 配置文件
  - 配置页面路由、导航条、选项卡等
  - 重点：经常会被用到
- uni.scss => 全局样式文件
  - uni-app的编译器在webpack配置中特殊处理了这个uni.scss，使得每个scss文件都被注入这个uni.scss，达到全局可用的效果
  - 如果开发者想要less、stylus的全局使用，需要在vue.config.js中自行配置webpack策略
  ```html
  <!-- uni.scss -->
  $fontColor: #f00;

  <!-- 任意vue文件 -->
  <style lang="scss" scoped>
    .title {
      color: $fontColor !important;
    }
  </style>
  ```

## 3. 页面样式及布局
- px和rpx
  - rpx是以总宽度为750像素，以一定比例进行缩放的
  - width: 375rpx即表现为占屏幕的一半
  - 可以理解为50% => 375/750 = 0.5
- 样式导入
  - 外部导入 => `improt "../xx.css"`

## 4. 配置文件pages.json


---
<br />

<font color="#666" size="5">\~End~</font>