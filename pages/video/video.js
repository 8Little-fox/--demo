// pages/video/video.js
Page({


	data: {
		src:'http://sofa.resource.shida.sogoucdn.com/c6f36594-d277-4d35-9bef-5a2debe5cc882_0_0.mp4',
		danmuList:[
		{ text:'第1s出现的弹幕', color:'#ff4c91', time: 1 },
		{ text:'第3s出现的弹幕', color: '#ff4c91', time: 3 }]
	},

	onReady: function () {
 		this.videoContext = wx.createVideoContext('myVideo')
	},
	videoContext :null,
	inputValue: '',
	bindInputBlur: function(e){
		this.inputValue = e.detail.value
	},
	bindSendDanmu: function(){
		this.videoContext.sendDanmu({
		text:this.inputValue,
		color:'#ff4c91'
		})
	}

})

	