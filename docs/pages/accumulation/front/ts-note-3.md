# 优化node-ts脚手架-1
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 将接口抽离，并定义传值
> 面向接口编程
### 1.1. 新建一个api文件夹
1. apiGetPosts.ts 
  - 在里面引入express的钩子RequestHandler
```ts
import { DataStore } from '../data/data';
import { RequestHandler } from 'express'

// posts接口
export const apiGetPosts: RequestHandler = (req, res)=> {
    res.json(DataStore.posts);
}

// postsDetail接口
export const apiGetPostsDetail: RequestHandler = (req, res) => {
    // 接收从页面传过来的值
    // console.log(req.params);

    DataStore.posts.forEach((item: any)=> {
        // console.log(item);
        if(item.id == req.params.id) {
            res.json(item);
        }
    });
}
```

### 1.2. server.ts改写
```ts
import express from 'express';
import { 
    apiGetPosts,  // posts接口
    apiGetPostsDetail,  // postsDetail接口
 } from './api/apiGetPosts'

const app = express();  // 实例化

// 打包上线时可以识别端口号
// 启动一个端口
app.listen(process.env.PORT || 8091, ()=> {
    console.log('Server started...');
});

// 实现posts接口
app.get("/posts", apiGetPosts);  // posts接口
app.get("/posts/:id", apiGetPostsDetail);  // postsDetail接口

// 监听路由
// 根路径
app.get("/", (req, res, next)=> {
    res.send('node ts api is working...');
});
```

## 3. 使用ts语法，定义变量类型
### 3.1. 新建实体类
- 新建文件夹 model/shared/postSummary.ts
```ts
// 实体类定义
export class PostSummary {
    "userId": number;
    "id": number;
    "title": string;
    "body": string;

    constructor(data: any) {
        this.userId = data.userId;
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
    }
}
```

### 3.2 改写接口文件
- apiGetPosts.ts 
```ts
import { DataStore } from '../data/data';
import { RequestHandler } from 'express'
import { PostSummary } from '../model/shared/postSummary'

// posts接口
export const apiGetPosts: RequestHandler = (req, res)=> {
    res.json(DataStore.posts.map((item: any)=> new PostSummary(item)));
}

// postsDetail接口
export const apiGetPostsDetail: RequestHandler = (req, res) => {
    // 接收从页面传过来的值
    // console.log(req.params);

    DataStore.posts.forEach((item: any)=> {
        // console.log(item);
        if(item.id == req.params.id) {
            // res.json(item);
            // 先对PostSummary实例化，把item传递过去，就都定义了ts的数据类型了
            res.json(new PostSummary(item));
        }
    });
}
```


