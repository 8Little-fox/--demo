// pages/map/map.js
Page({

	
	data: {
		latitude: 41.938666,
		longitude: 123.518762,
		markers: [{
		iconPath:'images/navi.png',
		id:0,
		latitude: 41.938666,
		longitude: 123.518762,
		width: 50,
		height: 50
		}]
	},
	markertap: function(){
		wx.openLocation({
			latitude: this.data.latitude,
			longitude: this.data.longitude,
			name: '辽宁金融职业学院东门',
			address: '沈阳市沈北新区虎石台南大街'
			})
		}
})