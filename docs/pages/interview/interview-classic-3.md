# 如何使用map()、filter()和reduce()
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## map()
.map()方法使用在：
1. 用可迭代的每个值执行一组语句
2. 返回(可能)修改值

**<font color="#009688" size="3" face="微软雅黑">
示例：
</font>**<br />

```js
// 传统方法
// 计算一系列价格的营业税：
const prices = [19.99, 4.95, 25, 3.50];
let new_prices = [];
for(let i=0; i < prices.length; i++) {
    new_prices.push(prices[i] * 1.06);
}

// 使用map
const prices= [19.99, 4.95, 25, 3.50];
let new_prices = prices.map(price => price * 1.06);
console.log(new_prices);
```
- price变量用于标识每个值的名称，由于只有一个变量输入，所以可以省略参数周围的常用括号。
- 箭头=>后的语句是回调的主体。由于主体只有一条语句，可以省略大括号和return关键字。
- 以防部分学习者无法理解，具体代码如下，供详细参考：
```js
const prices= [19.99, 4.95, 25, 3.50];
let new_prices = prices.map(price => {
    return price * 1.06
});
```

## filter()
- 当要从可迭代对象中提取值的子集时，.filter() 方法就派上了用场。
- 使用.filter()时，请记住是在筛选值，而不是筛除值。
- 这就意味着，迭代器中评估为true的每个项目，都将包含在过滤器中。

**<font color="#009688" size="3" face="微软雅黑">
示例：
</font>**<br />

```js
// 举一个只保留奇数的例子：使用模运算符来计算除以2的余数。当余数等于1，就得知这个数是奇数。

// 传统方法
const numbers = [1,2,3,4,5,6,7,8];
let odds = [];
for(let i=0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 1) {
        odds.push(numbers[i]);
    }
}

// 使用filter
// 与.map()类似，.filter()可以接受单个回调，以将可迭代对象中的每个值传递到该回调。
const numbers = [1,2,3,4,5,6,7,8];
let odds = numbers.filter(num => num % 2);
console.log(odds);
```
- 此回调也适用类似的规则。由于只有一个输入，且函数的主体是单个表达式，因此可以省略参数列表括号、定义主体的大括号和return关键字。

## reduce()
- 从术语名称来看，Reduce方法是指将多个值缩减为一个。
- 然而，笔者发现，与“减少”相比，把它想成是“积累”更容易操作。
- 该方法通过定义起点来运行。当该方法迭代每个值时，该起点将被修改并向下传递。

**<font color="#009688" size="3" face="微软雅黑">
示例：
</font>**<br />

```js
// 将一系列数字相加。假设正在计算某人最喜欢的慈善机构的捐款总额：

// 传统方式
const donations = [5, 20, 100, 80, 75];
let total = 0;
for(let i=0; i < donations.length; i++) {
    total += donations[i];
}

// 使用reduce
// .reduce()方法的回调需要两个参数：累加器和当前值。累加器将是第一个参数，是“向下传递”值。
const donations = [5, 20, 100, 80, 75];
let total = donations.reduce((total, donation)=> {
    return total + donation;
});

// 还可以将第二个参数传递给 .reduce()函数本身，作为累加器的起始值。假设加上昨天总共450美元的捐款。
const donations = [5, 20, 100, 80, 75];
let total = donations.reduce((total, donation)=> {
    return total + donation;
}, 450);
console.log(total);
```

---
<br />

<font color="#666" size="5">~End~</font>

