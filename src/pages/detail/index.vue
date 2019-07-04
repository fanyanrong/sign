<template>
    <div class="detail">
        <ul class="list">
            <li class="li" v-for="(item,i) in viewInfo" :key="i">
                <span>{{item.title}}:</span>
                <span>
                  {{i==0?detailData.address:
                  i==1?detailData.start_time:
                  i==2?detailData.phone:
                  i==3?detailData.remind==-1?"未提醒":"未提醒":
                  detailData.status==-1?"未开始":"已放弃"}}
                </span>
            </li>
            <li class="li">
                <span>取消提醒</span>
                <span>
                    <view class="body-view">
                    <switch bindchange="switch2Change"/>
                    </view>
                </span>
            </li>
        </ul>
        <div class="btn">
            <p @click="toCar">去打卡</p>
            <p>放弃面试</p>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  computed:{
    ...mapState({
      detailData:state=>{
        return state.index.detailDate[0]
        console.log('state',state.index.detailDate)
      }
    })
  },
  data() {
    return {
      viewInfo: [
        {
          title: "面试地址"
        },
        {
          title: "面试时间"
        },
        {
          title: "联系方式"
        },
        {
          title: "是否提醒"
        },
        {
          title: "面试状态"
        }
      ]
    };
  },
  methods: {
    switch2Change(e) {
      console.log("switch2 发生 change 事件，携带值为", e.detail.value);
    },
    //跳转到打卡页面
    toCar(){
        wx.navigateTo({
            url:'/pages/tocar/main'
        })
    }
  }
};
</script>
<style lang="scss">
.list {
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  padding: 0 15px;
  .li {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    font-size: 15px;
    height: 45px;
    span:nth-child(1) {
      margin-right: 30px;
      color: #666666;
    }
  }
  li:last-child {
    border-bottom: none;
  }
}
.btn{
    display: flex;
    height: 55px;
    padding: 0 15px;
    margin-top:30px;
    p{
        flex: 1;
        text-align: center;
        line-height: 55px;
        color:#fff;
        font-size: 22px;
    }
    p:nth-child(1){
        background: #197DBF;
        margin-right: 15px;
    }
    p:nth-child(2){
        background: #DC4E42;
    }
}
</style>
