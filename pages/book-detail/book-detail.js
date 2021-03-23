// pages/book-detail/book-detail.js
import BookModel from '../../models/book'
import { LikeModel } from '../../models/like'
const bookModel = new BookModel()
let likeModel = new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookDetailObj: {},
    bookeComments: [],
    likeCount: 0,
    likeFlag: false,
    commentsFlag: false
  },
  showComments() {
    this.setData({
      commentsFlag: true
    })
  },
  hideComments() {
    this.setData({
      commentsFlag: false
    })
  },
  onLike: function(event) {
    let likeStatus = event.detail.likeStatus
    let url = likeStatus === 'like' ? '/like' : '/like/cancel'
    likeModel.like(url, {art_id: this.data.bookDetailObj.id, type: 400})
  },
  onPost: function(event) {
    const submitComment = event.detail.content || event.detail.value
    if (!submitComment) {
      return
    }
    const result = bookModel.submitShoutComment(this.data.bookDetailObj.id, submitComment)
    result.then(res => {
      this.data.bookeComments.unshift({
        nums: 1,
        content: submitComment
      })
      wx.showToast({
        title: '添加短评成功',
      })
      this.setData({
        bookeComments: this.data.bookeComments,
        commentsFlag: false
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面间的传参都在options里进行接收
    const bid = options.bid
    wx.showLoading()
    const bookInfo = bookModel.bookDetail(bid)
    const comments = bookModel.bookComments(bid)
    const likeInfo = bookModel.bookLike(bid)
    Promise.all([bookInfo, comments, likeInfo]).then(res => {
      this.setData({
        bookDetailObj: res[0].data,
        bookeComments: res[1].data.comments,
        likeCount: res[2].data.fav_nums,
        likeFlag: res[2].data.like_status
      })
      wx.hideLoading()
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