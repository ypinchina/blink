import { HTTP } from '../util/http'
class ClassicModel extends HTTP {
  getLatest(callBacks) {
    this.request({
      url: '/classic/latest',
      method: 'GET',
      success: (res) => {
        callBacks(res)
      }
    })
  }
}
export { ClassicModel }