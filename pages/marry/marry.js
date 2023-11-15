// pages/marry/marry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxDatas: [
      "订喜宴", "找婚庆", "拍婚照", "订婚戒", "选婚纱",
      "度蜜月", "淘婚品", "美新娘", "租婚车"
    ],
    radioDatas: [
      "请选择获知渠道", "大厅落地液晶屏广告", "其他", "报纸", "商场超市电视广告",
      "公交 - 电视", "餐厅 LED 屏", "网站", "电梯液晶看板", "地铁 - 电视"
    ],
    flag: '1',
    way: '请选择获知渠道'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  selectWay: function() {
    this.setData({
      flag: '0'
    });
  },

  radioChange: function(event) {
    console.log(event);
    var way = event.detail.value;
    this.setData({
      flag: '1',
      way: way
    });
  },

  formSubmit: function(event) {
    console.log(event);
    var ticket = event.detail.value;
    ticket.way = this.data.way;
    wx.setStorageSync('ticket', ticket);
  }
})