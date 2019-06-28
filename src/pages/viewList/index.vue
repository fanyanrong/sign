<template>
    <div class="viewList">
        <div class="nav">
            <span
            v-for="(item,i) in navList" 
            :key="i"
            @click="changeNav(i)"
            ><text :class="{'active':index===i}">{{item.state}}</text></span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            index:0,
            navList:[{
                state:"未开始"
            },{
                state:"已打卡"
            },{
                state:"已放弃"
            },{
                state:"全部"
            }]
        }
    },
    methods:{
        changeNav(i){
            this.index=i
        //console.log("this.index",this.index)

        }
    }
}
</script>
<style>
.nav{
    display: flex;
    border-top:1px solid #ccc;
    border-bottom: 15rpx solid #ccc;
    height: 100rpx;
}
.nav span{
    flex: 1;
    text-align: center;
    line-height: 100rpx;
    /* display: flex;
    justify-content: center;
    align-items: center; */
}
.nav span text{
    display: inline-block;
    line-height: 100rpx;
}
.active{
    color:blue;
    border-bottom: 1px solid blue;
}
</style>
