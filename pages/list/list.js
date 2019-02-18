// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{
      imgUrl: 'http://img3m9.ddimg.cn/44/24/1171439819-1_h_4.jpg',
      nm: '伊利 金典纯牛奶250ml*12盒*2提 礼盒装',
      peo: '110'
    }, {
      imgUrl: 'http://img3m9.ddimg.cn/95/32/1096445489-1_h_1.jpg',
      nm: '德亚全脂牛奶1L*12（德国进口 盒）',
      peo: '120'
    }, {
      imgUrl: 'http://img3m9.ddimg.cn/63/32/1081641789-1_h_1.jpg',
      nm: '伊利纯牛奶250ml*16/箱',
      peo: '130'
    }, {
      imgUrl: 'http://img3m9.ddimg.cn/64/36/1096353289-1_h_1.jpg',
      nm: '好沃得脱脂牛奶1L*12',
      peo: '510'
    }, {
      imgUrl: 'http://img3m9.ddimg.cn/89/33/1186297289-1_h_1.jpg',
      nm: '三元小方白纯牛奶250ml*24/箱',
      peo: '138'
    }, {
      imgUrl: 'http://img3m9.ddimg.cn/44/13/1064839589-1_h_1.jpg',
      nm: '德亚全脂牛奶200ml*30（德国进口 箱）',
      peo: '110'
    }, {
      imgUrl: 'http://img3m9.ddimg.cn/83/15/1086257189-1_h_1.jpg',
      nm: '蒙牛特仑苏纯牛奶250ml*12/箱 新老包装随机发货',
      peo: '210'
    }, {
      imgUrl: 'http://img3m9.ddimg.cn/41/4/1082768189-1_h_1.jpg',
      nm: '伊利味可滋巧克力牛奶240ml*12',
      peo: '106'
    }, {
      imgUrl: 'http://img3m9.ddimg.cn/44/24/1171439819-1_h_4.jpg',
      nm: '伊利 金典纯牛奶250ml*12盒*2提 礼盒装',
      peo: '110'
    }, {
      imgUrl: 'http://img3m9.ddimg.cn/95/32/1096445489-1_h_1.jpg',
      nm: '德亚全脂牛奶1L*12（德国进口 盒）',
      peo: '120'
    }, {
      imgUrl: 'http://img3m9.ddimg.cn/63/32/1081641789-1_h_1.jpg',
      nm: '伊利纯牛奶250ml*16/箱',
      peo: '130'
    }, {
      imgUrl: 'http://img3m9.ddimg.cn/64/36/1096353289-1_h_1.jpg',
      nm: '好沃得脱脂牛奶1L*12',
      peo: '510'
    }, {
      imgUrl: 'http://img3m9.ddimg.cn/89/33/1186297289-1_h_1.jpg',
      nm: '三元小方白纯牛奶250ml*24/箱',
      peo: '138'
    }, {
      imgUrl: 'http://img3m9.ddimg.cn/44/13/1064839589-1_h_1.jpg',
      nm: '德亚全脂牛奶200ml*30（德国进口 箱）',
      peo: '110'
    }, {
      imgUrl: 'http://img3m9.ddimg.cn/83/15/1086257189-1_h_1.jpg',
      nm: '蒙牛特仑苏纯牛奶250ml*12/箱 新老包装随机发货',
      peo: '210'
    }, {
      imgUrl: 'http://img3m9.ddimg.cn/41/4/1082768189-1_h_1.jpg',
      nm: '伊利味可滋巧克力牛奶240ml*12',
      peo: '106'
    }],
    arrs: [],
    count: 0
  },

  /**
   * 自定义函数
   */

  //添加购物车
  add(e) {
    let temp = this.data.arrs;
    let flag = false;
    temp.map((item, index) => {
      if (item.nm === e.detail.val.nm) {
        temp.splice(index, 1)
      } else {
        flag = true;
      }
    })
    if (true) {
      temp.push(e.detail.val)
    }
    if (e.detail.flag) {
      temp.map((item, index) => {
        if (item.nm === e.detail.val.nm) {
          temp.splice(index, 1)
        }
      })
    }
    let len = temp.length;
    this.setData({
      arrs: temp,
      count: len
    })
  },

  //删除
  delete(e){
    console.log(e.detail.val)
  },
  //确认添加
  sureAdd(){
    let params = JSON.stringify(this.data.arrs)
    wx.navigateTo({
      url: '../ck/ck?data='+params,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if(options.data){
      let data = JSON.parse(options.data);
      this.setData({
        arrs:data,
        count:data.length
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})