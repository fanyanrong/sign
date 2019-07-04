import request from '@/utils/request';

//登录接口
export let login=code=>{
    return request.post('/user/code2session',{
        code
    })
}

//添加面试
export let addView=parmas=>{
    return request.post('/sign',parmas)
}

//添加面试详情
export let viewDetail=id=>{
    return request.get('/sign',id)
}

//获取面试列表
export let getView=status=>{
    if(status==3){
        return request.get('/sign')
    }else{
        return request.get('/sign',status)
    }
}

//解密用户数据
export let encryptData=parmas=>{
    return request.post('/user/decrypt',parmas)
}