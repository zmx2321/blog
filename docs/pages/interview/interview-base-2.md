# 基础面试题汇总
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 基本的语义化html
### 1.1 html5新标准中定义的语义化的标签有哪些
#### 答：header、nav、main、article、section、aside、footer

### 1.2 主要的一些语义化标签在什么情况下使用
#### 答：
- header：网站主导航
- nav： 标记导航
- main： 页面主要内容，一个页面只能使用一次
- article： 定义外部的内容，其中的内容独立于文档的其余部分
- section： 定义文档中的节点
- aside： 侧栏
- footer： 页脚

<br />

## 2、简单的css
> ### 2.1. 传统css
### 2.1.1 如果说做一个导航栏，上面的菜单栏要如何布局
#### 答：
```css
.ul {
    display: flex;
    
    li {
        flex: 1
    }
}
```

### 2.1.2 css选择器中的+号是什么
#### 答：兄弟选择器

> ### 2.2 css预处理
### 2.2.1 less中的是如何定义变量的
#### 答：使用`@变量`

<br />

## 3、javascript基础
### 3.1 JavaScript的特点是什么
#### 答：面向对象,弱类型,动态,基于原型的面向对象

### 3.2 讲下js的数据类型
#### 答：
- 基本数据类型：数值(number),字符串(string),布尔值(boolean),undefined
- 对象数据类型：对象(Object)，数组(Array)，函数(Function)

### 3.3 用什么方法来判断一个对象的数据类型,怎么样去判断数组
#### 答：typeof判断对象类型,用instanceOf判断是不是数组

### 3.4 数组有哪两种声明方式
#### 答：
- 直接用[]里面包含数据声明
- 用new Array声明

### 3.5 请简要说说你对Javascript面向对象的理解
#### 答：JavaScript 语言是通过一种叫做 原型（prototype）的方式来实现面向对象编程的

### 3.6 prototype(原型)是什么,它是怎么使用的
#### 答：每个函数都有一个prototype属性, 它是一个引用变量, 默认指向一个空Object对象 ,有备用的意思,当调用一个对象的函数或者属性的时候,如果在当前对象里面找不到,那么就到原型里面去找

### 3.7 内存泄漏是什么
#### 答：是指程序中己动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费

### 3.8 js基础题
> ### 3.8.1 js基础题之this指向
### 3.8.1.1 this指向题目一：如何才能使this指向obj，使a=30
```js
this.a = 20;
function test() {
    console.log(this.a);
}

var obj = {
    a: 30,
}

test();
```
#### 答：
```js
this.a = 20;
function test() {
    console.log(this.a);
}

var obj = {
    a: 30,
}

// 需要bind的this指向obj
var result = test.bind(obj);  // 30
result();
```

### 3.8.1.2 this指向题目二：最终的输出是什么
```js
var o = {
    foo: function () {
        console.log("hello");
    },
    
    bar() {
        console.log("world");
    }
}

o.bar();

var f = o.foo.bind({});
new f();

var p = o.bar.bind({});
p();

new p();
```
#### 答：
- 第一次输出：world
- 第二次输出：hello
- 第三次输出：world
- 第四次输出：p is not a constructor
##### 解析：
```js
var o = {
    foo: function () {
        console.log("hello");
    },
    
    // es6对象写法和箭头函数无法进行new，
    bar() {
        console.log("world");
    }
}

o.bar();  // world

var f = o.foo.bind({});
new f();  // hello

var p = o.bar.bind({});
p();  // world

// es6对象写法和箭头函数无法进行new
new p();  // p is not a constructor
```

> ### 3.8.2 js基础题之变量提升
### 3.8.1.2.1 变量提升题目一：最终输出是什么
```js
function test() {
    console.log(1);
}
var test;
console.log(test);
```
答：
`ƒ test() { console.log(1); }`
##### 解析：此时var test;时，test值为undefind，undefind变量会被自动忽略，其变形是：
```js
// 函数提升
function test() {  // test => f
    console.log(1);
}
var test;  // undefind（被自动忽略）
console.log(test);  // test => f
```

<br />

## 4. vue知识点
> ### 4.1. vue基础
### 4.1.1 vue的生命周期有哪些
#### 答：
- beforeCreate  创建前状态
- created  创建完毕状态
- beforeMount  挂载前状态  此时会生成虚拟dom
- mounted  挂载结束状态
- beforeUpdate  更新前状态
- updated  更新完成状态
- beforeDestroy  销毁前状态
- destroyed  销毁完成状态

### 4.1.2 在vue cli3中如何配置才能实现全局引用less
#### 答：使用style-resources-loader配置全局less（less预处理器）

### 4.1.3 如何实现一个路由守卫
#### 答：使用`router.beforeEach`
```js
router.beforeEach((to, from, next) => {
    const isLogin = localStorage.code == md5("0") ? true : false;
    if (to.path == "/login" || to.path == '/register') {
        next();
    } else {
        isLogin ? next() : next("/login");
    }
});
```

> ### 4.2. vue传值
### 4.2.1 vue路由带参跳转有哪几种方法，如何实现
#### 答：
```js
// 1、使用query
this.$router.push({
    path: "xxx",
    // 属性：值
    query: {
        stubId: row.id
    }
});

// 2、使用params
this.$router.push({
    name: "xxx",
    // 属性：值
    params: {
        stubId: row.id
    }
});
```

### 4.2.2 父路由如何向子路由传值
#### 答：使用props属性传递数据
1. 在子组件定义一个props用来接收父组件传递过来的数据
   ```js
    props: ['fatherdata']
   ```
2. 在父组件中引用子组件，并给该子组件绑定上在子组件上已经定义的props属性名
    ```js
        // 父组件data赋值
        name: "老王"

        // 父组件调用子组件
        <son :fatherdata="name"></son>
    ```
3. 绑定的props属性名的值，就是父组件要传过来给子组件的值，这里是name，即取到父组件的name值
4. 在子组件的template使用数据
   ```js
    {{ fatherdata }}
   ```

### 4.2.3 子路由如何向父路由传值
#### 答：使用`$emit`自定义事件给父组件传值
1. 在子组件上绑定一个自定义事件
    - `this.$emit("getdata",  this.message);`
2. 在父组件中调用子组件时，将自定义事件加上
    - `<son @getdata="getval"></son>`
3. 在父组件调用方法
    - `getval(){}`

<br />

## 5. 关于webpack
### 5.1 webpack与grunt、gulp的不同？
#### 答：三者都是前端构建工具，grunt和gulp在早期比较流行，现在webpack相对来说比较主流，不过一些轻量化的任务还是会用gulp来处理，比如单独打包CSS文件等。

<br />

## 6. 前后端联调
### 6.1 vue中常用的获取请求的，他有哪些方法
#### 答：axios，它有请求拦截`Axios.interceptors.request`和响应拦截`Axios.interceptors.response`两种方法

### 6.2 前后端联调中如果出现跨域，应该如何解决
#### 答：使用cros或者jsonp，还有叫后端解决

### 6.3 前端中能够跨域的标签有哪些
#### 答：所有拥有src的标签

### 6.4 前端性能优化有哪些方法
#### 答：
1. 减少请求数量
   - 使用雪碧图
   - 使用字体图标来代替图片
   - 减少http请求数
   - 减少重定向
   - 不使用CSS @import
     - CSS的@import会造成额外的请求
   - 避免使用空的src和href
2. 减小资源大小
   - 压缩html、css、js
3. 优化网络连接
    - 使用CDN
    - 使用DNS预解析
      - DNS预解析就是根据浏览器定义的规则，提前解析之后可能会用到的域名，使解析结果缓存到系统缓存中，缩短DNS解析时间，来提高网站的访问速度
    - 持久连接
      - 使用keep-alive或presistent来建立持久连接，持久连接降低了时延和连接建立的开销，将连接保持在已调谐状态，而且减少了打开连接的潜在数量
4. 优化资源加载
    - 资源加载位置
      - CSS文件放在head中，先外链，后本页
      - JS文件放在body底部，先外链，后本页
    - 资源加载时机
      - 异步script标签，defer（异步加载，在HTML解析完成后执行）
      - 异步script标签，async（异步加载，加载完成后立即执行）
      - 模块按需加载

<br />

## 7. 浏览器相关
### 7.1 如何在Windows中配置nginx
#### 答： 修改nginx.conf文件中的 listen和root
- 查看nginx配置是否正确 `nginx -t`
- 启动nginx `start nginx`
- 停止nginx`nginx -s stop`
- 重启nginx`nginx -s reload`

### 7.2 LRU算法是什么
#### 答：LRU 缓存淘汰策略，浏览器中的缓存是一种在本地保存资源副本，它的大小是有限的，当我们请求数过多时，缓存空间会被用满，此时，继续进行网络请求就需要确定缓存中哪些数据被保留，哪些数据被移除，这就是浏览器缓存淘汰策略，最常见的淘汰策略有 FIFO（先进先出）、LFU（最少使用）、LRU（最近最少使用）。


### 7.3 从浏览器输入到页面展示做了什么
#### 答：
1. 在浏览器中输入url
2. 应用层DNS解析域名
3. 应用层客户端发送HTTP请求
4. 传输层TCP传输报文
5. 网络层IP协议查询MAC地址
6. 数据到达数据链路层
7. 服务器接收数据
8. 服务器响应请求
9.  服务器返回相应文件
10. 页面渲染
##### 扩展
1. 建立TCP链接（三次握手）可能要经过Netfilter防火墙，最终到web程序
    - 客户端向服务端请求连接（发送SYN数据包并等待服务器确认）
    - 服务端向客户端确认信息同时自己也发送一个SYN包（SYN/ACK数据包）
    - 客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK（发送ACK包）

### 7.4 浏览器中有哪些常用的本地存储
#### 答：
1. localstroage、sessionstorage

<br />

## 8. node相关
### 8.1 如何用node启一个服务,需要引入什么模块
#### 答：`const http = require('http');`
##### 扩展
```js
//引入http模块
const http = require("http");

// 创建一个服务(request:用户请求，response:返回请求)
http.createServer(function (request, response) {
    //刷新一次页面，就是一次用户请求
    console.log(request);

    //用户有一个请求，服务器写入一句话发给用户
    //需要设置编码(可以解析html)
    response.write("<div class='cc'>welcome</div>");

    //服务器发送请求结束，终止
    response.end();
}).listen(6666, function (err) {
    if (err) throw err;

    console.log("本机服务:http://192.168.0.103:3333");
});
```

### 8.2 用node创建、删除和修改文件需要引入什么模块
#### 答：引入文件操作模块`const fs = require("fs");`

<br />

## 9. linux
### 9.1 国内linux常用的发行版有哪几个
#### 答：centos和ubuntu

### 9.2 使用命令提示符如何链接到linux
#### 答：使用ssh命令

### 9.3 在linux中如何编辑文本
#### 答：使用vi
- `vi 文件名` 进行编辑
- 输入i进行编辑
- 输入w表示编辑保存
- 输入q表示退出
- 输入q!表示强制退出不保存
- 输入wq!表示强制保存退出

### 9.4 linux中如何查看ip地址
#### 答：`ip addr`

### 9.5 linux中如何判断是否启动nginx服务
#### 答：`ps -ef | grep nginx`

### 9.6 linux中如何创建、删除和修改文件夹和文件
#### 答：
- `mkdir Folder` 创建文件夹
- `touch file`  创建文件
- `cp file FileDddress/file` 复制文件夹到某个位置
- `mv file FileDddress/file` 剪切文件夹到某个位置

### 9.6 ubuntu中权限不足应该怎么办
#### 答：使用sudo

<br />

## 10 typescript
### 10.1 typescript中的面向对象和原生js的面向对象有什么区别
#### 答：基于类的面向对象和基于原型的面向对象方式比较,在基于类的面向对象方式中，对象（object）依靠类（class）来产生。而在基于原型的面向对象方式中，对象（object）则是依靠构造器（constructor）利用原型（prototype）构造出来的。
- 例子：工厂造一辆车，一方面，工人必须参照一张工程图纸，设计规定这辆车应该如何制造。这里的工程图纸就好比是语言中的 类 (class)，而车就是按照这个 类（class）制造出来的；另一方面，工人和机器 ( 相当于 constructor) 利用各种零部件如发动机，轮胎，方向盘 ( 相当于 prototype 的各个属性 ) 将汽车构造出来。

<br />

## 11 计算机图形学
### 11.1 canvas是什么，如何使用canvas绘制一个图形
### 11.2 three.js
### 11.3 cesium.js
### 11.4 webgl

---
<br />

<font color="#666" size="5">\~End~</font>