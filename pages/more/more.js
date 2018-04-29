// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      "url": "",
      "imgurl": "../../images/1.png",
      "workItems":[
        { "url": "", "imgurl": "../../images/1.png", "title": "Task Management"},
        { "url": "", "imgurl": "../../images/1.png", "title": "Graphic" },
        { "url": "", "imgurl": "../../images/1.png", "title": "Ranking" }
      ],
      "settingItems": [
        { "url": "", "imgurl": "../../images/1.png", "title": "Bluetooth" },
        { "url": "", "imgurl": "../../images/1.png", "title": "Sensors" },
        { "url": "", "imgurl": "../../images/1.png", "title": "Updates" },
        { "url": "", "imgurl": "../../images/1.png", "title": "Setting" }
      ]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
//'http://192.168.0.107/ainjet/api/ProductService.php/getProducts',
  onTap: function() {
    wx.request({
      url: 'http://www.newaitec.com',
      data: {
        x: '',
        y: ''
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })  
    
    console.log("button tap")
    var that = this;

    wx.showLoading({

      title: '开启蓝牙适配'

    });

    wx.openBluetoothAdapter({

      success: function (res) {

        console.log("初始化蓝牙适配器");

        console.log(res);

        that.getBluetoothAdapterState();

      },

      fail: function (err) {

        console.log(err);

        wx.showToast({

          title: '蓝牙初始化失败',

          icon: 'success',

          duration: 2000

        })

        setTimeout(function () {

          wx.hideToast()

        }, 2000)

      }

    });

    wx.onBluetoothAdapterStateChange(function (res) {
      var available = res.available;

      if (available) {

        that.getBluetoothAdapterState();

      }

    })
  }
})