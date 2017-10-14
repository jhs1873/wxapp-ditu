业务需求：点击地址后根据地址显示的文字来从地图定位<br>

> 比如点击“广东省佛山市祖庙”打开显示的位置同文字地址<br>

> 准备工作：

1.在 [腾讯地图](http://lbs.qq.com/)申请key<br>
2.下载小程序[SDK](http://lbs.qq.com/qqmap_wx_jssdk/index.html)

### 1.index.wxml

```html
<view bindtap="openMap">
  上班地址：
<text>{{address}}</text>
</view>

```
### 2.index.js

```javascript
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

```