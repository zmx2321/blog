# 爬虫代码实战
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 开发爬虫的前期准备
- 在app.js中不需要一些冗余代码，可以重新编写，只启动一个服务端口
  - [参考网站](https://www.expressjs.com.cn/starter/hello-world.html)
- 修改app.js文件 => 全部替换
```js
const express = require('express')
const app = express()
const port = 3000

// 访问根目录的时候
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```
- 访问这个服务并持续监听后台node进程
  - `npm install supervisor -g`
    - 监测node进程的一个服务，用起来不错
  - `supervisor start app.js`
  - 访问`localhost:3000`

## 2. 使用request模块访问数据源
> 可以在[npmjs](https://www.npmjs.com/)找对应的官网
```js
const express = require('express')
const app = express()
const request = require('request');

const port = 3000

app.get('/', (req, res) => {
  // 第一个参数是报错，第二个参数是输出，第三个参数是页面的内容
  request('https://www.jikexueyuan.com', function (error, response, body) {
    // 如果没有错，并且页面的状态码是200
    if(!error && response.statusCode == 200) {
      // 在控制台打印出网页的所有内容
      console.log(body)

      // 输出到页面的东西
      res.send('hello world');
    }
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

## 3. 使用cheerio模块操作数据源
> [cheerio](https://www.npmjs.com/package/cheerio): 和jquery极其类似
- `$ = cheerio.load(body);`  // 当前的$就相当于整个body的前端选择器
```js
const express = require('express')
const app = express()

const request = require('request');
const cheerio = require('cheerio');

const port = 3000

app.get('/', (req, res) => {
  // 第一个参数是报错，第二个参数是输出，第三个参数是页面的内容
  request('https://www.jikexueyuan.com', function (error, response, body) {
    // 如果没有错，并且页面的状态码是200
    if(!error && response.statusCode == 200) {
      $ = cheerio.load(body);  // 当前的$就相当于整个body的前端选择器

      // 以json格式的方式在页面输出
      // 获取导航栏ul下面的所有li
      // 判断目标网页上被$选择器选中的class数目
      res.json({
        // 'Classnum': $('.aside-allCategory').length
        'Classnum': $('ul.aside-cList li').length
      });
    }
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```