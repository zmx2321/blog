# ts+vue入门案例
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 知识点梗概
> 由于前端职责越来越多，对前端的规范性也越来越高，需要有一种标准去控制代码质量，ts的出现让我们可以利用静态编译的检测，让很多错误在写代码的过程中就被发现，而不是在运行甚至发布的时候才被检测出来，所以现在各种库和框架越来越多的使用ts，各种框架也都支持ts了，所以ts已经是作为中高级前端必须要掌握的一个技术点了。
- vue+ts开发环境准备
- ts核⼼语⾔特性
- 组件编写
- 路由声明
- 全局状态管理
- 数据请求
- 第三⽅模块

## 2. 知识点详述
### 2.1. vue+ts开发环境准备
#### 2.1.1. 已存在的vue项目安装ts
  - `vue add @vue/typescript`
  - 原来的js尽量不要弄成ts，可能会跑不起来
  - 尽量不要在正式环境

#### 2.1.2. 新建一个基于ts的vue项目
- 脚手架使用版本为vue-cli4x
- 全局安装vue
  - `sudo npm install @vue/cli -g`
  - 或者使用cnpm安装
  - 查看版本 => `vue -V`
  - 如果已经安装vue-cli2，需要先卸载 => ``npm uninstall vue-cli -g 
- 创建一个项目
  - vue create 项目名
  - 选择自定义配置 => Manually select features 
  - 选择你需要的配置
    - Babel (必选)
    - TypeScript（项目中使用ts开发的话，就勾选，我们这里需要）
    - Progressive Web App (PWA) Support  (接口缓存，优化项目)
    - Router
    - Vuex 
    - CSS Pre-processors (css预处理器，需要)

### 2.2. ts核⼼语⾔特性
#### 2.2.1. 简述
- 强类型注解、泛型、装饰器是最重要的三个语⾔特性
- 由于篇幅限制，这里只讲ts最最重要的三个特性

#### 2.2.2. 特性一：强类型注解
##### 2.2.2.1. 使用方法
- 使⽤类型注解引⼊强类型系统，保证程序健壮性
- 示例一
  ```js
  @Component
  export default class HelloWorld extends Vue {
    msg: string = 'ts+vue实战'; // 类型注解
  }
  ```
- 示例二
  ```js
  @Component
  export default class HelloWorld extends Vue {
    msg:string = "";

    // vue的生命周期
    created() {
      this.msg = "ts+vue实战1"  // 使用字符串注解
    }
  }
  ```
- 注意事项
  - 如果报错Type string trivially inferred from a string literal, remove type annotation  
    - 表示如果是用eslint 验证会导致报错
    - .eslintrc.js 里面 加上
      ```js
      rules: {
          "@typescript-eslint/no-inferrable-types": "off" // 关闭类型推断
      }
      ```
  - 如果报错Missing return type on function
    - .eslintrc.js 里面 加上
      ```js
      "rules": {
        "@typescript-eslint/explicit-module-boundary-types": "off"
      },
      ```
 
##### 2.2.2.2. 使用场景
- 类型数组：数组内元素类型约束
  - 一些基础数据类型也是按类似的方法
  - 示例一
    ```html
    <script>
      herosName: string[] = ['⻧蛋', '后羿']
    </script>

    <!-- 使用字符串数组注解 -->
    <div v-for="heroName in herosName" :key="heroName">
      {{ heroName }}
    </div>
    ```
  - 示例二
    - 需要更复杂的类型约束
    - 复杂对象数组
    ```html
    <script>
      // 不是很推荐
      heros:any = [
        {
          name: '卤蛋'
        },
        {
          name: '后羿'
        }
      ]

      // 偷懒写法 不推荐
      // 但后面还有其他的就不好写了
      /* heros: {name: string}[] = [
        {
          name: '卤蛋1'
        },
        {
          name: '后羿1'
        }
      ] */
    </script>

    <!-- 使用复杂对象注解 -->
    <div v-for="heroName in herosName" :key="heroName">
      {{ heroName }}
    </div>
    ```
- 类型别名：使⽤类型别名定义⾃⼰的类型
  - 复杂对象数组推荐写法
  - 实际上是自定义类型
  - 示例
    ```html
    <script>
      // @/types/index.ts
      export type Hero = {
        id: number,
        name: string,
        classify?: string  // 表示可选项 
      }

      import { Hero } from "@/types";
      //...
      heros: Hero[] = [
      { id: 1, name: "⻧蛋", classify: "射⼿" },
      { id: 2, name: "后羿", classify: "射⼿" }
      ];
    </script>

    <div v-for="hero in heros" :key="hero.id">{{ hero.name }}</div>
    ```
- 函数中的类型
  - 函数的形参和返回值也可以使⽤类型注解来约束，这样用起来会更清楚
  - 示例
    ```html
    <script>
      // 这个参数的类型就是Hero
      onClick(hero: Hero): void {
        alert('我选'+hero.name+'，我⾛发育路') 
      }
    </script>

    <div @click="onClick(hero)">{{ hero.name }}</div>
    ```
- 事件的类型
  - 示例
    ```html
    <script>
      addHero(e: KeyboardEvent) {
        // 断言，获取事件对象的html的input元素
        // e.target这个类型太泛了，要把他确定成输入框这种类型 => 断言
        // 因为可以派发事件的元素太多了，在编译器的角度上无法判断，必须由程序员告诉他
        const inp = e.target as HTMLInputElement;
        this.heros.push({
        id: this.heros.length + 1, name: inp.value, classify: this.classify });
      }
    </script>

    <input type="text" @keydown.enter="addHero" />
    ```
- ⽣命周期函数
  - 示例
    ```js
    heros: Hero[] = [];

    // ⽣命周期钩⼦名字对应即可
    created() {
      this.heros = [
        { id: 1, name: "⻧蛋", classify: "射⼿" },
        { id: 2, name: "后羿", classify: "射⼿" }
      ];
    }
    ```
- 存取器：会作为计算属性对待
  - 示例
    ```html
    <script>
      // 这个只是es6中class里面的存取器
      get total() {
        return this.heros.length
      }
    </script>

    <!-- 获取存取器数据 -->
    <p>共{{total}}个可选英雄</p>
    ```

#### 2.2.3. 特性二：泛型
- 泛型使我们定义的各种类型更加通⽤
- 泛型使我们可以在执行的时候确定数据类型
- 基本示例
  ```ts
  // @/types/index.ts
  // 加上<>表示是动态的
  // 这是一个接口
  // 其实也可以写成 type Result<T> = {}
  // 两者在大多数情况下是可以替代的
  // // interface更显结构性一些
  // 一般来说，能用interface实现，就用interface，如果不能就用type
  export interface Result<T> {
    ok: 0 | 1;  // result对象的ok值可以是0或1
    data: T;  // result对象的data值不确定，可以是hreos也可以是fruits等
  }

  // 导入接口
  import { Result } from '@/types/index'

  // 定义一个泛型方法
  // 在小括号前面约束了这个方法
  // 说明我们在使用这个方法的时候，需要动态指定一下这个类型
  // 他可以告诉我们，将来返回的这个Result里面到底data指什么
  /* function getResult<T>(): Result<T> {
    const data: any = [
      { id: 10, name: "卤蛋0", classify: "射手0" },
      { id: 20, name: "后羿0", classify: "射手0" }
    ]

    return { ok: 1, data }
  } */

  // 箭头函数一
  /* const getResult = <T,>(): Result<T> => {
    const data: any = [
      { id: 10, name: "卤蛋0", classify: "射手0" },
      { id: 20, name: "后羿0", classify: "射手0" }
    ]

    return { ok: 1, data }
  }; */

  // 箭头函数二
  const getResult: <T>() => Result<T> = () => {
    const data: any = [
      { id: 10, name: "卤蛋0", classify: "射手0" },
      { id: 20, name: "后羿0", classify: "射手0" }
    ]

    return { ok: 1, data }
  };

  // 定义
  heros0: Hero[] = []  // 定义并指定类型

  // 在created生命周期里面使用
  // 执行泛型方法
  // 需要指定一下类型，如果不指定，会显示unknow，表示不指定返回的类型是什么
  // 这里表示返回的类型是英雄构成的数组
  this.heros0 = getResult<Hero[]>().data
  ```
- 异步方法模拟请求
  ```js
  // 搞一个异步方法模拟请求
  // 泛型还能嵌套
  const getResultPromise: <T>()=> Promise<Result<T>> = ()=> {
    const data: any = [
      { id: 100, name: "卤蛋00", classify: "射手00" },
      { id: 200, name: "后羿00", classify: "射手00" }
    ]

    // 这里的promise可以确保和上面的result是相符合的
    return Promise.resolve({ ok:1, data })
  }

  heros00: Hero[] = []  // 定义并指定类型

  // 在created生命周期里面
  // HelloWorld.vue
  async created() {
    // 异步模拟请求
    console.log((await getResultPromise()).ok)
    // 异步执行了这个方法之后才获取data
    // 使用await实际上就是拿到promise里面的result，拿到result才可以获取里面的data
    this.heros00 = (await getResultPromise<Hero[]>()).data
  }
  ```
- 使用axios请求
  - 新建mock数据
    - 安装axios
      - `npm i axios -S`
      - 或`yarn add axios`
      - main.ts
        ```ts
        import axios from "axios"

        //挂载（使其可以在各个组件使用）
        Vue.prototype.axios = axios;

        // ts里面的this有其他意义，这里使用this.axios会报错
        // 脚手架里面还需要做一些配置，在下面会进行讲解
        ```
    - 创建vue.config.js
    - 配置如下
      ```js
      module.exports = {
        devServer: {
          before(app) {
            app.get('/api/heros', (req, res)=> {
              // 直接用response对象返回json数据给前端
              res.json([
                { id: 10, name: "卤蛋0", classify: "射手0" },
                { id: 20, name: "后羿0", classify: "射手0" }
              ])
            })
          }
        }
      }
      ```
    - 使用`http://localhost:8080/api/heros`就可以直接访问mock数据了
  - 代码示例
    ```ts
    // 真正接口调用
    import axios from "axios"
    // 我们在调这个方法的时候，不指定结果是什么
    // 我们在这里只需要做一个转发
    // 我们把泛型复制到下面
    // 将来用户在调这个接口的时候，只要动态的把类型传进来，下面的get方法同样也知道传进来的类型是什么了
    function getResultAxios<T>() {
      // 使用get方法的时候，没有传递任何类型，他就不知道返回什么类型，只能用any表示
      return axios.get<T>('/api/heros')
    }

    // 接口请求
    heros_as: Hero[] = []  // 定义并指定类型

    // 在created生命周期里面
    async created() {
      this.heros_as = (await getResultAxios<Hero[]>()).data

      // 或者也可以直接调用
      // 最好直接明确告诉get方法返回的结果
      // 返回的结果是hero数组
      axios.get<Hero[]>('/api/heros').then(res=> {
        console.log(res)
      })
    }
    ```

#### 2.2.4. 特性三：装饰器
- 概念
  - 类似一个工厂函数，他会把你输入的目标转化后变成其他的装饰后的结果
  - 装饰器⽤于扩展装饰的⽬标，常⽤于定义组件、属性和侦测器等
  - 装饰器可以从vue-property-decorator引入
    - `import { Vue, Component, Prop } from 'vue-property-decorator';`
- 示例一
  - Component装饰器
  ```ts
  // HelloWorld只是一个普通的class，但被Component装饰之后，他就变成了一个vue的组件类
  // 有些类似vue的继承返回的构造函数，即相当于组件的构造函数
  // 传进去的是一个HelloWorld类，传出来的是一个构造函数
  @Component({
    components: {}
  })
  export default class HelloWorld extends Vue {}
  ```
- 示例二
  - 父传子装饰器
  ```ts
  // 父组件 - Home.vue
  import { Prop } from "vue-property-decorator";

  <HelloWorld msg0="Welcome to Your Vue.js + TypeScript App"/>

  // 子组件 - HelloWorld.vue
  // 父组件传值，子组件接收
  // 对参数进行约束
  @Component()
  export default class HelloWorld extends Vue {
    @Prop({
      type: String,
      required: false  // 如果是必须的就为true
    })
    // 编译器会报没有初始化的警告，需要加一个断言
    // !是一个断言，表示msg0一定会有值
    // 一个装饰器装饰一个目标，再有其他属性就再加一个prop装饰另外一个属性
    // 这个msg0就是上面prop装饰器的目标
    msg0!: string;

    // 在生命周期里面可以直接获取
    console.log("获取父组件的值---", this.msg0) 
  }
  
  ```
- 示例三
  - 派发事件
  - 子组件定义事件让父组件响音
  ```html
  <!-- 子组件 - HelloWorld.vue -->
  <button @click="pointFather">子组件给父组件的事件</button>

  <script lang="ts">
    // 子组件给父组件的事件 - 使用装饰器完成
    // 方法名称会成为事件名称
    // 这里的return为父组件事件的参数
    // 这里是驼峰命名，父组件事件要用中划线
    @Emit()
    pointFather() {
      console.log("子组件给父组件的事件")

      // 返回事件载荷
      return "pointFather参数"
    }
  </script>

  <!-- 父组件 -->
  <!-- 父组件事件要用中划线 -->
  <HelloWorld @point-father="getSon" />

  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      HelloWorld,
    },
  })
  export default class Home extends Vue {
    getSon(val:string) {
      console.log("父组件方法参数为子组件的return值，getSon", val)
    }
  }
  ```

### 2.3. 组件编写
- ts编写组件有三种常⻅⽅式： Vue.extend() 、 @Component 和 tsx
  - Vue.extend() => 用Vue.extend()的方法去做构造函数的生成
    - 但个人不建议这么做，感觉和ts不太搭，ts主要还是以类的方式去实现
  - @Component => 以装饰器的方式写组件
    - 建议使用这种方式，这种方式比较漂亮比较规整
  - tsx
    - 这种有些偏向react的方式
- 示例
  - 以下案例以装饰器为主演示
  ```html
  <template>
    <section id="hello">
      <h1>{{ msg }}</h1>
    </section>
  </template>

  <script lang="ts">
    // 这是ts组件基本的模版
    // Component是非常关键的一个类，是装饰器
    // ts组件的基本模版都要引入Component和Vue这两个关键类
    import { Component, Vue } from 'vue-property-decorator';

    // ts最重要核⼼语⾔特性之一；装饰器
    // 有了装饰器这个类才能用注解
    // 我们用注解这个语法，把它装饰在自定义类的上面，并且这个类要继承Vue的构造函数
    // 如果上面不需要使用其他组件，只要使用这个装饰就可以 => @Component
    // 如果还需要引入其他组件，可以在装饰器里面添加，以函数的方式去使用它
    // 建议一些配置，和业务无关的东西写在这里
    @Component({
      components: {
        // 组件名称
      }
    })
    // @Component
    // 这里写业务逻辑相关的东西
    export default class HelloWorld extends Vue {
      // 我们之前是需要加一个data，然后在里面return各种数据
      // ts里面可以直接写，在模版里面就可以直接使用
      // 这里定义的数据实际上就是类的成员属性
      // 即只要声明一个成员属性，就可以像以前一样，把它当成data里面的值去使用了
      msg = "ts+vue实战"
    }
  </script>

  <style scoped lang="less">

  </style>
  ```

### 2.4. 路由声明
- 示例
  ```js
  // router/index
  import VueRouter, { RouteConfig } from 'vue-router'
  // 这个routes的类型是非常明确的RouteConfig数组
  // const routes: Array<RouteConfig> = [
  const routes: RouteConfig[] = [
    //...
  ]

  // 路由守卫
  // 去哪，从哪来，下一步
  router.beforeEach((to, from, next)=>{
    console.log(to.path);
    next()

    // 可以拿到vm的实例
    // vm实际上就是vue实例即构造函数
    // next((vm)=> {})
  })
  ```

### 2.5. 全局状态管理
- 全局状态管理推荐使⽤vuex-module-decorators，模块化开发轻⽽易举，还能很好的利⽤ts类型推断
  - `yarn add vuex-module-decorators`
- 希望所有模块都是动态注册的
  - store/index.js 清掉
    ```ts
    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)

    // 希望所有模块都是动态注册的
    export default new Vuex.Store({ })
    ```
  - 配置模块 store/user.ts
    ```ts
    // 全局状态管理推荐使⽤vuex-module-decorators，模块化开发轻⽽易举，还能很好的利⽤ts类型推断
    // 除了引用VuexModule还需要引用一个模块装饰器
    import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

    // 导入store的实例
    import store from './index'

    // 定义一个类，继承 VuexModule
    // 他不是一个简单的class，而是一个Module
    // 所以需要Module装饰器
    // 这个装饰器表示，相当于把User模块注册到store实例里面去
    @Module({
      name: "user",  // module名称，开启命名空间后会以name为命名空间
      // 动态地把当前这个模块注册到主模块上
      // 是否使用动态加载，简而言之只有在用到当前的module才会加载，详细可以看vuex官网。本篇博客必须选择true，
      // 这也是为什么index.ts一直不用修改的原因，如果设置为false会有很大的变动
      dynamic: true, // 动态注册参数
      store,  // 挂载的store目标
      // namespace // 是否开启命名空间，如果你的模块很多，强烈建议开启
    })
    class User extends VuexModule {
      // 相当于vuex中state的属性
      username = 'tom'

      // state里面的数据如果要修改
      // Mutation也是一个装饰器
      @Mutation
      // 定义方法
      setUsername(name: string) {
        this.username = name
      }

      @Action
      // 异步方法
      login(userInfo: any) {
        console.log(userInfo)
      }

      @Action
      setUserAction(name: string) {
        this.setUsername(name)
      }
    }

    // 装饰之后的结果类才是我们要导出的
    export default User
    ```
  - 在组件里面使用
    ```html
    <!-- 使用vuex -->
    <p>使用vuex</p>
    <button @click="getVuexData">vuex同步获取数据</button>
    <button @click="getVuexDataAsync">vuex异步获取数据</button>
    <h3>{{ username }}</h3>

    <script lang="ts">
      // 现在需要用getModule方法得到user实例
      // 这里的user其实就可以直接使用了
      const user = getModule(User)

      getVuexData() {
        console.log("vuex同步获取数据")
        user.setUsername("fds")
      }

      // vuex异步获取数据
      getVuexDataAsync() {
        console.log("vuex异步获取数据")
        user.setUserAction("ee")
      }

      // 计算属性，return的东西可以直接拿来用
      get username() {
        return user.username
      }
    </script>
    ```

### 2.6. 模块扩展
- 有些属性在某种类型上不存在时需要做扩展，否则会有错误提示。
- shims-vue.d.ts文件表示ts对vue的支持，修改会报错，如果需要扩展，同级添加一个`xxx.d.ts`文件
  ```ts
  // shims-vue.d.ts
  declare module "*.vue" {
    import Vue from 'vue'
    export default Vue
  }
  ```
- 以axios挂载为例
  - 首先在main.ts中扩展
    ```ts
    import axios from "axios"

    //挂载（使其可以在各个组件使用）
    Vue.prototype.$http = axios;
    ```
  ```js
  // HelloWorld.vue
  created() {
    // 如果不做扩展，编译器⽆法识别$http
    this.$http.get<Hero[]>('/api/heros').then(res=> {
      this.heros = res.data
    })
  }

  // 新建一个扩展文件 kuozhan-vue.d.ts
  import { AxiosInstance } from 'axios'

  // 在vue/types/vue文件中声明一个接口
  // 这个接口中规定了所有vue实例中的所有成员属性
  // 很多插件都对vue的构造函数有扩展
  declare module 'vue/types/vue' {
    interface Vue {
      axios: AxiosInstance
    }
  }
  ```

### 2.7. 第三⽅模块
- 以element-ui为例
  - 安装 => `yarn add element-ui`
  - 扩展插件
    - 创建 `@/plugins/elements.ts文件`
      ```ts
      import Vue from 'vue'
      import Element from 'element-ui'
      import 'element-ui/lib/theme-chalk/index.css'

      Vue.use(Element)
      ```
  - 在main.ts中引入
    - import './plugins/element'
  - 全局可以使用
    ```js
    this.$notify.success("新增成功");
    ``` 

## 3. 所有代码
- 系统配置及mock数据
  - package.json
    ```json
    "dependencies": {
      "axios": "^0.21.1",
      "core-js": "^3.6.5",
      "element-ui": "^2.15.5",
      "vue": "^2.6.11",
      "vue-class-component": "^7.2.3",
      "vue-property-decorator": "^9.1.2",
      "vue-router": "^3.2.0",
      "vuex": "^3.4.0",
      "vuex-module-decorators": "^1.0.1"
    },
    ```
  - vue.config.js
    ```ts
    module.exports = {
      devServer: {
        before(app) {
          app.get('/api/heros', (req, res)=> {
            // 直接用response对象返回json数据给前端
            res.json([
              { id: 1000, name: "卤蛋000", classify: "射手000" },
              { id: 2000, name: "后羿000", classify: "射手000" }
            ])
          }).get('/api/user', (req, res)=> {
            res.json([
              { id:1, name: "zhangsan" }
            ])
          })
        }
      }
    }
    ```
  - router/index.ts
    ```ts
    import Vue from 'vue'
    import VueRouter, { RouteConfig } from 'vue-router'

    Vue.use(VueRouter)

    // 这个routes的类型是非常明确的RouteConfig数组
    // const routes: Array<RouteConfig> = [
    const routes: RouteConfig[] = [
    ]

    const router = new VueRouter({
      mode: 'history',
      base: process.env.BASE_URL,
      routes
    })

    // 路由守卫
    // 去哪，从哪来，下一步
    router.beforeEach((to, from, next)=> {
      console.log(to.path);  // 去哪个路由
      next()

      // 可以拿到vm的实例
      // vm实际上就是vue实例即构造函数
      // next((vm)=> {})
    })

    export default router
    ```
- 业务配置
  - data-type.ts
    ```ts
    export type Hero = { 
      id: number,
      name: string,
      classify?: string  // 表示可选项 
    }
    ```
  - types/index.ts
    ```ts
    // 供出一个接口
    // 用来自定义各种类型的类型别名
    // 泛型 => 使我们定义的各种类型更加通用
    // 其实也可以写成 type Result<T> = {}
    // 两者在大多数情况下是可以替代的
    // interface更显结构性一些
    // 一般来说，能用interface实现，就用interface，如果不能就用type
    export interface Result<T> {
      ok: 0 | 1;  // result对象的ok值可以是0或1
      data: T;  // result对象的data值不确定，可以是hreos也可以是fruits等
    }
    ```
- 第三方插件相关
  - main.ts
    ```ts
    import './plugins/element'

    import axios from "axios"

    //挂载（使其可以在各个组件使用）
    Vue.prototype.axios = axios;
    ```
  - shims-vue.d.ts
    ```ts
    declare module "*.vue" {
      import Vue from 'vue'
      export default Vue
    }
    ```
  - kuozhan-vue.d.ts
    ```ts
    import { AxiosInstance } from 'axios'

    // 在vue/types/vue文件中声明一个接口
    // 这个接口中规定了所有vue实例中的所有成员属性
    // 很多插件都对vue的构造函数有扩展
    declare module 'vue/types/vue' {
      interface Vue {
        axios: AxiosInstance
      }
    }
    ```
  - plugins/elements
    ```ts
    import Vue from 'vue'
    import Element from 'element-ui'
    import 'element-ui/lib/theme-chalk/index.css'

    Vue.use(Element)
    ```
- 假数据及vuex配置
  - api/hero.ts
    ```ts
    import axios from "axios"

    /* export function getResultAxios<T>() {
        // 使用get方法的时候，没有传递任何类型，他就不知道返回什么类型，只能用any表示
        return axios.get<T>('/api/heros')
    } */

    export const getResultAxios = <T>() => {
        return axios.get<T>('/api/heros')
    };
    ```
  - api/utils.ts
    ```ts
    // 导入接口
    import { Result } from '@/types/index'

    // 定义一个泛型方法
    // 在小括号前面约束了这个方法
    // 说明我们在使用这个方法的时候，需要动态指定一下这个类型
    // 他可以告诉我们，将来返回的这个Result里面到底data指什么
    /* function getResult<T>(): Result<T> {
      const data: any = [
        { id: 10, name: "卤蛋0", classify: "射手0" },
        { id: 20, name: "后羿0", classify: "射手0" }
      ]

      return { ok: 1, data }
    } */

    // 箭头函数一
    /* const getResult = <T,>(): Result<T> => {
      const data: any = [
        { id: 10, name: "卤蛋0", classify: "射手0" },
        { id: 20, name: "后羿0", classify: "射手0" }
      ]

      return { ok: 1, data }
    }; */

    // 箭头函数二
    export const getResult: <T>() => Result<T> = () => {
      const data: any = [
        { id: 10, name: "卤蛋0", classify: "射手0" },
        { id: 20, name: "后羿0", classify: "射手0" }
      ]
    
      return { ok: 1, data }
    };
      
    // 搞一个异步方法模拟请求
    // 泛型还能嵌套
    /* export function getResultPromise<T>(): Promise<Result<T>> {
      const data: any = [
        { id: 100, name: "卤蛋00", classify: "射手00" },
        { id: 200, name: "后羿00", classify: "射手00" }
      ]
      
      // 这里的promise可以确保和上面的result是相符合的
      return Promise.resolve({ ok:1, data })
    } */

    // 回调函数
    export const getResultPromise: <T>()=> Promise<Result<T>> = ()=> {
      const data: any = [
        { id: 100, name: "卤蛋00", classify: "射手00" },
        { id: 200, name: "后羿00", classify: "射手00" }
      ]

      // 这里的promise可以确保和上面的result是相符合的
      return Promise.resolve({ ok:1, data })
    }
    ```
  - store/index.ts
    ```ts
    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)

    // 希望所有模块都是动态注册的
    export default new Vuex.Store({ })
    ```
  - store/user.ts
    ```ts
    // 全局状态管理推荐使⽤vuex-module-decorators，模块化开发轻⽽易举，还能很好的利⽤ts类型推断
    // 除了引用VuexModule还需要引用一个模块装饰器
    import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

    // 导入store的实例
    import store from './index'

    // 定义一个类，继承 VuexModule
    // 他不是一个简单的class，而是一个Module
    // 所以需要Module装饰器
    // 这个装饰器表示，相当于把User模块注册到store实例里面去
    @Module({
      name: "user",  // module名称，开启命名空间后会以name为命名空间
      // 动态地把当前这个模块注册到主模块上
      // 是否使用动态加载，简而言之只有在用到当前的module才会加载，详细可以看vuex官网。本篇博客必须选择true，
      // 这也是为什么index.ts一直不用修改的原因，如果设置为false会有很大的变动
      dynamic: true, // 动态注册参数
      store,  // 挂载的store目标
      // namespace // 是否开启命名空间，如果你的模块很多，强烈建议开启
    })
    class User extends VuexModule {
      // 相当于vuex中state的属性
      username = 'tom'

      // state里面的数据如果要修改
      // Mutation也是一个装饰器
      @Mutation
      // 定义方法
      setUsername(name: string) {
        this.username = name
      }

      @Action
      // 异步方法
      login(userInfo: any) {
        console.log(userInfo)
      }

      @Action
      setUserAction(name: string) {
        this.setUsername(name)
      }
    }

    // 装饰之后的结果类才是我们要导出的
    export default User
    ```
- 组件
  - HelloWorld.vue
    ```html
    <template>
      <section id="hello">
        <!-- 使用字符串注解 -->
        <h1>{{ msg }}</h1>

        <!-- 使用字符串数组注解 -->
        <div v-for="heroName in herosName" :key="heroName">
          {{ heroName }}
        </div>

        <!-- 使用复杂对象注解 -->
        <!-- 针对函数的约束 -->
        <div v-for="hero in heros" :key="hero.id" @click="clickHero(hero)">
          {{ hero }}
          {{ hero.name }}
        </div>

        <!-- 事件约束 -->
        <!-- 按回车的时候响应事件 -->
        <input type="text" @keydown.enter="addHero">

        <!-- 获取存取器数据 -->
        <p>共{{ total }} 个可选英雄</p>

        <!-- 使用泛型 -->
        <p>使用泛型</p>
        <div v-for="hero in heros0" :key="hero.id">
          {{ hero }}
          {{ hero.name }}
        </div>

        <!-- 使用promise获取数据 -->
        <p>使用promise获取数据</p>
        <div v-for="hero in heros00" :key="hero.id">
          {{ hero }}
          {{ hero.name }}
        </div>

        <!-- 使用接口 -->
        <p>使用接口</p>
        <div v-for="hero in heros_as" :key="hero.id">
          {{ hero }}
          {{ hero.name }}
        </div>

        <button @click="pointFather">子组件给父组件的事件</button>

        <!-- 使用vuex -->
        <p>使用vuex</p>
        <button @click="getVuexData">vuex同步获取数据</button>
        <button @click="getVuexDataAsync">vuex异步获取数据</button>
        <h3>{{ username }}</h3>
      </section>
    </template>

    <script lang="ts">
    // 这是ts组件基本的模版
    // Component是非常关键的一个类，是装饰器
    // ts组件的基本模版都要引入Component和Vue这两个关键类
    import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

    // 类型别名
    import { Hero } from '@/data-type'  // 外部引入
    // type和interface很相似
    /* type Hero = { 
      id: number,
      name: string,
      classify: string 
    } */

    // 调用工具方法
    // import * as util from '@/api/utils'
    import { getResult, getResultPromise } from '@/api/utils'

    // 导入接口
    // import { Result } from '@/types/index'

    // 定义一个泛型方法
    // 在小括号前面约束了这个方法
    // 说明我们在使用这个方法的时候，需要动态指定一下这个类型
    // 他可以告诉我们，将来返回的这个Result里面到底data指什么
    /* function getResult<T>(): Result<T> {
      const data: any = [
        { id: 10, name: "卤蛋0", classify: "射手0" },
        { id: 20, name: "后羿0", classify: "射手0" }
      ]

      return { ok: 1, data }
    } */

    // 箭头函数一
    /* const getResult = <T,>(): Result<T> => {
      const data: any = [
        { id: 10, name: "卤蛋0", classify: "射手0" },
        { id: 20, name: "后羿0", classify: "射手0" }
      ]

      return { ok: 1, data }
    }; */

    // 箭头函数二
    /* const getResult: <T>() => Result<T> = () => {
      const data: any = [
        { id: 10, name: "卤蛋0", classify: "射手0" },
        { id: 20, name: "后羿0", classify: "射手0" }
      ]

      return { ok: 1, data }
    }; */

    // 搞一个异步方法模拟请求
    // 泛型还能嵌套
    /* const getResultPromise: <T>()=> Promise<Result<T>> = ()=> {
      const data: any = [
        { id: 100, name: "卤蛋00", classify: "射手00" },
        { id: 200, name: "后羿00", classify: "射手00" }
      ]

      // 这里的promise可以确保和上面的result是相符合的
      return Promise.resolve({ ok:1, data })
    } */

    // 真正接口调用
    import { getResultAxios } from '@/api/hero'
    import axios from "axios"
    /* // 我们在调这个方法的时候，不指定结果是什么
    // 我们在这里只需要做一个转发
    // 我们把泛型复制到下面
    // 将来用户在调这个接口的时候，只要动态的把类型传进来，下面的get方法同样也知道传进来的类型是什么了
    function getResultAxios<T>() {
      // 使用get方法的时候，没有传递任何类型，他就不知道返回什么类型，只能用any表示
      return axios.get<T>('/api/heros')
    } */

    // 为了使用vuex
    import { getModule } from 'vuex-module-decorators'
    // 导入user
    import User from '@/store/user'

    // 现在需要用getModule方法得到user实例
    // 这里的user其实就可以直接使用了
    const user = getModule(User)


    // ts最重要核⼼语⾔特性之一；装饰器
    // 有了装饰器这个类才能用注解
    // 我们用注解这个语法，把它装饰在自定义类的上面，并且这个类要继承Vue的构造函数
    // 如果上面不需要使用其他组件，只要使用这个装饰就可以 => @Component
    // 如果还需要引入其他组件，可以在装饰器里面添加，以函数的方式去使用它
    // 建议一些配置，和业务无关的东西写在这里

    // HelloWorld只是一个普通的class，但被Component装饰之后，他就变成了一个vue的组件类
    // 有些类似vue的继承返回的构造函数，即相当于组件的构造函数
    // 传进去的是一个HelloWorld类，传出来的是一个构造函数
    @Component({
      components: {
        // 组件名称
      }
    })
    // @Component
    // 这里写业务逻辑相关的东西
    export default class HelloWorld extends Vue {
      // 我们之前是需要加一个data，然后在里面return各种数据
      // ts里面可以直接写，在模版里面就可以直接使用
      // 这里定义的数据实际上就是类的成员属性
      // 即只要声明一个成员属性，就可以像以前一样，把它当成data里面的值去使用了
      // msg = "ts+vue实战"
      msg:string = "";  // 字符串注解

      // 父组件传值，子组件接收
      // 对参数进行约束
      @Prop({
        type: String,
        required: false  // 如果是必须的就为true
      })
      // 编译器会报没有初始化的警告，需要加一个断言
      // !是一个断言，表示msg0一定会有值
      // 一个装饰器装饰一个目标，再有其他属性就再加一个prop装饰另外一个属性
      // 这个msg0就是上面prop装饰器的目标
      msg0!: string;

      herosName: string[] = [] // 字符串数组

      // 自定义类型 - 推荐写法
      // 需要类型别名
      // 对象里的数据结构需要和类型别名结构相同
      heros:Hero[] = [
        {
          id: 1,
          name: '卤蛋',
          classify: "射⼿"
        },
        {
          id: 2,
          name: '后羿',
          classify: "射⼿"
        }
      ]
      
      // 偷懒写法
      /* // 但后面还有其他的就不好写了
      heros: {name: string}[] = [
        {
          name: '卤蛋1'
        },
        {
          name: '后羿1'
        } 
      ] */

      // 直接使用any
      /* heros:any = [
        {
          name: '卤蛋'
        },
        {
          name: '后羿'
        }
      ] */

      // 使用泛型
      heros0: Hero[] = []  // 定义并指定类型

      // 异步模拟请求
      heros00: Hero[] = []  // 定义并指定类型

      // 接口请求
      heros_as: Hero[] = []  // 定义并指定类型

      // vue的生命周期
      // 只要和生命周期的钩子一致，就可以成为一个生命周期
      async created() {
        this.msg = "ts+vue实战"  // 使用字符串注解

        console.log("获取父组件的值---", this.msg0)

        this.herosName = ['⻧蛋', '后羿']  // 使用字符串数组注解

        // 执行泛型方法
        // 需要指定一下类型，如果不指定，会显示unknow，表示不指定返回的类型是什么
        // 这里表示返回的类型是英雄构成的数组
        this.heros0 = getResult<Hero[]>().data
        console.log(getResult().ok)

        // 异步模拟请求
        console.log((await getResultPromise()).ok)
        // 异步执行了这个方法之后才获取data
        // 使用await实际上就是拿到promise里面的result，拿到result才可以获取里面的data
        this.heros00 = (await getResultPromise<Hero[]>()).data

        // 获取接口数据
        this.heros_as = (await getResultAxios<Hero[]>()).data

        // 或者也可以直接调用
        // 最好直接明确告诉get方法返回的结果
        // 返回的结果是hero数组
        // axios.get<Hero[]>('/api/heros')里面实际上就是一个promise
        axios.get<Hero[]>('/api/heros').then(res=> {
          console.log(res)
        })

        // 模块扩展
        this.axios.get<Hero[]>('/api/user').then(res=> {
          console.log("通过全局axios请求的数据", res)
        })
      }  // 不能加分号

      // 事件可以理解成类里面的方法，所以不用和之前一样写methods
      // 针对函数的约束
      // 如果不声明类型，就不知道里面有没有name属性，不安全
      clickHero(hero: Hero) {
        // 这里的hero通过传参得来
        // console.log(hero)
        console.log("clickHero", hero.name);
      }

      // 回车事件约束
      // 这里的事件对象类型属于键盘事件
      addHero(e: KeyboardEvent) {
        // 现在由于是强类型，所以每一步都会有类型的提示
        // e.target  // 可能是事件派发者，可能是空
        // console.log("获取事件对象", e)

        // 确定目前派发的类型是输入框
        // 这里没法加value，即e.target.value不存在
        // 这个target不是一个输入框，他是输入框的父类，所以没有value
        // 所以这时候要做个断言，必须告诉他这东西就是一个html的input元素
        // 即 e.target as HTMLInputElement
        // 获取事件对象中的input元素
        // console.log(e.target as HTMLInputElement)

        // e.target这个类型太泛了，要把他确定成输入框这种类型 => 断言
        // 因为可以派发事件的元素太多了，在编译器的角度上无法判断，必须由程序员告诉他
        let inp = e.target as HTMLInputElement;
        console.log(inp.value)  // 获取input框内容

        // 在数组中push
        // 如果没有分类，和自定义的类型不匹配会报错
        // 修改自定义类型，分类改成可选
        if(inp.value) {
          this.heros.push({
            id: this.heros.length + 1,
            name: inp.value
          })
        }
        
        inp.value = ""
        console.log(this.heros)

        // 全局引入提示信息
        this.$notify.success('新增英雄成功！')
      }

      // 子组件给父组件的事件 - 使用装饰器完成
      // 方法名称会成为事件名称
      // 这里的return为父组件事件的参数
      // 这里是驼峰命名，父组件事件要用中划线
      @Emit()
      pointFather() {
        console.log("子组件给父组件的事件")

        return "pointFather参数"
      }

      // // vuex action改变数据
      // vgact() {
      //   user.setUserAction("ee")
      //   // user.setUsername("fds")
      // }

      // vuex同步获取数据
      getVuexData() {
        console.log("vuex同步获取数据")
        user.setUsername("fds")
      }

      // vuex异步获取数据
      getVuexDataAsync() {
        console.log("vuex异步获取数据")
        user.setUserAction("ee")
      }

      // 做一个英雄总数的统计，用存取器来做，get/set
      // 存取器：会作为计算属性对待
      // 这个只是es6中class里面的存取器
      get total() {
        return this.heros.length
      }

      // 计算属性，return的东西可以直接拿来用
      get username() {
        return user.username
      }
    }
    </script>

    <style scoped lang="less">

    </style>
    ```
- view/Home.vue
  ```html
  <template>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld @point-father="getSon" msg0="Welcome to Your Vue.js + TypeScript App 入门"/>
    </div>
  </template>

  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

  @Component({
    components: {
      HelloWorld,
    },
  })
  export default class Home extends Vue {
    getSon(val:string) {
      console.log("父组件方法参数为子组件的return值，getSon", val)
    }
  }
  </script>
  ```

---
<br />

<font color="#666" size="5">\~End~</font>