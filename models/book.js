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
    return this.request(`/book/${id}/short_comment`)
  }
  bookLike(id) {
    return this.request(`/book/${id}/favor`)
  }
  submitShoutComment(book_id, content) {
    return this.request(`/book/add/short_comment`, 'POST', { book_id, content })
  }
}

export default BookModel