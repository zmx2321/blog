# ts环境安装
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 软件的安装
1. 安装node

## 2. 脚手架的安装
1. `npm init -y`
2. 在package.json中修改入口文件
  - index.js => server.ts
3. 创建入口文件 => server.ts
4. 全局安装ts的模块
  - `npm install typescript -g`
5. 使用ts的配置文件
  - `tsc -init`
  - 如果想把server.ts转换成server.js
    - `tsc server.ts`
    - 在开发中我们使用ts，打包上线的时候我们使用js
    - 因为ts可以写出严谨的代码，并且他转换的js比我们自己写的js更优化
6. 安装服务所需要的模块
  - `npm install express`
  - dependencies => 当前项目所需要的环境，上线的时候也会安装
7. 安装开发的时候需要的模块
  - `npm install @types/node -g` => 全局
    - 帮助我们引入关于ts所需要依赖的一些内容
  - 在开发环境，我们也需要这个工具
    - `npm install @types/node -D`
    - 同时需要express => `npm install @types/express -D`
    - devDependencies => 表示当前在开发过程中使用的环境

## 3. 先新启一个服务
```ts
import express from 'express';
const app = express();  // 实例化

// 监听路由
// 根路径
app.get("/", (req, res, next)=> {
    res.send('node ts api is working...');
});

// 打包上线时可以识别端口号
// 启动一个端口
app.listen(process.env.PORT || 8091, ()=> {
    console.log('Server started...');
});
```
- 输入`tsc`,将其转换成js
- `node server` => 启动

## 4. 自动化执行node
> 将tsc命令与执行js命令整合成一个命令
1. 修改ts的配置 => tsconfig.json
  - 我们需要将js文件输出到另外一个文件夹
    - 解开outDir注释
    - `"outDir": "./build"`
    - 他在我们使用tsc指令的时候生产tsc文件夹
  - 修改target属性
    - `"target": "es2020",`
    - 会让我们代码更优化一些
  - 此时执行tsc命令，会多出一个build文件夹
2. 修改package.json => 主要修改scripts
  - `"start-server": "tsc && node build/server.js"`
    - 给该指令定义一个名称
    - tsc表示将ts打包成js
    - 后面一条指令表示执行build文件夹下的server.js指令
    - 需要一次性执行两个指令
  - 使用nodemon实现自动化
    - 事实监听代码是否有变化，如果有变化，就执行
    - `npm install nodemon -g`
    - 继续修改page.json
      - `"start": "nodemon -e ts -w ./ -x npm run start-server"`
        - 表示实时nodemon监听ts文件
        - 监听之后再执行命令
        - 只要发现你的ts文件发生变化了，监听到了，就执行一下npm命令
        - 执行`npm start`命令
