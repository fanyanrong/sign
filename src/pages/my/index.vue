<template>
    <div class="my">
        <div class="info">
            <p>
                <img src="../../../static/images/my.png" alt="">
               
            </p>
             <span>{{phoneNumber}}</span>
        </div>
        <ul>
            <li class="li" v-for="(item,i) in list" :key="i"
            @click="toViewList(i)">
                <view class="group">
                    <block >
                        <icon type="info" size="20" />
                    </block>
                    <span>{{item.title}}</span>
                </view>
                
                <span>
                  <img src="../../../static/images/arrowRight-fill.png" alt="">
                </span>
            </li>
        </ul>
        <div v-if="!hasPhone">
          <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号</button>
        </div>
        <button v-if="showSetting" open-type="openSetting">打开设置页</button>
    </div>
</template>
<script>
import store from '@/store'
import {encryptData} from '@/server'

export default {
  data() {
    return {
      list: [
        {
          title: "我的面试"
        },
        {
          title: "在线客服"
        }
      ],
      hasPhone: false,
      showSetting:false,
      phoneNumber:''
    };
  },
  methods: {
    //跳面试列表
    toViewList(i) {
      //下标为0跳到面试列表
      if (i == 0) {
        wx.navigateTo({
          url: "/pages/viewList/main"
        });
      }
    },
    //获取手机号
    async getPhoneNumber(e) {
      //console.log('getPhoneNumber',e);
      if(e.target.errMsg!=="getPhoneNumber:fail user deny"){
        //授权成功
        let data=await encryptData({
          encryptedData:e.target.encryptedData,
          iv:e.target.iv
        })
        //console.log('data',data)

        this.phoneNumber=data.data.phoneNumber
      }else{
        //授权失败
        this.showSetting=true;
      }
    }
  },
  created() {
    let that=this
    //获取已授权状态
    wx.getSetting({
      success(res) {
        //console.log('authSetting',res.authSetting);
        if(res.authSetting['scope.userInfo']){
          //用户已经授权
          wx.getUserInfo({
            withCredentials:true,
            success(res){
              that.hasPhone=true
              //console.log('getUserInfo',res)
            }
          })
        }else{
          //用户没有授权
          that.hasPhone=false
        }
      }
    });
  }
};
</script>

<style less="sass">
.info {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ccc;
  padding: 30px 0 40px 0;
}
.info p {
  border-radius: 100%;
  background: #fff;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
.info img {
  width: 50px;
  height: 50px;
}
.li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #ccc;
}
.group {
  display: flex;
  justify-content: center;
  align-items: center;
}
.group span {
  margin-left: 20px;
  font-size: 18px;
}
.li > span img {
  width: 20px;
  height: 20px;
}
</style>
