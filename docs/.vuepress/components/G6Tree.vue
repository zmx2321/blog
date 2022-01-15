<template>
  <!-- 使用插件后，不能使用 ##, 且只能放上面 -->
  <!-- 脑图数据在这里测试过之后再放上去 -->
  <section id="g6Tree" class="tree_wrap"></section>
</template>
 
<script>
import G6 from '@antv/g6'
// import { brainMapData } from '../utils/brainMap/brainMapTest'
// import { brainMapData } from '../utils/brainMap/brainMap1'

export default {
  name: 'optimized',

  props: {
    queryData: {
      type: Object,
      default: ()=> {}
    }
  },

  data() {
    return {
      graph: {},

      colors: {
        B: '#5B8FF9',
        R: '#F46649',
        Y: '#EEBC20',
        G: '#5BD8A6',
        DI: '#A7A7A7',
      },
    }
  },

  computed: {
    // 树配置
    treeConfig() {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
        modes: {
          default: [{
            type: 'tooltip',
            formatText(model) {
              // console.log("鼠标移入", model)

              let text = `${model.name}：掌握${(model.rate*100).toFixed(2)}%`;

              return text;
            },
          }, "drag-canvas", "zoom-canvas", "drag-node", "click-select", "brush-select"],
        },
        fitView: true,
        animate: true,
        defaultNode: {
          type: 'flow-rect',
        },
        defaultEdge: {
          type: 'cubic-horizontal',
          style: {
            stroke: '#CED4D9',
          },
        },
        layout: {
          type: 'indented',
          direction: 'LR', // H / V / LR / RL / TB / BT
          dropCap: false,
          indent: 300,
          getHeight: () => {
            return 60;
          },
        }
      }
    }
  },

  methods: {
    /**
     * coommon
     * tools
     */
    // 初始化
    initPage() {
      // 序列化
      // console.log(JSON.stringify(brainMapData))

      this.registerFn()  // 注册节点
      this.renderBrainMap()  // 渲染脑图
    },

    // 显示隐藏
    handleCollapse(e) {
      // 获取node
      let { target } = e
      let id = target.get('modelId');
      let item = this.graph.findById(id);
      let nodeModel = item.getModel();

      // 更新并渲染
      nodeModel.collapsed = !nodeModel.collapsed;
      this.graph.layout();
      this.graph.setItemState(item, 'collapse', nodeModel.collapsed);
    },

    // tree相关点击事件
    clickNodeEvent() {
      let _this = this

      const getNodeModel = e=> {
        let node = e.item;
        let model = node._cfg.model

        return model
      }

      // 点击图标
      this.graph.on('collapse-text:click', e => {
        this.handleCollapse(e);
      });
      // 点击节点
      this.graph.on('node:click', e => {
        let { text } = e.target.attrs
        // console.log(text)

        if(text !== '+'  && text !== '-') {
          let nodeModel = getNodeModel(e)
          console.log("点击节点", nodeModel)

          if(nodeModel.link) {
            console.log(nodeModel.link)
            _this.$router.push(nodeModel.link)

            /* let timer = setTimeout(()=>{
              console.clear()
              clearTimeout(timer)
            }, 0) */
          }
        }
      })
      /* this.graph.on('collapse-back:click', e => {
        console.log("123")

        this.handleCollapse(e);
      }); */
    },

    // 注册节点
    registerFn() {
      let _this = this

      // 自定义节点
      G6.registerNode(
        'flow-rect',
        {
          shapeType: 'flow-rect',
          draw(cfg, group) {
            const {
              name = '',
              // variableName,
              // variableValue,
              // variableUp,
              label,
              collapsed,
              // currency,
              status,
              rate,
            } = cfg;
            const grey = '#CED4D9';
            // 逻辑不应该在这里判断
            const rectConfig = {
              width: 202,
              height: 60,
              lineWidth: 1,
              fontSize: 12,
              fill: '#fff',
              radius: 4,
              stroke: grey,
              opacity: 1,
            };

            const nodeOrigin = {
              x: -rectConfig.width / 2,
              y: -rectConfig.height / 2,
            };

            const textConfig = {
              textAlign: 'left',
              textBaseline: 'bottom',
            };

            const rect = group.addShape('rect', {
              attrs: {
                x: nodeOrigin.x,
                y: nodeOrigin.y,
                ...rectConfig,
              },
            });

            const rectBBox = rect.getBBox();

            // label title
            group.addShape('text', {
              attrs: {
                ...textConfig,
                x: 12 + nodeOrigin.x,
                y: 20 + nodeOrigin.y,
                text: name.length > 28 ? name.substr(0, 28) + '...' : name,
                fontSize: 12,
                opacity: 0.85,
                fill: '#000',
                cursor: 'pointer',
              },
              name: 'name-shape',
            });

            // price
            const price = group.addShape('text', {
              attrs: {
                ...textConfig,
                x: 12 + nodeOrigin.x,
                y: rectBBox.maxY - 12,
                text: label,
                fontSize: 16,
                fill: '#000',
                opacity: 0.85,
              },
            });

            // label currency
            /* group.addShape('text', {
              attrs: {
                ...textConfig,
                x: price.getBBox().maxX + 5,
                y: rectBBox.maxY - 12,
                text: currency,
                fontSize: 12,
                fill: '#000',
                opacity: 0.75,
              },
            }); */

            // percentage
            /* const percentText = group.addShape('text', {
              attrs: {
                ...textConfig,
                x: rectBBox.maxX - 8,
                y: rectBBox.maxY - 12,
                text: `${((variableValue || 0) * 100).toFixed(2)}%`,
                fontSize: 12,
                textAlign: 'right',
                fill: _this.colors[status],
              },
            }); */

            // percentage triangle
            /* const symbol = variableUp ? 'triangle' : 'triangle-down';
            const triangle = group.addShape('marker', {
              attrs: {
                ...textConfig,
                x: percentText.getBBox().minX - 10,
                y: rectBBox.maxY - 12 - 6,
                symbol,
                r: 6,
                fill: _this.colors[status],
              },
            }); */

            // variable name
            /* group.addShape('text', {
              attrs: {
                ...textConfig,
                x: triangle.getBBox().minX - 4,
                y: rectBBox.maxY - 12,
                text: variableName,
                fontSize: 12,
                textAlign: 'right',
                fill: '#000',
                opacity: 0.45,
              },
            }); */

            // bottom line background
            const bottomBackRect = group.addShape('rect', {
              attrs: {
                x: nodeOrigin.x,
                y: rectBBox.maxY - 4,
                width: rectConfig.width,
                height: 4,
                radius: [0, 0, rectConfig.radius, rectConfig.radius],
                fill: '#E0DFE3',
              },
            });

            // bottom percent
            const bottomRect = group.addShape('rect', {
              attrs: {
                x: nodeOrigin.x,
                y: rectBBox.maxY - 4,
                width: rate * rectBBox.width,
                height: 4,
                radius: [0, 0, 0, rectConfig.radius],
                fill: _this.colors[status],
              },
            });

            // collapse rect
            if (cfg.children && cfg.children.length) {
              group.addShape('rect', {
                attrs: {
                  x: rectConfig.width / 2 - 8,
                  y: -8,
                  width: 16,
                  height: 16,
                  stroke: 'rgba(0, 0, 0, 0.25)',
                  cursor: 'pointer',
                  fill: '#fff',
                },
                name: 'collapse-back',
                modelId: cfg.id,
              });

              // collpase text
              group.addShape('text', {
                attrs: {
                  x: rectConfig.width / 2,
                  y: -1,
                  textAlign: 'center',
                  textBaseline: 'middle',
                  text: collapsed ? '+' : '-',
                  fontSize: 16,
                  cursor: 'pointer',
                  fill: 'rgba(0, 0, 0, 0.25)',
                },
                name: 'collapse-text',
                modelId: cfg.id,
              });
            }

            this.drawLinkPoints(cfg, group);
            return rect;
          },
          update(cfg, item) {
            const group = item.getContainer();
            this.updateLinkPoints(cfg, group);
          },
          setState(name, value, item) {
            if (name === 'collapse') {
              const group = item.getContainer();
              const collapseText = group.find((e) => e.get('name') === 'collapse-text');
              if (collapseText) {
                if (!value) {
                  collapseText.attr({
                    text: '-',
                  });
                } else {
                  collapseText.attr({
                    text: '+',
                  });
                }
              }
            }
          },
          getAnchorPoints() {
            return [
              [0, 0.5],
              [1, 0.5],
            ];
          },
        },
        'rect',
      );

      // 自定义线
      G6.registerEdge(
        'flow-cubic',
        {
          getControlPoints(cfg) {
            console.log(cfg)
            let controlPoints = cfg.controlPoints; // 指定controlPoints
            if (!controlPoints || !controlPoints.length) {
              const { startPoint, endPoint, sourceNode, targetNode } = cfg;
              const { x: startX, y: startY, coefficientX, coefficientY } = sourceNode
                ? sourceNode.getModel()
                : startPoint;
              const { x: endX, y: endY } = targetNode ? targetNode.getModel() : endPoint;
              let curveStart = (endX - startX) * coefficientX;
              let curveEnd = (endY - startY) * coefficientY;
              curveStart = curveStart > 40 ? 40 : curveStart;
              curveEnd = curveEnd < -30 ? curveEnd : -30;
              controlPoints = [
                { x: startPoint.x + curveStart, y: startPoint.y },
                { x: endPoint.x + curveEnd, y: endPoint.y },
              ];
            }
            return controlPoints;
          },
          getPath(points) {
            const path = [];
            path.push(['M', points[0].x, points[0].y]);
            path.push([
              'C',
              points[1].x,
              points[1].y,
              points[2].x,
              points[2].y,
              points[3].x,
              points[3].y,
            ]);
            return path;
          },
        },
        'single-line',
      );
    },

    /**
     * api tools
     */
    // 获取树结构接口数据
    getAsyncTreeData() {
      // console.log(this.params)

      return new Promise((resolve, reject)=> {
        resolve(this.queryData)
        // resolve(brainMapData)
      })
    },

    /**
     * tree
     */
    // 渲染脑图
    async renderBrainMap() {
      let treeData = await this.getAsyncTreeData()
      // console.log("000", brainMapData, treeData)

      // 渲染树
      this.graph = new G6.TreeGraph({
        container: 'g6Tree',  // dom节点
        ...this.treeConfig,  // g6配置
      })

      // tree点击相关事件
      this.clickNodeEvent()

      // 渲染
      this.graph.data(treeData);  // 传入数据
      this.graph.render();  // 渲染
      this.graph.fitView();  // 自适应
    }
  },

  created() {
    this.initPage()  // 初始化
  },
}
</script>

<style scoped lang='stylus'>
.tree_wrap
  position: relative;
  width: 100%
  height: 150%
  .g6-tooltip.g6-node-tooltip
      font-size: 12px;
      border: dashed 1px #b7b7b7;
      border-radius: 6px;
      padding: 10px;
      color: #6791df;
      font-weight: 400;
</style>