// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    likeCount: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event) {
      console.log(event)
    }
  }
})
