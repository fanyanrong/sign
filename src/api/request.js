import fly from 'flyio/dist/npm/wx'
var Fly=new fly
var openid=""
import store from '../Mystore/store.js'

function requestuid(codes){
    //给所有请求添加自定义header
    Fly.interceptors.request.use((request)=>{
        request.header['openid']=openid
        //可以显示返回request,也可以不返回,没有返回值时拦截器中默认返回request
        return request;
    })

    Fly.post('http://169.254.12.68:7001/user/code2session',{
        code:codes
    }).then((result)=>{
        openid=result.data.data.openid
        wx.setStorage({
            key:'openid',
            data:result.data.data.openid
        })
    }).catch((err)=>{
        console.log(err)
    })
}

// function sign(arr){
//     Fly.interceptors.request.use((request)=>{
//         request.headers['openid']=openid;
//         //可以显示返回request，也可以不返回,没有返回值时拦截器中默认返回request
//         return request;
//     })

//     Fly.post('http://169.254.12.68:7001/sign',{

//     })
// }

export default requestuid