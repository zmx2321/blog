# ES6代码优化
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 关于取值
```js
// 从对象obj中取值
const obj = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
}

// es5
const a = obj.a;
const b = obj.b;
const c = obj.c;
const d = obj.d;
const e = obj.e;

// es6
// 用ES6的解构赋值来取值
const {a,b,c,d,e} = obj;
const f = a + d;
const g = c + e;

// es6解构自定义属性名
const {a:a1} = obj;
console.log(a1);  // 1

// 解构的对象不能为undefined、null
const {a,b,c,d,e} = obj || {};
```

## 2. 合并数据
```js
// 合并两个数组，合并两个对象

// es5

// es6
```

## 2. 合并数据
```js
// es5
const a = [1,2,3];
const b = [1,5,6];
const c = a.concat(b);//[1,2,3,1,5,6]

const obj1 = {
  a:1,
}
const obj1 = {
  b:1,
}
const obj = Object.assgin({}, obj1, obj2);//{a:1,b:1}

// es6
// ES6的扩展运算符
const a = [1,2,3];
const b = [1,5,6];
const c = [...new Set([...a,...b])];//[1,2,3,5,6]

const obj1 = {
  a:1,
}
const obj2 = {
  b:1,
}
const obj = {...obj1,...obj2};//{a:1,b:1}
```

## 3. 拼接字符串
```js
// es5
const name = '小明';
const score = 59;
let result = '';
if(score > 60){
  result = `${name}的考试成绩及格`; 
}else{
  result = `${name}的考试成绩不及格`; 
}

// es6
// ES6字符串模板可以进行运算，以及引用对象属性
const name = '小明';
const score = 59;
const result = `${name}${score > 60?'的考试成绩及格':'的考试成绩不及格'}`;
```

## 4. if中判断条件
```js
// es5
if(
    type == 1 ||
    type == 2 ||
    type == 3 ||
    type == 4 ||
){
   //...
}

// es6
// ES6中数组实例方法includes
const condition = [1,2,3,4];

if( condition.includes(type) ){
   //...
}
```

## 5. 列表搜索
```js
// es5
// 搜索也要叫过滤，一般用filter来实现
const a = [1,2,3,4,5];
const result = a.filter( 
  item =>{
    return item === 3
  }
)

// es6
// find方法精确搜索，find方法中找到符合条件的项，就不会继续遍历数组，性能优化
const a = [1,2,3,4,5];
const result = a.find( 
  item =>{
    return item === 3
  }
)
```

## 6. 扁平化数组
```js
// 一个部门JSON数据中，属性名是部门id，属性值是个部门成员id数组集合，现在要把有部门的成员id都提取到一个数组集合中

// es5
const deps = {
'采购部':[1,2,3],
'人事部':[5,8,12],
'行政部':[5,14,79],
'运输部':[3,64,105],
}
let member = [];
for (let item in deps){
    const value = deps[item];
    if(Array.isArray(value)){
        member = [...member,...value]
    }
}
member = [...new Set(member)]

// es6
// 涉及到数组的扁平化处理，用ES6提供的flat方法，遇到4维、5维深度的数组，得循环嵌套循环来扁平化
// flat方法不支持IE浏览器
const deps = {
    '采购部':[1,2,3],
    '人事部':[5,8,12],
    '行政部':[5,14,79],
    '运输部':[3,64,105],
}
let member = Object.values(deps).flat(Infinity);
```

## 7. 获取对象属性值
```js
// es5
const name = obj && obj.name;

// es6
// ES6中的可选链操作符
const name = obj?.name;
```

## 8. 添加对象属性
```js
// 当给对象添加属性时，如果属性名是动态变化的，该怎么处理

// es5
let obj = {};
let index = 1;
let key = `topic${index}`;
obj[key] = '话题内容';

// es6
// ES6中的对象属性名可以用表达式，不需要额外创建一个变量
let obj = {};
let index = 1;
obj[`topic${index}`] = '话题内容';
```

## 9. 输入框非空
```js
// 在处理输入框相关业务时，往往会判断输入框未输入值的场景

// es5
if(value !== null && value !== undefined && value !== ''){
    //...
}

// es6
// ES6中新出的空值合并运算符
if(value??'' !== ''){
  //...
}
```

## 10. 异步函数
```js
// func
const fn1 = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 300);
  });
}
const fn2 = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 600);
  });
}

// 优化前
const fn = () =>{
   fn1().then(res1 =>{
      console.log(res1);// 1
      fn2().then(res2 =>{
        console.log(res2)
      })
   })
}

// 优化后
// 使用pomise还是可能出现回调地狱
const fn = async () =>{
  const res1 = await fn1();
  const res2 = await fn2();
  console.log(res1);// 1
  console.log(res2);// 2
}

// 但是要做并发请求时，还是要用到Promise.all()
const fn = () =>{
   Promise.all([fn1(),fn2()]).then(res =>{
       console.log(res);// [1,2]
   }) 
}
```