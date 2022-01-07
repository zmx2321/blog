# js工具库
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 获取文件类型
```js
// 重写通用下载方法 - 原生
export function download (url, params, filename, status) {
  // console.log(url, params, filename)

  // 下载附件公共方法
  let createObjectURL = (object) => {
    return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
  }

  // 使用原生xhr并添加请求头
  let xhr = new XMLHttpRequest();
  let formData = new FormData();

  // 添加formdata
  for(let item in params) {
    formData.append(item, params[item]);
  }

  /* for (let keys of formData.entries()) {
    console.log(keys);
  } */

  if(!status) {
    xhr.open('get', url);
  } else {
    xhr.open('post', url);
  }

  // 请求头
  let token = 'Bearer ' + getToken()
  xhr.setRequestHeader("Authorization", token);
  xhr.responseType = 'blob';

  // 加载
  xhr.onload = function (e) {
    if (this.status == 200) {
      let blob = this.response;
      // console.log(blob)

      if (filename === undefined) {
        console.log("文件名为空")
      }

      // 如果文件名不存在
      if(!filename) {
        filename = "code.zip"
      } else {
        if(filename.toString().indexOf('.') === -1) {
          filename = `${filename.toString()}.zip`
        }
      }
      console.log(filename)

      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, filename);
      } else {
        let a = document.createElement('a');
        let url = createObjectURL(blob);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      }
    }
  };

  xhr.send(formData);  // 发送formdata到xhr
}

this.download(url, 555)
```

## 3. 对象数组根据对象属性删除
```js
// 对象数组根据对象属性删除
removeByValue(arr, value) {
  for(var i in arr){
    if(arr[i].attrs.label === value) {
      arr.splice(i,1);
    }
  }
},
```

## 6. 判断是否为图片
```js
// 获取路径扩展名
getFileprefix(url) {
  // 获取最后一个.的位置
  var index= url.lastIndexOf(".");
  // 获取后缀
  var ext = url.substr(index+1);

  return ext
},
// 判断是否为图片
isAssetTypeAnImage(ext) {
  return ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].indexOf(ext.toLowerCase()) !== -1;
},
// 读取路径
getFileValue(row, item) {
  let url = row[item['prop']]
  let tp = ""

  // 如果有地址
  if(url) {
    if(this.isAssetTypeAnImage(this.getFileprefix(url))) {
      // 图片
      // console.log(url)
      tp = `<img src='${url}' />`
    } else {
      // 文件
      // console.log(url)
      tp = `<a href='${url}'>点击下载</a>`
    }
  }

  return tp
},
```

## 7. 参数转对象
```js
const urlToObj = str=> {
    let strContainer={};
    let arrStr=str.split("&")
    arrStr.forEach((item,index,arr)=>{
        console.log(item)
        let arrA=item.split("=")
        console.log(arrA)
        strContainer[arrA[0]]=arrA[1]
    })
    return strContainer
}
```

## 8. 待整理
```js
/**
 * utils
 */

// 深拷贝
export const deepClone = (obj = {}) => {
    // obj是null，或者不是对象或数组，直接返回
    if (typeof obj !== 'object' || obj == null) {
        // 递归里面，如果是值，直接返回
        return obj
    }

    // 递归中如果遇到对象里面的值是对象或者数组，走下面的逻辑
    // 初始化返回结果
    let result;
    // 判断是否是数组
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }

    // 无论对象还是数组，都可以使用for in遍历
    for (let key in obj) {
        // 判断这个key是不是这个对象自身所拥有的属性
        // 保证key不是原型的属性
        if (obj.hasOwnProperty(key)) {
            // 递归(重点)
            // obj[key]表示值
            // 递归是为了防止对象中有深层次的东西，因为你不知道要拷贝的对象中有多少层
            result[key] = deepClone(obj[key]);
        }
    }

    // 返回结果
    return result
}

// 防抖
export const debounce = (fn, delay = 500) => {
    // timer是在闭包中的 => 下面的if(timer)
    // 这样不会被外界轻易拿到 => 即不对外暴露
    // 我们在外面使用不需要关心
    // 同时也是在debounce的作用域中
    // 闭包的使用场景：函数当做返回值或者参数传入
    let timer = null;

    // 函数作为返回值，这就形成闭包了
    return function () {
        // 这里面的timer需要在它定义的作用域往上寻找
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            // 触发change事件
            // 第一个参数是改变this指向
            // 第二个参数是获取所有的参数
            // apply第二个参数开始，只接收数组
            // fn函数在执行的时候，argument传进来
            // debounce返回的函数可能会传进来一些参数
            // 面试使用fn()也没问题
            // fn()
            fn.apply(this, arguments)

            // 清空定时器
            timer = null
        }, delay)
    }
}

// 节流
export const throttle = (fn, delay = 100) => {
    let timer = null  // 这个timer是在闭包里面的

    // 如果不使用apply改变this指向，下面的throttle方法的参数指向这个函数
    // 不会传给下面的那个fn
    return function () {
        if (timer) {
            return
        }

        timer = setTimeout(() => {
            // 一般写一个事件，function里面都要加上event参数，即事件对象
            fn.apply(this, arguments)  // 打印坐标

            timer = null
        }, delay)
    }
}

// 判断对象为空
export const objIsEmpty = obj => {
  if(JSON.stringify(obj) == '{}' ){
    return true;
  }

  return false;
}

// 获取路径扩展名
export const getFileprefix = url => {
  // 获取最后一个.的位置
  let index= url.lastIndexOf(".");
  // 获取后缀
  let ext = url.substr(index+1);

  return ext
}

// 判断是否为图片
export const isAssetTypeAnImage = ext => {
  return ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].indexOf(ext.toLowerCase()) !== -1;
}

// 去重
export const uniqueArr = arr => {
  return Array.from(new Set(arr));
}
```