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
    latest: true,
    likeCount: 0,
    likeFlag: false,
    hidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest(res => {
      this.setData({
        classic: res.data,
        likeCount: res.data.fav_nums,
        likeFlag: res.data.like_status
      })
    })
  },
  onLike: function(event) {
    let likeStatus = event.detail.likeStatus
    let url = likeStatus === 'like' ? '/like' : '/like/cancel'
    likeModel.like(url, {art_id: this.data.classic.id, type: this.data.classic.type})
  },
  next: function(event) {
    this._updateClassic('previous')
  },
  pre: function(event) {
    this._updateClassic('next')
  },
  _updateClassic(previousOrNext) {
    if (this.data.first && previousOrNext === 'previous') {
      return // 最后一页不许下翻
    } else if (this.data.latest && previousOrNext === 'next') {
      return // 最前一页不许上翻
    }
    classicModel.getClassic(this.data.classic.index, previousOrNext, res => {
      this._getLikeStatus(res.data.type, res.data.id)
      this.setData({
        classic: res.data,
        first: classicModel.isFirst(res.data.index),
        latest: classicModel.isLatest(res.data.index)
      })
    })
  },
  _getLikeStatus(type, id) {
    likeModel.likeStatus({type, id}, res => {
      this.setData({
        likeCount: res.data.fav_nums,
        likeFlag: res.data.like_status
      })
      // this.setData({
      //   res
      // })
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