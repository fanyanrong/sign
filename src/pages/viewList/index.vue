<template>
    <div class="viewList">
        <div class="nav">
            <span
            v-for="(item,i) in navList" 
            :key="i"
            @click="changeNav(i)"
            ><text :class="{'active':index===i}">{{item.state}}</text></span>
        </div>
        <ul class="content">
            <li v-for="(item,i) in contentData" :key="i"
            @click="toDetail">
                <p class="one">
                    <span>{{item.company}}</span>
                    <span>未开始</span>
                </p>
                <p class="two">地址{{item.address.address}}</p>
                <p class="three">
                    <span>面试时间:{{item.address.address}}</span>
                    <span>未提醒</span>
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
import Fly from "flyio/dist/npm/wx"
let fly = new Fly


export default {
  data() {
    return {
      index: 3,
      navList: [
        {
          state: "未开始"
        },
        {
          state: "已打卡"
        },
        {
          state: "已放弃"
        },
        {
          state: "全部"
        }
      ],
      contentData: [],
      status: 0
    };
  },
  methods: {
    //点击导航条改变index和status
    changeNav(i) {
      this.index = i;
      //console.log("this.index",this.index)
      if (i == 0) {
        this.status = -1;
      }
      if (i == 1) {
        this.status = 0;
      }
      if (i == 2) {
        this.status = 1;
      }

      fly.interceptors.request.use(request => {
        let openid = wx.getStorageSync("openid");
        console.log('openid',openid)
        if(openid){
            request.headers["openid"] = openid;
        }
        
        return request;
      });
      fly.get("https://sign.jasonandjay.com/sign?status=" + this.status)
        .then(res => {
          console.log('不同状态的数据',res.data);
          this.contentData=res.data.data
        })
        .catch(err => {
          console.log(err);
        });
        //获取全部的数据
      if (i == 3) {
       fly.interceptors.request.use(request => {
        let openid = wx.getStorageSync("openid");
        if(openid){
            request.headers["openid"] = openid;
        }
        
        return request;
      });
        fly.get('https://sign.jasonandjay.com/sign').then((res)=>{
            console.log('全部',res.data.data)
            this.contentData=res.data.data
        }).catch((err)=>{
            console.log(err)
        })
      }
    },
    //点击每个li跳详情
    toDetail() {
      wx.navigateTo({
        url: "/pages/detail/main"
      });
    }
  }
};
</script>
<style lang="scss">
.nav {
  display: flex;
  border-top: 1px solid #EEEEEE;
  height: 100rpx;
}
.nav span {
  flex: 1;
  text-align: center;
  line-height: 100rpx;
  /* display: flex;
    justify-content: center;
    align-items: center; */
}
.nav span text {
  display: inline-block;
  line-height: 100rpx;
}
.active {
  color: #197DBF;
  border-bottom: 1px solid #197DBF;
}
.content{
    li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-top:10px solid #EEEEEE;
        height: 105px;
        padding:0 12px;
        p{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin:2px 0;
        }
        .one{
            span:nth-child(2){
                padding: 5px;
                font-size: 15px;
                background: #F4F4F5;
                color:#909399;
            }
        }
        .two{
            color:#A6A6C4;
            font-size: 15px;
        }
        .three{
             span:nth-child(1){
                 color:#666666;
                 font-size: 17px
             }
             span:nth-child(2){
                padding: 5px;
                font-size: 17px;
                background: #FEF0F0;
                color:#F7816C;
            }
        }
    }
}
</style>
