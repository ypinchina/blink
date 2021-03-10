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
    this.request({
      url: `/classic/${index}/${previousOrNext}`,
      method: 'GET',
      success: (res) => {
        sCallback(res)
      }
    })
  }
  _setLatestIndex(index) {
    wx.setStorageSync('latestIndex', index)
  }
  _getLatestIndex() {
    return wx.getStorageSync('latestIndex')
  }
}
export { ClassicModel }