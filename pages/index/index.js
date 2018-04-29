//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello Austin',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    /*wx.navigateTo({
      url: '../workout/workout'
    })*/
    
    this.setData({
      workoutItems: [{ "title": "GO RUN", "type": "feedtype", "date": "080318", "imgurl": "../../src/images/workout/gorun@2x.png", "url": "../createroom/createroom" }, { "title": "TREADMILL", "type": "feedtype", "date": "080320", "imgurl": "../../src/images/workout/treadmill@2x.png" }, { "title": "CYCLING", "type": "feedtype", "date": "080318", "imgurl": "../../src/images/workout/cycling@2x.png", "url": "../list/list" }]
    });

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  viewTap: function () {
    console.log('view tap')
    
  },
  goHome: function() {
    wx.navigateTo({
      url: '../list/list'
    })
  },
  click: function () {
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
