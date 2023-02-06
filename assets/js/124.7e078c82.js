(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{877:function(a,s,n){"use strict";n.r(s);var t=n(25),e=Object(t.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"elasticsearch相关基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch相关基础"}},[a._v("#")]),a._v(" elasticSearch相关基础")]),a._v(" "),n("ClientOnly",[n("Valine")],1),a._v(" "),n("h2",{attrs:{id:"_1-elasticsearch相关基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-elasticsearch相关基本概念"}},[a._v("#")]),a._v(" 1. elasticSearch相关基本概念")]),a._v(" "),n("h3",{attrs:{id:"_1-1-索引的含义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-索引的含义"}},[a._v("#")]),a._v(" 1.1. 索引的含义")]),a._v(" "),n("ol",[n("li",[a._v("某一类文档的集合构成一个索引，类比到数据库就是一个数据表(7.x之后)")])]),a._v(" "),n("ul",[n("li",[a._v("一个索引就是一张表")])]),a._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[a._v("他还描述了一个动作，就是将某个文档保存在elasticSearch的过程也叫索引")]),a._v(" "),n("li",[a._v("倒排索引")])]),a._v(" "),n("h3",{attrs:{id:"_1-2-什么是mapping"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-什么是mapping"}},[a._v("#")]),a._v(" 1.2. 什么是mapping")]),a._v(" "),n("ul",[n("li",[a._v("多个文档形成了一个索引")]),a._v(" "),n("li",[a._v("mapping是ES每个文档的约束信息，例如属性类型，能否被索引等")])]),a._v(" "),n("h3",{attrs:{id:"_1-3-什么是dsl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-什么是dsl"}},[a._v("#")]),a._v(" 1.3. 什么是DSL")]),a._v(" "),n("ul",[n("li",[a._v("DSL是ES的查询语言")])]),a._v(" "),n("h2",{attrs:{id:"_2-查看所有索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看所有索引"}},[a._v("#")]),a._v(" 2. 查看所有索引")]),a._v(" "),n("ul",[n("li",[n("code",[a._v("GET _cat/indices")])])]),a._v(" "),n("h2",{attrs:{id:"_3-查看某个索引下有哪些数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看某个索引下有哪些数据"}},[a._v("#")]),a._v(" 3. 查看某个索引下有哪些数据")]),a._v(" "),n("ul",[n("li",[n("code",[a._v("GET 索引名称/_search")]),a._v(" "),n("ul",[n("li",[a._v("主要看hits，表示查出来的数据")]),a._v(" "),n("li",[a._v("hits是对象数组，里面的每一个对象就是一个文档")]),a._v(" "),n("li",[a._v("_index表示当前文档所处索引")]),a._v(" "),n("li",[a._v("_source才表示数据本身")]),a._v(" "),n("li",[a._v("多个文档形成了一个索引")])])])]),a._v(" "),n("h2",{attrs:{id:"_4-dsl基本的crud"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-dsl基本的crud"}},[a._v("#")]),a._v(" 4. DSL基本的crud")]),a._v(" "),n("h3",{attrs:{id:"_1-基本的新增和查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本的新增和查询"}},[a._v("#")]),a._v(" 1. 基本的新增和查询")]),a._v(" "),n("ul",[n("li",[n("code",[a._v("GET movies/_search")]),a._v(" => 查询movies的数据")]),a._v(" "),n("li",[n("code",[a._v("GET movies/_count")]),a._v(" => 查询movies的总数")]),a._v(" "),n("li",[n("code",[a._v("GET movies/_doc/24")]),a._v(" => 查询索引中id为24的数据")]),a._v(" "),n("li",[a._v("添加\n"),n("ul",[n("li",[a._v("添加id为1的文档，如果没有指定id，es自动生成，定义id比较危险")]),a._v(" "),n("li",[a._v("如果id相同会直接将数据覆盖调")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('POST kibana_sample_data_logs/_doc/aa1\n{\n  "bytes": "666"\n}\nGET kibana_sample_data_logs/_doc/aa1\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])])]),a._v(" "),n("li",[a._v("创建\n"),n("ul",[n("li",[a._v("创建id为2的文档，如果索引中存在相同id，会报错，一般使用这个命令")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('POST kibana_sample_data_logs/_create/aa2\n{\n  "bytes": "777"\n}\nGET kibana_sample_data_logs/_doc/aa2\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])])])]),a._v(" "),n("h3",{attrs:{id:"_2-如果需要在某文档下追加数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-如果需要在某文档下追加数据"}},[a._v("#")]),a._v(" 2. 如果需要在某文档下追加数据")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('POST kibana_sample_data_logs/_update/aa2\n{\n  "doc": {\n    "test": "测试777"\n  }\n}\nGET kibana_sample_data_logs/_doc/aa2\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("h2",{attrs:{id:"_5-put命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-put命令"}},[a._v("#")]),a._v(" 5. PUT命令")]),a._v(" "),n("ul",[n("li",[a._v("_doc用法和post一样")]),a._v(" "),n("li",[a._v("-create用法和post一样")]),a._v(" "),n("li",[a._v("没有_update命令")])]),a._v(" "),n("h2",{attrs:{id:"_6-删除数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-删除数据"}},[a._v("#")]),a._v(" 6. 删除数据")]),a._v(" "),n("ol",[n("li",[a._v("删除数据")])]),a._v(" "),n("ul",[n("li",[a._v("删除id为aa2的数据\n"),n("ul",[n("li",[n("code",[a._v("DELETE kibana_sample_data_logs/_doc/aa2")])])])])]),a._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[a._v("删除索引")])]),a._v(" "),n("ul",[n("li",[n("code",[a._v("DELETE kibana_sample_data_logs")])]),a._v(" "),n("li",[n("code",[a._v("GET _cat/indices")])])]),a._v(" "),n("h2",{attrs:{id:"_7-批量提交数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-批量提交数据"}},[a._v("#")]),a._v(" 7. 批量提交数据")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('POST kibana_sample_data_logs/_bulk\n{"index": {"_id": "aa1"}}\n{"bytes": "111", "extension": "eee"}\n{"index": {"_id": "aa2"}}\n{"bytes": "222", "extension": "rrr"}\n{"index": {"_id": "aa3"}}\n{"bytes": "333", "extension": "ttt"}\nGET kibana_sample_data_logs/_doc/aa1\nGET kibana_sample_data_logs/_doc/aa2\nGET kibana_sample_data_logs/_doc/aa3\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br")])]),n("h2",{attrs:{id:"_8-批量查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-批量查询"}},[a._v("#")]),a._v(" 8. 批量查询")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('GET /_mget\n{\n  "docs": [\n    {"_index": "kibana_sample_data_logs", "_id": "aa1"}, \n    {"_index": "kibana_sample_data_logs", "_id": "aa2"}, \n    {"_index": "kibana_sample_data_logs", "_id": "aa3"} \n  ]\n}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br")])]),n("h2",{attrs:{id:"_9-elasticsearch的url查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-elasticsearch的url查询"}},[a._v("#")]),a._v(" 9. elasticSearch的url查询")]),a._v(" "),n("blockquote",[n("p",[a._v("泛查询")])]),a._v(" "),n("ol",[n("li",[a._v("查询包含2012的数据")])]),a._v(" "),n("ul",[n("li",[n("code",[a._v("GET movies/_search?q=2012")])]),a._v(" "),n("li",[a._v("q是一个固定值，表示query")]),a._v(" "),n("li",[a._v("任何一个字段只要包含2012就会查询出来")]),a._v(" "),n("li",[a._v("多个条件的泛查询\n"),n("ul",[n("li",[n("code",[a._v("GET movies/_search?q=2012&df=title")])]),a._v(" "),n("li",[a._v("df => 默认的属性")]),a._v(" "),n("li",[a._v("从title中查找包含2012的所有文档")]),a._v(" "),n("li",[a._v("简写\n"),n("ul",[n("li",[n("code",[a._v("GET movies/_search?q=title:2012")])])])])])])]),a._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[a._v("查询title中包含but或者test的文档")])]),a._v(" "),n("ul",[n("li",[n("code",[a._v("GET movies/_search?q=title:but test")])]),a._v(" "),n("li",[a._v("另一种写法\n"),n("ul",[n("li",[n("code",[a._v("GET movies/_search?q=title:(but test)")])])])])]),a._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[a._v("查询title中包含but不包含test的文档")])]),a._v(" "),n("ul",[n("li",[n("code",[a._v("GET movies/_search?q=title:(but -test)")])]),a._v(" "),n("li",[n("code",[a._v("GET movies/_search?q=title:(+but - test)")]),a._v("=>加号可省略")])]),a._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[a._v("都包含")])]),a._v(" "),n("ul",[n("li",[n("code",[a._v("GET movies/_search?q=title:(but AND test)")]),a._v(" "),n("ul",[n("li",[a._v("小写表示或")])])])]),a._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[a._v("包含短语")])]),a._v(" "),n("ul",[n("li",[n("code",[a._v('GET movies/_search?q=title:"but test"')])])]),a._v(" "),n("ol",{attrs:{start:"6"}},[n("li",[a._v("查询分页")])]),a._v(" "),n("ul",[n("li",[n("code",[a._v("GET movies/_search?q=title:2012&from=3&size=3")])]),a._v(" "),n("li",[a._v("从第3页查询3条")])]),a._v(" "),n("ol",{attrs:{start:"7"}},[n("li",[a._v("范围查询")])]),a._v(" "),n("ul",[n("li",[n("code",[a._v("GET movies/_search?q=year:>=2016")])]),a._v(" "),n("li",[n("code",[a._v("GET movies/_search?q=year:(>=1990 AND <=1992)")])]),a._v(" "),n("li",[n("code",[a._v("GET movies/_search?q=year:{1990 TO 1992]")]),a._v(" "),n("ul",[n("li",[a._v("前面大括号中括号都可以，后面必须中括号")])])])]),a._v(" "),n("ol",{attrs:{start:"8"}},[n("li",[a._v("查询电影名字中包含beautiful或mind,并且上映的年份在[1990-1992]所有电影")])]),a._v(" "),n("ul",[n("li",[n("code",[a._v("GET movies/_search?q=year:(>=1990 AND <=1992) AND title:beautiful mind")])])]),a._v(" "),n("ol",{attrs:{start:"9"}},[n("li",[a._v("通配符")])]),a._v(" "),n("ul",[n("li",[n("code",[a._v("GET movies/_search?q=title:min?")]),a._v(" "),n("ul",[n("li",[a._v("?表示任意字符，只能是一个字符")])])]),a._v(" "),n("li",[n("code",[a._v("GET movies/_search?q=title:min*")]),a._v(" "),n("ul",[n("li",[a._v("*表示0到多个")])])])]),a._v(" "),n("h2",{attrs:{id:"_10-测试所有代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-测试所有代码"}},[a._v("#")]),a._v(" 10. 测试所有代码")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('# 查询所有数据\nGET _search\n{\n  "query": {\n    "match_all": {}\n  }\n}\n\n# 查询航班所有数据\nGET kibana_sample_data_flights/_search\n\n# 查询所有索引\nGET _cat/indices\n\n# 查询日志所有数据\nGET kibana_sample_data_logs/_search\n\n# 查询日志索引数量\nGET kibana_sample_data_logs/_count\n\n# 在索引中添加文档 - id重复会覆盖\nPOST kibana_sample_data_logs/_doc/aa1\n{\n  "bytes": "666"\n}\n# 根据文档id查询\nGET kibana_sample_data_logs/_doc/aa1\n\n# 在索引中创建文档 - id重复会报错\nPOST kibana_sample_data_logs/_create/aa2\n{\n  "bytes": "777"\n}\nGET kibana_sample_data_logs/_doc/aa2\n\n# 修改文档结构\nPOST kibana_sample_data_logs/_update/aa2\n{\n  "doc": {\n    "test": "测试777"\n  }\n}\nGET kibana_sample_data_logs/_doc/aa2\n\n# 删除id为aa2的文档\nDELETE kibana_sample_data_logs/_doc/aa2\n\n# 批量提交数据\nPOST kibana_sample_data_logs/_bulk\n{"index": {"_id": "aa1"}}\n{"bytes": "111", "extension": "eee"}\n{"index": {"_id": "aa2"}}\n{"bytes": "222", "extension": "rrr"}\n{"index": {"_id": "aa3"}}\n{"bytes": "333", "extension": "ttt"}\nGET kibana_sample_data_logs/_doc/aa1\nGET kibana_sample_data_logs/_doc/aa2\nGET kibana_sample_data_logs/_doc/aa3\n\n# 批量查询\nGET _mget\n{\n  "docs": [\n    {"_index": "kibana_sample_data_logs", "_id": "aa1"}, \n    {"_index": "kibana_sample_data_logs", "_id": "aa2"}, \n    {"_index": "kibana_sample_data_logs", "_id": "aa3"} \n  ]\n}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br"),n("span",{staticClass:"line-number"},[a._v("29")]),n("br"),n("span",{staticClass:"line-number"},[a._v("30")]),n("br"),n("span",{staticClass:"line-number"},[a._v("31")]),n("br"),n("span",{staticClass:"line-number"},[a._v("32")]),n("br"),n("span",{staticClass:"line-number"},[a._v("33")]),n("br"),n("span",{staticClass:"line-number"},[a._v("34")]),n("br"),n("span",{staticClass:"line-number"},[a._v("35")]),n("br"),n("span",{staticClass:"line-number"},[a._v("36")]),n("br"),n("span",{staticClass:"line-number"},[a._v("37")]),n("br"),n("span",{staticClass:"line-number"},[a._v("38")]),n("br"),n("span",{staticClass:"line-number"},[a._v("39")]),n("br"),n("span",{staticClass:"line-number"},[a._v("40")]),n("br"),n("span",{staticClass:"line-number"},[a._v("41")]),n("br"),n("span",{staticClass:"line-number"},[a._v("42")]),n("br"),n("span",{staticClass:"line-number"},[a._v("43")]),n("br"),n("span",{staticClass:"line-number"},[a._v("44")]),n("br"),n("span",{staticClass:"line-number"},[a._v("45")]),n("br"),n("span",{staticClass:"line-number"},[a._v("46")]),n("br"),n("span",{staticClass:"line-number"},[a._v("47")]),n("br"),n("span",{staticClass:"line-number"},[a._v("48")]),n("br"),n("span",{staticClass:"line-number"},[a._v("49")]),n("br"),n("span",{staticClass:"line-number"},[a._v("50")]),n("br"),n("span",{staticClass:"line-number"},[a._v("51")]),n("br"),n("span",{staticClass:"line-number"},[a._v("52")]),n("br"),n("span",{staticClass:"line-number"},[a._v("53")]),n("br"),n("span",{staticClass:"line-number"},[a._v("54")]),n("br"),n("span",{staticClass:"line-number"},[a._v("55")]),n("br"),n("span",{staticClass:"line-number"},[a._v("56")]),n("br"),n("span",{staticClass:"line-number"},[a._v("57")]),n("br"),n("span",{staticClass:"line-number"},[a._v("58")]),n("br"),n("span",{staticClass:"line-number"},[a._v("59")]),n("br"),n("span",{staticClass:"line-number"},[a._v("60")]),n("br"),n("span",{staticClass:"line-number"},[a._v("61")]),n("br"),n("span",{staticClass:"line-number"},[a._v("62")]),n("br"),n("span",{staticClass:"line-number"},[a._v("63")]),n("br"),n("span",{staticClass:"line-number"},[a._v("64")]),n("br"),n("span",{staticClass:"line-number"},[a._v("65")]),n("br"),n("span",{staticClass:"line-number"},[a._v("66")]),n("br"),n("span",{staticClass:"line-number"},[a._v("67")]),n("br"),n("span",{staticClass:"line-number"},[a._v("68")]),n("br")])]),n("hr"),a._v(" "),n("br"),a._v(" "),n("p",[n("font",{attrs:{color:"#666",size:"5"}},[a._v("~End~")])],1)],1)}),[],!1,null,null,null);s.default=e.exports}}]);