/**
 * @description methods
 * @author zmx2321
*/
/**
 * 引入组件
 */
// 引入ui组件
/* import ElementUI from 'element-ui'  // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css' */

// 引入图表组件
// import echarts from 'echarts'

/**************************************************************/
/**
 * 方法导入
 */
/**************************************************************/
import { integrateGitalk } from "./utils/getGitalk";  // gitalk 评论


import * as utils from "./utils/utils";  // 测试


/**************************************************************/
/**
 * 方法集成
 */
/**************************************************************/
// gitalk 评论
const getGitalk = (router)=> {
  document && integrateGitalk(router);  // gitalk 评论
}

// 工具方法
const utilMethods = ()=> {
  // test String
  utils.consoleMethods();
}


/**************************************************************/
/**
 * 供出方法
 */
/**************************************************************/
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    // options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    // siteData // 站点元数据
  }) => {
    // ...做一些其他的应用级别的优化
    try {
      /**
       * 全局注册
       */
      // Vue.use(ElementUI);  // 全局注册ui组件

      /**
       * 全局挂载
       */
      // Vue.prototype.$echarts = echarts;  // 全局挂载图表插件

      /**
       * 业务功能模块
       */
      // gitalk 评论
      // getGitalk(router);  
      
      // 工具方法
      utilMethods();  
    } catch (e) {
      console.error(e.message)
    }
}