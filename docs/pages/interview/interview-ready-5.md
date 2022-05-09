# 面试前准备-5
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

> 汇总构建工具相关面试题

## 1. webpack四大核心要素是什么
- 入口(entry)
- 出口(output)
- 文件加载器（loader）
  - 用来预处理文件,loader让webpack 能够去处理那些非 JavaScript 文件
  - 本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块
- 插件(plugins)
  - 插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量
  - plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务

## 2. yarn serve的过程中做了哪些事情
- 首先在package.json中的script里面可以找到serve指令，实际上他执行的是vue-cli-service serve这个指令
- 从webpack的学习过程中我们可以知道，他执行的命令都是在node_modules里面的bin里面执行的，所以我们需要在node_modules/.bin里面找到vue-cli-service
- node_modules/bin里面的东西实际上都是软链接，即符号链接，计算机可以通过软链接去找到真实代码，我们在node_modules/bin/vue-cli-service这个文件里面可以找到他的真实代码，即@vue/cli-service
- cli-service这个文件夹实际上是用webpack搭建的一个项目，我们可以明显地看到webpack.config.js这个配置文件
- 进入cli-service，找到package.json，看到bin，在安装的时候，他首先安装的是bin里面的东西，即他实际上执行的就是bin下面的vue-cli-service指令，即执行的是cli-service/bin/vue-cli-service.js这个文件
- 进到vue-cli-service.js这个文件，我们可以看到整个文件最主要就做了三件事，一件是引入service这个类并定义他，这个类实际上是一个js文件，cli-service/lib/Service，第二件事是对这个类做了实例化，即new Service()，第三件事情是，执行了这个Service实例的run方法
- 我们知道，只要对一个类进行实例化，它必然会执行他的构造方法，即constructor，在Service的构造器里面定义了一系列变量，并执行了一些当前类的一些方法赋值给一些变量
- 我们可以在构造器中找到定义插件并给他赋值的这句话this.plugins = this.resolvePlugins()，找到resolvePlugins这个方法，他将插件的路径定义成数组，并定义了一个方法，以map的形式将他们一个个组成了有id和apply属性的数组，并最终返回给在构造器里面的plugins，需要注意的是apply是一个方法，它将预设的插件以require的形式引入，每个插件里面又做了module.exports，即每一个apply的返回值实际上可以理解为是每个插件具体的内容
- 准备工作在这一步基本完成了，之后执行service里面的run方法，我们可以看到这个run方法传了一个command参数，即外部传过来的serve或者build，我们还可以看到run方法里面的第三个步骤是执行了一个init方法，即初始化，定位到init方法，我们可以看到他做了很多事情，但目前他做的最主要的事情是对插件这个对象数组plugins进行了遍历（这个plugins之前在resolvePlugins被赋值了）
- init函数在对plugins对象数组遍历的时候，将每个对象的id和apply给解构了出来，并执行apply方法，这里的apply实际上代表各自的插件，在apply方法即插件中传入两个配置项作为参数，其中一个配置项是PluginAPI的实例，另一个配置项是项目的配置projectOptions（里面包含但不仅限于vue.config.js的配置），所以在每个插件中，第一个参数为PluginAPI的实例，即源码中的api，所以这个api也就可以使用PluginAPI这个js文件中的所有方法了
- 在run方法中，我们还看到，它最终返回了一个fn，并调用了他，这个fn是通过command对象解构出来的，再往上看，可以看到command是通过this.commands[name]这个对象被赋值的，所以后面的重点是这个this.commands[name]做了哪些操作
- 我们知道在vue-cli-service中执行run方法的时候，传过去的值为外部yarn或者npm run后面带的东西，比如serve或者build，即this.commands[name]中的这个name实际上是外部传过来的serve或者build的东西，那this.commands这个对象是什么呢，或者说他是什么时候被赋值的呢
- 从上文我们知道，

