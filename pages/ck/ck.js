// pages/ck/ck.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: []
  },

  /**
   * 自定义事件
   */
  del(e) {
    let that=this;
    wx.showModal({
      title: '提示',
      content: '确定删除嘛?',
      success(res){
        if(res.confirm){
          let temp = that.data.listData;
          temp.map((item, index) => {
            if (item.nm === e.detail.val.nm) {
              temp.splice(index, 1);
            }
          })
          that.setData({
            listData: temp
          })
        }
      }
    })
  },
  goadd(){
    wx.navigateTo({
      url: '../list/list?data='+JSON.stringify(this.data.listData),
    })
  },
  gomine(){
    wx.navigateTo({
      url: '../mine/mine?data='+JSON.stringify(this.data.listData),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.data) {
      let params = JSON.parse(options.data)
      this.setData({
        listData: params
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