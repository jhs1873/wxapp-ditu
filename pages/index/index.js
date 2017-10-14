//index.js
Page({
  data: {
    address:"广东省佛山市祖庙"
  },
  openMap: function () {
    var that = this;
    // 引入SDK核心类
    var QQMapWX = require('./qqmap-wx-jssdk.min.js');

    // 实例化API核心类
    var demo = new QQMapWX({
      key: '开发密钥（key）' // 必填
    });
    // 调用接口
    demo.geocoder({
      address: this.data.address,
      success: function (res) {
        console.log(res);
        that.setData({
          latitude: res.result.location.lat,
          longitude: res.result.location.lng
        })
        wx.openLocation({
          latitude: that.data.latitude,
          longitude: that.data.longitude,
          scale: 28,
          name: that.data.address,
        })
      },
      fail: function (res) {
        console.log(res);
      },
    })
  },
})
