import { HTTP } from '../util/http'
class ClassicModel extends HTTP {
  getLatest(callBacks) {
    this.request({
      url: '/classic/latest',
      method: 'GET',
      success: (res) => {
        callBacks(res)
        this._setLatestIndex(res.data.index)
      }
    })
  }
  isFirst(index) {
    return index === 1 ? true : false
  }
  isLatest(index) {
    let latestIndex = this._getLatestIndex()
    return latestIndex === index ? true : false
  }
  getClassic(index, previousOrNext, sCallback) {
    let _index = index
    if (previousOrNext === 'previous') {
      _index--
    } else {
      _index++
    }
    console.log(_index)
    let classicNeed = wx.getStorageSync(`_classic_${_index}`)
    if (!classicNeed) {
      this.request({
        url: `/classic/${index}/${previousOrNext}`,
        method: 'GET',
        success: (res) => {
          wx.setStorageSync(`_classic_${_index}`, res)
          sCallback(res)
        }
      })
    } else {
      sCallback(classicNeed)
    }
  }
  _setLatestIndex(index) {
    wx.setStorageSync('latestIndex', index)
  }
  _getLatestIndex() {
    return wx.getStorageSync('latestIndex')
  }
}
export { ClassicModel }