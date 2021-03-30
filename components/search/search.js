// components/search/search.js
import { KeywordModel } from '../../models/search'
import { paginationBehavior } from '../behaviors/pagination'
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
        if (this.data.loadingFlag) {
          return
        } 
        if (this.hasMore()) {
          this.data.loadingFlag = true
          keywordModel.searchSubmit({
            'q': this.data.q,
            'summary': 1,
            'start': this.currentArrLength()
          }).then(res => {
            this.setTotal(res.data.total)
            this.setMoreArr(res.data.books)
            this.data.loadingFlag = false
          })
        } else {
          return
        }
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
    loadingFlag: false
  },
  behaviors: [paginationBehavior],
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
    clearSearch() {
      // 点击搜索框的叉按钮，清空搜索框
      this.setData({
        searching: false,
        q: ''
      })
    },
    onCancel() {
      this.triggerEvent('cancel', {}, {})
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
        this.setTotal(res.data.total)
      })
    }
  }
})
