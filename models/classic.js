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
  previous(index, sCallback) {
    this.request({
      url: `/classic/${index}/previous`,
      method: 'GET',
      success: (res) => {
        sCallback(res)
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
  _setLatestIndex(index) {
    wx.setStorageSync('latestIndex', index)
  }
  _getLatestIndex() {
    wx.getStorageSync('latestIndex')
  }
}
export { ClassicModel }