/**
 * |   字段   | 释义   |
|   ----  | ----   |
|  name   | 课程名称 |
|  label  | 课程说明 |
|  rate   | 掌握程度 |
|  status |  分级   |
|  link |  跳转地址   | => 节点加html不会报错
 */
// 测试用例
export const brainMapData = {
  id: 'front0',
  name: '前端总览',
  label: '主要是一些零散知识点',
  rate: 0.6,
  status: 'B',
  children: [
    {
      id: 'front1_1',
      name: 'js笔记',
      label: 'js知识点',
      rate: 0.627,
      status: 'R',
      link: '/pages/accumulation/front/js-note-1.html',
      children: [
        {
          id: 'g121',
          name: 'Name3',
          collapsed: true,
          label: '138.00',
          rate: 0.123,
          status: 'B',
          children: [
            {
              id: 'g1211',
              name: 'Name4',
              label: '138.00',
              rate: 1.0,
              status: 'B',
              children: [],
            },
          ],
        },
        {
          id: 'g122',
          name: 'Name5',
          collapsed: true,
          label: '100.00',
          rate: 0.296,
          status: 'G',
          children: [
            {
              id: 'g1221',
              name: 'Name6',
              label: '40.00',
              rate: 0.4,
              status: 'G',
              children: [
                {
                  id: 'g12211',
                  name: 'Name6-1',
                  
                  label: '40.00',
                  rate: 1.0,
                  status: 'R',
                  children: [],
                },
              ],
            },
            {
              id: 'g1222',
              name: 'Name7',
              label: '60.00',
              rate: 0.6,
              status: 'G',
              children: [],
            },
          ],
        },
        {
          id: 'g123',
          name: 'Name8',
          collapsed: true,
          label: '100.00',
          rate: 0.296,
          status: 'DI',
          children: [
            {
              id: 'g1231',
              name: 'Name8-1',
              label: '100.00',
              rate: 1.0,
              status: 'DI',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 'front1_2',
      name: 'node笔记',
      label: 'node知识点',
      rate: 0.187,
      status: 'B',
      link: '/pages/accumulation/front/node-note-1.html',
      children: [
        {
          id: 'g131',
          name: 'Name10',
          
          label: '33.90',
          rate: 0.336,
          status: 'R',
          children: [],
        },
        {
          id: 'g132',
          name: 'Name11',
          
          label: '67.00',
          rate: 0.664,
          status: 'G',
          children: [],
        },
      ],
    },
    {
      id: 'front1_3',
      name: 'vue笔记',
      label: 'vue知识点',
      rate: 0.186,
      status: 'G',
      link: '/pages/accumulation/front/vue-note-1.html',
      children: [],
    },
    {
      id: 'front1_4',
      name: 'css笔记',
      label: 'css知识点',
      rate: 0.186,
      status: 'G',
      link: '/pages/accumulation/front/css-note-1.html',
      children: [],
    },
    {
      id: 'front1_5',
      name: 'ts笔记',
      label: 'ts知识点',
      rate: 0.186,
      status: 'G',
      link: '/pages/accumulation/front/ts-note-1.html',
      children: [],
    },
  ],
};
