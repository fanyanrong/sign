<script>
// import {getLocation,getAuthor} from './utils/index.js'
//import action from './api/request.js'
import request from '@/utils/request'
import store from '@/store'

export default {
  created () {
    //打开小程序,做定位
    // getAuthor('scope.userLocation',async()=>{
    //   let location =await getLocation();
    //   wx.setStorageSync('location',location)
    // })
    //调用登录获取code
    
    wx.login({
      success(res){
        console.log(res)
        if(res.code){
          request.post('/user/code2session',{
          code:res.code
        }).then((res)=>{
          console.log('res...',res)
          store.commit('index/getCode',{
            openid:res.data.openid,
            phone:res.data.phone
          })
          wx.setStorage({
            key:'openid',
            data:res.data.openid
          })
        })
        }else{
          console.log('登录失败'+res.errMsg)
            wx.showModal({
              content: '登录失败'//提示的内容
            })
        }
       
      }
    })
  }
}
</script>

<style>
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
