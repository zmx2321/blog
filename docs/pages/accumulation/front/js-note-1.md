# js工作积累
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. Promise基本用法
> 在领导要求下，某个项目需要引入引入一个js但不能暴露其地址，所以我使用$.getScript()方法异步加载，但如果还需要引入其他js，并且这个js中的方法只有在异步执行那个js之后才能使用，在这个时候需要有执行先后顺序<br />
解决办法：<br />
考虑使用Promise去实现，先执行完方法一之后再去执行方法二([演示地址](https://zmx2321.github.io/blog_code/accumulation/front/promise_easy))

```js
// 添加js和cssdom
/* let addJs = (url)=> {
    let newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.src = url; 
    let head = document.getElementsByTagName("head")[0];
    head.appendChild(newScript);
}

let addClss = (url)=> {
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
    headHTML += `<link type="text/css" rel="stylesheet" href="${url}">`;
    document.getElementsByTagName('head')[0].innerHTML = headHTML;
} */

// test1
let test1 = ()=> {
    return new Promise((resolve, reject) => {
        // 返回写函数里面你要执行的内容
        resolve(
            console.log("test1, 1111")
        );
    })
}

// test2
let test2 = () => {
    setTimeout(function () {
        console.log("test2, 2222");
    }, 2000)
}

// 先执行test1，再执行test2
test1().then(() => {
    test2();
}) 
```

## 2. 队列控制多个请求访问一个异步方法
> 搜索的时候每次键盘按下都会进行一次搜索，但是搜索时间是异步的，这就导致了上一次搜索还没结束下一次搜索就有开始了，
事实上，异步代码一旦调用频繁后，要么回调满地图跑，要么这些代码不要求有先后，规律。我见过一些代码，所有的请求都用异步，
有时候两三个方法同时请求一个方法的时候，就会出现变量赋值错误，代码执行混乱等问题
解决办法：使用队列来控制搜索的次数与条件。
```js
// 实例化队列
var queue=new Queue();
//搜索点击
function onSearchClick(key){         
    if(queue.getLength==0){
    queue.push(key);
    search()
    }else{
    queue.push(key); 
    }
}
//搜索
function search(){
    //获取队尾
    var key=queue.getTail();
    if(!key){
        $.ajax({
        ....
        data:{searchKey:key},//赋值搜索条件
        ....
        success:function(result){
            var length=queue.getLength();
            if(length>1){
                //清空除队尾的其余条件
                queue.splice(0,length);
                //递归调用
                search();
            }else{
                //清空队列
                queue.clear();
            }                    
        },             
    })
    }
}
    
//队列
Queue:function(){
    var arr = [];
    //入队
    this.push = function (item) {
        arr.push(item);
        return true;
    };
    //出队
    this.shift = function () {
        return arr.shift();
    };
    //获取队首
    this.getHead = function () {
        return arr[0];
    };
    //获取队尾
    this.getTail = function () {
        return arr[arr.length - 1];
    };
    //删除数组固定位
    this.splice = function (start,end) {
        arr.splice(start, end);
    };
    //清空数组
    this.clear = function () {
        arr=[];
    };
    //获取数组长度
    this.getLength = function () {
        return arr.length;
    };
}
```

## 3. 根据索引删除数组元素
```js
// 根据索引删除数组元素
delArrEleByIndex(arr, indexsArr) {
    indexsArr.sort(function(a, b) { return b - a});
    
    indexsArr.forEach(function(indexsArr) { arr.splice(indexsArr, 1) })

    return arr;
},
```

## 4. 生成随机数
```js
// 生成随机数
getRandomNumber (m,n){
    return Math.floor(Math.random()*(m - n) + n);
},
```

## 5. 播放videojs
```js
// 播放videojs
playVideoJS(videoName, videoId) {
    videoName = this.$video(videoId, {
        bigPlayButton: false,
        textTrackDisplay: false,
        posterImage: true,
        errorDisplay: false,
        controlBar: true,
    }, function () {
        this.play()
    });
},
```

## 6. 两个按钮点击事件重叠在一起
- `event.stopPropagation();  // 原生js实现阻止冒泡-使点击眼睛只触发当前事件`

## 7. 定时刷新功能
```js
let myrefresh = ()=> {
    window.location.reload();
}

// 获取刷新时间（分钟）
let getFreshTime = (min) => {
    return 1000*60*min;
}

setTimeout('myrefresh()', getFreshTime(25));
```

## 8. js往对象中添加属性以及拷贝
- 8.1. 给对象obj1中追加obj2中数据
```js
let obj1={a:1};
let obj2={b:3,c:1}
Object.assign(obj1,obj2，..n个);  //第一个元素是要追加的对象，之后的是要添加的对象，可以传多个
console.log(obj1)  //{a:1,b:3,c:1}
```

- 8.2. 拷贝
```js
let obj1={a:1};
let obj2={b:3,c:1}
obj1=Object.assign(obj2);
console.log(obj1)  //{b:3,c:1}
```

## 9. js删除字符串中指定字符最简单的办法
```js
let str = "blog.123csdn.net";
console.log(str.replace("123", ""));  // blog.csdn.net
```

## 10. 根据需求只截取数组前三个
`trackList = trackList.slice(0, 3);`

## 11. 截取字符串前5位并返回新数组
`trackList[item].time = trackList[item].time.substring(5);`

## 12. 使用jquery实现一个上传功能
```js
// 上传图片
const uploadImg = ()=> {
    let formData = new FormData();

    $("#fUpload").change(()=> {
        let file = $("#fUpload")[0].files[0];

        formData.append('multipartFile', file);

        // console.log(formData.get("multipartFile"));  // 获取formData对象

        $.ajax({
           url: URL + "/api/upload/file",
           type: "POST",
           data:formData,
           processData: false,  // 如果想发送不想转换的的信息的时候需要手动将其设置为false
           contentType:false,
           cache:false,
           headers: {
                "X-Token":sessionStorage.getItem("token")//此处放置请求到的用户token
           },
           success: ()=> {
               alert("上传成功");
           },
           error: err=> {
               console.log(err);
           }
        });
    });
}
```

## 13. 在jquery中将dom结构转换成字符串
```js
……
// dom转字符串
domToStr() {
    if(!document.HTMLDOMtoString){
        document.HTMLDOMtoString = function(HTMLDOM){
            const div = document.createElement("div")
            div.appendChild(HTMLDOM)
            return div.innerHTML
        }
    }
},
// dom转字符串用例
domToStrExam(dom) {
    let src = document.HTMLDOMtoString(dom);
    src.replace("&lt;","<");
    src.replace("&gt;",">");

    return src;
},
……

utilTip.domToStr();  // dom转字符串
console.log(utilTip.domToStrExam(e.toElement));  // dom转字符串用例

// 或者
function domToString (node) {
    let tmpNode = document.createElement('div')
    tmpNode.appendChild(node)
    let str = tmpNode.innerHTML
    tmpNode = node = null; // 解除引用，以便于垃圾回收
    return str;
}
```

## 14. 用原生js实现带请求头下载文件
```js
// 带请求头下载附件
downLoadToken(url) {
    // 下载附件公共方法
    let createObjectURL = (object)=> {
        return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
    }

    // 使用原生xhr添加请求头
    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    // xhr.open('get',"http://192.168.0.66:8092"+row.contractAccessory);  //url填写后台的接口地址，如果是post，在formData append参数（参考原文地址）
    xhr.open('get', url);  //url填写后台的接口地址，如果是post，在formData append参数（参考原文地址）
      
    xhr.setRequestHeader("X-Token", sessionStorage.getItem("key"));
    xhr.responseType = 'blob';

    xhr.onload = function (e) {
        if (this.status == 200) {
            var blob = this.response;
            var filename = "附件";

            if (window.navigator.msSaveOrOpenBlob) {
                navigator.msSaveBlob(blob, filename);
            } else {
                var a = document.createElement('a');
                var url = createObjectURL(blob);
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
              }
          }
      };

      xhr.send(formData);  // 发送formdata到xhr
},
```

## 15. jquery动态渲染
> jquery动态渲染出来的dom结构点击事件无法获取当前dom信息($(this))
```js
// 渲染按钮
btnStr = `
    <ul>
        <li>
            <button class="ac_btn sp_jj" data-ckid=${bxspdcl[item].expenseId}>拒绝</button>
        </li>
        <li>
            <button class="ac_btn sp_ty" data-ckid=${bxspdcl[item].expenseId}>同意</button>
        </li>
    </ul>
`;

// 审批-拒绝
$('body').on('click', '.sp_jj', e=> {
    utilTip.dspBtnParm.applyId = e.currentTarget.dataset.ckid;  // 审批id
});
```

## 16. js中数组倒序
`res.data.reverse()`

## 17. JavaScript根据经纬度获取距离信息
```js
//经纬度转换成三角函数中度分表形式。
function rad(d) {
  return d * Math.PI / 180.0;
}

/**
 *
 * @param lat1  纬度1
 * @param lng1  经度1
 * @param lat2  纬度2
 * @param lng2  经度2
 */
function geoDistance(lat1, lng1, lat2, lng2) {
  let radLat1 = rad(lat1);
  let radLat2 = rad(lat2);
  let a = radLat1 - radLat2;
  let b = rad(lng1) - rad(lng2);
  let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
  s = s * 6378.137;// EARTH_RADIUS;
  s = Math.round(s * 10000) / 10000; // 输出为公里
  return s;
}
```

## 18. 正则，1-9999 最多保留一位小数
`/[1-9999]+\.\d$/g`

## 19. js将字符串按照逗号分割
```js
let str = "a,b,c";
let m = str.split(",");
// m是个数组通过下标可以取出截取的字符串
// m[0]  取出结果为a
// m[1] 取出结果为b
// m[2] 取出结果为c
```

## 20. 日期字符串获取小时
```js
let str = "2020-07-27 09:00:00";

let res = str.split(":")[0].split(" ")[1].split("")[1];
console.log(res);
```

## 21. 关于Promise中2个参数的解释
- action中默认第一个参数为content，content.commit，即这里的 {commit}
- return new Promise((resolve, reject)  返回一个promise，模拟一个异步操作
- Promise 对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和 Rejected（已失败）。
- 在新建 promise 的时候就传入了两个参数这两个参数用来标记 promise的状态的，这两个参数是两个方法，并且这两个参数可以随意命名，
- 当执行到 resolve()这个方法的时候，就改变promise的状态为fullfiled ，当状态为 fuulfiled的时候就可以执行.then()
- 当执行到 reject()  这个方法的时候，就改变 promise 的状态为reject，当 promise 为reject 就可以.catch() 这个promise了
- 然后这两个方法可以带上参数，用于.then() 或者 .catch() 中使用。所以这两个方法不是替代，或者是执行什么，
- 他们的作用就是 用于改变promise 的状态。然后，因为状态改变了，所以才可以执行相应的 .then() 和 .catch()操作。
```js
LoginTest(content, userInfo) {
return new Promise((resolve, reject) => {
    LoginTest(userInfo.username, userInfo.password).then(res=> {
        resolve();
    }).catch(error => {
        reject(error);
    })
})
```

## 22. 对象和json
- JSON.stringify(obj)将JSON转为字符串。
```js
JSON.stringify(this.cknwContract);  // 对象转json字符串
```
- JSON.parse(string)将字符串转为JSON格式
```js
cknwContract = JSON.parse(cknwContract);  // json字符串转对象
```

## 23. 如何判断对象是否为空
1. 将json对象转化为json字符串，再判断该字符串是否为"{}"
```js
var data = {};
var b = (JSON.stringify(data) == "{}");
alert(b);//true
```

2. for in 循环判断
```js
var obj = {};

var b = function() {
for(var key in obj) {
return false;
}
return true;
}
alert(b());//true
```

3. 使用ES6的Object.keys()方法
```js
var data = {};
var arr = Object.keys(data);
alert(arr.length == 0);//true
```

## 24. js删除字符串的最后一个字符三种方法
1. substr
```js
let basic = "abc,def,ghi,";  
basic = basic.substr(0, basic.length - 1);
console.log(basic);
```

2. substring
```js
let basic = "abc,def,ghi,";  
basic = basic.substring(0, basic.length - 1); 
console.log(basic);
```

2. lastIndexOf
```js
let basic = "abc,def,ghi,";  
basic = basic.substring(0, basic.lastIndexOf(','));
console.log(basic);
```

## 25. url字符串分割成数组并返回名称
```js
getNameArr(urlStr) {
    let fileListObj = [];

    let urlArr = urlStr.split(',');  // 将字符串以逗号分割生成数组

    // 遍历文件集
    for(let item in urlArr) {
    urlArr[item] = urlArr[item].trim();  // 去除字符串中所有空格

    // 获取每段字符串最后一个/索引
    let index = urlArr[item].lastIndexOf("\/");

    // 遍历数据
    fileListObj.push({
        name: urlArr[item].substring(index + 1, urlArr[item].length),
        url: urlArr[item]
    });
    }

    return fileListObj
}

let urlStr = "upload/contract/0/4/1322860251828117506/新建 DOC 文档.doc, upload/contract/0/4/1322860251828117506/新建 DOC 文档 (2).doc";
console.log(this.getNameArr(urlStr));
```

## 26. 深拷贝
```js
// 深拷贝
// 做vue中前端查询，，查询时遍历深拷贝出来的数组，渲染列表的数组再赋值该数组
deepClone(obj) {
    let _obj = JSON.stringify(obj),
        objClone = JSON.parse(_obj);

    return objClone
},

// 根据交易类型查询列表
getDetquaByType(tradingType) {
    let purdequaData = [];

    // 遍历深拷贝出来的数据
    for(let item in this.purdequaSearchData ) {
    if(this.purdequaSearchData [item].tradingType === tradingType) {
        purdequaData.push(this.purdequaSearchData [item]);
    }
    }

    return purdequaData;
},

// 渲染列表
this.purchaseDetquaInfo = this.getDetquaByType(params.tradingType);
```

## 27. 使用find遍历
```js
// 量价明细下拉当明细表有数据则禁用
judgeDetailData() {
    // 遍历明细表
    for(let item in this.purchaseDetquaInfo) {
        // 遍历字典
        this.constTradeingType.find(typeItem=> {
            if(this.purchaseDetquaInfo[item].tradingType === typeItem.value) {

            typeItem.disabled = true;
            }
            // item.disabled=true
        })
    }
},
```

## 28. 使用formData上传文件加表单
```js
let formData = new FormData();

formData.append('file', this.upload_arg.fileFile[0]);
// formData.append('guiNos', this.$route.params.guiNo);
formData.append('guiNos', this.addBannerData.guiNos);
formData.append('type', this.addBannerData.type);
formData.append('content', this.addBannerData.content);
// console.log(this.upload_arg.fileFile[0]);

console.log(formData.get("file"));

// 获取值，因为get只能获取一个值，如果是多选框，使用getAll方法
console.log(formData.getAll('guiNos'));  // 返回一个数组，获取Key为guiNos的所有值

formData.has('guiNos'); // true
formData.has('key2'); // false

formData.delete('k1');

// 获取所有数据 - 键值对
for (let keys of formData.entries()) {
    console.log(keys);
}

// 获取所有值
for (let keys of formData.values()) {
    console.log(keys);
}

let config = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
};

addBanner(formData, config).then(() => {
    this.$message({
        message: "添加成功！",
        type: "success"
    });

    this.listLoading = false;

    this.addBannerVisible = false;

    this.getBannerList();
});
```

## 29. 数组去重
```js
// 数组去重
unique(arr) {
    const res = new Map();
    return arr.filter((a) => !res.has(a) && res.set(a, 1))
},
```

## 30. sessionStorage传输对象
```js
// 存储
sessionStorage.setItem("rowData", JSON.stringify(row));

// 读取
let getRowDataString, getRowDataObj;

getRowDataString = sessionStorage.getItem("rowData");
getRowDataObj = JSON.parse(getRowDataString);  // json字符串转对象

console.log(getRowDataObj);
```

## 31. 对象数组去重
```js
let arr = [ 
    { uid: 10002, msg: 'Roshan has fallen to the dire.' }, 
    { uid: 10003, msg: 'Hello, Li Lei. I am Pang Meimo.' } 
];
function update(record) {  
    let index = 0;  
    for(let rec of arr) {  // Search for corresponding record
    if(rec.uid == record.uid) {  // Record matched
    // Delete old record
    arr.splice(index, 1);
    }
    index++;
    }

    arr.push(record);
}

update({ uid: 10002, msg: 'Radiant victory!' });
console.log(arr);
```

```js
let person = [
    {id: 0, name: "小明"},
    {id: 1, name: "小张"},
    {id: 2, name: "小李"},
    {id: 3, name: "小孙"},
    {id: 1, name: "小周"},
    {id: 2, name: "小陈"},   
];

let obj = {};

let peon = person.reduce((cur,next) => {
    obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
    return cur;
},[]) //设置cur默认类型为数组，并且初始值为空的数组
console.log(peon);
```

## 33. 时间戳
```js
// 设置时间戳
getNowFormate(time) {
    time = new Date();
    let year = time.getFullYear(); // 年
    let month = time.getMonth() + 1;  // 月
    let date = time.getDate();  // 日
    let hour = time.getHours();  // 时
    let minute = time.getMinutes();  // 分
    let second = time.getSeconds();  // 秒

    // 加上0
    month < 10 ? month=`0${month}` : month;  // 月
    date < 10 ? date=`0${date}` : date;  // 日
    hour < 10 ? hour=`0${hour}` : hour;  // 时
    minute < 10 ? minute=`0${minute}` : minute;  // 分
    second < 10 ? second=`0${second}` : second;  // 秒

    return `${year}-${month}-${date} ${hour}:${minute}:${second}`
}

getNowFormate();  // 默认当前时间
```

## 34. 深拷贝数组
```js
this.companyList = [...companyData];
```

## 35. 判断字符串中是否有某个值
```js
// 审批操作接口
operationApprovalStatus(params) {
    operationApproval(params).then(res=> {
    this.$message.success("操作成功", res);

    this.refreshList();  // 刷新所有列表
    }).catch(err=> {
    let errStr = err.toString();

    if(errStr.indexOf("不能转审给已处于当前审批流程中的人员") !== '-1') {
        this.turnApprovalVisible = true;
    }
    });
},
```

## 36. 生成位数数字
```js
// 生成位数数字
getSuiJiNum(n) {
    const max = Math.pow(10, n) - 1;
    const min = Math.pow(10, n - 1);
    
    return Math.round(Math.random() * (max - min)) + min;
},

this.getSuiJiNum(6);  // 6位
```

## 37. 前端删除列表项
```js
this.purchaseDetquaInfo = this.purchaseDetquaInfo.filter(item => {
for (let i = 0; i < this.selectionList.length; i++){
if(this.selectionList[i] === item) {
    return false
}
}

return true
})

this.clearSelections();

this.$message.success("删除成功！");
```

## 38. 判断对象数组中是否有值
```js
 // 判断1，2是否存在，如果存在，则返回
let depChangguiData = this.purchaseDetquaInfo.find(item => {
    return item.tradingType === 1 || item.tradingType === 2;
});
// console.log(depChangguiData);

// 如果存在常规数据
if(depChangguiData !== undefined) {
    this.dicTradingType.find(typeItem=> {
        if(parseInt(typeItem.value) === 1 || parseInt(typeItem.value) === 2) {
            typeItem.disabled = true;
        }
    });
}
```

## 39. element-ui中禁用某些日期
```js
// 季报
quarterlyPicker(startMonth, endMonth) {
    console.log("季报");
    let startMonthArr = startMonth.split("-");
    let endMonthArr = endMonth.split("-");

    // 开始月份
    this.pickerOptionsStartDate = {
        disabledDate(time) {
        return (time.getTime() !== new Date(startMonthArr[0], 1) - 8.64e7) && 
                (time.getTime() !== new Date(startMonthArr[0], 4) - 8.64e7) &&
                (time.getTime() !== new Date(startMonthArr[0], 7) - 8.64e7) &&
                (time.getTime() !== new Date(startMonthArr[0], 10) - 8.64e7);
        },
    };

    // 结束月份
    this.pickerOptionsEndDate = {
        disabledDate(time) {
        return (time.getTime() !== new Date(startMonthArr[0], 3) - 8.64e7) && 
                (time.getTime() !== new Date(startMonthArr[0], 6) - 8.64e7) &&
                (time.getTime() !== new Date(startMonthArr[0], 9) - 8.64e7) &&
                (time.getTime() !== new Date(startMonthArr[0], 12) - 8.64e7);
        },
    };
},

this.quarterlyPicker(this.generatingReportData.startMonth, this.generatingReportData.endMonth);
```

## 40. 下拉框禁用
```js
/*<el-form-item label="转审" prop="transferId">
<el-select v-model="approvalOperationData.transferId" placeholder="请选择被转审人" clearable>
    <el-option v-for="(item, index) in userList" :label="item.label" :value="item.value" :key="index" :disabled="item.disabled"></el-option>
</el-select>
</el-form-item>*/

this.userList.find(userItem=> {
    if(row.createUser === userItem.value) {
        userItem.disabled = true;
    }
});
```

## 42. 取对象数组中的重复元素去重并取出
```js
let arr = [
    { name: '笔记本', value: '2', type: '1' },
    { name: '记事本', value: '3', type: '1' },
    { name: '书本', value: '3', type: '1' },
    { name: '笔本', value: '2', type: '1' },
    { name: '笔记本', value: '4', type: '1' },
    { name: '笔记本', value: '5', type: '1' }
];
let arrD = [];
const map = new Map();
arr.forEach(v => {  if (map.get(v.name) && arrD.every(vD => vD.name != v.name)) {
    arrD.push(v);
    } else {
    map.set(v.name, v);
    }
});

console.log(arrD);
```

```js
let temparr = [];
const map = new Map();

for(let j in this.grantVOData.scopeList) {
    if(this.grantVOData.scopeList[j].hasChildren) {
        this.grantVOData.scopeList[j].children.forEach(v=> {
            if(map.get(v.id) && temparr.every(vd=> vd.id !== v.id)) {
                temparr.push(v)
            } else {
                map.set(v.id, v);
            }
        });

        this.grantVOData.scopeList[j].children = [];
        this.grantVOData.scopeList[j].children = temparr;
    }
}
```

## 43. 当一个方法执行完之后，再执行其他方法
```js
arr.reduce((res, url)=> {
    return new Promise(async resolve=> {
        await getList(url);  // 等这个方法执行完之后
        resolve();
    });
}, Promise.resolve());
```

## 44. 数组中id提取出来，以逗号隔开
1. 方法一
```js
let idStr = "";

// 获取选中的id集合
for(let item in this.selectionList) {
    idStr += this.selectionList[item].id + ",";
}
// console.log(idStr);

if(idStr !== "") {
    idStr = idStr.substring(0, idStr.length-1);
}
// console.log(idStr);
```
2. 方法二
```js
let ids = []

this.selectionList.forEach(item => {
    ids.push(item.id)
})
ids = ids.join(',')
let params = {
    ids: ids
}
console.log(params);
```

## 45. 解决async/await中的promise返回错误reject的问题，及错误捕获
```js
function fn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error")
        }, 1000)
    })
}

async function go() {
    try{
        let res = await fn()
    }catch(e){
        console.log(e)
    }
}

go()
```

## 46. 外部引入用法
### 46.1. node引入方式
```js
// config.js
module.exports = {
    aUrl: "http://xxx:5603",  // xxx地址
    bUrl: "http://xxx:5603",  // xxx地址
}

import test from '@/util/config'

console.log(test.aUrl)
console.log(test.bUrl)
```

### 46.2. es6引入方式
```js
// 获取es数据列表
export const getEsDataList = hitList=> {
    let esDataList = [];

    hitList.forEach(val=> {
        // 获取es目标数据的数据源
        esDataList.push(val._source);
    });

    return esDataList;
}

import * as config from '@/util/config'
let esDataList = config.getEsDataList(unitCrewHits);  // 获取es数据列表
```

## 47. 函数传参(对象)
```js
aa(s,v) {
    let obj = {}
    obj[s] = v
},
```

## 48. 字典类写法
```js
// dic
// select
const sellist = [
    {
        label: 'aa',
        value: 0,
    },
    {
        label: 'bb',
        value: 1,
    },
]

const aaa = (from, val)=> {
    let arr = [];

    for(let i=from; i<=val; i++) {
        arr.push({
            label: i,
            value: i,
        });
    }

    return arr;
}

export {
    sellist,
    aaa
}

import * as dic from '@/util/dic'  // 字典
console.log(dic.sellist);

dic.aaa(14, 30)
```

## 49. 循环
```js
// 循环匹配id
for(let parItem in parList) {
    // console.log(parList[parItem]);

    this.user_info.forEach(userItem=> {
        if(parItem[parItem].user_id === userItem.id) {
        // console.log(forecastList[forecastItem].user_id + "---" + userItem.id + "---" + userItem.realName);
        parItem[parItem].user_name = userItem.realName;
        }
    })
}
```

## 50. 定义类供出各个时间格式
```js
// 时间戳
export class getTimestamp {
    constructor() {
        let timeStamp = new Date();

        this.year = timeStamp.getFullYear();  // 年
        this.month = timeStamp.getMonth() + 1;  // 月
        this.date = timeStamp.getDate();  // 日

        this.day = timeStamp.getDay();  // 获取当前星期几

        this.hour = timeStamp.getHours();  // 时
        this.minute = timeStamp.getMinutes();  // 分
        this.second = timeStamp.getSeconds();  // 秒

        // 日期
        this.weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

        // 小于十位加0
        this.month = (this.month< 10) ? '0' + this.month: this.month= this.month;
        this.date = (this.date< 10) ? '0' + this.date: this.date= this.date;

        this.hour = (this.hour< 10) ? '0' + this.hour: this.hour= this.hour;
        this.minute = (this.minute< 10) ? '0' + this.minute: this.minute= this.minute;
        this.second = (this.second< 10) ? '0' + this.second: this.second= this.second;
    }

    // 获取当前年月日时分秒
    nowDateTime() {
        return `${this.year}-${this.month}-${this.date} ${this.hour}:${this.minute}:${this.second}`;
    }

    // 获取当前年月日
    nowDate() {
        return `${this.year}-${this.month}-${this.date}`;
    }

    // 获取当前星期
    nowWeek() {
        return this.weekday[this.day]
    }

    // 任意时间戳改变格式 - 年月日时分秒
    formatDateTime = time=> {
        let timeStamp = new Date(time);
        let year = timeStamp.getFullYear(); // 年
        let month = timeStamp.getMonth() + 1;  // 月
        let date = timeStamp.getDate();  // 日
        let hour = timeStamp.getHours();  // 时
        let minute = timeStamp.getMinutes();  // 分
        let second = timeStamp.getSeconds();  // 秒
    
        // 加上0
        month < 10 ? month=`0${month}` : month;  // 月
        date < 10 ? date=`0${date}` : date;  // 日
        hour < 10 ? hour=`0${hour}` : hour;  // 时
        minute < 10 ? minute=`0${minute}` : minute;  // 分
        second < 10 ? second=`0${second}` : second;  // 秒
    
        return `${year}-${month}-${date} ${hour}:${minute}:${second}`
    }

    // 任意时间戳改变格式 - 年月日
    formatDate = time=> {
        let timeStamp = new Date(time);
        let year = timeStamp.getFullYear(); // 年
        let month = timeStamp.getMonth() + 1;  // 月
        let date = timeStamp.getDate();  // 日
    
        // 加上0
        month < 10 ? month=`0${month}` : month;  // 月
        date < 10 ? date=`0${date}` : date;  // 日
    
        return `${year}-${month}-${date}`
    }

    // 时间戳年月日返回之前一天
    formatYsetDate = time=> {
        // console.log(time);
        let timeStamp = new Date(time).getTime();  // 传入时间的时间戳
        // console.log("timeStamp", timeStamp);

        // 一天的时间戳
        let oneDayTimeStamp = 24*60*60*1000; 
        // console.log("oneDayTimeStamp", oneDayTimeStamp);

        // 获取昨天的时间戳
        let yestDateStamp = timeStamp - oneDayTimeStamp;
        // console.log(yestDateStamp);

        // 改变时间戳
        let yestDate = this.formatDate(yestDateStamp);
        // console.log(yestDate);

        return yestDate;
    }

    // UTC时间格式转换
    UTCtoNormal(value) {
        // console.log("UTC时间格式转换");

        if (value == '') {
            return ''
        }
    
        // utc时间转换
    　　return moment(value).format('YYYY-MM-DD HH:mm:ss');
    }

    // 时间戳年月日返回之前一天
    formatYsetDate = time=> {
        // console.log(time);
        let timeStamp = new Date(time).getTime();  // 传入时间的时间戳
        // console.log("timeStamp", timeStamp);

        // 一天的时间戳
        let oneDayTimeStamp = 24*60*60*1000; 
        // console.log("oneDayTimeStamp", oneDayTimeStamp);

        // 获取昨天的时间戳
        let yestDateStamp = timeStamp - oneDayTimeStamp;
        // console.log(yestDateStamp);

        // 改变时间戳
        let yestDate = this.formatDate(yestDateStamp);
        // console.log(yestDate);

        return yestDate;
    }

    // 根据时间判断某天前的日期
    calDate = (n, time)=> {
        // console.log(time);
        let timeStamp = new Date(time).getTime();  // 传入时间的时间戳
        // console.log("timeStamp", timeStamp);

        // 一天的时间戳
        let someDayTimeStamp = n*24*60*60*1000; 
        // console.log("oneDayTimeStamp", oneDayTimeStamp);

        // 获取昨天的时间戳
        let someDateStamp = timeStamp - someDayTimeStamp;
        // console.log(someDateStamp);

        // 改变时间戳
        let someDate = this.formatDate(someDateStamp);
        // console.log(someDate);

        return someDate;
    }

    // 计算某天后n天的日期
    calNextDate = (n, time)=> {
        let timeStamp = new Date(time).getTime();  // time的时间戳

        let someDayTimeStamp = n*86400000; 

        let someDateStamp = timeStamp + someDayTimeStamp;

        let someDate = this.formatDate(someDateStamp);

        return someDate;
    }
}

console.log("获取当前年月日时分秒", new util.getTimestamp().nowDateTime());
console.log("获取当前年月日", new util.getTimestamp().nowDate());
console.log("获取当前星期", new util.getTimestamp().nowWeek());
console.log("new Date('2020-1-1').getTime()", new Date('2020-1-1').getTime());
console.log("任意时间戳改变格式[1577808000000]", new util.getTimestamp().formatDate(1577808000000));
```

## 51. JS如何将变量作为一个对象的Key
```js
var lastWord = 'last word';

var a = {
  'first word': 'hello',
  [lastWord]: 'world'
};

a['first word'] // "hello"
a[lastWord] // "world"
a['last word'] // "world"
```

## 52. for和switch一起使用
```js
// 字典数据
// 将字典中的值与id匹配
for(let itm in list) {
    for(let i=1; i<arr.length; i++) {
        switch(list[itm].forecast_model) {
        case i:
            list[itm].forecast_model_name = arr[i-1].label;
            break;
        }
    }
}
```

## 53. 把已知对象提取出有值的部分转换成新的对象
### 53.1. 方案一
```js
// 根据已知对象动态生成es查询语句
export const getDynamicParams = paramsData=> {
    let fieldArr = [];  // 存放对象属性集合
    let n = 0;  // 计数器

    let filterArr = [];  // 存放最终查询语句
    
    // 处理对象数据并返回对象属性数量
    for(let item in paramsData) {
        if(paramsData[item]){
            // console.log(item);
            fieldArr.push(item);
            n++
        }
    }
    // console.log(n);

    // 根据对象属性数量动态生成新的对象
    for(let i=0; i<n; i++) {
        // console.log(fieldArr[i]);

        // 形成新的对象 - 匹配es查询
        filterArr.push({
            "term": {
                [fieldArr[i]]: paramsData[fieldArr[i]]  // 对象后面如果是字符串
            }
        });
    } 
    // console.log(filterArr);

    return filterArr;
};

let params = {
    "query": {
        "bool": {
        "filter": dataWareUtil.getDynamicParams(paramsData)
        }
    },
    // "size": this.defPageSize
    "size": this.defDataSize
}
// console.log(params);
```

### 53.2. 方案二
```js
// 根据已知对象动态生成es查询语句
export const getDynamicParams = paramsData=> {
    let filterArr = [];  // 存放最终查询语句

    for (let item in paramsData) {
        // 如果paramsData[item]为真就执行后面的方法,并return
        paramsData[item] && filterArr.push({
                                term: {
                                    [item] : paramsData[item]
                                }
                            })
    }

    // console.log(filterArr);
    return filterArr;
}

let params = {
    "query": {
        "bool": {
        "filter": dataWareUtil.getDynamicParams(paramsData)
        }
    },
    // "size": this.defPageSize
    "size": this.defDataSize
}
// console.log(params);
```

## 54. 根据数组中的某个字段去重，返回数组
```js
delForecasList (list) {
    let obj = {}
    let arrList = list.reduce((total, item) => {
    obj[item.batch_id] ? '' : obj[item.batch_id] = true && total.push(item)
    return total
    }, [])
    return arrList
},
```

## 55. js根据数组中对象的某个属性值进行去重
```js

var arr = [
  {
  from:'张三',
  to: '河南'
  },
  {
    from:'王二',
    to: '阿里'
  },
  {
    from:'王二',
    to: '杭州'
  },
  {
    from:'王二',
    to: '山东'
  },
]

// 有如上数组，想根据数组中的对象的from属性进行去重，如果from一样的话，只去一条。根据ES6属性编写函数代码如下：
function unique(arr1) {
  const res = new Map();
  return arr1.filter((a) => !res.has(a.from) && res.set(a.from, 1))
}
```

## 56. js获取一天中每隔15分钟的时间
```js
var m = 0;
var n = 0;
var arr=[];
for(var i=0;i<96;i++){
    n+=15;
    if(n>45){
        n = 0;
        m+=1
    }
    arr.push((m>9?m:"0"+m)+":"+(n>9?n:"0"+n));
}
console.log(arr)
```

## 57. 判断每月多少天
```js
const getDays = (year, month)=> {
    let days = [31,28,31,30,31,30,31,30,30,31,30,31] 
    if ( (year % 4 ===0) && (year % 100 !==0 || year % 400 ===0) ) {
        days[1] = 29
    }
　　return days[month]  
}
```

## 58. 时间相关遍历 - 天、月
```js
// 15分钟
export const getTime15min = rq=> {
    var m = 0;
    var n = 0;
    var arr = [];

    for(var i=0;i<95;i++){
        n+=15;
        if(n>45){
            n = 0;
            m+=1
        }
        arr.push(rq + "T" + (m>9?m:"0"+m)+":"+(n>9?n:"0"+n))
    }

    arr.unshift(rq + "T00:00")

    return arr;
};

// 月
export const getTimeMonth = rq=> {
    let arr = [];

    let timeStamp = new Date(rq);
    // console.log(timeStamp)

    let year = timeStamp.getFullYear();  // 年

    for(let i=1; i<=12; i++) {
        arr.push(`${year}-${(i>9?i:"0"+i)}-01`)
    }

    return arr;
};

// 旬 每个月的 1号、11号、21号
export const getTimeTenDay = rq=> {
    let arr = [];

    let timeStamp = new Date(rq);

    let year = timeStamp.getFullYear();  // 年

    for(let i=1; i<=12; i++) {
        arr.push(`${year}-${(i>9?i:"0"+i)}-01`)
        arr.push(`${year}-${(i>9?i:"0"+i)}-11`)
        arr.push(`${year}-${(i>9?i:"0"+i)}-21`)
    }

    return arr;
};

const getDays = (year, month)=> {
    let days = [31,28,31,30,31,30,31,31,30,31,30,31] 

    if ( (year % 4 ===0) && (year % 100 !==0 || year % 400 ===0) ) {
            days[1] = 29
    }

　　return days[month]  
}

// 日
export const getTimeDay = rq=> {
    let arr = [];

    let timeStamp = new Date(rq);

    let year = timeStamp.getFullYear();  // 年

    for(let i=1; i<=12; i++) {
        for(let j=1; j<=getDays(year, i-1); j++) {
            arr.push(`${year}-${(i>9?i:"0"+i)}-${(j>9?j:"0"+j)}`)
        }
    }

    return arr;
};

// 小时
export const getTimeHover = rq=> {
    var m = 0;
    var n = 0;
    var arr = [];

    for(var i=0;i<23;i++){
        n+=60;
        if(n>45){
            n = 0;
            m+=1
        }
        arr.push(rq + "T" + (m>9?m:"0"+m)+":"+(n>9?n:"0"+n))
    }

    arr.unshift(rq + "T00:00")

    return arr;
};

// 年区间
export const getYearArr = (start,end)=> {
    console.log(start,end)

    var result = [];
    //使用传入参数的时间
    var startTime = new Date(start);
    var endTime = new Date(end);
    while(endTime - startTime>=0 ) {
        //获取年份
        let year = startTime.getFullYear();
        //加入数组
        result.push(year);
        //更新日期
        startTime.setFullYear(startTime.getFullYear()+1);
    }
    return result;
};

// 日区间
export const getTimeDayArr = (stime,etime)=> {
    // console.log(rq);

    //初始化日期列表，数组
    var diffdate = new Array();
    var i=0;
    //开始日期小于等于结束日期,并循环
    while(stime<=etime){
        diffdate[i] = stime;
        
        //获取开始日期时间戳
        var stime_ts = new Date(stime).getTime();
        // console.log('当前日期：'+stime   +'当前时间戳：'+stime_ts);
        
        //增加一天时间戳后的日期
        var next_date = stime_ts + (24*60*60*1000);
        
        //拼接年月日，这里的月份会返回（0-11），所以要+1
        var next_dates_y = new Date(next_date).getFullYear()+'-';
        var next_dates_m = (new Date(next_date).getMonth()+1 < 10)?'0'+(new Date(next_date).getMonth()+1)+'-':(new Date(next_date).getMonth()+1)+'-';
        var next_dates_d = (new Date(next_date).getDate() < 10)?'0'+new Date(next_date).getDate():new Date(next_date).getDate();
 
        stime = next_dates_y+next_dates_m+next_dates_d;
        
        //增加数组key
        i++;
    }

    return diffdate
    // console.log(diffdate);
};

// 月
export const getmonthArr = (start,end)=> {
    var result = [];  
	var s = start.split("-");  
	var e = end.split("-");  
	var min = new Date();  
	var max = new Date();  
	min.setFullYear(s[0],s[1]);  
	max.setFullYear(e[0],e[1]);  
	  console.log(e[0]+"---- "+e[1]);
	var curr = min;  
	while(curr <= max){  
	    var month = curr.getMonth();  
	    //month=month==0?12:month;
	    console.log(month);
	    var str=curr.getFullYear()+"-"+(month);
	    var s=curr.getFullYear()+"-0";
	    if(str==s){
	    	str=curr.getFullYear()+"-12";
	    }
	    result.push(str);  
	    curr.setMonth(month+1);
	}  
	return result;  

};
```

## 59. 判断对象是否为空
```js
export const objIsEmpty = obj=> {
    if(JSON.stringify(obj) == '{}' ){
        return true;
    }

    return false;
};
```

## 60. 工具
```js
// 选项卡异步切换
export const switchTab = (tab, thisTab)=> {
    // for (let [key, value] of Object.entries(this.tabRefresh)) {
    for (let [key] of Object.entries(thisTab)) {
        if (key == tab) {
            thisTab[key] = true
        } else {
            thisTab[key] = false
        }
    }
}

// 数组去重
export const unique = (arr)=> {
    return Array.from(new Set(arr))
}

// 去字符串所有空格
export const replaceSpace = str=> {
    return str.replace(/\s*/g,"");
}

// 去除字符串末尾逗号
export const delComma = str=> {
    return str.replace(/,$/gi,"");
}
```

## 61. 获取所有参数形成对象
```js
let aa = {}
for(let i=0; i<arguments.length; i++) {
    console.log(arguments[i])

    aa.forEach(itm=> {
        itm[arguments[i]] = ""
    })
}
console.log(aa);
```

## 62. 两个对象数组合并
```js
val = "[{\"line\":\"11\",\"negative_data\":333,\"positive_data\":222}]"

// 导入下一步
export const daoruNext = (val, tabActive, timeArr)=> {
    let kibana_info = [];

    let objVal = JSON.parse(val)

    if(tabActive === "currentInfo") {
        kibana_info.push({
            applied_time: new getTimestamp().nowDateTime()
        })
    } else {
        for(let item in timeArr) {
            kibana_info.push({
                applied_time: timeArr[item],
            })
        }
    }

    for(let i=0; i<kibana_info.length; i++) {
        if(objVal[i]) {
            for(let itm in objVal[i]) {
                kibana_info[i][itm] = objVal[i][itm]
            }
        } else {
            if(objVal[0]) {
                for(let itm in objVal[0]) {
                    kibana_info[i][itm] = ""
                }
            }
        }
    }

    return kibana_info
}
```

## 63. Array.shift() 删除数组的第一项
```js
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
var returnArr = arr1.shift();

console.log(arr1); // [2, 3, 4, 5, 6, 7, 8]
console.log(returnArr); // 1
```

## 64. arguments 相关
```js
[].slice.call( arguments )
// 等效于
Array.prototype.slice.call( arguments )

// 因为slice内部实现是使用的this代表调用对象。那么当[].slice.call() 传入 arguments对象的时候，通过 call函数改变原来 slice方法的this指向, 使其指向arguments，并对arguments进行复制操作，而后返回一个新数组。至此便是完成了arguments类数组转为数组的目的
[].shift.call( arguments )
// 删除并拿到arguments的第一项
```

## 65. 获取两个日期中间的年或月或日的数组
```js
//获取两日期之间日期列表函数
function getdifflist(start_time,end_time,type){ // type 为 days(天) , months(月), years(年)
    var dateArray = [];     // dateArray 起止日期中间的所有日期列表
    var currentDate = moment(start_time);    //起止日期
    var stopDate = moment(etime);       //截止日期
    //开始日期小于等于结束日期,并循环
    while(currentDate <= stopDate){
        if (type==='days') dateArray.push( moment(currentDate).format('YYYY-MM-DD') );  //两个日期间的所有日期,图一
        if (type==='months') dateArray.push( moment(currentDate).format('YYYY-MM') );   //两个月份间的所有月份,图二
        if (type==='years') dateArray.push( moment(currentDate).format('YYYY') );       //两个年份间的所有年份,图三
        currentDate = moment(currentDate).add(1, type); //根据类型+1
    }
    return dateArray;
}

getdifflist("2021-03-07","2021-03-09","days")
getdifflist("2021-01","2021-06","months")
```

## 66. echarts日历
```js
const fxrl = ()=> {
  var graphData1 = [
    [
       '2021-02-01',
        260
    ],
    [
        '2021-02-04',
        200
    ],
    [
        '2021-02-09',
        279
    ],
    [
        '2021-02-13',
        847
    ],
    [
        '2021-02-18',
        241
    ],
    [
        '2021-02-23',
        411
    ],
    [
        '2021-02-27',
        985
    ]
];

var graphData2 = [
    [
       '2021-01-01',
        260
    ],
    [
        '2021-01-04',
        200
    ]
];
    
    return {
      tooltip: {
          position: 'top'
      },
  
      calendar: [{
          orient: 'vertical',
          yearLabel: {
              margin: 40
          },
          monthLabel: {
              nameMap: 'cn',
              margin: 20
          },
          dayLabel: {
              firstDay: 1,
              nameMap: 'cn'
          },
          cellSize: 40,
          range: '2021-02'
      },
      {
          orient: 'vertical',
          yearLabel: {
              margin: 40
          },
          monthLabel: {
              nameMap: 'cn',
              margin: 20
          },
          dayLabel: {
              firstDay: 1,
              nameMap: 'cn'
          },
          cellSize: 40,
          left: 460,
          range: '2021-01'
      }],
  
      series: [
          {
          type: 'effectScatter',
          coordinateSystem: 'calendar',
          symbolSize: 10,
          calendarIndex: 0,
          data: graphData1
      },  
      {
          type: 'effectScatter',
          coordinateSystem: 'calendar',
          calendarIndex: 1,
          data: graphData2
      }
      ]
  }
}
```

## 67. 数组去重
```js
console.log(Array.from(new Set(monthArr)));
```

## 68. echarts警告
> There is a chart instance already initialized on the dom
```js
// 资金下拉框
changeMoney(val) {
    // 初始化数据
    this.nameList = []
    this.moneyYearAvgList = []
    this.moneyNowSimList = []

    // 数据
    let hyzj = ()=> {
        this.resdata.industry_money_cnt_list.forEach(item=> {
            this.nameList.push(item.name)
            this.moneyYearAvgList.push(item.l_money)
            this.moneyNowSimList.push(item.money)
        })

        // 主要是这个
        let myChart = this.$echarts.getInstanceByDom(this.moneyChartDom);

        // 渲染图表
        this.moneyOption && myChart.setOption(this.moneyOption);
    }

    // 数据
    let hyfg = ()=> {
        this.resdata.industry_money_cnt_list.forEach(item=> {
            this.nameList.push(item.name)
            this.moneyYearAvgList.push(item.l_ent_count)
            this.moneyNowSimList.push(item.ent_count)
        })

        // 主要是这个
        let myChart = this.$echarts.getInstanceByDom(this.moneyChartDom);

        // 渲染图表
        this.moneyOption && myChart.setOption(this.moneyOption);
    }

    switch(val) {
        case "0":
            hyzj();
            break;
        case "1":
            hyfg();
            break;
    }
},
```

## 69. 在计算属性中获取echarts
```js
// 地区柱状图配置
areaOption() {
    return {
    grid: {      
        bottom: this.gridBottom,
        top: this.gridTop,
        y2: 150,  // 增加柱形图纵向的高度
        left: this.gridLeft,
        height: this.gridHeight
    },
    xAxis: [{
        type: 'category', 
        splitLine: {
        show: false
        },
        axisLine: {
        show: true
        },
        axisTick: {
        show: false
        },
        data: this.areaList,  // 地区
        axisLabel:{ 
        interval: 0, // 横轴信息全部显示    
        // rotate: this.xroute, // 角倾斜显示  
        formatter(val) {
            var strs = val.split(''); //字符串数组
            var str = ''
            for(var i = 0, s; s = strs[i++];) { //遍历字符串数组
                str += s;
                if(!(i % 6)) str += '\n'; //按需要求余
            }
            return str
        }   
        },
    }],
    legend: {
        data: ['年度平均值', '本次模拟值'],
        top: this.legTop,
        right: this.legRight
    },
    yAxis: {
        type: 'value',
        splitLine: {
        show: false
        },
        axisLine: {
        show: true
        },
        axisTick: {
         show: false
        }
    },
    /* dataZoom: [{
        id: 'dataZoomX',
        type: 'slider',
        xAxisIndex: [0],
        filterMode: 'filter'
    },
    {
        type: 'inside'
    }], */
    series: [{
        name: '年度平均值',
        data: this.areaYearAvgList,
        type: 'bar',
        barWidth: this.barWid,
        color: '#3675FF',
        itemStyle: {
        normal: {
        label: {
            show: true,
            position: "top",
        },
        }}
    },
    {
        name: '本次模拟值',
        barWidth: this.barWid,
        data: this.areaNowSimList,
        type: 'bar',
        color: '#FFA025',
        itemStyle: {
        normal: {
        label: {
            show: true,
            position: "top",
        },
        }}
      }]
    }
},

// 地区dom
areaChartDom() {
    return document.querySelector('#areaChart');
},
```

## 70. class绑定
```html
<li :class="[resdata.budget<resdata.l_budget ? 'jt_top' : 'jt_down']"><b>预计投入资金：</b><span>{{ resdata.budget }}万元</span></li>
```

## 71. 柱状图配置
```js
data() {
    return {
      // 柱状图配置
      barWid: 25,  // 柱子宽
      legTop: 14,  // 图例距离
      legRight: 120,  // 图例距离
      gridHeight: 400, // 图大小
      gridBottom: 120, // 图距离
      gridTop: 50,  // 图距离
      gridLeft: 100,  // 图距离
      xroute: -8,  // x轴文字倾斜
    }
}

// 在计算属性computed中
// 地区柱状图配置
areaOption() {
    return {
    grid: {      
        bottom: this.gridBottom,
        top: this.gridTop,
        y2: 150,  // 增加柱形图纵向的高度
        left: this.gridLeft,
        height: this.gridHeight
    },
    xAxis: [{
        type: 'category', 
        splitLine: {
        show: false
        },
        axisLine: {
        show: true
        },
        axisTick: {
        show: false
        },
        data: this.areaList,  // 地区
        axisLabel:{ 
        interval: 0, // 横轴信息全部显示    
        // rotate: this.xroute, // 角倾斜显示  
        formatter(val) {
            var strs = val.split(''); //字符串数组
            var str = ''
            for(var i = 0, s; s = strs[i++];) { //遍历字符串数组
                str += s;
                if(!(i % 6)) str += '\n'; //按需要求余
            }
            return str
        }   
        },
    }],
    legend: {
        data: ['年度平均值', '本次模拟值'],
        top: this.legTop,
        right: this.legRight
    },
    yAxis: {
        type: 'value',
        splitLine: {
        show: false
        },
        axisLine: {
        show: true
        },
        axisTick: {
         show: false
        }
    },
    /* dataZoom: [{
        id: 'dataZoomX',
        type: 'slider',
        xAxisIndex: [0],
        filterMode: 'filter'
    },
    {
        type: 'inside'
    }], */
    series: [{
        name: '年度平均值',
        data: this.areaYearAvgList,
        type: 'bar',
        barWidth: this.barWid,
        color: '#3675FF',
        itemStyle: {
        normal: {
        label: {
            show: true,
            position: "top",
        },
        }}
    },
    {
        name: '本次模拟值',
        barWidth: this.barWid,
        data: this.areaNowSimList,
        type: 'bar',
        color: '#FFA025',
        itemStyle: {
        normal: {
        label: {
            show: true,
            position: "top",
        },
        }}
      }]
    }
},
```

## 72. 去重
```js
unique(arr) {
    return Array.from(new Set(arr))
},
```

## 72. 数组根据值删除
```js
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
this.checkids.remove(row.ent_code)
```

## 73. input框只能输入纯数字
```html
<!-- onafterpaste防止用户从其它地方copy内容粘贴到输入框  -->
<input type="text" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " onafterpaste="this.value=this.value.replace(/[^\d]/g,'') " name="f_order" value="1"/> 

 <!--输入框只能输入字母和下横线的正则表达式  -->
<input onkeyup="this.value=this.value.replace(/[^_a-zA-Z]/g,'')" onpaste="this.value=this.value.replace(/[^_a-zA-Z]/g,'')"> 

 <!-- 输入框只能输入字母数字和下横线的正则表达式 -->
<input onkeyup="this.value=this.value.replace(/[^\w]/g,'')" onpaste="this.value=this.value.replace(/[^\w]/g,'')"> 
 <!-- 或 -->
<input onkeyup="this.value=this.value.replace(/[\W]/g,'')" onpaste="this.value=this.value.replace(/[\W]/g,'')">
```

## 74. 正则匹配整数或小数
```js
/^[+-]?[0-9]+(\.[0-9]{1,4})?$/.test("aaa")
```

## 75. echarts柱状图（滚动条）
```js
// 柱状图配置
barWid: 25, // 柱子宽
legTop: 0, // 图例距离
ledPosition: "center",
gridHeight: 360, // 图大小
gridTop: 80, // 图距离
gridLeft: 150, // 图距离
xroute: -8, // x轴文字倾斜
zoomLeft: '9%', // 滚动条左边的距离
zoomRight: '10%', // 滚动条右边的距离
zoomBottom: 15, // 滚动条下边的距离
zoomEnd: 50,

areaOption() {
    return {
    grid: {
        top: this.gridTop,
        left: this.gridLeft,
        height: this.gridHeight,
    },
    xAxis: [
        {
        type: "category",
        splitLine: {
            show: false,
        },
        axisLine: {
            show: true,
        },
        axisTick: {
            show: false,
        },
        data: this.areaList, // 地区
        axisLabel: {
            interval: 0, // 横轴信息全部显示
            // rotate: this.xroute, // 角倾斜显示
            formatter(val) {
            var strs = val.split(""); //字符串数组
            var str = "";
            for (var i = 0, s; (s = strs[i++]); ) {
                //遍历字符串数组
                str += s;
                if (!(i % 6)) str += "\n"; //按需要求余
            }
            return str;
            },
        },
        },
    ],
    legend: {
        left: this.ledPosition,
        data: ["上年度单个条款平均值", "上年度同类政策平均值", "本次模拟值"],
        top: this.legTop,
    },
    yAxis: {
        type: "value",
        splitLine: {
        show: false,
        },
        axisLine: {
        show: true,
        },
        axisTick: {
        show: false,
        },
    },
    dataZoom: [
        {
        end: this.zoomEnd,  
        show: true,
        xAxisIndex: [0],
        handleSize: 0, // 滑动条的 左右2个滑动条的大小
        height: 8, //组件高度
        left: this.zoomLeft, //左边的距离
        right: this.zoomRight, //右边的距离
        bottom: this.zoomBottom, //右边的距离
        borderColor: "#fff",
        fillerColor: '#ccc',
        borderRadius:5,
        backgroundColor: '#fff', //两边未选中的滑动条区域的颜色
        showDataShadow: false, //是否显示数据阴影 默认auto
        showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
        realtime:true, //是否实时更新
        filterMode: 'filter',
        },
        {
        type: 'inside',
        },
    ],
    series: [
        {
        name: "上年度单个条款平均值",
        data: this.areaYearAvgList,
        type: "bar",
        barWidth: this.barWid,
        color: "#3675FF",
        itemStyle: {
            normal: {
            label: {
                show: true,
                position: "top",
            },
            },
        },
        },
        {
        name: "上年度同类政策平均值",
        data: this.areaPolicyYearAvgList,
        type: "bar",
        barWidth: this.barWid,
        color: "#f00",
        itemStyle: {
            normal: {
            label: {
                show: true,
                position: "top",
            },
            },
        },
        },
        {
        name: "本次模拟值",
        barWidth: this.barWid,
        data: this.areaNowSimList,
        type: "bar",
        color: "#FFA025",
        itemStyle: {
            normal: {
            label: {
                show: true,
                position: "top",
            },
            },
        },
        },
    ],
    };
},
```

## 76. 判断ie
```js
// 判断ie
let isIe = ()=> {
if(!!window.ActiveXObject || "ActiveXObject" in window)  
    return true;  
else  
    return false; 
}
```

## 77. 数组转字符串
```js
setArr(arr) {
    let str = ""
    arr.forEach(item=> {
    str += item + "、"
    })

    str = str.substring(0, str.length - 1);

    return str
},
```

## 78. 多个echart
```js
// 
computed: {
    // dom1
    chartDom1() {
      return document.querySelector("#mnbdr_chart1");
    },
    ......
}

// 旧写法
getChart1() {
    let myChart = this.$echarts.init(this.chartDom1);

    this.dom1Option && myChart.setOption(this.dom1Option);
},
getChart2() {
    let myChart = this.$echarts.init(this.chartDom2);

    this.dom2Option && myChart.setOption(this.dom2Option);
},
getChart3() {
    let myChart = this.$echarts.init(this.chartDom3);

    this.dom3Option && myChart.setOption(this.dom3Option);
},
getBoard() {
    this.getChart1()
    this.getChart2()
    this.getChart3()
},

// 封装
getChart() {
    for(let i=1; i<=3; i++) {
        let domItem = eval(`this.chartDom${i}`)
        let optionItem = eval(`this.dom${i}Option`)

        let myChart = this.$echarts.init(domItem);
        optionItem && myChart.setOption(optionItem);
    }
},
getBoard() {
    this.getChart()
},
```

## 79. 解决echarts报There is a chart instance already initialized on the dom.错误
```js
 echarts.init(document.getElementById("echartsTest5")).dispose();//解决echarts dom已经加载的报错
 myChart = echarts.init(document.getElementById("echartsTest5"));
```

## 80. 动态echart示例
```js
for(let i=1; i<=3; i++) {
    let myChart = null;

    let domItem = eval(`this.chartDom${i}`)
    let optionItem = eval(`this.dom${i}Option`)
    // console.log(optionItem.series)
    // console.log(optionItem.series.slice(0, this.mnbdData.length))

    let nowOptionSeriesItem = optionItem.series.slice(0, this.mnbdData.length)
    // console.log(nowOptionItem)

    optionItem.series = []
    optionItem.series = nowOptionSeriesItem

    // 解决echarts dom已经加载的报错
    this.$echarts.init(domItem).dispose();
    myChart = this.$echarts.init(domItem);

    optionItem && myChart.setOption(optionItem);
}
```

## 81. utc转北京
```js
formatDateTime(time) {
    let timeStamp = new Date(time);
    let year = timeStamp.getFullYear(); // 年
    let month = timeStamp.getMonth() + 1;  // 月
    let date = timeStamp.getDate();  // 日
    let hour = timeStamp.getHours();  // 时
    let minute = timeStamp.getMinutes();  // 分
    let second = timeStamp.getSeconds();  // 秒

    // 加上0
    month < 10 ? month=`0${month}` : month;  // 月
    date < 10 ? date=`0${date}` : date;  // 日
    hour < 10 ? hour=`0${hour}` : hour;  // 时
    minute < 10 ? minute=`0${minute}` : minute;  // 分
    second < 10 ? second=`0${second}` : second;  // 秒

    return `${year}-${month}-${date} ${hour}:${minute}:${second}`
},

this.mnbdData[i].createtime = this.formatDateTime(this.mnbdData[i].createtime)
```

## 82. 根据某个位置截取字符串
```js
getPointData() {
    return new Promise((resolve, reject)=> {
    axios.get('http://a.amap.com/jsapi_demos/static/china.js').then(res=> {
        let dataStr = res.data;
        let ipos = dataStr.indexOf('[')
        let str = dataStr.substring(ipos,dataStr.length)
        let points = JSON.parse(str)

        resolve(points)
    }).catch(err=> {
        reject(err)
    })
    })
},

// 聚合
async initMap(map) {
    let markers = [], cluster

    let points = await this.getPointData()
    ......
}
```

## 83. await和axios结合
```js
getPointData() {
    return axios.get('http://a.amap.com/jsapi_demos/static/china.js').then(res=> {
        let dataStr = res.data;
        let ipos = dataStr.indexOf('[')
        let str = dataStr.substring(ipos,dataStr.length)
        let points = JSON.parse(str)
        console.log("111", points)

        return points
    })

    /* return axios({
        method: 'GET',
        dataType: 'json',
        url: 'http://a.amap.com/jsapi_demos/static/china.js',
    }).then(res=> {
        let dataStr = res.data;
        let ipos = dataStr.indexOf('[')
        let str = dataStr.substring(ipos,dataStr.length)
        let points = JSON.parse(str)
        console.log("111", points)

        return points
    }) */
},

// 聚合
async initMap(map) {
    let markers = [], cluster

    let points = await this.getPointData()
    ......
}
```

## 84. echarts饼状图进度条
```js
dom0Option() {
      return {
          title: {
            show: true,
            text: '完成度',
            x: 'center',
            textStyle: {
              fontWeight: 'normal',
              fontSize: 16
            }
          },
          animation: true,
          tooltip: {
            show: false
          },
          series: [
            {
              name: '完成度',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              hoverAnimation: false,
              silent: true,
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {
                  value: 20,
                  name: '完成度',
                  selected: false,
                  label: {
                    normal: {
                      show: true,
                      position: 'center',
                      fontSize: 20,
                      formatter: '{b}\n{d}%'
                    }
                  },
                  itemStyle: {
                    color: '#91c7ae'
                  }
                },
                {
                  value: 80,
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  itemStyle: {
                    color: '#eee'
                  }
                }
              ]
            },
            {
              name: '完成度',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              hoverAnimation: false,
              silent: true,
              labelLine: {
                normal: {
                  show: false
                }
              },
              left: '20%',
            right: '100%',
            top: 0,
            bottom: 0,
              data: [
                {
                  value: 20,
                  name: '完成度',
                  selected: false,
                  label: {
                    normal: {
                      show: true,
                      position: 'center',
                      fontSize: 20,
                      formatter: '{b}\n{d}%'
                    }
                  },
                  itemStyle: {
                    color: '#91c7ae'
                  }
                },
                {
                  value: 80,
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  itemStyle: {
                    color: '#eee'
                  }
                }
              ]
            }
          ]
        }
    },
```

## 85. 遍历对象
```js
for(let item in this.chart1Data.data) {
    let j = parseInt(this.getNum(item))-1

    this.chart1Data.data[item] = {
        value: mbd.industry_ratio[j] === undefined ? 0 : mbd.industry_ratio[j].val*100,
        label: mbd.industry_ratio[j] === undefined ? "" : mbd.industry_ratio[j].name
    }
}

this.chart1Data.data = {
    data1: {},
    data2: {},
    data3: {},
    data4: {},
    data5: {},
}
```

## 86. 判断字符串/数量
```js
let { path } = this.$route

let res = path.match(/\//g)
let count = !res ? 0 : res.length;
console.log(count)
```

## 87. 删除数组中null
```js
Array.prototype.remove = function(val) {
var index = this.indexOf(val);
if (index > -1) {
this.splice(index, 1);
}
};

var emp = ['abs','dsf','sdf','fd']

emp.remove('fd');
```

## 87. 根据事件对象获取dom
```js
// 跳转表格 - 使用事件代理
linkTable(e) {
    let { target } = e
    let { textContent } = target
    let { nodeName } = target

    // console.log(target)
    // console.log("dom名", target.nodeName)

    let levelTxt1 = ''
    let leve1Txt2 = ''

    /**
     * 提取值
     * 点击不同位置做区分
     */
    // 点击li - 区分左右
    if(nodeName === 'LI') {
    levelTxt1 = target.parentNode.parentNode.parentNode.parentNode.previousSibling.getElementsByTagName('ul')[0].getElementsByClassName('font_bold')[0].textContent

    // 如果没有类
    if(target.classList.length !== 0) {
        leve1Txt2 = textContent
    } else {
        leve1Txt2 = target.parentNode.getElementsByTagName('li')[0].textContent
    }
    } else {
    // 点击外层
    leve1Txt2 = target.getElementsByTagName('li')[0].textContent
    }

    // 点击ul
    if(nodeName === 'UL') {
    levelTxt1 = target.parentNode.parentNode.parentNode.previousSibling.getElementsByTagName('ul')[0].getElementsByClassName('font_bold')[0].textContent
    }

    // 点击dd
    if(nodeName === 'DD') {
    levelTxt1 = target.parentNode.parentNode.previousSibling.getElementsByTagName('ul')[0].getElementsByClassName('font_bold')[0].textContent
    }

    // 处理跳转数据
    this.resolveLinkData(levelTxt1, leve1Txt2)
},
```

## 88. dom节点操作
```js
getButtonList(next) {
    this.$nextTick(()=> {
    let buttonList = document.querySelector('.el-tabs__content').getElementsByTagName('button')

    buttonList.forEach(item=> {
        // console.log(item.innerText)

        next(item)
    })
    })
},

this.getButtonList(item=> {
    if(item.innerText === '草稿') {
        item.classList.add('factivity')
    }
})

// 移除所有指定class
this.getButtonList(item=> {
    item.classList.remove('factivity')
})
```

## 89. 标签多选
```js
setTagStatus(e) {
    let { target } = e
    let { textContent } = target

    target.classList.toggle('active')  // 选中效果
    let activeFlag = target.classList.contains('active')  // 判断是否选中 （选中:true）
    // console.log(activeFlag, textContent)

    /**
     * 0：未选中，1：选中  selected
     * 点击，根据当前textContent匹配数组项，根据activeFlag修改selected字段
     * 根据当前项修改数组中对应项
     */
    // console.log("tagList", this.tagList)
    this.tagList.forEach(item=> {
        // 根据当前点击项匹配数组中对应的对象
        if(item.brandLabel === textContent) {
            // console.log("数组项", item)  // 数组项

            // true 选中 1 => selected=1
            if(activeFlag) {
                item.selected = '1'
            } else {
                item.selected = '0'
            }
        }
    })
},
// 确认标签
tagSubmit() {
    // console.log("确认标签")
    // console.log("tagList", this.tagList)

    let idStr = ""

    // 遍历标签列表，摘选出所有选中标签   selected=1
    this.tagList.forEach(item=> {
        if(item.selected === '1') {
            idStr += item.id + ','
        }
    })
    // 删除末尾逗号
    idStr = idStr.substr(0, idStr.length-1)

    console.log(idStr)
}
```

## 90. 滚动条自动滚动
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>autoScroll</title>
</head>
<style>
  .parent {
    width: 300px;
    height: 200px;
    margin: 0 auto;
    background: #242424;
    overflow-y: scroll;
  }
  /*设置的子盒子高度大于父盒子，产生溢出效果*/
  .child {
    height: auto;
  }
  .child li {
    height: 50px;
    margin: 2px 0;
    background: #009678;
  }
</style>
<body>
  <div id="parent" class="parent">
    <div id="child1" class="child">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </div>
    <div id="child2" class="child"></div>
  </div>
  <script type="text/javascript">
    (function () {
      var parent = document.getElementById('parent');
      var child1 = document.getElementById('child1');
      var child2 = document.getElementById('child2');
      child2.innerHTML = child1.innerHTML;
      setInterval(function () {
        if(parent.scrollTop >= child1.scrollHeight) {
          parent.scrollTop = 0;
        } else {
          parent.scrollTop++;
        }
      }, 20);
    })()
  </script>
</body>
</html>
```

## 91. 通过class设置锚点
```js
export const setSmoothScroll = target=> {
  let appDom = document.querySelector('#app')
  appDom.scrollTop = 50;  // 初始值 - 否则会有bug

  target = target?target:'aaa'; // className
  const targetDom = document.querySelector('.' + target); // 目标节点class
  let targetHeight = targetDom.getBoundingClientRect().top - 130  // dom距离顶部距离
  appDom.scrollTop = targetHeight

  let startTime = +new Date();
  let duration = 800; //ms

  const run = ()=> {
    let time = +new Date() - startTime;

    appDom.scrollTo(0,  targetHeight * (time / duration));
    run.timer = requestAnimationFrame(run);

    if (time >= duration) {
      appDom.scrollTo(0, targetHeight);
      cancelAnimationFrame(run.timer);
    }
  }
  requestAnimationFrame(run);
}
```