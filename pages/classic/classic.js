// pages/classic/classic.js
import { ClassicModel } from '../../models/classic'
import { LikeModel } from '../../models/like'
let classicModel = new ClassicModel()
let likeModel = new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    first: false,
    latest: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest(res => {
      this.setData({
        classic: res.data
      })
    })
  },
  onLike: function(event) {
    let likeStatus = event.detail.likeStatus
    let url = likeStatus === 'like' ? '/like' : '/like/cancel'
    likeModel.like(url, {art_id: this.data.classic.id, type: this.data.classic.type})
  },
  next: function(event) {
    // console.log(event)
    classicModel.getClassic(this.data.classic.index, 'previous', res =>{
      this.setData({
        classic: res.data,
        first: classicModel.isFirst(res.data.index),
        latest: classicModel.isLatest(res.data.index)
      })
    })
  },
  pre: function(event) {
    // console.log(event)
    classicModel.getClassic(this.data.classic.index, 'next', res =>{
      this.setData({
        classic: res.data,
        first: classicModel.isFirst(res.data.index),
        latest: classicModel.isLatest(res.data.index)
      })
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