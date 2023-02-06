(window.webpackJsonp=window.webpackJsonp||[]).push([[657],{1410:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react脚手架入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react脚手架入门"}},[t._v("#")]),t._v(" react脚手架入门")]),t._v(" "),a("ClientOnly",[a("Valine")],1),t._v(" "),a("h2",{attrs:{id:"_1-使用create-react-app创建react应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用create-react-app创建react应用"}},[t._v("#")]),t._v(" 1. 使用create-react-app创建react应用")]),t._v(" "),a("h3",{attrs:{id:"_1-1-react脚手架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-react脚手架"}},[t._v("#")]),t._v(" 1.1. react脚手架")]),t._v(" "),a("ol",[a("li",[t._v("react提供了一个用于创建react项目的脚手架库："),a("a",{attrs:{href:"https://github.com/facebook/create-react-app",target:"_blank",rel:"noopener noreferrer"}},[t._v("create-react-app"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("项目的整体架构为：react + webpack + es6 + eslint")]),t._v(" "),a("li",[t._v("使用脚手架开发的项目特点：模块化、组件化、工程化")])]),t._v(" "),a("h3",{attrs:{id:"_1-2-创建项目并启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-创建项目并启动"}},[t._v("#")]),t._v(" 1.2 创建项目并启动")]),t._v(" "),a("ol",[a("li",[t._v("安装全局react依赖\n"),a("ul",[a("li",[a("code",[t._v("npm install -g create-react-app")])])])]),t._v(" "),a("li",[t._v("创建react项目\n"),a("ul",[a("li",[a("code",[t._v("create-react-app hello-react")])])])]),t._v(" "),a("li",[t._v("进入到工程目录\n"),a("ul",[a("li",[a("code",[t._v("cd hello-react")])])])]),t._v(" "),a("li",[t._v("运行react脚手架\n"),a("ul",[a("li",[a("code",[t._v("npm start")]),t._v("或"),a("code",[t._v("yarn start")])]),t._v(" "),a("li",[t._v("在运行的时候会进行编译打包，但这个打包是在内存中进行的")])])]),t._v(" "),a("li",[t._v("打包react项目\n"),a("ul",[a("li",[a("code",[t._v("npm build")]),t._v("或"),a("code",[t._v("yarn build")])])])])]),t._v(" "),a("ul",[a("li",[a("em",[t._v("注：如果发生报错：")]),a("br"),t._v(" "),a("em",[t._v("error @typescript-eslint/eslint-plugin@2.21.0: The engine “node” is incompatible with this module. Expected version “^8.10.0 || ^10.13.0 || >=11.10.1”. Got “10.12.0”\nerror Found incompatible module")]),a("br"),t._v(" "),a("em",[t._v("需执行一下命令："),a("code",[t._v("yarn config set ignore-engines true")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-实现一个react-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现一个react-demo"}},[t._v("#")]),t._v(" 2. 实现一个react-demo")]),t._v(" "),a("h3",{attrs:{id:"_1-步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-步骤"}},[t._v("#")]),t._v(" 1. 步骤")]),t._v(" "),a("ol",[a("li",[t._v("删除src下面的所有文件")]),t._v(" "),a("li",[t._v("写一个入口js - index.js")]),t._v(" "),a("li",[t._v("创建一个文件夹(components)里面放所有组件\n"),a("ul",[a("li",[t._v("文件名小写，组件用大写")])])]),t._v(" "),a("li",[t._v("创建一个组件(*.jsx)")]),t._v(" "),a("li",[t._v("设置样式")]),t._v(" "),a("li",[a("code",[t._v("yarn start")]),t._v("运行")])]),t._v(" "),a("h3",{attrs:{id:"_2-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-示例"}},[t._v("#")]),t._v(" 2. 示例")]),t._v(" "),a("ol",[a("li",[t._v("入口文件-index.js")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ReactDOM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-dom'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染dom")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components/app'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入app组件")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./index.css"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入样式")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里的id看public下的index.html")]),t._v("\nReactDOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("App "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("自定义组件-app.jsx")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../logo.svg'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("img className"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logo"')]),t._v(" src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("logo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" alt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logo"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("react app组件"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("样式文件 - index.css")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".logo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);