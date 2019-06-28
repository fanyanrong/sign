<template>
  <div class="index">
    <div class="center">11</div>
    <footer @click="clickBtn">添加面试</footer>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    clickBtn(){
      wx.navigateTo({
        url: '../addInterview/main'
      });
    }
  }
}
</script>

<style>
page,.index{
   width: 100%;
  height: 100%;
}
.index{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.center{
  flex:1;
}
footer{
  height:100rpx;
  background: #000;
  color:#fff;
  font-size: 40rpx;
  line-height: 100rpx;
  text-align: center;
}
</style>
