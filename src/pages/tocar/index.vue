<template>
    <div class="toCar">
        <div class="center">
            <Map/>
            <div class="icon">
                <img src="../../../static/images/location.png" alt="">
            </div>
        
        </div>
        <footer>打卡</footer>
    </div>
</template>
<script>
import Map from "@/components/map.vue";
export default {
  Components: {
    Map
  }
};
</script>
<style lang="scss" scoped>

.toCar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.center {
  flex: 1;
  position: relative;
  map {
    width: 100%;
    height: 100%;
  }
  .icon {
  position: absolute;
  bottom: 30px;
  left: 0;
  img {
    width: 40px;
    height: 40px;
  }
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
