<template>
  <div class="addInterview">
    <form @submit="submit" report-submit>
      <div class="key">面试信息</div>
      <div class="form_conter">
        <div class="item">公司名称<input type="text" placeholder="请输入公司名" :value="valueName" @input="viewName"></div>
        <div class="item">公司电话<input type="text" placeholder="请输入面试联系人电话" :value="valueNumber" @input="viewNumber"></div>
       <view class="section item">
        <view class="section__title">面试时间</view>
        <picker mode="multiSelector" @change="bindMultiPickerChange" @columnchange="bindMultiPickerColumnChange" :value="multiArray" :range="multiArray">
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
    
    <button :class="[activeBtn?'activeSureBtn':'sureBtn']"  form-type="submit">确认</button>
  </form>
  </div> 
</template>
<script>
import { addView } from "@/server";

export default {
  data() {
    return {
      valueName: "",
      valueNumber: "",
      valueDate: "",
      valueAddress: "",
      valueTextarea: "",
      pickerStart: "",
      pickerEnd: "",
      multiArray: [],
      arr1: [],
      arr2: [],
      arr3: [],
      yrar: "",
      months: "",
      day: "",
      hours: "",
      seconds: "00",
      activeBtn: false,
      formId: "",
      latitude: 0,
      longitude: 0
    };
  },
  methods: {
    order() {
      if (this.valueName && this.valueNumber && this.valueAddress) {
        this.activeBtn = true;
      } else {
        this.activeBtn = false;
      }
    },

    //点击切换到地址页面
    changeAddress() {
      wx.navigateTo({
        url: "/pages/address/main"
      });
      let address = wx.getStorageSync("address");
      this.valueAddress = address;
    },
    //获取公司名称value
    viewName(e) {
      this.valueName = e.target.value;
      this.order();
    },
    //获取公司电话value
    viewNumber(e) {
      //手机号正则
      var reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      if (reg.test(e.target.value)) {
        this.valueNumber = e.target.value;
      }
      this.order();
    },
    //获取面试时间value
    bindMultiPickerChange(e) {
      let indexArr = e.target.value;
      this.day = this.arr1[indexArr[0]].split("号")[0];
      this.hours = this.arr2[indexArr[1]].split("点")[0];
      this.seconds = this.arr3[indexArr[2]].split("分")[0];
      var time =
        this.year +
        "-" +
        this.months +
        "-" +
        this.day +
        " " +
        this.hours +
        ":" +
        this.seconds;
      this.valueDate = time;
    },

    //获取textarea备注信息
    getTextarea(e) {
      this.valueTextarea = e.target.value;
    },
    //获取formId
    formSubmit(e) {
      this.formId = e.target.formId;
    },
    //点击确认
    async submit(e) {
      //发添加面试请求
      //console.log('时间',new Date(this.valueDate)*1)
      let location = wx.getStorageSync("location");
      this.latitude = location.latitude;
      this.longitude = location.longitude;

      if (this.valueName && this.valueNumber && this.valueAddress) {
        let data = await addView({
          company: this.valueName,
          phone: this.valueNumber,
          form_id: e.target.formId,
          address: this.valueAddress,
          latitude: this.latitude,
          longitude: this.longitude,
          start_time: new Date(this.valueDate) * 1,
          description: ""
        });
        console.log("添加面试", data);
        if (data.code == 0) {
          wx.showModal({
            title: "添加面试成功",
            success: e => {
              if (e.confirm) {
                setTimeout(() => {
                  wx.navigateTo({
                    url: "/pages/viewList/main"
                  });
                }, 500);
                this.valueName = "";
                this.valueNumber = "";
                this.valueAddress = "";
              }
            }
          });
        }
      } else {
        wx.showModal({
          title: "信息有误"
        });
      }
    }
  },
  mounted() {
    this.order();
  },
  created() {
    //设置日期时间
    var date = new Date();
    this.year = addZero(date.getFullYear());
    this.months = addZero(date.getMonth() + 1);
    this.day = addZero(date.getDate());
    this.hours = addZero(date.getHours() + 1);

    //设置默认值
    var time =
      this.year +
      "-" +
      this.months +
      "-" +
      this.day +
      " " +
      this.hours +
      ":" +
      this.seconds;
    this.valueDate = time;
    //封装补零函数
    function addZero(num) {
      return num >= 10 ? num : "0" + num;
    }

    //封装输入年月获取这个月有多少天函数
    function getDaysInMonth(year, month) {
      month = parseInt(month, 10);
      var temp = new Date(year, month, 0);
      return temp.getDate();
    }

    //设置剩余的天数
    for (
      var i = addZero(this.day);
      i <= getDaysInMonth(this.year, this.months);
      i++
    ) {
      this.arr1.push(addZero(i) + "号");
    }
    //设置小时
    let arr2 = [];
    for (var i = addZero(this.hours); i < 24; i++) {
      this.arr2.push(addZero(i) + "点");
    }
    //设置分钟
    this.arr3 = ["00分", "10分", "20分", "30分", "40分", "50分"];
    this.multiArray[0] = this.arr1;
    this.multiArray[1] = this.arr2;
    this.multiArray[2] = this.arr3;
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
  background: #197dbf;
}
</style>
