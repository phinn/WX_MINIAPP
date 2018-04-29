// pages/workout/workout.js
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
      workoutItems: [{ "title": "Indoor Trainer", "type": "feedtype", "date": "080318", "imgurl": "../../src/images/workout/gorun.png", "url": "../list/list" }, { "title": "Treadmill", "type": "feedtype", "date": "080320", "imgurl": "../../src/images/workout/treadmill.png" }, { "title": "running", "type": "feedtype", "date": "080318", "imgurl": "../../images/1.png", "url": "../list/list" }, { "title": "Cycling", "type": "feedtype", "date": "080318", "imgurl": "../../images/1.png", "url": "../list/list" }]
    });
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
  
  }
})