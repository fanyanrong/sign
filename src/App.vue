<script>
import { login } from "@/server";
import { getLocation ,getAuth} from "@/utils/index.js";
import store from "@/store";

export default {
  created() {
     //打开小程序,做定位
    getAuth('scope.userLocation',async()=>{
      let location =await getLocation();
      wx.setStorageSync('location',location)
      console.log('localtion',localtion)
    })
   
    //调用登录获取code
    wx.login({
      success: async res => {
        let data = await login(res.code);
        //console.log("data", data);
        store.commit("index/getCode", {
          openid: data.data.openid,
          phone: data.data.phone
        });
        wx.setStorage({
          key: "openid",
          data: data.data.openid
        });
      }
    });

    

  }
};
</script>

<style>
page {
  width: 100%;
  height: 100%;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
