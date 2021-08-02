# 获取自己的json文件提供接口
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 参考网站
- [jsonplaceholder](https://jsonplaceholder.typicode.com)

## 2. 步骤
### 2.1. 新建数据文件并修改配置 
1. 在参考网站上复制数据，在demo项目中新建data文件，并将其放入
  - 正常的开发流程是数据存库，然后从数据库存储，这里只是模拟数据
2. 在data文件夹下新建data.ts文件管理数据
  - 由于在ts中引入json文件有问题，需要修改ts配置
  - 修改tsconfig.json文件
    - 在文件中加入配置`"resolveJsonModule": true`
      - 在esModuleInterop属性下面

### 2.2. 配置数据项
```ts
// data/data.ts

import posts from './posts.json'
import todos from './todo.json'

export class DataStore {
    // 左边的数据表示静态全局
    static posts = posts;
    static todos = todos;
}
```

### 2.3. 在主入口文件引入
```ts
import express from 'express';
import { DataStore } from './data/data';
// console.log(DataStore);

const app = express();  // 实例化

// 监听路由
// 根路径
app.get("/", (req, res, next)=> {
    res.send('node ts api is working...');
});

// 实现posts接口
app.get("/posts", (req, res, next)=> {
    res.json(DataStore.posts);
});

// 实现todo接口
app.post("/todos", (req, res, next)=> {
    res.json(DataStore.todos);
});

// 打包上线时可以识别端口号
// 启动一个端口
app.listen(process.env.PORT || 8091, ()=> {
    console.log('Server started...');
});
```