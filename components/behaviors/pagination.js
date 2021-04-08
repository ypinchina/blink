const paginationBehavior = Behavior({
  data: {
    bookList: [],
    total: 0
  },
  methods: {
    setMoreArr(needAddArr) {
      const resultArr = this.data.bookList.concat(needAddArr)
      this.setData({
        bookList: resultArr
      })
    },
    setTotal(total) {
      this.data.total = total
      if (!total) {
        this.setData({
          'noneResult': true
        })
      }
    },
    hasMore() {
      if (this.currentArrLength() >= this.data.total) {
        return false
      } else {
        return true
      }
    },
    currentArrLength() {
      return this.data.bookList.length
    }
  }
})

export { paginationBehavior }