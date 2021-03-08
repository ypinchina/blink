import { HTTP } from '../util/http'
class LikeModel extends HTTP {
  like(url, data) {
    this.request({
      url: url,
      method: 'POST',
      data
    })
  }
}

export { LikeModel }