// components/search/search.js
import { KeywordModel } from '../../models/search'
const keywordModel = new KeywordModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    touchBottom: {
      default: false,
      type: Boolean,
      observer: function() {
        keywordModel.searchSubmit({
          'q': this.data.q,
          'summary': 1,
          'start': this.data.bookList.length
        }).then(res => {
          const temArr = this.data.bookList.concat(res.data.books)
          this.setData({
            bookList: temArr
          })
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyList: [],
    hotList: [],
    searching: false,
    q: '',
    bookList: []
  },
  attached() {
    this.setData({
      historyList: keywordModel.getHistory()
    })
    keywordModel.getHotSearch().then(res => {
      this.setData({
        hotList: res.data.hot
      })
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    clearSearch1() {
      console.log(1)
      // 点击搜索框的叉按钮，清空搜索框
      this.setData({
        searching: true,
        q: ''
      })
    },
    onCancel() {
      this.triggerEvent('cancel', {})
    },
    submitSearch(event) {
      const inputVal = event.detail.value || event.detail.content
      if (!inputVal) {
        return
      }
      this.setData({
        searching: true,
        q: inputVal
      })
      keywordModel.searchSubmit({
        'q': inputVal,
        'summary': 1,
        'start': 0
      }).then(res => {
        keywordModel.setHistory(inputVal)
        this.setData({
          bookList: res.data.books
        })
      })
    }
  }
})
