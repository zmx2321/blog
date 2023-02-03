<template>
  <div class="servarea_pic">
    <div class="main_cont">
      <div class="pic_tip_box mb13">
        <div class="pcti_left">
          <dl>
            <dt class="mr20">
              <ul>
                <li class="mr10">{{ currentAddress }}{{ positionType }}{{ areaSwitch }}业态布局图</li>
                <li>{{ regionsData.serviceAreaClassification ? regionsData.serviceAreaClassification : '综合服务区' }}</li>
              </ul>
            </dt>
            <dd>
              <ul>
                <li class="pcti_color1"></li>
                <li>店铺</li>
              </ul>
            </dd>
            <dd>
              <ul>
                <li class="pcti_color2"></li>
                <li>临近30天到期店铺</li>
              </ul>
            </dd>
            <dd>
              <ul>
                <li class="pcti_color3"></li>
                <li>空铺</li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="pcti_right">
          <!-- 右边按钮 -->
          <!-- 东西 -->
          <el-radio-group v-model="currentAreaSwitch"
                          @change="setAreaSwitch"
                          v-if="currentAddress === '萧山' ||

                                currentAddress === '煤山' ||
                                currentAddress === '莫干山' ||
                                currentAddress === '青山' ||
                                currentAddress === '周王庙' ||

                                currentAddress === '龙泉' ||
                                currentAddress === '庆元' ||

                                currentAddress === '台州' ||
                                currentAddress === '奉化' ||
                                currentAddress === '永嘉' ||
                                currentAddress === '云和' ||


                                currentAddress === '宁海' ||
                                currentAddress === '北岸' ||
                                currentAddress === '嵊州' ||
                                currentAddress === '江山' ||
                                currentAddress === '仙霞' ||

                                currentAddress === '衢江' ||
                                currentAddress === '灵溪' ||
                                currentAddress === '诸暨' ||
                                currentAddress === '开化' ||

                                currentAddress === '方岩' ||
                                currentAddress === '磐安' ||

                                currentAddress === '富阳' ||
                                currentAddress === '诸永诸暨'
                              ">
            <el-radio-button label="东区"></el-radio-button>
            <el-radio-button label="西区"></el-radio-button>
          </el-radio-group>

          <!-- 南北 -->
          <el-radio-group v-model="currentAreaSwitch"
                          @change="setAreaSwitch"
                          v-if="currentAddress === '衢州' ||
                              currentAddress === '临海' ||
                              currentAddress === '长安' ||
                              currentAddress === '丽水' ||
                              currentAddress === '绍兴' ||

                              currentAddress === '德清' ||
                              currentAddress === '湖州' ||
                              currentAddress === '临安' ||
                              currentAddress === '南浔' ||
                              currentAddress === '长兴' ||
                              currentAddress === '龙岗' ||
                              currentAddress === '高楼' ||

                              currentAddress === '松阳' ||
                              currentAddress === '南浦溪' ||
                              currentAddress === '莲都' ||
                              currentAddress === '桥头' ||
                              currentAddress === '青田' ||

                              currentAddress === '遂昌' ||
                              currentAddress === '仙居' ||
                              currentAddress === '永康' ||
                              currentAddress === '芦浦' ||


                              currentAddress === '天台' ||
                              currentAddress === '新昌' ||
                              currentAddress === '常山' ||

                              currentAddress === '开化龙顶' ||
                              currentAddress === '武义' ||

                              currentAddress === '建金兰溪' ||
                              currentAddress === '梅城' ||
                              currentAddress === '涌金东阳' ||

                              currentAddress === '次坞' ||

                              currentAddress === '金华'
                            ">
            <el-radio-button label="北区"></el-radio-button>
            <el-radio-button label="南区"></el-radio-button>
          </el-radio-group>
        </div>
      </div>

      <!-- 服务区图 -->
      <!-- 东西 -->
      <div class="pic_box mb13" @click="clickArea">
        <div v-if="currentAddress === '萧山'">
          <xiao-shan-picture-box-1 v-if="areaSwitch === '东区'" />
          <xiao-shan-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <!-- 东西第二阶段新增 -->
        <div v-if="currentAddress === '煤山'">
          <mei-shan-picture-box-1 v-if="areaSwitch === '东区'" />
          <mei-shan-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <div v-if="currentAddress === '莫干山'">
          <mo-gan-shan-picture-box-1 v-if="areaSwitch === '东区'" />
          <mo-gan-shan-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <div v-if="currentAddress === '青山'">
          <qing-shan-picture-box-1 v-if="areaSwitch === '东区'" />
          <qing-shan-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <div v-if="currentAddress === '周王庙'">
          <zhou-wang-miao-picture-box-1 v-if="areaSwitch === '东区'" />
          <zhou-wang-miao-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <!-- 二 -->
        <div v-if="currentAddress === '龙泉'">
          <long-quan-picture-box-1  v-if="areaSwitch === '东区'" />
          <long-quan-picture-box-2  v-if="areaSwitch === '西区'" />
        </div>
        <div v-if="currentAddress === '庆元'">
          <qing-yuan-picture-box-1 v-if="areaSwitch === '东区'" />
          <qing-yuan-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <!-- 三 -->
        <div v-if="currentAddress === '台州'">
          <tai-zhou-picture-box-1 v-if="areaSwitch === '东区'" />
          <tai-zhou-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <div v-if="currentAddress === '奉化'">
          <feng-hua-picture-box-1 v-if="areaSwitch === '东区'" />
          <feng-hua-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <div v-if="currentAddress === '永嘉'">
          <yong-jia-picture-box-1 v-if="areaSwitch === '东区'" />
          <yong-jia-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <div v-if="currentAddress === '云和'">
          <yun-he-picture-box-1 v-if="areaSwitch === '东区'" />
          <yun-he-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <!-- <div v-if="currentAddress === '芦浦'">
          <lu-pu-picture-box-1 v-if="areaSwitch === '东区'" />
          <lu-pu-picture-box-2 v-if="areaSwitch === '西区'" />
        </div> -->
        <!-- 四 -->
        <div v-if="currentAddress === '宁海'">
          <ning-hai-picture-box-1 v-if="areaSwitch === '东区'" />
          <ning-hai-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <div v-if="currentAddress === '北岸'">
          <bei-an-picture-box-1 v-if="areaSwitch === '东区'" />
          <bei-an-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <div v-if="currentAddress === '嵊州'">
          <sheng-zhou-picture-box-1 v-if="areaSwitch === '东区'" />
          <sheng-zhou-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <div v-if="currentAddress === '江山'">
          <jiang-shan-picture-box-1 v-if="areaSwitch === '东区'" />
          <jiang-shan-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <div v-if="currentAddress === '仙霞'">
          <xian-xia-picture-box-1 v-if="areaSwitch === '东区'" />
          <xian-xia-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <!-- 五 -->
        <div v-if="currentAddress === '衢江'">
          <qu-jiang-picture-box-1 v-if="areaSwitch === '东区'" />
          <qu-jiang-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <div v-if="currentAddress === '灵溪'">
          <ling-xi-picture-box-1 v-if="areaSwitch === '东区'" />
          <ling-xi-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <div v-if="currentAddress === '诸暨'">
          <zhu-ji-picture-box-1 v-if="areaSwitch === '东区'" />
          <zhu-ji-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <div v-if="currentAddress === '开化'">
          <kai-hua-picture-box-1 v-if="areaSwitch === '东区'" />
          <kai-hua-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <!-- 六 -->
        <div v-if="currentAddress === '方岩'">
          <fang-yan-picture-box-1 v-if="areaSwitch === '东区'" />
          <fang-yan-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <div v-if="currentAddress === '磐安'">
          <pan-an-picture-box-1 v-if="areaSwitch === '东区'" />
          <pan-an-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <!-- 七 -->
        <div v-if="currentAddress === '富阳'">
          <fu-yang-picture-box-1 v-if="areaSwitch === '东区'" />
          <fu-yang-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>
        <div v-if="currentAddress === '诸永诸暨'">
          <zhu-yong-zhu-ji-picture-box-1 v-if="areaSwitch === '东区'" />
          <zhu-yong-zhu-ji-picture-box-2 v-if="areaSwitch === '西区'" />
        </div>


        <!-- 南北 -->
        <div v-if="currentAddress === '衢州'">
          <qu-zhou-picture-box-1 v-if="areaSwitch === '北区'" />
          <qu-zhou-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '临海'">
          <lin-hai-picture-box-1 v-if="areaSwitch === '北区'" />
          <lin-hai-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '长安'">
          <chang-an-picture-box-1 v-if="areaSwitch === '北区'" />
          <chang-an-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '丽水'">
          <li-shui-picture-box-1 v-if="areaSwitch === '北区'" />
          <li-shui-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '绍兴'">
          <shao-xing-picture-box-1 v-if="areaSwitch === '北区'" />
          <shao-xing-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>

        <!-- 南北第二阶段新增 -->
        <div v-if="currentAddress === '德清'">
          <de-qing-picture-box-1 v-if="areaSwitch === '北区'" />
          <de-qing-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '湖州'">
          <hu-zhou-picture-box-1 v-if="areaSwitch === '北区'" />
          <hu-zhou-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '临安'">
          <lin-an-picture-box-1 v-if="areaSwitch === '北区'" />
          <lin-an-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '南浔'">
          <nan-xun-picture-box-1 v-if="areaSwitch === '北区'" />
          <nan-xun-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '长兴'">
          <chang-xing-picture-box-1 v-if="areaSwitch === '北区'" />
          <chang-xing-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '龙岗'">
          <long-gang-picture-box-1 v-if="areaSwitch === '北区'" />
          <long-gang-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '高楼'">
          <gao-lou-picture-box-1 v-if="areaSwitch === '北区'" />
          <gao-lou-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <!-- 二 -->
        <div v-if="currentAddress === '松阳'">
          <song-yang-picture-box-1 v-if="areaSwitch === '北区'" />
          <song-yang-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '南浦溪'">
          <nan-pu-xi-picture-box-1 v-if="areaSwitch === '北区'" />
          <nan-pu-xi-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '莲都'">
          <lian-du-picture-box-1 v-if="areaSwitch === '北区'" />
          <lian-du-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '桥头'">
          <qiao-tou-picture-box-1 v-if="areaSwitch === '北区'" />
          <qiao-tou-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '青田'">
          <qing-tian-picture-box-1 v-if="areaSwitch === '北区'" />
          <qing-tian-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <!-- 三 -->
        <div v-if="currentAddress === '遂昌'">
          <sui-chang-picture-box-1 v-if="areaSwitch === '北区'" />
          <sui-chang-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '仙居'">
          <xian-ju-picture-box-1 v-if="areaSwitch === '北区'" />
          <xian-ju-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '永康'">
          <yong-kang-picture-box-1 v-if="areaSwitch === '北区'" />
          <yong-kang-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '芦浦'">
          <lu-pu-picture-box-1 v-if="areaSwitch === '北区'" />
          <lu-pu-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <!-- 四 -->
        <div v-if="currentAddress === '余姚'">
          <yu-yao-picture-box-1 v-if="areaSwitch === '北区'" />
          <yu-yao-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '天台'">
          <tian-tai-picture-box-1 v-if="areaSwitch === '北区'" />
          <tian-tai-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '新昌'">
          <xin-chang-picture-box-1 v-if="areaSwitch === '北区'" />
          <xin-chang-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '常山'">
          <chang-shan-picture-box-1 v-if="areaSwitch === '北区'" />
          <chang-shan-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <!-- 五 -->
        <div v-if="currentAddress === '开化龙顶'">
          <kai-hua-long-ding-picture-box-1 v-if="areaSwitch === '北区'" />
          <kai-hua-long-ding-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '武义'">
          <wu-yi-picture-box-1 v-if="areaSwitch === '北区'" />
          <wu-yi-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <!-- 六 -->
        <div v-if="currentAddress === '建金兰溪'">
          <jian-jin-lan-xi-picture-box-1 v-if="areaSwitch === '北区'" />
          <jian-jin-lan-xi-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '梅城'">
          <mei-cheng-picture-box-1 v-if="areaSwitch === '北区'" />
          <mei-cheng-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <div v-if="currentAddress === '涌金东阳'">
          <yong-jin-dong-yang-picture-box-1 v-if="areaSwitch === '北区'" />
          <yong-jin-dong-yang-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <!-- 七 -->
        <div v-if="currentAddress === '次坞'">
          <ci-wu-picture-box-1 v-if="areaSwitch === '北区'" />
          <ci-wu-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>
        <!-- 八 -->
        <div v-if="currentAddress === '金华'">
          <jin-hua-picture-box-1 v-if="areaSwitch === '北区'" />
          <jin-hua-picture-box-2 v-if="areaSwitch === '南区'" />
        </div>

        <!-- 其他 -->
        <!-- 三 -->
        <div v-if="currentAddress === '舟山'">
          <zhou-shan-picture-box />
        </div>
      </div>

      <!-- 列表 -->
      <div class="pic_txt_box itm_box">
        <ul @click="checkDp">
          <li v-for="(item, index) in bunkList" :key="index" :class="[{'soon_pocitm': item.bunkemptyshopcolour === '1'}, {'empty_pocitm': item.bunkemptyshopcolour === '-1'}]">
            <span>{{ item.bunkNo }}</span>
            {{ item.bunkname }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 服务区
 */
// 萧山
import XiaoShanPictureBox1 from './picturebox/xiaoshan/XiaoShanPictureBox1'
import XiaoShanPictureBox2 from './picturebox/xiaoshan/XiaoShanPictureBox2'
// 衢州
import QuZhouPictureBox1 from './picturebox/quzhou/QuZhouPictureBox1'
import QuZhouPictureBox2 from './picturebox/quzhou/QuZhouPictureBox2'
// 临海
import LinHaiPictureBox1 from './picturebox/linhai/LinHaiPictureBox1'
import LinHaiPictureBox2 from './picturebox/linhai/LinHaiPictureBox2'
// 长安
import ChangAnPictureBox1 from './picturebox/changan/ChangAnPictureBox1'
import ChangAnPictureBox2 from './picturebox/changan/ChangAnPictureBox2'
// 绍兴
import ShaoXingPictureBox1 from './picturebox/shaoxing/ShaoXingPictureBox1'
import ShaoXingPictureBox2 from './picturebox/shaoxing/ShaoXingPictureBox2'
// 丽水
import LiShuiPictureBox1 from './picturebox/lishui/LiShuiPictureBox1'
import LiShuiPictureBox2 from './picturebox/lishui/LiShuiPictureBox2'
/** 第二阶段新增 */ /** 第一天 */
// 德清
import DeQingPictureBox1 from './picturebox/deqing/DeQingPictureBox1'
import DeQingPictureBox2 from './picturebox/deqing/DeQingPictureBox2'
// 湖州 y
import HuZhouPictureBox1 from './picturebox/huzhou/HuZhouPictureBox1'
import HuZhouPictureBox2 from './picturebox/huzhou/HuZhouPictureBox2'
// 临安 y
import LinAnPictureBox1 from './picturebox/linan/LinAnPictureBox1'
import LinAnPictureBox2 from './picturebox/linan/LinAnPictureBox2'
// 南浔 f
import NanXunPictureBox1 from './picturebox/nanxun/NanXunPictureBox1'
import NanXunPictureBox2 from './picturebox/nanxun/NanXunPictureBox2'
// 长兴 f
import ChangXingPictureBox1 from './picturebox/changxing/ChangXingPictureBox1'
import ChangXingPictureBox2 from './picturebox/changxing/ChangXingPictureBox2'
// 龙岗 f
import LongGangPictureBox1 from './picturebox/longgang/LongGangPictureBox1'
import LongGangPictureBox2 from './picturebox/longgang/LongGangPictureBox2'
// 煤山 f
import MeiShanPictureBox1 from './picturebox/meishan/MeiShanPictureBox1'
import MeiShanPictureBox2 from './picturebox/meishan/MeiShanPictureBox2'
// 莫干山 f
import MoGanShanPictureBox1 from './picturebox/moganshan/MoGanShanPictureBox1'
import MoGanShanPictureBox2 from './picturebox/moganshan/MoGanShanPictureBox2'
// 青山 f
import QingShanPictureBox1 from './picturebox/qingshan/QingShanPictureBox1'
import QingShanPictureBox2 from './picturebox/qingshan/QingShanPictureBox2'
// 周王庙 f
import ZhouWangMiaoPictureBox1 from './picturebox/zhouwangmiao/ZhouWangMiaoPictureBox1'
import ZhouWangMiaoPictureBox2 from './picturebox/zhouwangmiao/ZhouWangMiaoPictureBox2'
// 高楼
import GaoLouPictureBox1 from './picturebox/gaolou/GaoLouPictureBox1'
import GaoLouPictureBox2 from './picturebox/gaolou/GaoLouPictureBox2'
/* 二 */
// 松阳
import SongYangPictureBox1 from './picturebox/songyang/SongYangPictureBox1'
import SongYangPictureBox2 from './picturebox/songyang/SongYangPictureBox2'
// 南浦溪
import NanPuXiPictureBox1 from './picturebox/nanpuxi/NanPuXiPictureBox1'
import NanPuXiPictureBox2 from './picturebox/nanpuxi/NanPuXiPictureBox2'
// 莲都
import LianDuPictureBox1 from './picturebox/liandu/LianDuPictureBox1'
import LianDuPictureBox2 from './picturebox/liandu/LianDuPictureBox2'
// 桥头
import QiaoTouPictureBox1 from './picturebox/qiaotou/QiaoTouPictureBox1'
import QiaoTouPictureBox2 from './picturebox/qiaotou/QiaoTouPictureBox2'
// 青田
import QingTianPictureBox1 from './picturebox/qingtian/QingTianPictureBox1'
import QingTianPictureBox2 from './picturebox/qingtian/QingTianPictureBox2'
// 龙泉 f
import LongQuanPictureBox1 from './picturebox/longquan/LongQuanPictureBox1'
import LongQuanPictureBox2 from './picturebox/longquan/LongQuanPictureBox2'
// 庆元 f
import QingYuanPictureBox1 from './picturebox/qingyuan/QingYuanPictureBox1'
import QingYuanPictureBox2 from './picturebox/qingyuan/QingYuanPictureBox2'
// 三
// 台州 f
import TaiZhouPictureBox1 from './picturebox/taizhou/TaiZhouPictureBox1'
import TaiZhouPictureBox2 from './picturebox/taizhou/TaiZhouPictureBox2'
// 奉化 f
import FengHuaPictureBox1 from './picturebox/fenghua/FengHuaPictureBox1'
import FengHuaPictureBox2 from './picturebox/fenghua/FengHuaPictureBox2'
// 遂昌
import SuiChangPictureBox1 from './picturebox/suichang/SuiChangPictureBox1'
import SuiChangPictureBox2 from './picturebox/suichang/SuiChangPictureBox2'
// 仙居
import XianJuPictureBox1 from './picturebox/xianju/XianJuPictureBox1'
import XianJuPictureBox2 from './picturebox/xianju/XianJuPictureBox2'
// 永康 f
import YongKangPictureBox1 from './picturebox/yongkang/YongKangPictureBox1'
import YongKangPictureBox2 from './picturebox/yongkang/YongKangPictureBox2'
// 舟山
import ZhouShanPictureBox from './picturebox/zhoushan/ZhouShanPictureBox'
// 永嘉
import YongJiaPictureBox1 from './picturebox/yongjia/YongJiaPictureBox1'
import YongJiaPictureBox2 from './picturebox/yongjia/YongJiaPictureBox2'
// 云和
import YunHePictureBox1 from './picturebox/yunhe/YunHePictureBox1'
import YunHePictureBox2 from './picturebox/yunhe/YunHePictureBox2'
// 芦浦 f
import LuPuPictureBox1 from './picturebox/lupu/LuPuPictureBox1'
import LuPuPictureBox2 from './picturebox/lupu/LuPuPictureBox2'
// 四
// 宁海 f
import NingHaiPictureBox1 from './picturebox/ninghai/NingHaiPictureBox1'
import NingHaiPictureBox2 from './picturebox/ninghai/NingHaiPictureBox2'
// 北岸 f
import BeiAnPictureBox1 from './picturebox/beian/BeiAnPictureBox1'
import BeiAnPictureBox2 from './picturebox/beian/BeiAnPictureBox2'
// 余姚 f
import YuYaoPictureBox1 from './picturebox/yuyao/YuYaoPictureBox1'
import YuYaoPictureBox2 from './picturebox/yuyao/YuYaoPictureBox2'
// 嵊州 f
import ShengZhouPictureBox1 from './picturebox/shengzhou/ShengZhouPictureBox1'
import ShengZhouPictureBox2 from './picturebox/shengzhou/ShengZhouPictureBox2'
// 江山 f
import JiangShanPictureBox1 from './picturebox/jiangshan/JiangShanPictureBox1'
import JiangShanPictureBox2 from './picturebox/jiangshan/JiangShanPictureBox2'
// 仙霞 f
import XianXiaPictureBox1 from './picturebox/xianxia/XianXiaPictureBox1'
import XianXiaPictureBox2 from './picturebox/xianxia/XianXiaPictureBox2'
// 天台 f
import TianTaiPictureBox1 from './picturebox/tiantai/TianTaiPictureBox1'
import TianTaiPictureBox2 from './picturebox/tiantai/TianTaiPictureBox2'
// 新昌 f
import XinChangPictureBox1 from './picturebox/xinchang/XinChangPictureBox1'
import XinChangPictureBox2 from './picturebox/xinchang/XinChangPictureBox2'
// 常山 f
import ChangShanPictureBox1 from './picturebox/changshan/ChangShanPictureBox1'
import ChangShanPictureBox2 from './picturebox/changshan/ChangShanPictureBox2'
// 五
// 衢江
import QuJiangPictureBox1 from './picturebox/qujiang/QuJiangPictureBox1'
import QuJiangPictureBox2 from './picturebox/qujiang/QuJiangPictureBox2'
// 灵溪
import LingXiPictureBox1 from './picturebox/lingxi/LingXiPictureBox1'
import LingXiPictureBox2 from './picturebox/lingxi/LingXiPictureBox2'
// 诸暨
import ZhuJiPictureBox1 from './picturebox/zhuji/ZhuJiPictureBox1'
import ZhuJiPictureBox2 from './picturebox/zhuji/ZhuJiPictureBox2'
// 开化
import KaiHuaPictureBox1 from './picturebox/kaihua/KaiHuaPictureBox1'
import KaiHuaPictureBox2 from './picturebox/kaihua/KaiHuaPictureBox2'
// 开化龙顶 f
import KaiHuaLongDingPictureBox1 from './picturebox/kaihualongding/KaiHuaLongDingPictureBox1'
import KaiHuaLongDingPictureBox2 from './picturebox/kaihualongding/KaiHuaLongDingPictureBox2'
// 武义 f
import WuYiPictureBox1 from './picturebox/wuyi/WuYiPictureBox1'
import WuYiPictureBox2 from './picturebox/wuyi/WuYiPictureBox2'
// 六
// 建金兰溪
import JianJinLanXiPictureBox1 from './picturebox/jianjinlanxi/JianJinLanXiPictureBox1'
import JianJinLanXiPictureBox2 from './picturebox/jianjinlanxi/JianJinLanXiPictureBox2'
// 梅城
import MeiChengPictureBox1 from './picturebox/meicheng/MeiChengPictureBox1'
import MeiChengPictureBox2 from './picturebox/meicheng/MeiChengPictureBox2'
// 方岩
import FangYanPictureBox1 from './picturebox/fangyan/FangYanPictureBox1'
import FangYanPictureBox2 from './picturebox/fangyan/FangYanPictureBox2'
// 磐安
import PanAnPictureBox1 from './picturebox/panan/PanAnPictureBox1'
import PanAnPictureBox2 from './picturebox/panan/PanAnPictureBox2'
// 涌金东阳
import YongJinDongYangPictureBox1 from './picturebox/yongjindongyang/YongJinDongYangPictureBox1'
import YongJinDongYangPictureBox2 from './picturebox/yongjindongyang/YongJinDongYangPictureBox2'
// 七
// 次坞
import CiWuPictureBox1 from './picturebox/ciwu/CiWuPictureBox1'
import CiWuPictureBox2 from './picturebox/ciwu/CiWuPictureBox2'
// 富阳
import FuYangPictureBox1 from './picturebox/fuyang/FuYangPictureBox1'
import FuYangPictureBox2 from './picturebox/fuyang/FuYangPictureBox2'
// 诸永诸暨
import ZhuYongZhuJiPictureBox1 from './picturebox/zhuyongzhuji/ZhuYongZhuJiPictureBox1'
import ZhuYongZhuJiPictureBox2 from './picturebox/zhuyongzhuji/ZhuYongZhuJiPictureBox2'
// 八
// 金华
import JinHuaPictureBox1 from './picturebox/jinhua/JinHuaPictureBox1'
import JinHuaPictureBox2 from './picturebox/jinhua/JinHuaPictureBox2'

export default {
  components: {
    XiaoShanPictureBox1, XiaoShanPictureBox2,  // 萧山
    QuZhouPictureBox1, QuZhouPictureBox2,  // 衢州
    LinHaiPictureBox1, LinHaiPictureBox2,  // 临海
    ChangAnPictureBox1, ChangAnPictureBox2,  // 长安
    ShaoXingPictureBox1, ShaoXingPictureBox2,  // 绍兴
    LiShuiPictureBox1, LiShuiPictureBox2,  // 丽水
    /** 第二阶段新增 */
    DeQingPictureBox1, DeQingPictureBox2,  // 德清
    HuZhouPictureBox1, HuZhouPictureBox2,  // 湖州
    LinAnPictureBox1, LinAnPictureBox2,  // 临安
    NanXunPictureBox1, NanXunPictureBox2,  // 南浔
    ChangXingPictureBox1, ChangXingPictureBox2,  // 长兴
    LongGangPictureBox1, LongGangPictureBox2,  // 龙岗
    MeiShanPictureBox1, MeiShanPictureBox2,  // 煤山
    MoGanShanPictureBox1, MoGanShanPictureBox2,  // 莫干山
    QingShanPictureBox1, QingShanPictureBox2,  // 青山
    ZhouWangMiaoPictureBox1, ZhouWangMiaoPictureBox2,  // 周王庙
    GaoLouPictureBox1, GaoLouPictureBox2,  // 高楼
    /** 二 */
    SongYangPictureBox1, SongYangPictureBox2,  // 松阳
    NanPuXiPictureBox1, NanPuXiPictureBox2,  // 南浦溪
    LianDuPictureBox1, LianDuPictureBox2,  // 莲都
    QiaoTouPictureBox1, QiaoTouPictureBox2,  // 桥头
    QingTianPictureBox1, QingTianPictureBox2,  // 青田
    LongQuanPictureBox1, LongQuanPictureBox2,  // 龙泉
    QingYuanPictureBox1, QingYuanPictureBox2,  // 庆元
    /** 三 */
    TaiZhouPictureBox1, TaiZhouPictureBox2,  // 台州
    FengHuaPictureBox1, FengHuaPictureBox2,  // 奉化
    SuiChangPictureBox1, SuiChangPictureBox2,  // 遂昌
    XianJuPictureBox1, XianJuPictureBox2,  // 仙居
    YongKangPictureBox1, YongKangPictureBox2,  // 永康
    ZhouShanPictureBox,  // 舟山
    YongJiaPictureBox1, YongJiaPictureBox2,  // 永嘉
    YunHePictureBox1, YunHePictureBox2,  // 云和
    LuPuPictureBox1, LuPuPictureBox2,  // 芦浦
    /** 四 */
    NingHaiPictureBox1, NingHaiPictureBox2,  // 宁海
    BeiAnPictureBox1, BeiAnPictureBox2,  // 北岸
    YuYaoPictureBox1, YuYaoPictureBox2, // 余姚
    ShengZhouPictureBox1, ShengZhouPictureBox2,  // 嵊州
    JiangShanPictureBox1, JiangShanPictureBox2,  // 江山
    XianXiaPictureBox1, XianXiaPictureBox2,  // 仙霞
    TianTaiPictureBox1, TianTaiPictureBox2,  // 天台
    XinChangPictureBox1, XinChangPictureBox2,  // 新昌
    ChangShanPictureBox1, ChangShanPictureBox2,  // 常山
    /** 五 */
    QuJiangPictureBox1, QuJiangPictureBox2,  // 衢江
    LingXiPictureBox1, LingXiPictureBox2,  // 灵溪
    ZhuJiPictureBox1, ZhuJiPictureBox2,  // 诸暨
    KaiHuaPictureBox1, KaiHuaPictureBox2,  // 开化
    KaiHuaLongDingPictureBox1, KaiHuaLongDingPictureBox2,  // 开化龙顶
    WuYiPictureBox1, WuYiPictureBox2,  // 武义
    /** 六 */
    JianJinLanXiPictureBox1, JianJinLanXiPictureBox2,  // 建金兰溪
    MeiChengPictureBox1, MeiChengPictureBox2,  // 梅城
    FangYanPictureBox1, FangYanPictureBox2,  // 方岩
    PanAnPictureBox1, PanAnPictureBox2,  // 磐安
    YongJinDongYangPictureBox1, YongJinDongYangPictureBox2,  // 涌金东阳
    /** 七 */
    CiWuPictureBox1, CiWuPictureBox2,  // 次坞
    FuYangPictureBox1, FuYangPictureBox2,  // 富阳
    ZhuYongZhuJiPictureBox1, ZhuYongZhuJiPictureBox2,  // 诸永诸暨
    /** 八 */
    JinHuaPictureBox1, JinHuaPictureBox2,  // 次坞
  },

  props: {
    // 当前服务区名称
    currentAddress: {
      type: String,
      default: ''
    },
    // 当前服务区类型
    positionType: {
      type: String,
      default: ''
    },
    // 接口数据
    regionsData: {
      type: Object,
      default: ()=> {}
    },
    // 服务区方向
    areaSwitch: {
      type: String,
      default: ''
    },
    // 店铺列表
    bunkList: {
      type: Array,
      default: ()=> []
    },
  },

  data () {
    return {
      // 子组件双向绑定数据并同步到父组件需要另外命名变量与之关联
      currentAreaSwitch: this.areaSwitch
    }
  },

  methods: {
    // 初始化切换按钮
    resetAreaSwitch(val) {
      this.currentAreaSwitch = val
    },
    // 点击店铺
    clickArea(e) {
      let { nodeName } = e.target

      if(nodeName === 'BUTTON' || nodeName === 'B' || nodeName === 'DIV') {
        let { textContent } = e.target
        let tipNum = ""

        if(nodeName === 'DIV') {
          // 获取样式
          let currentClass = document.defaultView.getComputedStyle(e.target, null)

          // 白色不触发
          if(currentClass.backgroundColor === 'rgb(255, 255, 255)') {
            return
          }

          tipNum = e.target.parentNode.textContent
        } else {
          tipNum = textContent
        }

        this.$emit('clickArea', tipNum)
      }
    },
    // 切换地区
    setAreaSwitch(val) {
      console.log(val)
      this.$emit('setAreaSwitch', val)
    },
    // 点击列表店铺
    checkDp(e) {
      this.$emit('checkDp', e)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";

// 左
.servarea_pic {
  .pic_tip_box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 38px;
    margin-top: 13px;
    overflow: hidden;

    .pcti_left {
      dl {
        position: relative;
        top: 5px;

        dt, dd {
          display: inline-block;

          ul {
            li {
              display: inline-block;
            }
          }
        }

        dt {
          ul {
            li:first-child {
              font-size: 20px;
            }

            li:last-child {
              background: $normalColor;
              color: #ffffff;
              padding: 3px 18px;
              border-radius: 10px;
            }
          }
        }

        dd {
          position: relative;
          top: -3px;
          margin-right: 20px;

          ul {
            li:first-child {
              position: relative;
              top: 2.5px;
              width: 23px;
              height: 15px;
              margin-right: 5px;
              border: 1px solid #707070;

              &.pcti_color1 {
                background: $normalColor;
              }

              &.pcti_color2 {
                background: $soonColor;
              }

              &.pcti_color3 {
                background: $emptyColor;
              }
            }

            li:last-child {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  .pic_box {
    position: relative;
    width: 100%;
    min-height: 482px;
    border: dashed 1px $greyFontColor;

    .pcb_item {
      width: 99%;
      margin: -48px auto 0;
    }
  }

  .itm_box {
    ul {
      height: 100%;

      li:not(:last-child) {
        margin-right: 10px;
      }

      li {
        display: inline-block;
        margin-bottom: 10px;
        padding: 12px 15px;
        background: $normalColor;
        overflow: hidden;
        font-size: 12px;
        color: #fff;
        border-radius: 10px;
        opacity: 1;
        cursor: pointer;
        transition: 0.2s linear;

        span {
          color: #fff;
        }

        &.soon_pocitm {
          background: $soonColor;
        }
        &.empty_pocitm {
          background: $emptyColor;
        }

        &:hover {
          opacity: 1;
          background: $normalHoverColor;
          transition: 0.3s linear;
        }
        &.soon_pocitm:hover {
          background: $soonHoverColor;
        }
        &.empty_pocitm:hover {
          background: $emptyHoverColor;
        }
      }
    }
  }

  .pic_txt_box {
    height: 155px;
    overflow: auto;
  }
}
</style>
