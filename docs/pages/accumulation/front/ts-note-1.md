# ts笔记
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. Ts泛型函数
- 基本示例
```ts
// 普通函数
function foo<T>(x: T): T {
  return x;
}

// 箭头函数
const foo = <T,>(x: T): T => x;
const foo: <T>(x: T) => T = x => x;
```
- 示例二
```ts
// 普通函数
function getResult<T>(): Result<T> {
  const data: any = [
    { id: 1, name: "卤蛋", classify: "射手" },
    { id: 2, name: "后羿", classify: "射手" }
  ] 

  return { ok: 1, data }
}

// 箭头函数一
const getResult = <T,>(): Result<T> => {
  const data: any = [
    { id: 10, name: "卤蛋0", classify: "射手0" },
    { id: 20, name: "后羿0", classify: "射手0" }
  ]

  return { ok: 1, data }
};

// 箭头函数二
const getResult: <T>() => Result<T> = () => {
  const data: any = [
    { id: 10, name: "卤蛋0", classify: "射手0" },
    { id: 20, name: "后羿0", classify: "射手0" }
  ]

  return { ok: 1, data }
};
```
- 示例三
```ts
// 普通函数
export function getResultAxios<T>() {
  // 使用get方法的时候，没有传递任何类型，他就不知道返回什么类型，只能用any表示
  return axios.get<T>('/api/heros')
}

// 箭头函数
export const getResultAxios = <T>() => {
  return axios.get<T>('/api/heros')
};
```
