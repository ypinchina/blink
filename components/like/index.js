// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 对外暴露的属性
    count: {
      type: Number,
      value: 0 // 选填，默认给0
    },
    likeFlag: {
      type: Boolean,
      value: false // 选填,默认为false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLike: 'images/like.png',
    noLike: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event) {
      var likeFlag = this.properties.likeFlag,
      count = this.properties.count
      likeFlag ? count-- : count ++
      this.setData({
        count: count,
        likeFlag: !likeFlag
      })
      let likeStatus = likeFlag ? 'dislike' : 'like'
      this.triggerEvent('like', {
        likeStatus
      }, {})
    }
  }
})
