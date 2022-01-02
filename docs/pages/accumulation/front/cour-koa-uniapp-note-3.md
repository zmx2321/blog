# uniapp的组件
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1.容器组件
> [api地址](https://uniapp.dcloud.io/component/view)
- 常用的api
  - 按入触发
    - `<view class="gfd" hover-class="dd" hover-stay-time="2000">`
  - 滚动
    - 滚动要设置样式，比如纵向滚动要设置高度
  - 其他看官网api

## 2. 表单组件
- 看官网api

## 3. 导航与页面传参
- 使用navigator
  - `<navigator url="/pages/home/home" open-type="switchTab">跳转</navigator>`
  - open-type 跳转的方式
    - navigate 默认值 保留当前页面 ， 跳转到应用内的某个页面，但是不能跳转到tabbar页面
    - redirect 关闭当前页面，跳转到应用内的某个页面，但是不允许跳转到tabbar页面
    - switchTab 跳转到tabBar页面，并关闭其他所有非tabBar页面
    - reLaunch 关闭所有页面，打开到应用内的某个页面
    - navigateBack
      - 默认值和此值时有效，设置delta值表示跳转层级
- 传参
  - 可以直接在url后面配置传参，类似get请求，再在跳转的页面配置props
    - 不支持switchTab
    ```js
    // 父
    <navigator url="/pages/ddd/ddd?id=666">跳转</navigator>

    // 子
    {{ id }}
    props: {
			id: {
				type: Number,
				default: 0
			}
		},
    // 或者
    props: ['id']
    ```

- 其他看官网api

## 4. 媒体组件
- 看官网api

---
<br />

<font color="#666" size="5">\~End~</font>