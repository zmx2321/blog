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

## 2. vue-cli-service实现原理