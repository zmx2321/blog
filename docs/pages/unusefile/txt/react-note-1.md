# react脚手架入门
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 使用create-react-app创建react应用
### 1.1. react脚手架
1. react提供了一个用于创建react项目的脚手架库：[create-react-app](https://github.com/facebook/create-react-app)
2. 项目的整体架构为：react + webpack + es6 + eslint
3. 使用脚手架开发的项目特点：模块化、组件化、工程化

### 1.2 创建项目并启动
1. 安装全局react依赖
    - `npm install -g create-react-app`
2. 创建react项目
    - `create-react-app hello-react`
3. 进入到工程目录
    - `cd hello-react`
4. 运行react脚手架
    - `npm start`或`yarn start`
    - 在运行的时候会进行编译打包，但这个打包是在内存中进行的
5. 打包react项目
    - `npm build`或`yarn build`
- *注：如果发生报错：*<br />
*error @typescript-eslint/eslint-plugin@2.21.0: The engine “node” is incompatible with this module. Expected version “^8.10.0 || ^10.13.0 || >=11.10.1”. Got “10.12.0”
error Found incompatible module*<br />
*需执行一下命令：`yarn config set ignore-engines true`*

## 2. 实现一个react-demo
### 1. 步骤
1. 删除src下面的所有文件
2. 写一个入口js - index.js
3. 创建一个文件夹(components)里面放所有组件
    - 文件名小写，组件用大写
4. 创建一个组件(*.jsx)
5. 设置样式
6. `yarn start`运行

### 2. 示例
1. 入口文件-index.js
```js
import React from 'react'
import ReactDOM from 'react-dom'  // 渲染dom
import App from './components/app'  // 引入app组件

import "./index.css"  // 引入样式

// 这里的id看public下的index.html
ReactDOM.render(<App />, document.getElementById('root'));
```

2. 自定义组件-app.jsx
```js
import React, {Component} from 'react';
import logo from '../logo.svg'

export default class App extends Component {
    render() {
        return (
            <div>
                <img className="logo" src={logo} alt="logo" />
                <p>react app组件</p>
            </div>
        )
    }
}
```

3. 样式文件 - index.css
```css
.logo {
    width: 200px;
    height: 200px;
}
```