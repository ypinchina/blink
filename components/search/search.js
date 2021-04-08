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
      observer: '_loadMore' 
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    noneResult: false,
    historyList: [],
    hotList: [],
    searching: false,
    bookList: [],
    q: '',
    loadingFlag: false,
    loadingCenter: false
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
        q: '',
        bookList: [],
        noneResult: false
      })
    },
    onCancel() {
      this.triggerEvent('cancel', {}, {})
    },
    _showLoadingCenter() {
      this.setData({
        "loadingCenter": true
      })
    },
    _hideLoadingCenter() {
      this.setData({
        "loadingCenter": false
      })
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
      this._showLoadingCenter()
      keywordModel.searchSubmit({
        'q': inputVal,
        'summary': 1,
        'start': 0
      }).then(res => {
        keywordModel.setHistory(inputVal)
        this.setData({
          bookList: res.data.books
        })
        this._hideLoadingCenter()
        this.setTotal(res.data.total)
      })
    },
    _loadMore() {
      if (this.data.loadingFlag) {
        return
      } 
      if (this.hasMore()) {
        this._lock()
        keywordModel.searchSubmit({
          'q': this.data.q,
          'summary': 1,
          'start': this.currentArrLength()
        }).then(res => {
          this.setTotal(res.data.total)
          this.setMoreArr(res.data.books)
          this._unlocked()
        }, () => {
          this._unlocked()
          // 防止断网后重连网络不能请求造成的死锁
        })
      } else {
        return
      }
    },
    _lock() {
      this.setData({
        'loadingFlag': true
      })
    },
    _unlocked() {
      this.setData({
        'loadingFlag': false
      })
    }
  }
})
