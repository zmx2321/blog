# react实现一个简易评论管理
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 步骤
1. 根据UI效果图拆分组件
2. 在index.html引入全局样式文件
3. 定义静态组件
    - 针对静态页面拆分
    - 新建文件夹和jsx文件
    - 在app.jsx中引入组件
4. 在app.jsx中定义构造函数
    - 给组件对象添加state属性，默认值为null
    - 组件对象即是当前组件中的this，不是组件类App
5. 在父组件添加state属性，传到子组件
    - 在子组件定义一个名称(最好和state上的名称相同)
    ```jsx
    const { comments } = this.state.comments;
    <CommentList comments={ comments } />
    ```
6. 子组件读取值
    - 子组件需要声明读取的属性-给当前的组件类指定属性
    - 不能在里面写，不然就相当于给组件对象指定属性了，除非定义成静态属性
    - 声明时需要加载依赖
        - `npm install --save prop-types`

## 2. 代码示例
1. 父组件
```jsx
import React, {Component} from 'react';
import logo from '../../logo.svg'

// 引入外部组件
import CommentAdd from '../comment-add/comment-add'  // 添加评论
import CommentList from '../comment-list/comment-list'  // 评论列表

export default class App extends Component {
    // 初始化状态-复杂写法
    // 给组件对象指定state属性，默认值为null
    /* constructor (props) {
        super(props);

        this.state = {
            // 评论列表项
            comments: [
                {
                    username: "Tom",
                    content: "React 真香",
                },{
                    username: "Jack",
                    content: "React 太难了",
                }
            ]
        }
    } */
    // 简易写法
    state = {
        // 评论列表项
        comments: [
            {
                username: "Tom",
                content: "React 真香",
            },{
                username: "Jack",
                content: "React 太难了",
            }
        ]
    }

    render() {
        // 评论列表
        const { comments } = this.state;

        return (
            <div>
                <span>app.jsx：评论功能</span>
                <img style={{ display: 'none' }} src={logo} alt="logo" />

                <div className="comment_add">
                    <CommentAdd />
                </div>
                <div className="comment_list">
                    <CommentList comments={ comments } />
                </div>
            </div>
        )
    }
}
```

2. 子组件-添加评论
```jsx
import React, {Component} from 'react';

export default class CommentAdd extends Component {
    render() {
        return (
            <div>
                <span>comment-add.jsx：添加评论</span>
            </div>
        )
    }
}
```

3. 子组件-评论列表
```jsx
import React, {Component} from 'react';
// 引入下载的依赖
import PropTypes from 'prop-types';

// 引入css
import './comment-list.css'

// 引入外部组件
import CommentItem from '../comment-item/comment-item';

export default class CommentList extends Component {
    // 给当前的组件类指定属性-简易写法-静态属性
    static propTypes = {
        // isRequired表示需要被传过来
        comments: PropTypes.array.isRequired  // 数据类型为数组
    }

    render() {
        // 需要去读组件类的值
        const { comments } = this.props

        return (
            <div>
                <span>comment-list.jsx：评论列表</span>

                {/* 调用评论列表项组件 */}
                <div className="comment-list">
                    <ul>
                        <span>comment-item.jsx：评论列表项</span>
                        {
                            comments.map(
                                (comment, index) => 
                                    // 第一个comment要与子组件的组件类的属性名一致
                                    // 第二个comment要与形参的名一致
                                    // 数组中的标签必须要有key，否则会有警告
                                    <CommentItem comment={comment} key={index} />
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

// 声明读取的属性-给当前的组件类指定属性-复杂写法
// 需要下载依赖（npm install --save prop-types）
/* CommentList.propTypes = {
    comments: PropTypes.array.isRequired
} */
```

4. 子组件-评论列表项目
```jsx
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// 引入外部样式
import './comment-item.css'

export default class CommentItem extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired
    }

    render() {
        const { comment } = this.props;
        // console.log(comment);

        return (
            <li>{comment.username}说：{comment.content}</li>
        )
    }
}
```
