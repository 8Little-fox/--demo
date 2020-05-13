//index.js
//获取应用实例
Page({
  data: {
   isPlayingMusic: false
  },
  bgm:null,
  music_url:'http://www.lnfvc.edu.cn/newweb/xygk/others/xg.wav',
  onReady: function(){
    this.bgm=wx.getBackgroundAudioManager()
    this.bgm.title='校歌'
    this.bgm.epname='辽金校歌'
    this.bgm.singer='辽金学子'
    this.bgm.onCanplay(() => {
      this.bgm.pause()
    })
    this.bgm.src=this.music_url
  },
  play: function(){
    if(this.data.isPlayingMusic){
      this.bgm.pause()
    }else{
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic: ! this.data.isPlayingMusic
    })
  },
  callDirector:function(){
    wx.makePhoneCall({
      phoneNumber: '15524066851',
    })
  },
  callSecretary:function(){
    wx.makePhoneCall({
      phoneNumber: '15524066851',
    })
  },
})
