(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{788:function(s,a,t){"use strict";t.r(a);var n=t(25),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"配置uniapp环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置uniapp环境"}},[s._v("#")]),s._v(" 配置uniapp环境")]),s._v(" "),t("ClientOnly",[t("Valine")],1),s._v(" "),t("h2",{attrs:{id:"_1-运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-运行"}},[s._v("#")]),s._v(" 1. 运行")]),s._v(" "),t("h3",{attrs:{id:"_1-1-运行uniapp到小程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-运行uniapp到小程序"}},[s._v("#")]),s._v(" 1.1. 运行uniapp到小程序")]),s._v(" "),t("ul",[t("li",[s._v("下载\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://www.dcloud.io/hbuilderx.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载hbuilderx开发版"),t("OutboundLink")],1),s._v(" "),t("ul",[t("li",[s._v("下载app开发版")])])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载微信小程序工具"),t("OutboundLink")],1)])])]),s._v(" "),t("li",[s._v("启动hbuilderx")]),s._v(" "),t("li",[s._v("使用hbuilderx创建uniapp应用")]),s._v(" "),t("li",[s._v("配置\n"),t("ul",[t("li",[s._v("运行 => 运行到小程序模拟器 => 运行设置")]),s._v(" "),t("li",[s._v("在运行设置中写入小程序路径\n"),t("ul",[t("li",[t("code",[s._v("D:/微信web开发者工具")])])])]),s._v(" "),t("li",[s._v("关闭界面 => 运行 => 运行到小程序模拟器 => 这里选择第一个，即微信开发者工具")])])]),s._v(" "),t("li",[s._v("如果报错: "),t("code",[s._v("Enable IDE Service (y/N) [27D[27C")]),s._v(" "),t("ul",[t("li",[s._v("打开微信开发者工具 => 设置->安全->服务器端口")]),s._v(" "),t("li",[s._v("再在hbuilderx中运行")])])]),s._v(" "),t("li",[s._v("真机调试配置\n"),t("ul",[t("li",[s._v("打开manifest.json")]),s._v(" "),t("li",[s._v("跳转到微信小程序")]),s._v(" "),t("li",[s._v("填写APPID")])])])]),s._v(" "),t("h3",{attrs:{id:"_1-2-运行到安卓手机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-运行到安卓手机"}},[s._v("#")]),s._v(" 1.2. 运行到安卓手机")]),s._v(" "),t("ul",[t("li",[s._v("安装需要用usb与电脑相连")]),s._v(" "),t("li",[s._v("需要打开手机的开发者选项，usb调试")]),s._v(" "),t("li",[s._v("手机usb配置选择mtp传输")]),s._v(" "),t("li",[s._v("此时hbuilderx的运行里面就会显示手机的选项了")]),s._v(" "),t("li",[s._v("点击运行之后会在手机里面安装基座，即app")]),s._v(" "),t("li",[s._v("修改页面代码就会同步在手机端显示了，即热加载")])]),s._v(" "),t("h3",{attrs:{id:"_1-3-运行到chrome浏览器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-运行到chrome浏览器"}},[s._v("#")]),s._v(" 1.3. 运行到Chrome浏览器")]),s._v(" "),t("ul",[t("li",[s._v("运行 => 运行到浏览器 => chrome")])]),s._v(" "),t("h2",{attrs:{id:"_2-目录结构简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-目录结构简介"}},[s._v("#")]),s._v(" 2. 目录结构简介")]),s._v(" "),t("ul",[t("li",[s._v("pages => 业务页面存放路径\n"),t("ul",[t("li",[s._v("里面每个文件夹表示一个页面")]),s._v(" "),t("li",[s._v("里面都是vue文件")]),s._v(" "),t("li",[s._v("可以把pages里面的vue文件提出来，但pages.json文件里面要做对应修改，而且编译后，小程序里面的pages文件就不是用文件夹包着的了\n"),t("ul",[t("li",[s._v("按照原生小程序的写法是一个页面一个文件夹，文件夹里面有wxml、json、wxss、js四个文件，如果uniapp里面不区分文件夹，那编译后的小程序pages目录里面就没有文件夹，会显得比较零乱")])])]),s._v(" "),t("li",[s._v("每次新建页面，都会在pages里面生成一个文件夹，并且在pages.json里面也会生成相应配置，新建页面下面有在pages.json中注册的复选框，下面的文本可以进行编辑")])])]),s._v(" "),t("li",[s._v("static => 静态资源\n"),t("ul",[t("li",[s._v("图片、视频")])])]),s._v(" "),t("li",[s._v("unpackage => 编译后页面存放路径")]),s._v(" "),t("li",[s._v("App.vue\n"),t("ul",[t("li",[s._v("一些全局配置或监听全局")])])]),s._v(" "),t("li",[s._v("main.js => 初始化入口文件")]),s._v(" "),t("li",[s._v("manifest.json => 项目配置文件\n"),t("ul",[t("li",[s._v("对项目进行配置")]),s._v(" "),t("li",[s._v("启动图标、sdk(地图支付等)")])])]),s._v(" "),t("li",[s._v("pages.json => 配置文件\n"),t("ul",[t("li",[s._v("配置页面路由、导航条、选项卡等")]),s._v(" "),t("li",[s._v("重点：经常会被用到")])])]),s._v(" "),t("li",[s._v("uni.scss => 全局样式文件\n"),t("ul",[t("li",[s._v("uni-app的编译器在webpack配置中特殊处理了这个uni.scss，使得每个scss文件都被注入这个uni.scss，达到全局可用的效果")]),s._v(" "),t("li",[s._v("如果开发者想要less、stylus的全局使用，需要在vue.config.js中自行配置webpack策略")])]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- uni.scss --\x3e")]),s._v("\n$fontColor: #f00;\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 任意vue文件 --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("lang")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("scss"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("scoped")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token style"}},[t("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".title")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $fontColor "),t("span",{pre:!0,attrs:{class:"token important"}},[s._v("!important")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"_3-页面样式及布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-页面样式及布局"}},[s._v("#")]),s._v(" 3. 页面样式及布局")]),s._v(" "),t("ul",[t("li",[s._v("px和rpx\n"),t("ul",[t("li",[s._v("rpx是以总宽度为750像素，以一定比例进行缩放的")]),s._v(" "),t("li",[s._v("width: 375rpx即表现为占屏幕的一半")]),s._v(" "),t("li",[s._v("可以理解为50% => 375/750 = 0.5")])])]),s._v(" "),t("li",[s._v("样式导入\n"),t("ul",[t("li",[s._v("外部导入 => "),t("code",[s._v('improt "../xx.css"')])]),s._v(" "),t("li",[s._v("全局样式在app.vue中定义")]),s._v(" "),t("li",[s._v("全局样式定义在uniapp中配置")])])])]),s._v(" "),t("h2",{attrs:{id:"_4-配置文件pages-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置文件pages-json"}},[s._v("#")]),s._v(" 4. 配置文件pages.json")]),s._v(" "),t("ul",[t("li",[s._v("通用\n"),t("ul",[t("li",[s._v("pages数组中第一项表示应用启动页")]),s._v(" "),t("li",[s._v("globalStyle优先级比独立页面的style低，他是通用样式")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://uniapp.dcloud.io/collocation/pages?id=globalstyle",target:"_blank",rel:"noopener noreferrer"}},[s._v("globalStyle配置参考"),t("OutboundLink")],1)])])]),s._v(" "),t("li",[s._v("常用配置\n"),t("ul",[t("li",[s._v("navigationBarBackgroundColor => 导航栏颜色")]),s._v(" "),t("li",[s._v("navigationBarTitleText => 导航栏标题内容")]),s._v(" "),t("li",[s._v("navigationBarTextStyle => 导航栏标题字体颜色\n"),t("ul",[t("li",[s._v("只有黑白：black/white")])])]),s._v(" "),t("li",[s._v("tabBar\n"),t("ul",[t("li",[s._v("可以添加2~5项")]),s._v(" "),t("li",[s._v("和globalStyle同级")]),s._v(" "),t("li",[s._v("color => 字体颜色")]),s._v(" "),t("li",[s._v("color => 字体选中颜色")]),s._v(" "),t("li",[s._v("borderStyle => 目前只支持黑白")]),s._v(" "),t("li",[s._v("list => 内容\n"),t("ul",[t("li",[s._v("pagePath => 页面地址")]),s._v(" "),t("li",[s._v("iconPath => 图标地址")]),s._v(" "),t("li",[s._v("selectedIconPath => 选择时改变图标")]),s._v(" "),t("li",[s._v("text => 标题")])])]),s._v(" "),t("li",[s._v("condition => 启动模式配置，仅开发时生效\n"),t("ul",[t("li",[s._v("是一个非常实用的工具")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"condition"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//模式配置，仅开发期间生效")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"current"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//当前激活的模式（list 的索引项）")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"list"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"swiper"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//模式名称")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pages/component/swiper/swiper"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//启动页面，必选")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"query"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"interval=4000&autoplay=false"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//启动参数，在页面的onLoad函数里面得到。")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pages/component/switch/switch"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])])])])])])]),s._v(" "),t("h2",{attrs:{id:"_5-uni-app的生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-uni-app的生命周期"}},[s._v("#")]),s._v(" 5. uni-app的生命周期")]),s._v(" "),t("ul",[t("li",[s._v("应用生命周期\n"),t("ul",[t("li",[s._v("简介\n"),t("ul",[t("li",[s._v("打开应用 => 开始")]),s._v(" "),t("li",[s._v("关闭应用 => 结束")])])]),s._v(" "),t("li",[s._v("常用钩子\n"),t("ul",[t("li",[s._v("onLaunch => 初始化完成时触发(只触发一次)")]),s._v(" "),t("li",[s._v("onShow => 启动，后台进入前台")]),s._v(" "),t("li",[s._v("onHide => 前台进入后台")]),s._v(" "),t("li",[s._v("onError => 报错时触发")]),s._v(" "),t("li",[s._v("onUniNViewMessage => 对 nvue 页面发送的数据进行监听")])])]),s._v(" "),t("li",[s._v("注意事项\n"),t("ul",[t("li",[s._v("应用生命周期仅可在App.vue中监听，在其它页面监听无效")])])])])]),s._v(" "),t("li",[s._v("页面生命周期\n"),t("ul",[t("li",[s._v("简介\n"),t("ul",[t("li",[s._v("打开页面 => 开始")]),s._v(" "),t("li",[s._v("关闭页面 => 结束")])])]),s._v(" "),t("li",[s._v("常用钩子\n"),t("ul",[t("li",[s._v("onInit => 触发时机早于 onLoad")]),s._v(" "),t("li",[s._v("onLoad => 监听页面加载，其参数为上个页面传递的数据")]),s._v(" "),t("li",[s._v("onShow => 页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面")]),s._v(" "),t("li",[s._v("onReady => 注意如果渲染速度快，会在页面进入动画完成前触发")]),s._v(" "),t("li",[s._v("onResize => 监听窗口尺寸变化")]),s._v(" "),t("li",[s._v("onReachBottom => 页面滚动到底部的事件")]),s._v(" "),t("li",[s._v("onTabItemTap => 点击 tab 时触发")]),s._v(" "),t("li",[s._v("onShareAppMessage => 点击右上角分享")]),s._v(" "),t("li",[s._v("onShareTimeline => 点击右上角转发到朋友圈")]),s._v(" "),t("li",[s._v("onAddToFavorites => 点击右上角收藏")])])])])])]),s._v(" "),t("h2",{attrs:{id:"_6-注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-注意事项"}},[s._v("#")]),s._v(" 6. 注意事项")]),s._v(" "),t("ul",[t("li",[s._v("nvue\n"),t("ul",[t("li",[s._v("uni-app App端内置了一个基于 weex 改进的原生渲染引擎，提供了原生渲染能力")]),s._v(" "),t("li",[s._v("在App端，如果使用vue页面，则使用webview渲染；如果使用nvue页面(native vue的缩写)，则使用原生渲染。一个App中可以同时使用两种页面，比如首页使用nvue，二级页使用vue页面，hello uni-app示例就是如此")])])]),s._v(" "),t("li",[s._v("虽然nvue也可以多端编译，输出H5和小程序，但nvue的css写法受限，所以如果你不开发App，那么不需要使用nvue")])]),s._v(" "),t("hr"),s._v(" "),t("br"),s._v(" "),t("p",[t("font",{attrs:{color:"#666",size:"5"}},[s._v("~End~")])],1)],1)}),[],!1,null,null,null);a.default=e.exports}}]);