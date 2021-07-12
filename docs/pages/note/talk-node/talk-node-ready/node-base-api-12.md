# fs模块
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. fs模块简介
> > [fs](https://www.runoob.com/nodejs/nodejs-fs.html)
- nodejs中，几乎所有文件操作都是由fs这个核心模块来实现的
- 文件模块中所有读取写入方法都对应有同步和异步的操作
  - 同步写入 => sync后缀 => 会阻塞代码 => 导致性能差
  - 异步写入 => 没有后缀 => 一般有回调 => 告诉我们什么时候读取或写入完成 => 回调函数嵌套多 => 推荐异步，推荐使用promise/async/await解决嵌套多的问题

## 2. 系统和文件的常识
### 2.1. 权限位(mode)
- 权限分配分成三大类(权限分组)
  - 权限所有者 => 自己
  - 文件所属组 => 家人
  - 其他用户 => 陌生人
- 权限项 => 可以用字母、数字表示
  - 在linux系统中，使用`ls -al`命令，查看文件前缀
    - `drwxr-xr-rwx ...`
    - 一共对应10位，有些没有的权限就没写，用-分割
      - 比如`drwxr-xr-rx ...`
    - 8-6位 => 表示文件所有者权限
    - 5-3位 => 表示文件所属组权限
    - 2-0位 => 其他用户
    - 第九位
      - d => 目录文件
      - p => 管道文件
      - l => 链接文件
      - \- => 表示普通文件
      - s => .sock => socket文件类型
      - ......
  - 在windows下，默认是可读可写不可执行 => 0o666
    - 不可执行为0
    - 读表示4，写表示2，相加为6
    - 文件所属组和其他用户权限相同都有可读可写不可执行为6
    - 连起来就是666
  - window下如果是有读写执行权限就是7
    - 文件所属组和其他用户权限相同都有读写执行权限连起来就是777
<table>
    <tr>
      <th>类型</th>
      <th>读</th>
      <th>写</th>
      <th>执行</th>
    </tr>
    <tr>
      <td>字母</td> 
      <td>r(read)</td>
      <td>w(write)</td>
      <td>x</td>
    </tr>
    <tr>
      <td>数字(8进制)</td> 
      <td>4</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
        <td>没有权限</td>
        <td colspan="4">0</td>
    </tr>
    <tr>
        <td>最高权限</td>
        <td colspan="4">chmod 777 filename</td>
    </tr>
</table>

### 2.2. 标识位(flag)
> 表示对文件的操作方式(可读、可写......)
- r => 读取文件
- r+ => 可以读取也可以写入文件
- rx => 文件可读，可执行,不能修改
- rw => 能读，能写,不能执行
- w => 看不到内容，但是可以强制修改，会覆盖原有内容
- w+ => 可以读取也可以写入文件
- a => 只可以追加写入(append)
- a+ => 既可以读取，也可以追加写入
- wx => 不可读，不可执行，可以覆盖或者追加写
- rs => 可以读取也可以写入文件，只是操作系统会绕开本地系统缓存之类
- 快速记忆的方法
  - r: 读取
  - w: 写入
  - s: 同步
  - +：增加相反的操作
  - x: 排他方式

### 2.3. 文件描述符
> 识别或者追踪某个特定的文件，在nodejs中分配数值描述符，主要是抽象了不同操作系统之间的差异，在nodejs中，每操作一个文件，文件描述符就递增的，就相当于文件的递增id，在nodejs中文件描述符一般是从3开始的，因为前面的0、1、2是三个特殊的描述符(process.stdin[标准输入]、process.stdout[标准输出]、process.stderr[错误输出])。
  - 就是一个非负整数，就是文件的索引值
  - 每一个文件描述符，都有一个打开的文件相对应，就是一个唯一标识
  - 我们通过这个唯一标识就可以访问或者读写该文件

## 3. 文件基本操作
- demo准备
  - `touch app.js` => 创建node运行文件
  - `node app.js` => 运行
### 3.1. 读取
#### 3.1.1. 同步文件的读取
- 注意事项及demo准备
  - readFile对于大文件无法读取全部内容到缓存中
  - 对于文件内容大小未知的情况下，不推荐使用
  - 他会一次性读取全部内容到缓存中(buffer)
  - `touch data.txt` => 创建需要被读取的文件
```js
const fs = require('fs');

// 同步读取文件
// 第一个参数表示文件路径或者是文件的描述符
// 第二个参数是option，是配置选项
// 比如设置编码，默认为none，返回内容为buffer，就是二进制的
const buf = fs.readFileSync('data.txt', {
    encoding: 'utf-8'
});
// 返回字符串，文件内容
console.log(buf);
```

#### 3.1.2. 异步文件的读取
```js
const fs = require('fs');

// 异步读取
// 比同步多了一个回调的参数
const filedata = fs.readFile('data.txt', {
    encoding: 'utf-8'
    // 第一个参数是err
}, (err, data)=> {
    console.log(data);
});
```

#### 3.1.2. 大文件的读取
- read => 将内容多次读取到缓存(buffer)中
- 每次读取多大，可以手动进行设置
```js
const fs = require('fs');

// 大文件的读取(将buffer中的数据读取文件)
// 创建一个内存大小，单位为字节
// 创建了一个长度为1000的buffer(内存大小)
const buf = Buffer.alloc(1000);  // byte
// 打开文件
fs.open('data.txt', 'r', (err, fd)=>{
    // 读取 => 异步读取
    // 有6个参数，第一个参数为文件描述符
    // 第二个参数是将文本内容读取到buffer
    // 第三个参数是向buffer写入的初始位置
    // 第四个参数是读取文件的长度(byte)
        // 一个汉字(3个字节)
        // 这个值需要比创建的内存大小小
    // 第五个参数是读取文件的初始位置
        // 从0开始读取
    // 第六个参数是异步回调
        // 第一个参数是错误回调，第二个参数是实际读取的字节数
        // 第三个参数是buffer => 被写入缓存区的对象
    fs.read(fd, buf, 0, 100, 0, (err, byteRead, buffer)=> {
        console.log(byteRead);  // 文件中实际的读取长度
        console.log(buffer.toString());  // 因为buffer是二进制的
    })
})
```

### 3.2. 写入
#### 3.2.1. 同步写入文件
- 注意事项及demo准备
  - 同步写入会将文件覆盖
  - `cat data.txt` => 查看文件
- 同步写入
```js
const fs = require('fs');

// 同步写入文件
// 第一个参数是路径，第二个参数是内容，第三个参数是配置选项
fs.writeFileSync('data.txt', '同步写入文件', {
    encoding: 'utf-8'
});
```
- 同步追加写入
```js
const fs = require('fs');

// 同步追加写入文件
fs.appendFileSync('data.txt', '同步追加写入文件', {
    encoding: 'utf-8'
});
```
- 同步拷贝写入
```js
const fs = require('fs');

// 同步拷贝写入文件
// 第一个参数是源文件路径，第二个参数是目标文件路径(如果目标文件路径不存在会自动创建)
fs.copyFileSync('data.txt', 'data2.txt')
```
- 模拟同步拷贝写入
```js
const fs = require('fs');

// 模拟同步拷贝写入
let copy = (file, target)=> {
    const data = fs.readFileSync(file);
    fs.writeFileSync(target, data);
}
copy('data.txt', 'data3.txt');
```

#### 3.2.2. 异步写入文件
- 异步写入
```js
const fs = require('fs');

// 异步写入文件
// 其他参数与同步相同
// 最后一个参数是异步的回调，因为是写入，就不需要返回数据了
fs.writeFile('data.txt', "写入的内容", {
    encoding: 'utf-8'
}, err=> {
    // console.log(err);
})
```
- 异步追加写入
```js
const fs = require('fs');

// 异步追加写入文件
fs.appendFile('data.txt', "异步追加写入文件", {
    encoding: 'utf-8'
}, err=> {
    // console.log(err);
})
```
- 异步拷贝写入
```js
const fs = require('fs');

// 异步拷贝写入文件
// 第一个参数是源文件路径，第二个参数是目标文件路径(如果目标文件路径不存在会自动创建)，第三个参数是回调
fs.copyFile('data.txt', 'data2.txt', ()=> {})
```

#### 3.1.3. 大文件的写入
- buffer相当于中转站
- 当数据源内存太大或者内存不确定，无法一次性放入内存写入的时候，就可以分段写入
```js
const fs = require('fs');

// 大文件的写入(将buffer中的数据写入文件)
// 创建一个中转站，将内容存入
const buf = Buffer.from("测试1");
// 打开文件
// r+ => 读写都可以
fs.open('data.txt', 'r+', (err, fd)=> {
    console.log(fd);
    // 写入 => 异步写入
    // 6个参数，第一个参数为文件描述符
    // 第二个参数是buffer(中转站)
    // 第三个参数是向buffer读取的初始位置
    // 第四个参数是读取文件的长度(byte)
    // 第五个参数是写入文件的初始位置
        // 第一个参数是错误回调，第二个参数是实际读取的字节数
        // 第三个参数是buffer => 被写入缓存区的对象
    fs.write(fd, buf, 0, 7, 0, (err, size, buf)=>{
        fs.close(fd, err=> {
            console.log("关闭文件");
        })
    })
});
```

### 3.3. 打开
> 异步打开
```js
const fs = require('fs');

// 打开文件
// 有4个参数,第一个参数是要打开的文件
// 第二个参数是设置的标识位（有读的权限）
// 第三个参数是异步回调(异步打开文件)
// 回调的参数，第二个参数是文件描述符
fs.open('data.txt', 'r', (err, fd)=> {
    // 文件描述符 => 在nodejs中为了抽象不同操作系统之间的差异
    // 使用数值的表示方法，相当于id，非负整数
    console.log(fd);  // 3

    fs.open('data2.txt', 'r', (err, fd)=> {
        // 递增的
        console.log(fd);  // 4
    })
});
```

### 3.4. 关闭
> 异步关闭
```js
const fs = require('fs');

fs.open('data.txt', 'r', (err, fd)=> {
    // 关闭文件 - 异步
    // 根据文件描述符关闭
    fs.close(fd, err=> {
        if(!err){
            console.log('关闭成功');
        } else {
            console.log(err);
        }
    });
});
```

## 4. 文件目录基本操作
### 4.1. 查看权限
#### 4.1.1. 同步查看目录权限
- `mkdir aa`
- `ls -al`
- 改变aa权限
  - `chmod -rwx aa` => 去掉rwx权限
```js
const fs = require('fs');

// 同步查看目录权限
// 第一个参数路径
// 他会检查路径是否是可读或者可写（没有权限就抛出异常）
// 当有操作权限的时候，没有返回值
// 当没有权限或者路径非法，就会报错
// 所以一般都是要抛出异常(try...catch)
try {
    fs.accessSync('./')
    console.log('可读可写');
} catch(e) {
    console.log('不可访问');
}
```

#### 4.1.2. 异步查看目录权限
```js
const fs = require('fs');

// 异步查看目录权限
// 他就不用try catch了，因为他有错误回调
fs.access('a', err=>{
    if(err) {
        console.log('不可访问');
    } else {
        console.log('可访问');
    }
})
```

#### 4.1.2. 获取文件目录信息
> stats => 存储文件或者文件夹的重要信息
- 同步方法
```js
const fs = require('fs');

// 获取文件目录信息
let file = fs.statSync('data.txt');
console.log(file);
console.log(file.size);
```
- 异步方法
```js
const fs = require('fs');

// 获取文件目录信息 - 异步方法
let file = fs.stat('data.txt', (err, data)=> {
    console.log(data);
})
```

### 4.2. 创建目录
- 同步创建
```js
const fs = require('fs');

// 创建目录 - 同步
fs.mkdirSync('aa');
```
- 异步创建
```js
const fs = require('fs');

// 创建目录 - 异步
fs.mkdir('aa', err=>{})
```

### 4.3. 读取目录
- 同步读取
```js
const fs = require('fs');

console.log(fs.readdirSync('aa'));
```
- 异步读取
```js
const fs = require('fs');

console.log(fs.readdir('aa', err=>{}));
```

### 4.4. 删除
#### 4.4.1. 目录删除
- 同步删除
```js
const fs = require('fs');

// 删除目录 - 同步
fs.rmdirSync('aa');
```
- 异步删除
```js
const fs = require('fs');

// 删除目录 - 异步
fs.rmdir('aa', err=>{});
```

#### 4.4.2. 文件删除
- 同步删除
```js
const fs = require('fs');

// 删除文件 - 同步
fs.unlinkSync('data3.txt');
```
- 异步删除
```js
const fs = require('fs');

// 删除文件 - 异步
fs.unlink('data2.txt', err=>{});
```

## 5. 小栗子
> 使用异步方法读取所有txt文件
```js
const fs = require('fs');

const path = require('path');

// 获取文件
function getFile() {
    // 解决回调嵌套的问题
    return new Promise((resolve, rejects)=> {
        // 获取文件目录，__dirname表示项目根目录
        // path.resolve会返回绝对路径，进行拼接，然后返回
        // 文件路径的处理
        const filePath = path.resolve(__dirname, './doc');

        // 异步读取文件目录
        fs.readdir(filePath, (err, files)=> {
            const fileArr = [];

            files.forEach(fileName=> {
                fileArr.push('/doc/' + fileName);
            });

            // 将结果resolve出去
            resolve(fileArr);
        })
    })
}

// 他会等待getFile操作完之后再进行return
async function getFilePath() {
    const result = await getFile(); // 等待异步操作

    return result;
}

function insertDbData() {
    getFilePath().then(res=> {
        // 数据库的操作
        console.log(res);
    });
}

insertDbData();
```

---
<br />

<font color="#666" size="5">\~End~</font>