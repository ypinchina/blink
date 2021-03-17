import { HTTP } from '../util/http-p'
class BookModel extends HTTP {
  bookList() {
    return this.request('/book/hot_list')
  }
  bookDetail(id) {
    // bookDetail api
    return this.request(`/book/${id}/detail`)
  }
  bookComments(id) {
    // 短评 api
    return this.request(`/book/${id}/shot_comment`)
  }
  bookLike(id) {
    return this.request(`/book/${id}/favor`)
  }
}

export default BookModel