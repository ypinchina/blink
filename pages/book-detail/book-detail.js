// pages/book-detail/book-detail.js
import BookModel from '../../models/book'
const bookModel = new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookDetailObj: {},
    bookeComments: [],
    likeCount: 0,
    likeStaus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面间的传参都在options里进行接收
    const bid = options.bid
    const bookInfo = bookModel.bookDetail(bid)
    bookInfo.then(res => {
      this.setData({
        bookDetailObj: res
      })
    })
    const comments = bookModel.bookComments(bid)
    // const likeInfo = bookModel.bookLike(bid)
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