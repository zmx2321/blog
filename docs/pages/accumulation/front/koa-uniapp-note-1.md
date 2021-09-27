# 配置uniapp环境
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 运行uniapp到小程序
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

## 2. 运行到安卓手机
- 安装需要用usb与电脑相连
- 需要打开手机的开发者选项，usb调试
- 手机usb配置选择mtp传输
- 此时hbuilderx的运行里面就会显示手机的选项了
- 点击运行之后会在手机里面安装基座，即app
- 修改页面代码就会同步在手机端显示了，即热加载

## 3. 运行到Chrome浏览器
- 运行 => 运行到浏览器 => chrome