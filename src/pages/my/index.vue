<template>
    <div class="my">
        <div class="info">
            <p>
                <img src="../../../static/images/my.png" alt="">
               
            </p>
             <span>***********</span>
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
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          title: "我的面试"
        },
        {
          title: "我的面试"
        }
      ]
    };
  },
  methods:{
    
    toViewList(i){
      //下变为0跳到面试列表
      if(i==0){
        wx.navigateTo({
          url: '/pages/viewList/main'
        });
      }
    }
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
.li>span img{
  width: 20px;
  height: 20px;
}
</style>
