# js工具库
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 获取文件类型
```js
// 获取文件类型
getFileType(fileName) {
  let spl = fileName.split(".");

  return spl[spl.length-1]
},
// this.getFileType(file.name)
```

## 2. 带请求头下载
```js
// 重写通用下载方法 - 原生
export function download(url, filename) {
  // 下载附件公共方法
  let createObjectURL = (object)=> {
    return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
  }

  // 使用原生xhr并添加请求头
  let xhr = new XMLHttpRequest();
  let formData = new FormData();
  xhr.open('get', url);

  // 请求头
  let token = 'Bearer ' + getToken()
  xhr.setRequestHeader("Authorization", token);
  xhr.responseType = 'blob';

  // 加载
  xhr.onload = function (e) {
    if (this.status == 200) {
      let blob = this.response;
      // console.log(blob)

      if(filename === undefined) {
        console.log("213")
      }

      filename === undefined ? filename = "code.zip" : filename = `${filename.toString()}.zip`
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