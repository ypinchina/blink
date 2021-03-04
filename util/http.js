import { config } from '../config.js'
class HTTP {
  request(params) {
    let { url, method, data, success } = params
    if (!method) {
      method = 'GET'
    }
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
          success(res)
        } else {
          wx.showToast({
            title: '错误',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: (err) => {
        console.log(err)
      }
    })
  }
}

export { HTTP }