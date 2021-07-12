# 小程序相关笔记
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 在小程序中如何快速生成页面
在app.json文件中的page数组中添加路径，会自动创建文件夹，并生成其相对应的js、json、wxml和wxss文件

## 2. app.json中的参数配置详解
- tabBar对象中为底部菜单列表
示例：
```json
"tabBar": {
  "list": [
    {
      "pagePath": "pages/index/index",
      "text": "首页"
    },
    {
      "pagePath": "pages/logs/logs",
      "text": "日志"
    }
  ]
},
```