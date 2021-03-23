class KeywordModel {
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
  getHotSearch() {}
}

export { KeywordModel }