// components/epsoide/epsoide.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type:Number,
      observer: function(newVal, oldVal, path) {
        newVal = newVal < 10 ? '0' + newVal : newVal
        this.setData({
          _index: newVal
        })
      }
    }
  },
  attached() {
    let year = new Date().getFullYear()
    let monthIndex = new Date().getMonth()
    let months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    this.setData({
      year: year,
      month: months[monthIndex]
    })
  },
  /**
   * 组件的初始数据
   */
  data: {
    year: 0,
    month: '',
    _index: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
