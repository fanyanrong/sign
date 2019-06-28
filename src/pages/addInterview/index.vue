<template>
  <div class="addInterview">
    <form>
      <div class="key">面试信息</div>
      <div class="form_conter">
        <div class="item">公司名称<input type="text" placeholder="请输入公司名"></div>
        <div class="item">公司电话<input type="text" placeholder="请输入面试联系人电话"></div>
        <!-- <view class="section">
        <view class="section__title">面试时间</view>
        <picker mode="time" value="{{time}}" start="09:01" end="21:01" bindchange="bindTimeChange">
          <view class="picker">
            当前选择: {{time}}
    </view>
  </picker>
</view> -->
        <div class="item">面试时间<input type="text" placeholder="请输入面试联系人电话"></div>
        <div class="item">面试地址<input type="text" placeholder="请选择面试地址" @click="changeAddress"></div>
      </div>
    <div class="key">备注信息</div>
    <div class="textarea">
      <textarea maxlength="100" placeholder="备注信息(可选,100个字以内)"></textarea>
    </div>
    </form>
    <button class="sureBtn" @click="clickSure">确认</button>
  </div> 
</template>
<script>
export default {
  data(){
    return {
      time: '12:01'
    }
  },
  methods:{
  changeAddress(){
    wx.navigateTo({
      url: '/pages/address/main'
    });
  },
  clickSure(){
    console.log('确认')
  }
  }
}
</script>

<style spcoped>

.key {
  font-size: 35rpx;
  background: #eee;
  height: 30rpx;
  line-height: 30rpx;
  padding: 30rpx;
  font-weight: 500;
}
.form_conter {
  font-size: 30rpx;
  padding: 0 30rpx;
}
.item {
  padding: 20rpx 0;
  display: flex;
  color: gray;
  border-bottom: 1px solid #eee;
}
.item input {
  margin-left: 40rpx;
}
.textarea {
  padding: 30rpx 30rpx 40rpx 30rpx;
  box-sizing: border-box;
}
textarea {
  height: 200rpx;
  border: 1px solid #ccc;
  padding: 10rpx;
  box-sizing: border-box;
  font-size: 30rpx;
}
.sureBtn {
  background: gray;
  color: #fff;
}
</style>
