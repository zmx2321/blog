# 数组递归
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 题目
### 1. 题目一
> [代码笔记](https://zmx2321.github.io/blog_code/algorithm/other/example/base/arr_digui)

实现1-100之间，不能被3整除的数相加

### 解答
#### 1. 解答一
```js
// 使用for
let total = null;
for(let i=1; i<=100; i++){
	if(i % 3 !== 0){
		total += i;
	}
}

console.log(total);  // 3367
```

#### 2. 解答二
```js
// 使用while
let total = null,
    i = 0;
while(i <= 100){
	i % 3 !==0 ? total += i : null;
	i++;
}

console.log(total);  // 3367
```

#### 3. 解答三
```js
function sum(n){
	//传递进来的值如果是0，说明已经累加到结束了，说明不需要再调用自己了，所以返回0
	if(n === 0){
		return 0;
	}

	//如果传递进来的n的值可以被3整除，当前的值就不需要被累加了
	if(n%3 === 0){
		return sum(n - 1);
	}

	return n + sum(n - 1);	//100+sum(99) --> 100+99+sum(98) --> 100+99+98+sum(97)+ …… +100+98+97+···+sum(0) --> 100+98+97+···+3+2+1+0
}

let total = sum(100);
console.log(total);  // 3367
```

#### 4. 解答四
```js
function sum(n){
	if(n === 0){
		return 0;
	}

	if(n%3 === 0){
		return sum(n - 1);
	}

	return n + sum(n - 1);
}

let total = sum(100);
console.log(total);  // 3367
```

### 2. 题目二
> 从1-10把所有能被2整除的进行相乘(递归)

### 解答
```js
function fn(n) {
	if (n == 1){
		return 1;
	}

	if (n%2 !== 0){
		return fn(n - 1);
	}

	return n * fn(n - 1);
}

let res = fn(10);
console.log(res);  // 3840
```

### 3. 题目三
> 定时器的递归

### 示例
```js
let count = 0,
    timer = window.setInterval(function(){
      count ++;
      console.log(count);

      if(count === 10){
        window.clearInterval(timer);
      }
    },1000);
```

### 4. 题目四
> setTimeout递归

### 示例
#### 1. 示例一
```js
// 使用setTimeout实现和setInterval一模一样的功能：使用递归的思想，每一次完成move方法后，重新设置一个新的定时器
let count = 0,
	  timer = null;
function move(){
	//每一次执行move方法，都会重新创建setTimeout定时器，执行一次就不执行了，但是并没有清除，导致很多没用的定时器累积占内存
	window.clearTimeout(timer);

	count ++;
	console.log(count);

	if (count === 10){
		return;
	}

	// timer = window.setTimeout(move, 1000);
	// console.log(arguments.callee);
	timer = window.setTimeout(arguments.callee, 1000);
	// arguments.callee 表示当前函数本身等价于move
}

move();
```

#### 2. 示例二
```js
let count = 0,
    timer = window.setTimeout(function(){
      count ++;
      console.log(count);

      timer = window.setTimeout(function(){
        count ++;
        console.log(count);

        // timer ···
      },1000);
    },1000);
```
