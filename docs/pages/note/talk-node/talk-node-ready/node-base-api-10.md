# 文件系统
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. node梗概
> [fs](https://www.runoob.com/nodejs/nodejs-fs.html)
- node是基于事件回调的一个圈，一个事件进来之后，他把这个事件放出去，等他处理完之后再送回来，这样的一个事件回调的机制
- node的事件如何进行回调(EventEmitter)
  - 这个事情我干完了，我告诉你，就是EventEmitter
  - 它不止是系统内置的，也可以手动触发
    - 监听了一个什么事件，派发了一个什么事件，就是一个EventEmitter
- buffer就是把一个文件(数据)转换成二进制的
- Stream(流)就是更快的读取，在内存里面对这个文件进行操作
  - 我们一个访问网站，这个网站给我们吐回来一些信息，这些信息的很多请求报头都被挂到了流里
- 模块系统
  - node是后端，大多是通过require的方式引入模块
- 路由
  - 我们拿到这个路径的名字，根据不同路径的东西吐出来一些相应的内容
- 全局对象
  - 有些对象无论在哪个页面都可以使用
- 常用工具(util)
  - 是nodejs的核心模块，提供常用函数的集合，用于弥补核心js的功能过于精简的不足
- 文件系统(IO)
  - 文件系统是各个应用程序里面必须要操作的一步
  - 拿到文件的信息，读写文件
  - 有同步和异步处理，同步表示你必须等这个流文件读完，异步表示你读完之后你再把这个信息告诉我
- 做文件上传要用到fs

## 2. 文件系统
- 同步是一直等文件流执行完毕之后才执行下一步操作
- 异步容易造成回调黑洞 - 可以使用Promise解决
### 2.1. 简单的读取文件
- 异步读取
```js
const fs = require('fs');

fs.readFile('test.txt', (err, data)=> {
    if(err) {
        return console.error(err);
    }

    console.log('异步读取:' + data.toString());
})
```
- 同步读取
```js
// 简单的同步读取文件
let data = fs.readFileSync('test.txt');
console.log('同步读取:' + data.toString());
console.log("程序执行完毕");
```

### 2.2. 打开文件
- 用程序打开文件，然后去写入
- 不是所有的文件都是够得着的，有时候必须通过程序的方式
  - 只有使用程序打开文件之后，拿到文件描述符(相当于文件id)，才可以使用stat方法获取文件的信息
  - 判断是否为文件(stats.isFile)
- 文本的东西一般都流或者buffer
- 打开文件处理完之后必须关闭
```js
console.log('准备打开文件!');
fs.open('test.txt', 'r+', (err, fd)=> {
    if(err) {
        return console.err(err);
    }

    console.log('文件打开成功', fd);
});
```