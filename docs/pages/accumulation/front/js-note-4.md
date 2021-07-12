# async、await以及promise使用
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 样例说明
1. 如果asycn里的代码都是同步的，那么这个函数被调用就会同步执行
```js
async function fn(){
  console.log('a')
}
fn()
console.log('b')
//a
//b
```
2. 有await关键字，让出线程，阻塞代码
```js
function fn(){
  return new Promise(resolve=>{
    console.log(1)
  })
}
async function f1(){
  await fn()
  console.log(2)
}
f1()
console.log(3)
// 1
// 3
// undefined
// 这个代码因为fn是属于同步的，所以先打印出1，然后是3，但是因为没有resolve结果，所以await拿不到值，因此不会打印2
```
3. 修改上面代码
```js
function fn(){
    return new Promise(resolve=>{
        console.log(1)
        resolve()
    })
}
async function f1(){
    await fn()
    console.log(2)
}
f1()
console.log(3)
// 1
// 3
// 2
// 这个代码与前面相比多了个resolve说明promise成功了，所以await能拿到结果，因此就是1 3 2
```
4. 再举一个例子
```js
function fn(){
    return new Promise((resolve, reject)=>{
        let sino = parseInt(Math.random() * 6 +1)
        setTimeout(()=>{
          resolve(sino)
        },3000)
    })
}
async function test(){
    let n = await fn()
    console.log(n)
}
test()

// 上面这段代码async中使await fn()先执行，等到三秒后执行完再把得到的结果赋值给左边的n，
// 也就是说test函数需要三秒钟才执行完成，所以test函数是异步的，因此前面必须写async
```

## 2. 注意事项
- await后面接一个会return new promise的函数并执行它
- await只能放在async函数里
- 如果promise没有一个成功的值传入，对await来说就算是失败了，下面的代码就不会执行

## 3. 如果需要将方法当做变量
```js
// 刷新所有列表 - 判断当前tab项刷新
refreshList(params) {
  // console.log(this.tabActive);

  for(let i=0; i<this.tabList().length; i++) {
    // console.log(this.tabList()[i]);

    switch(this.tabActive) {
      case 'tab'+(i+1):
        eval(`this.getKibanaList${i+1}(params);`);  // 获取kibana列表
        break;
    }
  }
```