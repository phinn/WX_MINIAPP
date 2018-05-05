// pages/selectmap/selectmap.js
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
    var rows = [
      { "selected": true, "mapname": "London", "mapImageUrl": "", "locked": false },
      { "selected": false, "mapname": "Shanghai", "mapImageUrl": "", "locked": true},
      { "selected": false, "mapname": "Tokyo", "mapImageUrl": "", "locked": true }
    ]
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].selected) {
        this.activeItem = rows[i];
      }
    }

    this.setData({
      "mapItems": rows
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

  onActive: function (event) {
    for (var i = 0; i < this.data.mapItems.length; i++) {
      if (event.currentTarget.id == i) {
        this.activeItem = this.data.mapItems[i];
        this.data.mapItems[i].selected = true
        console.log(i);
      }
      else {
        this.data.mapItems[i].selected = false
      }
    }
    this.setData(this.data)
  },

  onSelect: function () {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面

    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    prevPage.setData({
      mapitem: this.activeItem
    })

    wx.navigateBack({
      delta: 1,
      success: function (data) {
        console.log(data)
      }
    })
  },

  onCancel: function () {
    wx.navigateBack({
      delta: 1,
      success: function (data) {

      }
    })
  }
})