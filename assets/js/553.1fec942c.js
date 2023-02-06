(window.webpackJsonp=window.webpackJsonp||[]).push([[553],{1306:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ecmascript5-1新增语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecmascript5-1新增语法"}},[t._v("#")]),t._v(" ECMAScript5.1新增语法")]),t._v(" "),a("ClientOnly",[a("Valine")],1),t._v(" "),a("h4",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),a("h6",[t._v(" 1. ECMAScript5.1简介 ")]),t._v(" "),a("h6",[t._v(" 2. 浏览器支持 ")]),t._v(" "),a("h6",[t._v(" 3. 严格模式 ")]),t._v(" "),a("h6",[t._v(" 4. JSON格式 ")]),t._v(" "),a("h6",[t._v(" 5. 添加对象 ")]),t._v(" "),a("h6",[t._v(" 6. 额外的数组 ")]),t._v(" "),a("h6",[t._v(" 7. Function.prototype.bind ")]),t._v(" "),a("h6",[t._v(" 8. JavaScript this的使用 ")]),t._v(" "),a("h6",[t._v(" 9. JavaScript作用域和闭包 ")]),t._v(" "),a("h6",[t._v(" 10. 按值传递和按引用传递 ")]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_1-ecmascript5-1简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-ecmascript5-1简介"}},[t._v("#")]),t._v(" 1. ECMAScript5.1简介")]),t._v(" "),a("blockquote",[a("p",[t._v("ECMAScript 5.1 (或仅 ES5) 是ECMAScript(基于JavaScript的规范)标准最新修正。 与HTML5规范进程本质类似，ES5通过对现有JavaScript方法添加语句和原生ECMAScript对象做合并实现标准化。ES5还引入了一个 语法的严格变种，被称为”严格模式(strict mode)”。")])]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_2-浏览器支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-浏览器支持"}},[t._v("#")]),t._v(" 2. 浏览器支持")]),t._v(" "),a("h3",{attrs:{id:"各大厂商浏览器支持情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各大厂商浏览器支持情况"}},[t._v("#")]),t._v(" 各大厂商浏览器支持情况")]),t._v(" "),a("ul",[a("li",[t._v("Opera 11.60")]),t._v(" "),a("li",[t._v("Internet Explorer 9*\n"),a("ul",[a("li",[t._v("ie9不支持严格模式，ie10添加")])])]),t._v(" "),a("li",[t._v("Firefox 4")]),t._v(" "),a("li",[t._v("Safari 5.1**\n"),a("ul",[a("li",[t._v("Safari 5.1 仍不支持 Function.prototype.bind, 尽管 Function.prototype.bind现在已经被Webkit所支持")])])]),t._v(" "),a("li",[t._v("Chrome 13")])]),t._v(" "),a("h3",{attrs:{id:"查看浏览器支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看浏览器支持"}},[t._v("#")]),t._v(" 查看浏览器支持")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://kangax.github.io/compat-table/es5",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://kangax.github.io/compat-table/es5"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("绿色表示v8引擎")]),t._v(" "),a("li",[t._v("SpiderMonkey表示webkit的Firefox的引擎")]),t._v(" "),a("li",[t._v("JavaScriptCore表示ios上的浏览器引擎")]),t._v(" "),a("li",[t._v("Chakra表示ie9的引擎")])])])]),t._v(" "),a("h3",{attrs:{id:"如果需要兼容更低版本的浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果需要兼容更低版本的浏览器"}},[t._v("#")]),t._v(" 如果需要兼容更低版本的浏览器")]),t._v(" "),a("ul",[a("li",[t._v("使用"),a("a",{attrs:{href:"https://npmjs.com/package/es5-shim",target:"_blank",rel:"noopener noreferrer"}},[t._v("es5shim.js"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[a("code",[t._v("npm i es5-shim")])]),t._v(" "),a("li",[t._v("它实际上就是在浏览器上应用一些方法\n"),a("ul",[a("li",[t._v("Array.prototype.every")]),t._v(" "),a("li",[t._v("Array.prototype.filter")]),t._v(" "),a("li",[t._v("Array.prototype.forEach")]),t._v(" "),a("li",[t._v("Array.prototype.indexOf")]),t._v(" "),a("li",[t._v("Array.prototype.lastIndexOf")]),t._v(" "),a("li",[t._v("Array.prototype.map")]),t._v(" "),a("li",[t._v("Array.prototype.slice")]),t._v(" "),a("li",[t._v("Array.prototype.some")]),t._v(" "),a("li",[t._v("Array.prototype.sort")]),t._v(" "),a("li",[t._v("……")])])])])])]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_3-严格模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-严格模式"}},[t._v("#")]),t._v(" 3. 严格模式")]),t._v(" "),a("blockquote",[a("p",[t._v('严格模式给作者提供了一个限制性更强语言变种的方式————给作者额外的可靠性给用户提供额外的安全性。在js文件或是函数的顶部添加"use strict"即可启用严格模式。因为"use strict"就是个字符串，因此其会被旧版浏览器安全地忽视。')])]),t._v(" "),a("h3",{attrs:{id:"_1-说明文档链接地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-说明文档链接地址"}},[t._v("#")]),t._v(" 1. 说明文档链接地址")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("mdn严格模式中文说明文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2012/01/introducing-ecmascript-5-1/#strict-mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("张鑫旭严格模式说明文档"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"_2-基本示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-基本示例"}},[t._v("#")]),t._v(" 2. 基本示例")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://zmx2321.github.io/blog_code/note/es5_test/test_strict",target:"_blank",rel:"noopener noreferrer"}},[t._v("严格模式基本示例演示地址"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"基本示例1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本示例1"}},[t._v("#")]),t._v(" 基本示例1")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以写在顶部，如果写在顶部，当前js文件全部使用严格模式进行开发")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也可以挂载在方法体里面")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果写在里面，严格模式作用域仅限于方法体")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h4",{attrs:{id:"基本示例2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本示例2"}},[t._v("#")]),t._v(" 基本示例2：")]),t._v(" "),a("blockquote",[a("p",[t._v("未声明的变量赋值抛出一个ReferenceError，而不是创建一个全局变量")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没有加var，所以会报错")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a is not defined")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h4",{attrs:{id:"其他示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他示例"}},[t._v("#")]),t._v(" 其他示例")]),t._v(" "),a("blockquote",[a("p",[t._v("其他示例详见"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("mdn严格模式中文说明文档"),a("OutboundLink")],1)])]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_4-json格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-json格式"}},[t._v("#")]),t._v(" 4. JSON格式")]),t._v(" "),a("blockquote",[a("p",[t._v("ES5提供一个全局的JSON对象，用来序列化(JSON.stringify)和反序列化(JSON.parse)对象为JSON格式。")])]),t._v(" "),a("h3",{attrs:{id:"_1-说明文档链接地址-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-说明文档链接地址-2"}},[t._v("#")]),t._v(" 1. 说明文档链接地址")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2012/01/introducing-ecmascript-5-1/#json",target:"_blank",rel:"noopener noreferrer"}},[t._v("张鑫旭JSON格式说明文档"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_2-json的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-json的使用"}},[t._v("#")]),t._v(" 2. JSON的使用")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://zmx2321.github.io/blog_code/note/es5_test/test_json",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON的使用演示地址"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"_3-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-示例"}},[t._v("#")]),t._v(" 3. 示例")]),t._v(" "),a("h4",{attrs:{id:"_1-示例一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-示例一"}},[t._v("#")]),t._v(" 1. 示例一")]),t._v(" "),a("blockquote",[a("p",[t._v("反序列化 "),a("code",[t._v("JSON.parse(text [, reviver])")])])]),t._v(" "),a("h5",{attrs:{id:"示例1-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例1-1"}},[t._v("#")]),t._v(" 示例1.1")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("JSON.parse")]),t._v("接受文本(JSON格式)并转换成一个ECMAScript值。该可选的reviver参数是有带有key和value两个参数的函数，其作用于结果——让过滤和转换返回值成为可能")]),t._v(" "),a("li",[t._v("示例：")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"a": 1, "b": "2"}\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h5",{attrs:{id:"示例1-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例1-2"}},[t._v("#")]),t._v(" 示例1.2")]),t._v(" "),a("blockquote",[a("p",[t._v("如果我们想确保解析的值是个整数，我们可以使用reviver方法")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"a": 1, "b": "2"}\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h4",{attrs:{id:"_2-示例二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-示例二"}},[t._v("#")]),t._v(" 2. 示例二")]),t._v(" "),a("blockquote",[a("p",[t._v("序列化 "),a("code",[t._v("JSON.stringify(value [, replacer [, space]])")])])]),t._v(" "),a("h5",{attrs:{id:"示例2-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例2-1"}},[t._v("#")]),t._v(" 示例2.1")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("JSON.stringify")]),t._v("允许作者接受一个ECMAScript值然后转换成JSON格式的字符串。 在其最简单的形式中，JSON.stringify接受一个值返回一个字符串")]),t._v(" "),a("li",[t._v("示例：")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mike "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mike"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"taylor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mike"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// {"mike":"taylor"}')]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" mike"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// string")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h5",{attrs:{id:"示例2-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例2-2"}},[t._v("#")]),t._v(" 示例2.2")]),t._v(" "),a("blockquote",[a("p",[t._v("如果我们需要改变值字符串化的方式，或是对我们选择的提供过滤，我们可以将其传给replacer函数。例如，我们想过滤出即将被字符串化的对象中值为13的属性")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"second"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"third"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" luckyNums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("luckyNums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// {"first": 7, "second": 14}')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h5",{attrs:{id:"示例2-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例2-3"}},[t._v("#")]),t._v(" 示例2.3")]),t._v(" "),a("blockquote",[a("p",[t._v("如果replacer方法返回undefined, 则键值对就不会包含在最终的JSON中。我们同样可以传递一个space参数以便获得返回结果的可读性帮助。space参数可以是个数字，表明了作缩进的JSON字符串或字符串每个水平上缩进的空格数。如果参数是个超过10的数值，或是超过10个字符的字符串，将导致取数值10或是截取前10个字符。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"second"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"third"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" luckyNums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n如果数字为2，结果为\n{\n  "first": 7,\n  "second": 14\n}\n*/')]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("luckyNums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// {"first":7, "second":14}  一行')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("h3",{attrs:{id:"_3-示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-示例-2"}},[t._v("#")]),t._v(" 3. 示例")]),t._v(" "),a("h3",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),a("p",[t._v("对于老的浏览器，可以考虑使用Douglas Crockford的json2.js, 可以让旧的浏览器实现同样的功能（原始支持功能测试后）。")]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_5-添加对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-添加对象"}},[t._v("#")]),t._v(" 5. 添加对象")]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_6-额外的数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-额外的数组"}},[t._v("#")]),t._v(" 6. 额外的数组")]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_7-function-prototype-bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-function-prototype-bind"}},[t._v("#")]),t._v(" 7. Function.prototype.bind")]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_8-javascript-this的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-javascript-this的使用"}},[t._v("#")]),t._v(" 8. JavaScript this的使用")]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_9-javascript作用域和闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-javascript作用域和闭包"}},[t._v("#")]),t._v(" 9. JavaScript作用域和闭包")]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_10-按值传递和按引用传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-按值传递和按引用传递"}},[t._v("#")]),t._v(" 10. 按值传递和按引用传递")]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("p",[a("font",{attrs:{color:"#666",size:"5"}},[t._v("~End~")])],1)],1)}),[],!1,null,null,null);s.default=r.exports}}]);