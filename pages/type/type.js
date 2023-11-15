// pages/type/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconSet1: [],
    iconSetImages1: [
      "../../images/total_icon_set1/food.png",
      "../../images/total_icon_set1/photo.png",
      "../../images/total_icon_set1/house.png",
      "../../images/total_icon_set1/daemon.png",
      "../../images/total_icon_set1/clouth.png",
      "../../images/total_icon_set1/shopping.png",
      "../../images/total_icon_set1/honeymoon.png",
      "../../images/total_icon_set1/texi.png"
    ],
    iconSetNames1: [
      "订喜宴", "拍婚照", "找婚庆", "订婚戒",
      "选婚纱", "淘婚品", "度蜜月", "租婚车"
    ],
    iconSet2: [],
    iconSetImages2: [
      "../../images/total_icon_set2/profile.png",
      "../../images/total_icon_set2/woman.png",
      "../../images/total_icon_set2/sofa.png",
      "../../images/total_icon_set2/drink.png"
    ],
    iconSetNames2: [
      "拍写真", "美新娘", "装新家", "孕婴童"
    ],
    iconSet3: [],
    iconSetImages3: [
      "../../images/total_icon_set3/money.png",
      "../../images/total_icon_set3/invate.png",
      "../../images/total_icon_set3/check.png",
      "../../images/total_icon_set3/gift.png",
      "../../images/total_icon_set3/commit.png",
      "../../images/total_icon_set3/preorder.png",
      "../../images/total_icon_set3/bag.png"
    ],
    iconSetNames3: [
      "现金券", "邀请函", "签到礼", "兑好礼",
      "我的社区", "预约到婚博会", "推荐好友送现金"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化图片集合1。
    var iconSet1 = [];
    var iconSet2 = [];
    var iconSet3 = [];
    for (var i = 0; i < 8; i++) {
      var icon = new Object();
      icon.img = this.data.iconSetImages1[i];
      icon.name = this.data.iconSetNames1[i];
      iconSet1[i] = icon;
    }
    for (var i = 0; i < 4; i++) {
      var icon = new Object();
      icon.img = this.data.iconSetImages2[i];
      icon.name = this.data.iconSetNames2[i];
      iconSet2[i] = icon;
    }
    for (var i = 0; i < 7; i++) {
      var icon = new Object();
      icon.img = this.data.iconSetImages3[i];
      icon.name = this.data.iconSetNames3[i];
      iconSet3[i] = icon;
    }
    this.setData({
      iconSet1: iconSet1,
      iconSet2: iconSet2,
      iconSet3: iconSet3
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