<template>
  <div class="index">
    <div class="center">
        <Map />
      <div class="icon">
        <img src="../../../static/images/location.png" alt="">
        <img src="../../../static/images/my.png" alt="" @click="toMy">
      </div>
    </div>
    <footer @click="clickBtn">添加面试</footer>
  </div>
</template>
<script>
import Map from '../../components/map.vue'
import QQMapWx from "@/utils/qqMap";
import {mapState, mapActions} from 'vuex'

export default {
  Components:{
    Map
  },
  // data() {
  //   return {
  //     longitude: "113.324520",
  //     latitude: "23.099994"
  //   };
  // },
  computed:{
    ...mapState({
      longitude:state=>state.index.longitude,
      latitude:state=>state.index.latitude
    })
  },
    methods: {
    ...mapActions({
      getLocation:'index/getLocation'
    }),
    clickBtn() {
      wx.navigateTo({
        url: "../addInterview/main"
      });
    },
    //点击我的icon跳到个人中心
    toMy(){
      wx.navigateTo({
        url: "../my/main"
      });
    }
  },
  created() {
    let qqMapsdk = new QQMapWx({
      key: "X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
    });
    //获取当前位置
    this.getLocation();
  
  }

};
</script>

<style lang='scss'>

.index {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.center {
  flex: 1;
  position: relative;
  map{
     width: 100%;
  height: 100%;
  }
}
.icon{
  width: 100%;
  padding:0 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 30px;
  left: 0;
}
.icon{
  img{
    width: 40px;
  height: 40px;
  }
}
footer {
  height: 100rpx;
  background: #000;
  color: #fff;
  font-size: 40rpx;
  line-height: 100rpx;
  text-align: center;
}

</style>
