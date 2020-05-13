// pages/subscribe/subscribe .js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad:function(){
    wx.requestSubscribeMessage({
      tmplIds: ["uOYLUu1vlqhqfBv_Agr4gbH1fu9vW88WrWBl8ou8iio"],
      success:function(res){
        console.log(res)
        if(res['uOYLUu1vlqhqfBv_Agr4gbH1fu9vW88WrWBl8ou8iio']=='accept'){
          console.log("允许发送订阅消息")
        }
      },fail(err){
        console.log(err)
      }
    })
    // wx.request({
    //   url: 'https://api.weixin.qq.com/cgi-bin/token',
    //   data:{
    //     grant_type:'client_credential',
    //     appid:'wx69a005a8990cd418',
    //     secret:'2a9ed6377247d4925c3515946cae7f8b'
    //   },success:(req)=>{
    //     console.log('获取access_token成功',req.data.access_token)
    //   }
    // })
    // let _access_token = req.data.access_token;
    // wx.login({
    //   success:res=>{
    //     if(res.code){
    //       wx.request({
    //         url: 'https://api.weixin.qq.com/cgi-bin/token',
    //         data:{
    //           appid:'wx69a005a8990cd418',
    //           secret:'2a9ed6377247d4925c3515946cae7f8b',
    //           js_code: res.code, 
    //           grant_type: "authorization_code", 
    //         },
    //         success: res => {
    //           console.log('获取openid成功', res)
    //           let _openid = res.data.openid;
    //         }              
    //       })
    //     }
    //   }
    // })
    
  },
 
  
})