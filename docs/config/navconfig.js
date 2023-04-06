module.exports = [
  // 以docs为根目录
  { text: 'Home', link: '/' },
  
  // 下拉列表显示分组
  {
    text: '学习笔记',
    items: [
      { text: '前端知识回顾', link: '/pages/note/front-review/' },
      { 
        text: 'javascript语言新发展', 
        items: [
          { text: 'ready', link: '/pages/note/js-development/js-ready/' },
          { text: '笔记', link: '/pages/note/js-development/js-note/' },
        ] 
      },
      { 
        text: '微信小程序', 
        items: [
          { text: '微信小程序', link: '/pages/note/wechat-applet/' },
        ] 
      },
      { 
        text: '大话NodeJS72般变化', 
        items: [
          { text: 'ready', link: '/pages/note/talk-node/talk-node-ready/' },
          { text: '笔记', link: '/pages/note/talk-node/talk-node-note/' },
        ] 
      },
      { 
        text: '前端工程化', 
        items: [
          { text: 'ready', link: '/pages/note/front-engineering/front-engineering-ready/' },
          { text: '笔记', link: '/pages/note/front-engineering/front-engineering-note/' },
        ] 
      },
      { 
        text: '前端性能优化与工程化', 
        items: [
          { text: 'ready', link: '/pages/note/front-performance/front-performance-ready/' },
          { text: '笔记', link: '/pages/note/front-performance/front-performance-note/' },
        ] 
      },
      { 
        text: 'CSS古话今说与网站重构', 
        items: [
          { text: 'ready', link: '/pages/note/css-advanced/css-advanced-ready/' },
          { text: '笔记', link: '/pages/note/css-advanced/css-advanced-note/' },
        ] 
      },
      { 
        text: 'MVC、MVVM框架那些事', 
        items: [
          { text: 'ready', link: '/pages/note/front-frame/front-frame-ready/' },
          { text: '笔记', link: '/pages/note/front-frame/front-frame-note/' },
        ] 
      },
      {
        text: 'flutter',
        items: [
          { text: 'flutter笔记', link: '/pages/note/flutter/' },
        ]
      },
      {
        text: 'uniapp',
        items: [
          { text: 'uniapp笔记', link: '/pages/note/uniapp/' },
        ]
      },
      { 
        text: '前端跨界AI、IOS、PC、Android、IOT', 
        items: [
          { text: 'ready', link: '/pages/note/front-crossover/front-crossover-ready/' },
          { text: '笔记', link: '/pages/note/front-crossover/front-crossover-note/' },
        ] 
      },
      {
        text: 'Python',
        items: [
          { text: '走进Python的世界', link: '/pages/note/python/' },
        ]
      },
      { 
        text: '数据结构与算法JavaScript实践', 
        items: [
          { text: 'ready', link: '/pages/note/data-structure/data-structure-ready/' },
          { text: '笔记', link: '/pages/note/data-structure/data-structure-note/' },
        ] 
      },
      { 
        text: 'JavaScript图形学和H5游戏', 
        items: [
          { text: 'ready', link: '/pages/note/front-graphics/front-graphics-ready/' },
          { text: '笔记', link: '/pages/note/front-graphics/front-graphics-note/' },
        ] 
      },
      { 
        text: '设计模式与网络安全专场', 
        items: [
          { text: 'ready', link: '/pages/note/front-hacker/front-hacker-ready/' },
          { text: '笔记', link: '/pages/note/front-hacker/front-hacker-note/' },
        ] 
      },
    ]
  },

  { text: '面试题', link: '/pages/interview/' },
  // { text: '面试题', link: '/pages/interview/interview-one-side-3' },

  // { text: '算法', link: '/pages/algorithm/other/' },
  {
    text: '算法',
    items: [
      { text: 'LeetCode', link: '/pages/algorithm/leet-code/' },
      { text: '其他', link: '/pages/algorithm/other/' },
    ]
  },

  {
    text: '积累',
    items: [
      { text: '前端', link: '/pages/accumulation/front/' },
      // { text: '前端', link: '/pages/accumulation/front/cour-vue3-ts-note-1' },
      { text: '后端', link: '/pages/accumulation/back/' },
      { text: '其他', link: '/pages/accumulation/other/' },
    ]
  },

  {
    text: '大杂烩',
    items: [
      { text: '菜谱', link: '/pages/hodgepodge/food-menu/food-menu-1' },
      // { text: '其他', link: '/pages/hodgepodge/other-info/other-info-1' },
      // { text: '计划', link: '/pages/hodgepodge/plan/' },
    ]
  },
];