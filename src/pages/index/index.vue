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
