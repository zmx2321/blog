<template>
  <section class="optimized" id="optimized"></section>
</template>
 
<script>
export default {
  name: 'optimized',

  methods: {
    // 倒计时
    optimizedCountdown(time) {
      // console.log("倒计时", time);

      // 目的时间戳
      const objectiveTimeStamp = new Date(time).getTime();

      // 现在的时间戳
      let nowTimeStamp = new Date().getTime();
      // console.log(nowTimeStamp);

      // 毫秒差  1s =1000ms  1分=60s   1时 =60分  1天 =24时   1月=30天  1年=12月
      let getTimeStamp = objectiveTimeStamp - nowTimeStamp;
      // console.log(getTimeStamp);

      let d, h, m, s, ms;

      let tow =(n)=> {
        return n >= 0 && n < 10 ? '0' + n : '' + n;
      }

      if(getTimeStamp >= 0) {
        d = Math.floor(getTimeStamp / 1000 / 60 / 60 / 24);
        h = Math.floor(getTimeStamp / 1000 / 60 / 60 % 24);
        m = Math.floor(getTimeStamp / 1000 / 60 % 60);
        s = Math.floor(getTimeStamp / 1000 % 60);
        ms = Math.floor(getTimeStamp % 1000);
        
        return `距离***还有：${tow(d)}天${tow(h)}小时${tow(m)}分钟${tow(s)}秒${tow(ms)}毫秒`
      } else {
        return "倒计时结束"
      }
    },

    // 清除定时器
    clearTime() {
      for(let i=0; i<1000; i++) {
        window.clearInterval(i);  // 清除定时器
      }
    }
  },

  mounted() {
    setInterval(()=>{
      // console.log(this.optimizedCountdown("2028-8-13 00:00:00"));

      let timeDom = document.querySelector("#optimized");

      if(timeDom) {
        timeDom.innerHTML = this.optimizedCountdown("2028-8-13 00:00:00");
      }
    },100);
  },

  beforeDestroy() {
    // console.log(window.setInterval.length);
    this.clearTime();
  }
}
</script>

<style scoped lang='stylus'>
.optimized
  margin 15px 0
</style>