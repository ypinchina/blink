import {HTTP} from '../util/http-p'
class KeywordModel extends HTTP{
  key = 'q'
  maxLen = 10
  getHistory() {
    const historyList = wx.getStorageSync(this.key)
    if (!historyList) {
      return []
    }
    return historyList
  }
  setHistory(value) {
    const historyList = this.getHistory()
    const result = historyList.includes(value)
    if (!result) {
      if (historyList.length = this.maxLen) {
        historyList.pop()
      }
      historyList.unshift(value)
      wx.setStorageSync(this.key, historyList)
    }
  }
  getHotSearch() {
    return this.request('/book/hot_keyword')
  }
  searchSubmit(data) {
    return this.request('/book/search', 'GET', data)
  }
}

export { KeywordModel }