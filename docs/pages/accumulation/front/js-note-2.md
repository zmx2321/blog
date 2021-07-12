# js数组基础整理
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 数组的遍历
1. for
```js
let arr = [7, 5, 9];
// console.dir(arr);

for(let i=0; i<arr.length; i++){
	console.log(arr[i]);
}
```

2. for in
```js
let arr = [7, 5, 9];

for(let key in arr){
	console.log(arr[key]);
}
```

## 2. 数组的增加、修改、删除
### 1. 向数组末尾新增一项（push）
```js
let arr = [7, 5, 9];

arr.push(111);
console.dir(arr);
```

### 2. 返回值(长度)
```js
let arr = [7, 5, 9];

let res = arr.push(999, "qqq");
console.log(res, arr);
```

### 3. 删除数组中的最后一项（pop）
```js
let arr = [7, 5, 9];

let res = arr.pop();
console.log(res, arr);

arr.length--;
console.log(arr);
```

### 4. 删除数组中的第一项(shift)
```js
let arr = [7, 5, 9];

let res = arr.shift();
console.log(res, arr);
```

### 5. 向数组开头增加一项（unshift）
```js
let arr = [7, 5, 9];

let res = arr.unshift(1000);
console.log(res, arr);
```

## 3. 实现增加、删除、修改(splice)
### 1. 删除
```js
let arr = [55, 88, 99, 33, 66, 44, 22];
console.log(arr);

//删除
//ary.splice(n, m) 从索引n开始，删除m个元素，把删除的内容以一个新数组的方式返回
//ary.splice(n) 从索引n开始，删除到数组末尾
//ary.splice(0)，清空数组（克隆之前的数组）
//ary.splice()未删除，返回原数组
let res = arr.splice(1, 3);
console.log(res, arr);
```
### 2. 修改
```js
let arr = [55, 88, 99, 33, 66, 44, 22];

//splice(n, m, x),从索引n开始，删除m个，用x修改
let res = arr.splice(1, 3, 1000);
console.log(res, arr);
```

### 3. 增加
```js
let arr = [55, 88, 99, 33, 66, 44, 22];

//splice(n, 0, x),从索引n开始，不删除，把x放在n前面
let res = arr.splice(1, 0, 1000);
console.log(res, arr);
//增加到末尾
let res = arr.splice(arr.length, 0 , 2000);
console.log(res, arr);
```

## 4. 数组的截取和拼接(slice截取)
```js
// slice(n, m), 从索引n开始，找到索引m处，不包含m
// slice(n),从索引n开始，找到数组的末尾
// concat 把两个数组拼接到一起
```

## 5. 数组转换成字符串
- toString
```js
// join("x"),用x分隔字符串

let arr = [55, 88, 99, 33, 66, 44, 22];
console.log(arr.join("+"));

// eval把js中字符串转换成js表达式(求和)
console.log(eval(arr.join("+")));
```

## 6. 倒序排列（reverse）
```js
let arr = [55, 88, 99, 33, 66, 44, 22];

let res = arr.reverse();
console.log(res);
```

## 7. sort(从大到小排序)（按Unicode码）
```js
let arr = [55, 88, 99, 33, 66, 44, 22];

let res = arr.sort();
console.log(res);

let res = arr.sort(function(a, b){
	// return a - b;	//从小到大排序
	// return b - a;	//从大到小排序
});

//indexOf，验证是否存在（不存在返回-1）
```

## 8. 遍历数组forEach、map
```js
let arr = [55, 88, 99, 33, 66, 44, 22];

arr.forEach(function(item, index){
	console.log(item, index);
});
```

## 9. 返回的新数组每项都*10（替换原来的数组）
```js
let arr = [55, 88, 99, 33, 66, 44, 22];

let res = arr.map(function(item, index){
	return item * 10;
});
console.log(res);
```