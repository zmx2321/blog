# 防抖和节流
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

> 多个tab只对应一个内容框，点击每个tab都会请求接口并渲染到内容框，怎么确保频繁点击tab，数据都能正常显示

**<font color="#009688" size="3" face="微软雅黑">
分析：
</font>**<br />
因为每个请求处理时长不一致，可能会导致先发送的请求后响应，即请求响应顺序和请求发送顺序不一致，从而导致数据显示不正确 。
<br />
即可以理解为连续触发多个请求，如何保证响应顺序和请求发送顺序一致。对于问题所在场景，用户只关心最后数据是否显示正确，即可以简化为：连续触发多个请求，如何保证最后响应的结果是最后发送的请求(不管制之前的请求是否发送或者响应成功)<br />
类似场景: input输入框即时搜索，表格快速切换页码

**<font color="#009688" size="3" face="微软雅黑">
解决方案：
</font>**<br />

防抖(过滤掉一些非必要的请求)+取消上次未完成的请求(保证最后一次请求的响应顺序)<br />
取消请求的方法
- `XMLHttpRequest`使用`abort api`取消请求
- `axios`使用`cancel token`取消请求
伪代码(以setTimeout模拟请求，clearTimeout取消请求)
```js
/**
 * 函数防抖，一定时间内连续触发事件值
 * func 需要防抖的函数
 * delay 防抖延迟
 * immediate 是否立即执行，为true表示连续触发时立即执行，即执行一次
 * 为false表示连续触发后delay ms后执行一次
 */
let debounce = function(func, delay=100, immediate = false) {
    let timeoutId, last, context, args, result;

    function later() {
        const interval = Date.now() - last;

        if(interval < delay && interval >= 0) {
            timeoutId = setTimeout(later, delay - interval);
        } else {
            timeoutId = null;

            if(!immediate) {
                result = func.apply(context, args);
                context = args = null;
            }
        }
    }

    return function() {
        context = this;
        args = arguments;
        last = Date.now();

        if(!timeoutId) {
            timeoutId = setTimeout(later, delay);
        }

        return result;
    }
}

let flag = false;  // 标志位，表示当前是否正在请求数据

let request = (i)=> {
    if(flag) {
        clearTimeout(xhr);

        console.log(`取消第${i - 1}次请求`);
    }

    flag = true;
    console.log(`开始第${i}次请求`);

    xhr = setTimeout(()=> {
        console.log(`请求${i}响应成功`);
        flag = false;
    }, Math.random() * 200);
}

let fetchData = debounce(request, 50);  // 防抖

// 模拟连续触发的请求
let count = 1;
let getData = ()=> {
    setTimeout(()=> {
        fetchData(count);
        count++;

        if(count < 11) {
            getData();
        }
    }, Math.random() * 200);
}

getData();

/**
某次测试输出：
    开始第2次请求
    取消第3次请求
    开始第4次请求
    取消第4次请求
    开始第5次请求
    取消第5次请求
    开始第6次请求
    请求6响应成功
    开始第9次请求
    取消第9次请求
    开始第10次请求
    请求10响应成功
*/
```

---
<br />

<font color="#666" size="5">\~End~</font>