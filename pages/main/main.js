// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    imgUrls: [
      "../../images/swiper/banner1.png",
      "../../images/swiper/banner2.png",
      "../../images/swiper/banner3.png",
      "../../images/swiper/banner4.png"
    ],
    navs: [],
    navImgs: [
      "../../images/main_icons/food.png",
      "../../images/main_icons/photo.png",
      "../../images/main_icons/cake.png",
      "../../images/main_icons/daemon.png",
      "../../images/main_icons/clouth.png",
      "../../images/main_icons/shopping.png",
      "../../images/main_icons/honeymoon.png",
      "../../images/main_icons/texi.png",
      "../../images/main_icons/woman.png",
      "../../images/main_icons/total.png"
    ],
    navNames: [
      "订喜宴", "拍婚照", "找婚庆", "订婚戒", "选婚纱",
      "淘婚品", "度蜜月", "租婚车", "美新娘", "全部分类"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var navs = this.loadNavData();
    this.setData({
      navs: navs
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

  },

  navBtn: function(event) {
    console.log(event);
    var id = event.currentTarget.id;
    if (id == "9") { // 全部。
      wx.navigateTo({
        url: '../type/type',
      });
    }
  },

  loadNavData: function() {
    var navs = [];

    /* 填冲数据。 */
    for (var i = 0; i < 10; i++) {
      var nav = new Object();
      nav.img = this.data.navImgs[i];
      nav.name = this.data.navNames[i];
      navs[i] = nav;
    }

    return navs;
  }
})