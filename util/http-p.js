import { config } from '../config.js'
const tips = {
  1: '抱歉出现了一个错误', // 默认的错误
  1005: 'appKey无效',
  3000: '期刊不存在'
}
class HTTP {
  request(url, method, data) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, method, data)
    })
    
  }
  _request(url, resolve, reject, method='GET', data = {}) {
    wx.request({
      url: `${config.api_base_url}${url}`,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json',
        appKey: config.appKey
      },
      success: (res) => {
        if (res.statusCode.toString().startsWith('2')) {
          resolve(res)
        } else {
          reject()
          this._error_code(res.data.error_code)
        }
      },
      fail: (err) => {
        reject()
        this._error_code(1)
      }
    })
  }
  _error_code(code) {
    if (!code) {
      code = 1
    }
    let message = tips[code]
    wx.showToast({
      'title': message,
      'icon': 'none',
      'duration': 1500
    })
  }
}

export { HTTP }