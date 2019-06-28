<template>
    <div>
        <div class="address">
            <span>北京</span>
            <input type="text" placeholder="面试地址">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.address{
    display: flex;
    padding: 20rpx 40rpx;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
}
.address span{
    width: 20%;
    text-align: center;
}
.address input{
    padding: 0 0 0 20rpx;
    flex: 1;
    border-left:1px solid #ccc;
}
</style>
