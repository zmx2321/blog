# ECMAScript5.1新增语法
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

#### 概要
<h6> 1. ECMAScript5.1简介 </h6>
<h6> 2. 浏览器支持 </h6>
<h6> 3. 严格模式 </h6>
<h6> 4. JSON格式 </h6>
<h6> 5. 添加对象 </h6>
<h6> 6. 额外的数组 </h6>
<h6> 7. Function.prototype.bind </h6>
<h6> 8. JavaScript this的使用 </h6>
<h6> 9. JavaScript作用域和闭包 </h6>
<h6> 10. 按值传递和按引用传递 </h6>

---
<br />

## 1. ECMAScript5.1简介
> ECMAScript 5.1 (或仅 ES5) 是ECMAScript(基于JavaScript的规范)标准最新修正。 与HTML5规范进程本质类似，ES5通过对现有JavaScript方法添加语句和原生ECMAScript对象做合并实现标准化。ES5还引入了一个 语法的严格变种，被称为”严格模式(strict mode)”。

---
<br />

## 2. 浏览器支持
### 各大厂商浏览器支持情况 
- Opera 11.60
- Internet Explorer 9*
  - ie9不支持严格模式，ie10添加
- Firefox 4
- Safari 5.1**
  - Safari 5.1 仍不支持 Function.prototype.bind, 尽管 Function.prototype.bind现在已经被Webkit所支持
- Chrome 13

### 查看浏览器支持
- [http://kangax.github.io/compat-table/es5](http://kangax.github.io/compat-table/es5)
  - 绿色表示v8引擎
  - SpiderMonkey表示webkit的Firefox的引擎
  - JavaScriptCore表示ios上的浏览器引擎
  - Chakra表示ie9的引擎

### 如果需要兼容更低版本的浏览器
- 使用[es5shim.js](https://npmjs.com/package/es5-shim)
  - `npm i es5-shim`
  - 它实际上就是在浏览器上应用一些方法
    - Array.prototype.every
    - Array.prototype.filter
    - Array.prototype.forEach
    - Array.prototype.indexOf
    - Array.prototype.lastIndexOf
    - Array.prototype.map
    - Array.prototype.slice
    - Array.prototype.some
    - Array.prototype.sort
    - ……

---
<br />

## 3. 严格模式 
> 严格模式给作者提供了一个限制性更强语言变种的方式————给作者额外的可靠性给用户提供额外的安全性。在js文件或是函数的顶部添加"use strict"即可启用严格模式。因为"use strict"就是个字符串，因此其会被旧版浏览器安全地忽视。

### 1. 说明文档链接地址
1. [mdn严格模式中文说明文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
2. [张鑫旭严格模式说明文档](https://www.zhangxinxu.com/wordpress/2012/01/introducing-ecmascript-5-1/#strict-mode)

### 2. 基本示例
> [严格模式基本示例演示地址](https://zmx2321.github.io/blog_code/note/es5_test/test_strict)

#### 基本示例1
```js
// 可以写在顶部，如果写在顶部，当前js文件全部使用严格模式进行开发
"use strict"

function strict() {
  // 也可以挂载在方法体里面
  // 如果写在里面，严格模式作用域仅限于方法体
  "use strict"
  // ...
}
```

#### 基本示例2：
> 未声明的变量赋值抛出一个ReferenceError，而不是创建一个全局变量
```js
"use strict";

function test() {
    a = 1;  // 没有加var，所以会报错
    alert(a);
}

test();  // a is not defined
```

#### 其他示例
> 其他示例详见[mdn严格模式中文说明文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)


---
<br />

## 4. JSON格式 
> ES5提供一个全局的JSON对象，用来序列化(JSON.stringify)和反序列化(JSON.parse)对象为JSON格式。

### 1. 说明文档链接地址
[张鑫旭JSON格式说明文档](https://www.zhangxinxu.com/wordpress/2012/01/introducing-ecmascript-5-1/#json)

### 2. JSON的使用
> [JSON的使用演示地址](https://zmx2321.github.io/blog_code/note/es5_test/test_json)

### 3. 示例
#### 1. 示例一
> 反序列化 `JSON.parse(text [, reviver])`
##### 示例1.1
- `JSON.parse`接受文本(JSON格式)并转换成一个ECMAScript值。该可选的reviver参数是有带有key和value两个参数的函数，其作用于结果——让过滤和转换返回值成为可能
- 示例：
```js
var result = JSON.parse('{"a": 1, "b": "2"}');

console.log(result.b);  // 2
```

##### 示例1.2
> 如果我们想确保解析的值是个整数，我们可以使用reviver方法
```js
var result = JSON.parse('{"a": 1, "b": "2"}', function(key, value){
    if (typeof value == 'string'){
      return parseInt(value);
    } else {
      return value; 
    }
})
  
console.log(result.b);  // 2
```

#### 2. 示例二
> 序列化 `JSON.stringify(value [, replacer [, space]])`
##### 示例2.1
- `JSON.stringify`允许作者接受一个ECMAScript值然后转换成JSON格式的字符串。 在其最简单的形式中，JSON.stringify接受一个值返回一个字符串
- 示例：
```js
var mike = JSON.stringify({mike: "taylor"});
console.log(mike);  // {"mike":"taylor"}
console.log(typeof mike);  // string
```

##### 示例2.2
> 如果我们需要改变值字符串化的方式，或是对我们选择的提供过滤，我们可以将其传给replacer函数。例如，我们想过滤出即将被字符串化的对象中值为13的属性
```js
var nums = {
    "first": 7,
    "second": 14,
    "third": 13
}
  
var luckyNums = JSON.stringify(nums, function(key, value){
    if (value == 13) {
        return undefined;
    } else {
        return value;
    }
});
  
console.log(luckyNums);  // {"first": 7, "second": 14}
```

##### 示例2.3
> 如果replacer方法返回undefined, 则键值对就不会包含在最终的JSON中。我们同样可以传递一个space参数以便获得返回结果的可读性帮助。space参数可以是个数字，表明了作缩进的JSON字符串或字符串每个水平上缩进的空格数。如果参数是个超过10的数值，或是超过10个字符的字符串，将导致取数值10或是截取前10个字符。
```js
var nums = {
    "first": 7,
    "second": 14,
    "third": 13
}

var luckyNums = JSON.stringify(nums, function(key, value) {
    if (value == 13) {
        return undefined;
    } else {
        return value;
    }
}, 0);
/**
如果数字为2，结果为
{
  "first": 7,
  "second": 14
}
*/

console.log(luckyNums);  // {"first":7, "second":14}  一行
```

### 3. 示例


### 说明
对于老的浏览器，可以考虑使用Douglas Crockford的json2.js, 可以让旧的浏览器实现同样的功能（原始支持功能测试后）。


---
<br />

## 5. 添加对象


---
<br />

## 6. 额外的数组

---
<br />

## 7. Function.prototype.bind

---
<br />

## 8. JavaScript this的使用

---
<br />

## 9. JavaScript作用域和闭包

---
<br />

## 10. 按值传递和按引用传递

---
<br />

<font color="#666" size="5">\~End~</font>