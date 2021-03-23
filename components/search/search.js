// components/search/search.js
import { KeywordModel } from '../../models/searc'
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
    historyList: keywordModel.getHistory()
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
      keywordModel.setHistory(inputVal)
    }
  }
})
