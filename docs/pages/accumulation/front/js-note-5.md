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