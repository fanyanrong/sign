<template>
    <div class="my">
        <div class="info">
            <p>
                <img src="../../../static/images/my.png" alt="">
               
            </p>
             <span>***********</span>
        </div>
        <ul>
            <li class="li" v-for="(item,i) in list" :key="i">
                <view class="group">
                    <block >
                        <icon type="info" size="20" />
                    </block>
                    <span>{{item.title}}</span>
                </view>
                
                <span>></span>
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
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
.info img {
  width: 40px;
  height: 40px;
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
.li span {
  margin-left: 20px;
}
</style>
