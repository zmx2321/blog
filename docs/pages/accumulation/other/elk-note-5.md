# elk相关问题
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. vue连接es
```js
"/elasticApi": {
  changeOrigin: true, //允许跨域
  // target: "http://192.168.2.240:9200",
  target: dataWareConfig.elsearchUrl,
  ws: true,
  pathRewrite: {
    "^/elasticApi": "/"
  }
},

 export const SaveKibanaList = (indexes, params)=> {
  return new Promise(resolve=> {
    esBatchAddApi(indexes, params);
    resolve(true);
  });
}

 // 接口 - 根据id查询
 const getESApiById = (indexes, params, id) => {
  var res = axios({
    url: `/${esApiUrl}/${indexes}/_doc/${id}`,
    method: 'post',
    data: params
  });
 };

 dataWareUtil.esOptionApi(getForecastList, params, hisData=> {})
```

## 2. kibana插件开发
- elastic在npm上发布了一些制作插件的工具，在你没有完全了解该如何做插件开发之前，可以直接使用工具来帮你生成插件
- npm install -g yo
- npm install -g generator-kibana-plugin
- mkdir echartdashboard-plugin
- cd echartdashboard-plugin
- yo kibana-plugin