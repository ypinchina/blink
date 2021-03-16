import { HTTP } from '../util/http-p'
class BookModel extends HTTP {
  bookList() {
    return this._request('/book/hot_list')
  }
}

export default BookModel