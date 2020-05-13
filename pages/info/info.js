// pages/info/info.js
Page({
	data: {
		picker: {
			arr: ['0', '1', '2', '3', '4', '5'],
			index: 1
		}
	},
	nameChange: function (e) {
		this.checkName(e.detail.value)
	},
	phoneChange: function (e) {
		this.checkPhone(e.detail.value)
	},

	pickerChange: function (e) {
		this.setData({
			'picker.index': e.detail.value
		})
	},
	// 验证姓名是正确
	checkName: function (data) {
		var reg = /^[\u4e00-\u9fa5]{2,6}$/;
		return this.check(data, reg, '姓名输入错误!')
	},
	// 验证手机号是否正确
	checkPhone: function (data) {
		var reg = /^(((13)|(17)|(18))\d{9})$/;
		return this.check(data, reg, '手机号码输入有误！')
	},
	// check()方法
	check: function (data, reg, errMsg) {
		if (!reg.test(data)) {
			wx.showToast({
				title: errMsg,
				icon: 'none',
				duration: 1500
			})
			return false
		}
		return true
	},
	submit: function (e) {
		var name = e.detail.value.name
		var phone = e.detail.value.phone
		console.log(e);
		if (this.checkName(name) && this.checkPhone(phone)) {
			// 在此处编写代码将e.detail.value提交到服务器
			//获得权限
			wx.requestSubscribeMessage({
				tmplIds: ["uOYLUu1vlqhqfBv_Agr4gbH1fu9vW88WrWBl8ou8iio"],
				success: function (res) {
					console.log(res)
					if (res['uOYLUu1vlqhqfBv_Agr4gbH1fu9vW88WrWBl8ou8iio'] == 'accept') {
						console.log("允许发送订阅消息")
						wx.request({
							url: 'https://api.weixin.qq.com/cgi-bin/token',
							data: {
								grant_type: 'client_credential',
								appid: 'wx69a005a8990cd418',
								secret: '2a9ed6377247d4925c3515946cae7f8b'
							},
							success: (req) => {
								console.log('获取access_token成功', req.data.access_token);
								let _access_token = req.data.access_token;
								wx.login({
									success: res => {
										if (res.code) { //code五分钟内有效
											// 调用下发接口前需要得到用户的openid
											wx.request({
												url: 'https://api.weixin.qq.com/sns/jscode2session',
												data: {
													appid: 'wx69a005a8990cd418',
													secret: '2a9ed6377247d4925c3515946cae7f8b',
													js_code: res.code, //登录时获取的code
													grant_type: "authorization_code", //授权类型，写死的
												},
												success: res => {
													console.log('获取openid成功', res)
													let _openid = res.data.openid;
													wx.request({
														url: 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=' + _access_token,
														method: "POST",
														data: JSON.stringify({
															touser: _openid, //当前用户的openid
															template_id: "uOYLUu1vlqhqfBv_Agr4gbH1fu9vW88WrWBl8ou8iio",
															page: "pages/index/index",
															data: {
																"thing7": { //这个key值就是上面提到的关键词，在后台对应的模板详情里可以看到，等后台-->点订阅消息-->我的模板(没有的话先去公共模板库选一个)-->点击详情-->右边详细内容里就是对应的key了
																	"value": '111' //这个值是下发给用户的信息
																},
																"thing8": {
																	"value": '提交成功，待审核'
																},
																"date2": {
																	"value": '2020-01-08 19:52'
																},
																"phrase4": {
																	"value": '提交成功'
																},
																"thing5": {
																	"value": 'qq'
																}
															}
														}),
														success: res => {
															console.log(res)
															wx.showToast({
																title: '提交成功',
															})
															// 这里可以写自己的逻辑
														}
													})
												}
											})
										}
									}
								})
							}
						})
					} else {
						wx.showModal({
							title: '温馨提示',
							content: '您已拒绝授权，将无法在微信中收到简历审核通知！',
							showCancel: false,
							success: res => {
								if (res.confirm) {
									// 这里可以写自己的逻辑
									wx.showToast({
										title: '提交成功',
										icon:'success',
										duration:1500
									})
								}
							}
						})
					}
				},
				fail(err) {
					console.log(err)
				}
			})

			wx.showToast({
				title: '提交成功',
				icon: 'success',
				duration: 1500
			})
		} else {
			wx.showToast({
				title: '提交失败',
				icon: 'none',
				duration: 1500
			})
		}

	}
})