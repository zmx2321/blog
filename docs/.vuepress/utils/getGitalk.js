import md5 from 'md5'

// 重试
// function tryRun (fn, times = 3) {
//   let execCount = 1
  
//   fn(next)

//   function next(delay) {
//     if (execCount >= times) return
//     setTimeout(() => {
//       execCount += 1
//       fn(next)
//     }, delay);
//   }
// }

// gitalk 评论
export function integrateGitalk(router) {
  // 获取gitalk.css cdn
  const linkGitalk = document.createElement('link');
  linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
  linkGitalk.rel = 'stylesheet';
  document.body.appendChild(linkGitalk);

  // 获取gitalk.js cdn
  const scriptGitalk = document.createElement('script');
  scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
  document.body.appendChild(scriptGitalk);

  // 路由钩子，进入页面后触发
  router.afterEach((to) => {
    // console.log("加载Gitalk");
    if (scriptGitalk.onload) {
      loadGitalk(to);
    } else {
      scriptGitalk.onload = () => {
        // console.log("加载Gitalk1");
        loadGitalk(to);
      }
    }
  });

  // router.afterEach((to, from) => {
  //   // 页面滚动，hash值变化，也会触发afterEach钩子，避免重新渲染
  //   if (to.path === from.path) return
    
  //   // 已被初始化则根据页面重新渲染 评论区
  //   tryRun((next) => {
  //     const $page = document.querySelector('.page')
  //     console.log($page);
  //     if ($page && window.Gitment) {
  //       // gitment 取document.title作为issue的标题
  //       // 如果不setTimeout取到是上一篇文档的标题
  //       setTimeout(() => {
  //         renderGitalk($page, to.path)
  //       }, 1);
  //     } else {
  //       next(500)
  //     }
  //   }, 10)
  // })

  // 加载Gitalk
  const loadGitalk = (to)=> {
    // 移除旧节点，避免页面切换 评论区内容串掉
    let commentsContainer = document.getElementById('gitalk-container');
    // commentsContainer && commentsContainer.parentNode.removeChild(commentsContainer);

    if (!commentsContainer) {
      commentsContainer = document.createElement('div');
      commentsContainer.id = 'gitalk-container';
      commentsContainer.classList.add('content');

      commentsContainer.style.width = "92%";
      commentsContainer.style.margin = "0 auto";
    }
    const $page = document.querySelector('.page');
    if ($page) {
      $page.appendChild(commentsContainer);
      if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
        renderGitalk(to.fullPath);
      }
    }
  }

  // 渲染Gitalk（初始化）
  const renderGitalk = ()=> {
    const gitalk = new Gitalk({
      clientID: 'f4a3490a560ec6307d64', // GitHub Application Client ID
      clientSecret: 'e90624a62e5b3e1e8bfd41dff66792e51c765965', // GitHub Application Client Secret
      // repo: 'comtest',      // 存放评论的仓库
      repo: 'blogComment',      // 存放评论的仓库
      owner: 'zmx2321',          // 仓库的创建者，
      admin: ['zmx2321'],        // 如果仓库有多个人可以操作，那么在这里以数组形式写出
      id: md5(location.pathname),      // 用于标记评论是哪个页面的，确保唯一，并且长度小于50
      title: document.title,
      body:  '文章链接：'+ decodeURIComponent(location.origin+location.pathname),
      distractionFreeMode: false,  // Facebook-like distraction free mode  全屏遮罩的参数
      language: 'zh-CN',
    });
    gitalk.render('gitalk-container');
  }

  window.loadGitalk = loadGitalk;
}