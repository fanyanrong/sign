<template>
    <div>
        <div class="address">
            <span>北京</span>
            <input type="text" placeholder="面试地址" :value="valueAddress" @input="address">
        </div>
        <ul>
            <li class="li" v-for="(item,i) in allAddress" :key="i" @click="clickLi(i)">
                <img src="../../../static/images/Group.png" alt="">
                <p>
                    <span>{{item.title}}</span>
                    <span>{{item.address}}</span>
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
import QQMapWx from "@/utils/qqMap";
import store from '@/store';

export default {
  data() {
    return {
      valueAddress: "",
      allAddress: []
    };
  },
  methods: {
    //点击input进行模糊搜索
    address(e) {
      //console.log(e.target.value)
      this.valueAddress = e.target.value;
      let qqMapWx = new QQMapWx({
        key: "X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
      });
      if (this.valueAddress !== "") {
        qqMapWx.search({
          keyword: this.valueAddress,
          success: res => {
            //console.log(res.data);
            this.allAddress = res.data;
          }
        });
      } else {
        this.allAddress = [];
      }
    },
    //点击li给input赋值
    clickLi(i){
        wx.navigateTo({
          url:'/pages/addInterview/main?address='+this.allAddress[i].address
        });
        wx.setStorageSync('address', this.allAddress[i].address)
    }
  },
  created() {}
};
</script>
<style lang="scss">
.address {
  display: flex;
  padding: 20rpx 40rpx;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
.address span {
  width: 20%;
  text-align: center;
}
.address input {
  padding: 0 0 0 20rpx;
  flex: 1;
  border-left: 1px solid #ccc;
}
.li{
    height: 50px;
    border-bottom:1px solid #ccc;
    display: flex;
    align-items: center;
    padding: 0 0 0 25px;
    img{
        width:20px;
        height: 20px;
        margin-right: 15px;
    }
    p{
        display: flex;
        flex-direction: column;
        span:nth-child(1){
            font-size: 16px;
        }
        span:nth-child(2){
            color:#ccc;
            font-size: 14px;
        }
    }
}
</style>
