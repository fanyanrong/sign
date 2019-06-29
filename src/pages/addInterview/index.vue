<template>
  <div class="addInterview">
    <form>
      <div class="key">面试信息</div>
      <div class="form_conter">
        <div class="item">公司名称<input type="text" placeholder="请输入公司名" v-model="viewName" @change="viewName"></div>
        <div class="item">公司电话<input type="text" placeholder="请输入面试联系人电话" v-model="viewNumber"></div>
       <view class="section item">
        <view class="section__title">面试时间</view>
        <picker mode="time" v-model="time" start="09:01" end="21:01" @change="bindTimeChange">
          <view class="picker">
            当前选择: {{time}}
          </view>
        </picker>
      </view>
        <div class="item">面试地址<input type="text" placeholder="请选择面试地址" @click="changeAddress" v-model="viewAddress"></div>
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
  data() {
    return {
      viewName: "",
      viewNumber: "",
      viewTime: "",
      viewAddress: "",
      time: "12:01"
    };
  },
  methods: {
     bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
    changeAddress() {
      wx.navigateTo({
        url: "/pages/address/main"
      });
    },
    viewName(e) {
      console.log(e);
    },
    clickSure() {
      console.log("确认");
    }
  }
};
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
