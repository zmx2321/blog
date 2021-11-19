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