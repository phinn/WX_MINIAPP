// pages/selectcourse/selectcourse.js
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
      { "selected": true, "coursename": "90min Riders", "coursetime": "01:30", "description": "American (Traditional)", "distance": "1,9km", "ranking": 4, "other": "(84) on Yelp", "courseimageurl": "../../src/images/course/grap W.png" },
      { "selected": false, "coursename": "60admin Riders", "coursetime": "01:30", "description": "American (Traditional)", "distance": "1,9km", "ranking": 4, "other": "(84) on Yelp", "courseimageurl": "../../src/images/course/grap W1.png" },
      { "selected": false, "coursename": "treamdddksi", "coursetime": "01:30", "description": "American (Traditional)", "distance": "1,9km", "ranking": 4, "other": "(84) on Yelp", "courseimageurl": "../../src/images/course/grap W2.png" },
      { "selected": false, "coursename": "subtract 890km", "coursetime": "01:30", "description": "American (Traditional)", "distance": "1,9km", "ranking": 4, "other": "(84) on Yelp", "courseimageurl": "../../src/images/course/grap W3.png" },
      { "selected": false, "coursename": "difference intersect", "coursetime": "01:30", "description": "American (Traditional)", "distance": "1,9km", "ranking": 4, "other": "(84) on Yelp", "courseimageurl": "../../src/images/course/grap W4.png" }
    ]
    var courseimageurl="";
    for (var i = 0; i < rows.length;i++) 
    {
      rows[i].rankingImageUrl = "../../src/images/course/sstar0" + rows[i].ranking + ".png";
      if (rows[i].selected){
        courseimageurl = "../../src/images/course/grap W.png"
        this.activeItem = rows[i];
      }
    }
    

    this.setData({
      "courseItems": rows,
      "courseimageurl": courseimageurl
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

  onActive: function(event) {
    for (var i = 0; i < this.data.courseItems.length; i++) {
      if (event.currentTarget.id == i) {
        this.activeItem = this.data.courseItems[i];
        this.data.courseItems[i].selected = true
        this.data.courseimageurl = this.data.courseItems[i].courseimageurl
      }
      else {
        this.data.courseItems[i].selected = false
      }
    }
    this.setData(this.data)
  },

  onSelect: function() {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面

    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    prevPage.setData({
      courseitem: this.activeItem
    })
    
    wx.navigateBack({
      delta: 1,
      success: function(data) {
        console.log(data)
      }
    })
  },

  onCancel: function() {
    wx.navigateBack({
      delta: 1,
      success: function (data) {
        
      }
    })
  }
})