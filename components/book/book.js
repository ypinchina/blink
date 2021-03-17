// components/book/book.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bookItem: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(event) {
      const id = this.properties.bookItem.id
      wx.navigateTo({
        url: `../../pages/book-detail/book-detail?bid=${id}`
      })
    }
  }
})
