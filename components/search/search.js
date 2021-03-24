// components/search/search.js
import { KeywordModel } from '../../models/search'
const keywordModel = new KeywordModel()
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
    historyList: [],
    hotList: []
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
    onCancel() {
      this.triggerEvent('cancel', {})
    },
    submitSearch(event) {
      const inputVal = event.detail.value
      
      if (!inputVal) {
        return
      }
      keywordModel.searchSubmit({
        'q': inputVal,
        'summary': 1,
        'start': 0
      }).then(res => {
        keywordModel.setHistory(inputVal)
        console.log(res.data)
      })
    }
  }
})
