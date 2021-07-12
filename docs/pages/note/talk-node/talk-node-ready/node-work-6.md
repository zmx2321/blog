# 配置爬虫系统和开发环境
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 了解爬虫环境需要的模块
- Express
  - 是最成熟，我们开发node最常用的作为server的模块
- Request
- Cheerio
  - 在爬虫里面至关重要，可以让我们像在前端一样处理从服务端拉取来的数据
  - 我们把数据从服务端拉取过来之后，他可以动态分析所有的dom元素
  - 它可以像jquery一样去操作，前提是我们需要将这个html转换为dom树

## 2. 开始搭建框架
### 2.1. 搭建express服务
- 方法一： 一步一步创建
1. `npm init`
2. `npm install express`
- 方法二: 直接使用express创建
- `npm install express -g`
  - 全局安装express
- `npm install express-generator -g`
  - 如果安装未成功，再安装一次这个插件
- `express spider`
  - 使用express创建spider项目
- `npm install`或者`yarn`
  - 需要进入到spider目录下 => `cd spider`
  - 安装依赖
- 进入到bin目录
  - `cd bin`
- 启动服务
  - `node www` => 默认是3000端口
  - 访问`localhost:3000`

### 2.2. 安装request以及cherrio
- `npm install request --save` 或 `yarn add request`
- `npm install cheerio --save` 或 `yarn add cheerio`

---
<br />

<font color="#666" size="5">\~End~</font>