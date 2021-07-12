# npm相关命令
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 查看全局下载根目录
- `npm root -g`

## 2. 快速删除node_modules包
1. 全局安装依赖rimraf 
    - `npm install rimraf -g`
2. 删除node_modules包
    - `rimraf node_modules`

## 3. 清除npm缓存
- `npm cache clean -f`

## 4. 解决Node内存溢出
1. 安装两个插件
    - `npm install increase-memory-limit` 
    - `npm install cross-env`
2. 在package.json里的scripts里进行配置
    - LIMIT是你想分配的内存大小，这里的8192单位是M也就是8G（具体的大小根据实际情况而定）; 
    ```json
    "scripts": {
        "fix-memory-limit": "cross-env LIMIT=8192 increase-memory-limit"
    },
    ```
3. 执行命令
 - `npm run fix-memory-limit`

 ## 5. 直接以服务的方式运行网页
 - `npm install -g http-server`
 - cd到某个目录
 - `http-server -p 8881`