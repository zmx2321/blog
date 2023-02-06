(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{830:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"初识-vue3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初识-vue3"}},[t._v("#")]),t._v(" 初识 vue3")]),t._v(" "),a("ClientOnly",[a("Valine")],1),t._v(" "),a("h2",{attrs:{id:"_1-vue-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-简介"}},[t._v("#")]),t._v(" 1. vue 简介")]),t._v(" "),a("ul",[a("li",[t._v("vue 是一套用于构建用户界面的渐进式框架\n"),a("ul",[a("li",[t._v("渐进式框架表示我们可以在项目中一点点来引入和使用 vue，而不一定需要全部使用 vue 来开发整个项目")])])]),t._v(" "),a("li",[t._v("vue3 兼容 vue2，基础概念是一模一样的")]),t._v(" "),a("li",[t._v("目前 vue3 社区类似 AntDesignVue、Element-Plus 都提供了对 vue3 的支持，越来越完善了，并且面试也问到越来越多的 vue3、vite2 相关的问题，所以目前来看还是比较推荐学习 vue3")])]),t._v(" "),a("h2",{attrs:{id:"_2-vue3-带来的变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue3-带来的变化"}},[t._v("#")]),t._v(" 2. vue3 带来的变化")]),t._v(" "),a("ul",[a("li",[t._v("从源码角度\n"),a("ul",[a("li",[t._v("从 monorepo 的形式管理源代码\n"),a("ul",[a("li",[t._v("单个 repository 仓库")]),t._v(" "),a("li",[t._v("将许多项目的代码存储在一个 repository 中")]),t._v(" "),a("li",[t._v("这样可以使多个包本身相互独立，可以有自己的功能逻辑、单元测试等，同时又在同一个仓库下方便管理")]),t._v(" "),a("li",[t._v("模块的划分更清晰，可维护性可扩展性更强")]),t._v(" "),a("li",[t._v("现在很多库都是用这种方式进行管理的")])])]),t._v(" "),a("li",[t._v("源码全部使用 ts 进行重写\n"),a("ul",[a("li",[t._v("vue2x => 使用 flow 来进行类型检测")]),t._v(" "),a("li",[t._v("vue3x =? 源码全部使用 ts 进行重构，并且本身对 ts 的支持也更好了")])])])])]),t._v(" "),a("li",[t._v("从性能角度\n"),a("ul",[a("li",[t._v("vue3 是用 proxy 进行数据劫持\n"),a("ul",[a("li",[t._v("vue2x => 是使用 Object.definePropery 来劫持数据的 getter 和 Setter 方法的\n"),a("ul",[a("li",[t._v("这种方法存在缺陷，给当前对象添加或者删除属性的时候，无法奏效，需要用 vue2 封装的$set或者$delete 方法来修改或者删除对象属性")])])])])]),t._v(" "),a("li",[t._v("删除了一些不必要的 api\n"),a("ul",[a("li",[t._v("移除了实例上的$on、$off、$once")]),t._v(" "),a("li",[t._v("移除了一些特性: filter、内联模块等")])])]),t._v(" "),a("li",[t._v("编译上的优化\n"),a("ul",[a("li",[t._v("生成的 Block Tree、Slot 编译优化、diff 算法优化")])])])])]),t._v(" "),a("li",[t._v("新的 api\n"),a("ul",[a("li",[t._v("从 Options Api 到 Composition Api\n"),a("ul",[a("li",[t._v("vue2x => 我们会通过 Options Api 来描述对象\n"),a("ul",[a("li",[t._v("Options Api => 包括 data、props、methods、computed、生命周期等内容")]),t._v(" "),a("li",[t._v("存在比较大的问题是多个逻辑可能在不同的地方\n"),a("ul",[a("li",[t._v("比如 create 中会使用某一个 method 来修改 data 数据，代码内聚性不太好")])])])])]),t._v(" "),a("li",[t._v("Composition Api 可以将相关联的代码放到同一处进行处理，而不需要在多个 Options 之间寻找")])])]),t._v(" "),a("li",[t._v("通过 hooks 函数增加代码的复用性\n"),a("ul",[a("li",[t._v("vue2x => 我们通常使用 mixins 在多个组件之间共享逻辑\n"),a("ul",[a("li",[t._v("mixins 有个很大的缺陷，mixins 也是由一堆 Optionss 组成的，并且多个 mixins 会存在命名冲突的问题")])])]),t._v(" "),a("li",[t._v("vue3x => 我们可以通过 hooks 函数，将一部分独立的逻辑抽取出去，并且他们还是响应式的")])])])])])]),t._v(" "),a("h2",{attrs:{id:"_3、vue-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、vue-的使用"}},[t._v("#")]),t._v(" 3、vue 的使用")]),t._v(" "),a("blockquote",[a("p",[t._v("vue 的本质，就是一个 js 库")])]),t._v(" "),a("ul",[a("li",[t._v("使用vue的方式\n"),a("ul",[a("li",[t._v("通过cdn库引入\n"),a("ul",[a("li",[t._v("通过相互连接的网络，利用最靠近每个用户的服务器，更快地将资源发送给用户")])])]),t._v(" "),a("li",[t._v("手动引入")]),t._v(" "),a("li",[t._v("通过npm包管理工具安装使用")]),t._v(" "),a("li",[t._v("直接用脚手架")])])]),t._v(" "),a("li",[t._v("常用的cdn服务器\n"),a("ul",[a("li",[t._v("自己可以购买cdn服务器： 一般云服务商都有")]),t._v(" "),a("li",[t._v("开源的cdn服务器：国内用的比较多的是unpkg、jsdelivr、cdnjs")])])])]),t._v(" "),a("h2",{attrs:{id:"_4、vue3初识示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、vue3初识示例"}},[t._v("#")]),t._v(" 4、vue3初识示例")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/vue@next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dom模板")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" why "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h2>Hello World</h2>'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// createApp为vue的一个方法，里面放对象(dom对象)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("why"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将vue中createApp返回的内容挂载到id为app的dom节点上")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者使用链式")]),t._v("\n    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h2>Hello World</h2>'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// createApp中的对象实际上不止有template一个属性，还包含其他的属性，那些属性实际上是vue中的的各种api,即钩子")]),t._v("\n    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h2>Hello World</h2>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data是一个属性，只是这个属性对应的值为函数，但这个方法里面需要返回一个对象，这个对象中可以任意定义属性")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象中定义的属性会被vue加入到响应式系统里面，并且是可以被模板使用的")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里的this实际上拿的是proxy的代理")]),t._v("\n        methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br")])]),a("h2",{attrs:{id:"_5、声明式编程和命令式编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、声明式编程和命令式编程"}},[t._v("#")]),t._v(" 5、声明式编程和命令式编程")]),t._v(" "),a("blockquote",[a("p",[t._v("编程范式")])]),t._v(" "),a("ul",[a("li",[t._v("原生js => 命令式编程 => how to do\n"),a("ul",[a("li",[t._v("完成一个操作我们需要做哪些事情")]),t._v(" "),a("li",[t._v("相当于给浏览器一条条命令，让他去完成")]),t._v(" "),a("li",[t._v("包括jquery也是命令式编程")])])]),t._v(" "),a("li",[t._v("vue => 声明式编程 => what to do\n"),a("ul",[a("li",[t._v("你需要做什么")]),t._v(" "),a("li",[t._v("不用关心怎么做，由框架完成 how 的过程")]),t._v(" "),a("li",[t._v("目前大部分前端框架都是声明式编程")])])]),t._v(" "),a("li",[t._v("vue的体系结构\n"),a("ul",[a("li",[t._v("通常情况下，我们也常称vue是一个mvvm框架")]),t._v(" "),a("li",[t._v("但vue官方其实有说明，vue虽然并没有完全遵守mvvm的模型，但是整个设计是受到他的启发的")]),t._v(" "),a("li",[t._v("dom => vue => js\n"),a("ul",[a("li",[t._v("dom => 相当于view")]),t._v(" "),a("li",[t._v("vue => 相当于viewmodel\n"),a("ul",[a("li",[t._v("dom事件监听使用vue操作到js => 如@click")]),t._v(" "),a("li",[t._v("js的dom渲染使用vue操作到dom => 如{{}}")])])]),t._v(" "),a("li",[t._v("js => 相当于model")])])])])])]),t._v(" "),a("h2",{attrs:{id:"_6-vue中的template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-vue中的template"}},[t._v("#")]),t._v(" 6. vue中的template")]),t._v(" "),a("h3",{attrs:{id:"简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[t._v("#")]),t._v(" 简述")]),t._v(" "),a("ul",[a("li",[t._v("要使用vue钩子里面的数据，必须要在template模板里面写，vue会帮助我们渲染的模板信息")]),t._v(" "),a("li",[t._v("官方文档中已经说明，template中如果字符串是以 # 开头，，将被用作querySelector,并且匹配元素的innerHtml作为模板字符串")]),t._v(" "),a("li",[t._v("vue2中只允许有一个根元素")]),t._v(" "),a("li",[t._v("vue3可以有多个根元素")])]),t._v(" "),a("h3",{attrs:{id:"写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写法"}},[t._v("#")]),t._v(" 写法")]),t._v(" "),a("h4",{attrs:{id:"写法一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写法一"}},[t._v("#")]),t._v(" 写法一")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("x-template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("why"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button @click"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'increment'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button @click"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'decrement'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 相当于document.querySelector("#why")')]),t._v("\n        template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#why'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h4",{attrs:{id:"写法二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写法二"}},[t._v("#")]),t._v(" 写法二")]),t._v(" "),a("ul",[a("li",[t._v("html里面本身就定义过template的，并不是vue特有的\n"),a("ul",[a("li",[t._v("在原生js的定义中，template里面的东西不会被浏览器渲染的，其实就是给js读取的")]),t._v(" "),a("li",[t._v("mdn文档中写道，虽然解析器在加载页面时确实会处理template元素的内容，但这样做只是为了确保这些内容有效，但内容不会被渲染，他是一种用于保护客户端内容的机制，可以在运行的时候使用js实例化")])])])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("why"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{message}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{counter}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("increment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("+1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("decrement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("-1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btnClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("按钮"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 把template交给vue去渲染，也可以当做document.querySelector("#why")')]),t._v("\n        template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#why'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("h2",{attrs:{id:"_7-vue中的data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-vue中的data"}},[t._v("#")]),t._v(" 7. vue中的data")]),t._v(" "),a("ul",[a("li",[t._v("data属性是传入一个函数，并且该函数需要返回一个对象\n"),a("ul",[a("li",[t._v("vue2x => 也可以传入对象，但官方推荐是函数")]),t._v(" "),a("li",[t._v("vue3x => 必须传入函数，否则报错")])])]),t._v(" "),a("li",[t._v("data中返回的对象会被Vue的响应式系统劫持，之后对该对象的修改或者访问都会在劫持中处理\n"),a("ul",[a("li",[t._v("所以在template中可以通过 {{}} 访问数据")]),t._v(" "),a("li",[t._v("所以我们在修改data中的值得时候，template中的{{}}也会发生改变")])])]),t._v(" "),a("li",[t._v("具体原因就涉及到响应式原理")])]),t._v(" "),a("h2",{attrs:{id:"_8-vue中的methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-vue中的methods"}},[t._v("#")]),t._v(" 8. vue中的methods")]),t._v(" "),a("ul",[a("li",[t._v("methods属性是一个对象，通常我们会在这个对象中定义很多方法\n"),a("ul",[a("li",[t._v("这些方法可以被绑定到template中")]),t._v(" "),a("li",[t._v("在该方法中，我们可以使用this关键字来直接访问到data中返回的对象的属性")]),t._v(" "),a("li",[t._v("不能用箭头函数，因为箭头函数不绑定this，会向上层作用域中去找，而定义对象时的方法块里面不算是作用域，此时this指向window\n"),a("ul",[a("li",[a("code",[t._v("Vue.createApp({})")]),t._v(" => 里面实际上只是一个对象，而不是函数，所以不是作用域")])])]),t._v(" "),a("li",[t._v("methods里面的this实际上是调用了 bind(proxy)\n"),a("img",{attrs:{src:"/blog/images/accumulation/front/cour-vue3-ts-note/vueym1.png",alt:"vueym1"}})])])])]),t._v(" "),a("h2",{attrs:{id:"_9-vue中的其他属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-vue中的其他属性"}},[t._v("#")]),t._v(" 9. vue中的其他属性")]),t._v(" "),a("ul",[a("li",[t._v("props、computed、watch、emit、setup等")]),t._v(" "),a("li",[t._v("还包括生命周期")])]),t._v(" "),a("h2",{attrs:{id:"_10-如何看vue源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-如何看vue源码"}},[t._v("#")]),t._v(" 10. 如何看vue源码")]),t._v(" "),a("ul",[a("li",[t._v("github搜索vue-next,建议使用git下载\n"),a("ul",[a("li",[t._v("使用压缩的方式下载的，可能运行不起来")])])]),t._v(" "),a("li",[t._v("vue的源代码是用yarn管理的\n"),a("ul",[a("li",[t._v("下载下来需要安装依赖\n"),a("ul",[a("li",[t._v("yarn install")])])])])]),t._v(" "),a("li",[t._v("其中的packages为源码")]),t._v(" "),a("li",[t._v("在package.json中修改\n"),a("ul",[a("li",[a("code",[t._v('"dev": "node scripts/dev.js --sourcemap",')]),t._v(" 可以定位到具体的ts文件，否则只能定位到打包的js文件")]),t._v(" "),a("li",[t._v("会生成一个"),a("code",[t._v("vue.global.js.map")]),t._v("文件")]),t._v(" "),a("li",[t._v("代码映射")]),t._v(" "),a("li",[a("code",[t._v("yarn dev")]),t._v(" 打包")])])]),t._v(" "),a("li",[t._v("可以通过"),a("code",[t._v("packages/vue/dist/vue.global.js")]),t._v("中调试代码")])]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("p",[a("font",{attrs:{color:"#666",size:"5"}},[t._v("~End~")])],1)],1)}),[],!1,null,null,null);s.default=e.exports}}]);