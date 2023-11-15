// pages/cash/cash.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subMenuDisplay: ['hidden', 'hidden'],
    currentTab: -1,
    proCount: 0,
    proData: [],
    proImages: [
      "../../images/products/swarovski.png",
      "../../images/products/vogue.png",
      "../../images/products/huajialishe.png",
      "../../images/products/sese.png",
      "../../images/products/wuliangye.png",
      "../../images/products/sprin.png",
      "../../images/products/chaoyangmen.png"
    ],
    proNames: [
      "施华洛婚纱摄影", "枫树林高端婚礼", "花嫁丽舍一站式", "SeSe婚礼国王",
      "婚宴定制酒", "诗普琳珠宝", "朝阳门私属婚礼空间"
    ],
    proPeoples:[
      4, 14, 129, 117, 4, 45, 3
    ],
    proPrices: [
      "￥200~300", "￥100", "￥1000", "￥100",
      "￥100", "￥100", "￥800"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var proData = [];
    for (var i = 0; i < 7; i++) {
      var proObj = new Object();
      proObj.img = this.data.proImages[i];
      proObj.name = this.data.proNames[i];
      proObj.people = this.data.proPeoples[i];
      proObj.price = this.data.proPrices[i];
      proData[i] = proObj;
    }
    this.setData({
      proData: proData,
      proCount: proData.length
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

  tapMainMenu: function(event) {
    console.log(event);
    var index = parseInt(event.currentTarget.dataset.index);
    console.log(index);
    var newSubMenuDisplay = ['hidden', 'hidden'];
    if (this.data.subMenuDisplay[index] == 'hidden') {
      newSubMenuDisplay[index] = 'show';
      this.setData({
        currentTab: index
      });
    } else {
      newSubMenuDisplay[index] = 'hidden';
      this.setData({
        currentTab: -1
      });
    }
    this.setData({
      subMenuDisplay: newSubMenuDisplay
    });
  }
})