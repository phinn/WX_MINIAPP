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
      "url": "../coursedetail/coursedetail",
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
  
  }
})