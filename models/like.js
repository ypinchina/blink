import { HTTP } from '../util/http'
class LikeModel extends HTTP {
  like(url, data) {
    this.request({
      url: url,
      method: 'POST',
      data
    })
  }
  likeStatus(data, sCallback) {
    let { type, id } = data
    this.request({
      url: `/classic/${type}/${id}/favor`,
      method: 'GET',
      success: res => {
        sCallback(res)
      }
    })
  }
}

export { LikeModel }