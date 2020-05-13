// pages/picker/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[
      'HTML',"CSS","javascript","Photoshop"
    ],
    index:1
  },
  pickerchange:function(e){
    this.setData({
      index:e.detail.value
    })
  }
})