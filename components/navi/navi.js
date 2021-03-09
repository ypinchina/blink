// components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    first: Boolean, // 是否是第一期
    latest: Boolean // 是否是最新一期,与first互逆
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftImg: './images/triangle@left.png',
    rightImg: './images/triangle@right.png',
    disLeft: './images/triangle.dis@left.png',
    disRight: './images/triangle.dis@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    pre() {
      this.triggerEvent('prePage', {'changePage': 'pre'}, {})
    },
    next() {
      this.triggerEvent('nextPage', {'changePage': 'next'}, {})
    }
  }
})
