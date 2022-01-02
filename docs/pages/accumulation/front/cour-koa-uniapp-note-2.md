# 在uniapp中的模板语法
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 模板语法
- 简述
  - 在data里面的用法和vue语法相同
  - data里面的值可以在小程序开发者工具中的AppData中找到
- 指令
  - v-text
    - 除了用模板写，即{{}}，还有一种方法可以实现同样的效果
    - `<view v-text="test"></view>`，data里面写法不变
  - v-html
    - 可以解析html

## 2. 样式绑定
- 简述
  - 样式写法和传统写法几乎一模一样
  - 一般创建的项目里面已经内置了scss，所以每个vue文件下面的样式可以写成这样
    - `<style lang="scss" scoped>`
  - uni.scss文件可以用来定义全局scss，主要用来定义全局scss变量
- 注意事项
  - 普通的用双括号的写法，class可以随意添加，方法都一样
  - 使用v-text的写法，可以添加class，但样式无法作用，只能用style行间样式去添加
  - 使用v-html的写法和普通写法一样，可以正常添加class

## 3. 事件绑定
- 事件写法和vue相同，都是用v-on，即@

## 4. 条件渲染
- 条件写法和vue相同，都是用v-if、v-show，区别和vue相同
- 优先使用v-show，减少dom操作

## 5. 列表渲染
- 循环写法和vue相同，都是用v-for

## 6. v-model的使用
- 双向绑定写法和vue相同
  ```js
  <view class="cont">
		<input type="text" value="" v-model="intxt" />
		<button type="default" @click="ck">sss</button>
		
		<view class="" v-for="item in list">
			{{ item }}
		</view>
	</view>

  data() {
    return {
      intxt: "",
      list:["123", "sss"]
    }
  },

  ck() {
    this.list.push(this.intxt)
    
    this.intxt = ""
  },
  ```

## 7. vue实例的生命周期
- uni中组件生命周期和vue相同
- 创建=>挂载=>更新=>销毁

## 8. 计算属性，方法和监听
- 简述
  - uni中组件中计算属性、方法、监听和vue基本相同
  - 随着数据变化而变化的话，建议使用计算属性，使用监听要监听多个数据，造成冗余
- 要点
  - 计算属性中的缓存机制，即只有计算属性中他需要的元素发生改变，才会触发计算属性中的方法
    ```js
    computed: {
			net() {
				console.log("监听")
				return this.firsttest + "1256"  // 只有事件中firsttest值发生改变才会触发
			}
		},
    ```
  - 监听
    ```js
    watch: {
      // 被监听的变量
			firsttest() {
        console.log("监听")
				this.name = this.firsttest + this.lasttest + "123154"  // 只有事件中firsttest值发生改变才会触发
			}
		},
    ```

## 9. 父子组件传值
- 简述
  - 传值方式和vue相同
- 复习
  - 父=>子
    ```js
    // 父
    <child :name="name" />
    import child from '../component/child/child.vue'
    components: {
			child
		},
    name: "sss1"

    // 子
    {{ name }}
    props: {
			name: {
				type: String,  // 组件参数校验
        // type: [Number, String],  // 表示支持整型和字符串
				default: ""
			}
		},
    ```
  - 子=>父
    ```js
    // 子
    <button type="default" @click="setfn">子=>父</button>
    tf: "ddegbcaz"
    setfn() {
      this.$emit("stf", this.tf)
    }

    // 父
    <child @stf="stf" />
    import child from '../component/child/child.vue'
    components: {
			child
		},
    stf(val) {
      console.log("获取子组件值", val)
    }
    ```

---
<br />

<font color="#666" size="5">\~End~</font>