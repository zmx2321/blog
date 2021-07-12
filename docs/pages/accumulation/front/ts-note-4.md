# 优化node-ts脚手架-2
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 优化获取单条数据
- apiGetPosts
```ts
import { DataStore } from '../data/data';
import { RequestHandler } from 'express'
import { PostSummary } from '../model/shared/postSummary'

// posts接口
export const apiGetPosts: RequestHandler = (req, res)=> {
    // 只返回返回值 - 相当于执行箭头函数后面的方法，然后return item
    res.json(DataStore.posts.map((item: any)=> new PostSummary(item)));
}

// postsDetail接口
export const apiGetPostsDetail: RequestHandler = (req, res)=> {
    // 接收从页面传过来的值
    console.log(req.params);

    // 先判断是否有值 - 只返回返回值 - return element
    const selectedPost = DataStore.posts.find((element: any)=> element.id == req.params.id)
    // console.log(selectedPost);

    // 如果不为空
    if(selectedPost) {
        res.json(new PostSummary(selectedPost));
    } else {
        res.status(404).json({
            status: "faild",
            message: "posts not find"
        });
    }
}
```

## 2. 抽离详情接口
- 新建 /api/posts/apiGetPostsDetail.ts文件
```ts
import { DataStore } from '../../data/data';
import { RequestHandler } from 'express'
import { PostSummary } from '../../model/shared/postSummary'

// postsDetail接口
export const apiGetPostsDetail: RequestHandler = (req, res)=> {
    // 接收从页面传过来的值
    console.log(req.params);

    // 先判断是否有值 - 只返回返回值 - return element
    const selectedPost = DataStore.posts.find((element: any)=> element.id == req.params.id)
    // console.log(selectedPost);

    // 如果不为空
    if(selectedPost) {
        res.json(new PostSummary(selectedPost));
    } else {
        res.status(404).json({
            status: "faild",
            message: "posts not find"
        });
    }
}
```
- /api/posts/apiGetPosts.ts
```ts
import { DataStore } from '../../data/data';
import { RequestHandler } from 'express'
import { PostSummary } from '../../model/shared/postSummary'

// posts接口
export const apiGetPosts: RequestHandler = (req, res)=> {
    // 只返回返回值 - 相当于执行箭头函数后面的方法，然后return item
    res.json(DataStore.posts.map((item: any)=> new PostSummary(item)));
}
```
- server.ts
```ts
import express from 'express';
import { 
    apiGetPosts,  // posts接口
 } from './api/posts/apiGetPosts'
import { 
    apiGetPostsDetail,  // postsDetail接口
 } from './api/posts/apiGetPostsDetail'

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

## 3. 多表查询
- 新建 /model/share/todo.ts
```ts
// 定义实体类
export class Todo {
    postId: number;
    userId: number;
    id: number;
    title: number;
    completed: boolean;

    constructor(data: any) {
        this.postId = data.postId;
        this.userId = data.userId;
        this.id = data.id;
        this.title = data.title;
        this.completed = data.completed;
    }
}
```
- 新建关联类 /model/share/postDetails.ts
```ts
import { PostSummary } from './postSummary'
import { Todo } from './todo'

// 继承父类
export class PostDetail extends PostSummary {
    price: number;
    currency: string;
    todos: Todo;

    constructor(postData: any, todoData: any) {
        super(postData);  // 调用父级

        this.price = postData.price;
        this.currency = postData.currency;

        this.todos = todoData.map((item: any)=> new Todo(item));
    }
}
```
- 修改接口 api/GetPostDetails.ts
```ts
import { DataStore } from '../../data/data';
import { RequestHandler } from 'express'
import { PostDetail } from '../../model/shared/postDetail'

// postsDetail接口
export const apiGetPostsDetail: RequestHandler = (req, res)=> {
    // 接收从页面传过来的值
    // console.log(req.params);

    // 先判断是否有值 - 只返回返回值 - return element
    const selectedPost = DataStore.posts.find((element: any)=> element.id == req.params.id)
    // console.log(selectedPost);

    // 如果不为空
    if(selectedPost) {
        // 过滤todo
        const selectedTodos = DataStore.todos.filter((item: any)=> item.postId == req.params.id);

        res.json(new PostDetail(selectedPost, selectedTodos));
    } else {
        res.status(404).json({
            status: "faild",
            message: "posts not find"
        });
    }
}
```
