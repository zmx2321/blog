# react入门简介
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

[系列笔记地址传送带](https://zmx2321.github.io/blog_code/accumulation/front/react-note/react入门系列/index.html)

## 1. react基本设定
- 如果要是用react的话(使用src引用)必须引用以下插件:
  - react.js => 核心js
  - react-dom.js => 虚拟dom
  - babel => jsx(React 使用 JSX 来替代常规的 JavaScript，但jsx使用的是ES6b标准,在生产环节中，我们通常直接将jsx编译为js，但自己调试的时候可以加入browser.js在浏览器端转换jsx文件)

## 2. 推荐一个实用工具
- bower => js所有框架库包管理器，可以下载资源文件到本地（react、jquery、cesium）
- bower - 依赖于node
- npm install bower -g
- bower
  - ~ info(信息) => bower install react(查看react版本)
    - npm info react(也可以查react版本)
  - ~ install(下载)

## 3. 下载react
- bower install react => 默认下载最高版本
- 指定某个版本
  - bower install react#15.6.1(目前比较稳定) .. 不能有空格

## 4. 渲染react
- react-dom.js提供我们一个方法(ReactDOM.render())用来渲染
```jsx
ReactDOM.render(
  // 第一个参数 - 组件 （内容、元素）
  // 第二个参数 - 位置 （放到哪）
);
```
- 书写格式示例：
```html
<script src="../react.js"></script>
<script src="../react-dom.js"></script>
<script src="../browser.js"></script>
...
<div id="app"></div>

<script type="text/babel">
  ReactDOM.render(
    // 必须有一个根元素
    // 允许加括号
    // 单标签必须闭合
    // 必须使用className
    (<h1 className="helo">hello</h1>),
    document.getElementById("app");
  );
</script>

或

<script type="text/babel">
  let b = "hro"
  let c = "cls"

  // 模板字符串
  // style中第一层括号表示告诉jsx我要用js代码了，第二层括号表示json
  // jsx支持style - 里面使用json
  let a = <h1 style={{'background': 'green'}}><span className={c}></span>hello, { b }</h1>

  ReactDOM.render(
    a,
    document.getElementById("app");
  );
</script>
```

## 5. 事件
- 使用驼峰命名法
  - onclick => onClick
```jsx
// 直接输出
<div onClick={alert(1)}></div>

// 定义方法
let show = ()=> {
  alert(1);
}
<div onClick={show}></div>
```