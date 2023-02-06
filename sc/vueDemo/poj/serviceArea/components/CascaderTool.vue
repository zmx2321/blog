<template>
  <el-cascader
    v-model="currentAddressStr"
    :props="props"
    @change="addressHandleChange"
  />
</template>

<script>
import {
  getProvinceAreaList,  // 获取服务区地址 - 省
  getRegionsByCode,  // 根据code获取区域地址
} from "@/api/common";

export default {
  data () {
    return {
      currentAddressStr: this.addressStr,  // vue不推荐直接在子组件中修改父组件传来的props的值
      props: {
        lazy: true,
        // heckStrictly: true,
        lazyLoad: (node, resolve) => {
          // 级联控件 - 选地址
          this.selectAddress(node, resolve)
        }
      },
    }
  },

  props: {
    // 级联控件数据 - 结果数据
    addressStr: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    /**
     * api
     */
    // 获取服务区地址 - 省
    getProvinceAreaList () {
      return new Promise((resolve, reject) => {
        getProvinceAreaList().then(res => {
          resolve(res.rows)
        }).catch(err => {
          reject(err)
        })
      })
    },

    // 根据code获取区域地址
    getRegionsByCode (code) {
      return new Promise((resolve, reject) => {
        getRegionsByCode(code).then(res => {
          // console.log(res)
          if (res.data) {
            resolve(res.data.serviceAreaList)
          } else {
            console.log("没服务区，或者服务区id为空")
          }
        }).catch(err => {
          reject(err)
        })
      })
    },

    /**
     * 控件
     */
    // 级联控件 - 选地址
    async selectAddress (node, resolve) {
      const { level } = node;

      if (level === 0) {
        let provinceAreaList = await this.getProvinceAreaList()
        // console.log(provinceAreaList)

        const nodes = provinceAreaList.map(item => ({
          value: item.regionCode,
          label: item.regionName,
          leaf: node.level >= 2,
        }))

        /* nodes.unshift({
          value: "全区域",
          label: '全区域',
          leaf: node.level === 0,
        }) */
        resolve(nodes);
      }

      if (level === 1) {
        let regionsList = await this.getRegionsByCode(node.value)
        // console.log(regionsList)

        const nodes = regionsList.map(item => ({
          value: item.id.toString(),
          label: item.geographicalDivision === "" ? item.serviceAreaName + item.geographicalDivision : item.serviceAreaName + "(" + item.geographicalDivision + ")",
          leaf: node.level === 1,
        }))

        resolve(nodes);
      }
    },

    // 切换区域响应事件
    addressHandleChange (val) {
      console.log("tools", val)
      val[1] = val[1].toString()

      // 父组件修改子组件model时触发
      this.currentAddressStr = val
      // console.log(this.currentAddressStr)

      this.$emit("addressHandleChange", val)
    }
  }
}
</script>
