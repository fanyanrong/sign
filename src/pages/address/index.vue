<template>
    <div>
        <div class="address">
            <span>北京</span>
            <input type="text" placeholder="面试地址" :value="valueAddress" @input="address">
        </div>
        <ul>
            <li v-for="(item,i) in allAddress" :key="i">
                <span>{{item.address}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import QQMapWx from "@/utils/qqMap";

export default {
  data() {
    return {
      valueAddress: "",
      allAddress:[]
    };
  },
  methods: {
    address(e) {
      //console.log(e.target.value)
      this.valueAddress = e.target.value;
       let qqMapWx = new QQMapWx({
      key: "X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
    });
      qqMapWx.search({
        keyword: this.valueAddress,
        success: res => {
          console.log(res.data);
          this.allAddress=res.data
        }
      });
    }
  },
  created() {
   
  }
};
</script>
<style>
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
</style>
