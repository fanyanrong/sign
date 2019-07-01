<template>
  <div class="index">
    <div class="center">
      <map id="map" 
      :longitude="longitude" 
      :latitude="latitude" 
      scale="14" 
      subkey="X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
      show-location
      style="width:100%;height:100%;"
     >
      </map>
      <div class="icon">
        <img src="../../../static/images/location.png" alt="">
        <img src="../../../static/images/my.png" alt="" @click="toMy">
      </div>
    </div>
    <footer @click="clickBtn">添加面试</footer>
  </div>
</template>
<script>
import QQMapWx from "@/utils/qqMap";
import {mapState, mapActions} from 'vuex'

export default {
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

<style>
page,
.index {
  width: 100%;
  height: 100%;
}
.index {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.center {
  flex: 1;
  position: relative;
}
.icon{
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 40px;
  left: 0;
}
.icon img{
  width: 40px;
  height: 40px;
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
