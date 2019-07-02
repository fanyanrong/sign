<template>
  <div class="addInterview">
    <form>
      <div class="key">面试信息</div>
      <div class="form_conter">
        <div class="item">公司名称<input type="text" placeholder="请输入公司名" :value="valueName" @change="viewName"></div>
        <div class="item">公司电话<input type="text" placeholder="请输入面试联系人电话" :value="valueNumber" @change="viewNumber"></div>
       <view class="section item">
  <view class="section__title">面试时间</view>
  <picker mode="date" :value="valueDate" start="2015-09-01" end="2017-09-01" @change="dateChange">
    <view class="picker">
      {{valueDate}}
    </view>
  </picker>
</view>
        <div class="item">面试地址<input type="text" placeholder="请选择面试地址" :value="valueAddress"
        @click="changeAddress"
        ></div>
      </div>
    <div class="key">备注信息</div>
    <div class="textarea">
      <textarea maxlength="100" placeholder="备注信息(可选,100个字以内)" :value="valueTextarea" @change="getTextarea"></textarea>
    </div>
    </form>
    <button :class="[activeBtn?'activeSureBtn':'sureBtn']" @click="clickSure">确认</button>
  </div> 
</template>
<script>
export default {
  data() {
    return {
      valueName: "",
      valueNumber: "",
      valueDate: "2019-06-30",
      valueAddress: "",
      valueTextarea: "",
      activeBtn: false
    };
  },
  methods: {
    //点击切换到地址页面
    changeAddress() {
      wx.navigateTo({
        url: "/pages/address/main"
      });
    },
    //获取公司名称value
    viewName(e) {
      this.valueName = e.target.value;
    },
    //获取公司电话value
    viewNumber(e) {
      var reg=/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$/
      this.valueNUmber = reg.test(e.target.value);
    },
    //获取面试时间value
    dateChange(e) {
      this.valueDate = e.target.value;
    },
    //获取textarea备注信息
    getTextarea(e) {
      this.valueTextarea = e.target.value;
      //console.log(this.valueTextarea);
    },
    //点击确认
    clickSure() {
      console.log("确认");
      console.log("公司名称", this.valueName);
      console.log("公司电话", this.valueNUmber);
      console.log("面试时间", this.valueDate);
      console.log("备注信息", this.valueTextarea);

      console.log(this.valueName);

      //点击确认跳转到面试列表
       wx.navigateTo({
          url:'/pages/viewList/main'
        })
    }
  },
  mounted() {
    let address=wx.getStorageSync('address');
    this.valueAddress=address
    if (this.valueName && this.valueNUmber && this.valueDate) {
      this.activeBtn = true;
    } else {
      this.activeBtn = false;
    }
    //console.log(this.activeBtn);
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
.item input,
.picker {
  margin-left: 40rpx;
  flex: 1;
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
.activeSureBtn {
  background: skyblue;
}
</style>
