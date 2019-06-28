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

export default {
  data() {
    return {
      longitude: "113.324520",
      latitude: "23.099994"
    };
  },
  created() {
    let qqMapsdk = new QQMapWx({
      key: "X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
    });
    let taht = this;
    wx.getLocation({
      type: "wgs84",
      success(res) {
        console.log('res',res)
        const latitude = res.latitude;
        const longitude = res.longitude;
        const speed = res.speed;
        const accuracy = res.accuracy;
      }
    });
  
  },
  methods: {
    clickBtn() {
      wx.navigateTo({
        url: "../addInterview/main"
      });
    }
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
