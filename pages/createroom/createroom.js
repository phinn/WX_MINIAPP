// pages/createroom/createroom.js
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
    this.setData({ "courseitem": {"coursename":"选择课程"},
      "mapitem": { "mapname": "选择地图" },
      "typeArray": [{ "name": "SOLO", "value": 0, "checked": true }, { "name": "DUO", "value": 1, "checked": false }, { "name": "SQUAD", "value": 2, "checked": false }, { "name": "1MAN SQUAD", "value": 3, "checked": false } ]
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

  onSelectCourse: function() {
    wx.navigateTo({
      url: '../selectcourse/selectcourse'
    })
  },

  onSelectMap: function () {
    wx.navigateTo({
      url: '../selectmap/selectmap'
    })
  },

  onRadioChange: function(e) {
    var typeArray = this.data.typeArray;
    var checkArr = e.detail.value;
    for (var i = 0; i < typeArray.length; i++) {
      if (checkArr.indexOf(i + "") != -1) {
        typeArray[i].checked = true;
      } else {
        typeArray[i].checked = false;
      }
    }
    this.setData({
      typeArray: typeArray
    })  
  },

  onNext: function() {
    var that = this;
    var show;
    wx.scanCode({
      success: (res) => {
        this.show = "--result:" + res.result + "--scanType:" + res.scanType + "--charSet:" + res.charSet + "--path:" + res.path;
        that.setData({
          show: this.show
        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => {
      }
    })
  }
})