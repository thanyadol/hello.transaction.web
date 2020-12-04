import HttpRequest from './httpRequest'

class TransactionProvider extends HttpRequest {
  /**
   * List transaction
   *
   * @return {Promise}
   */
  listTransaction () {
    return super.get(`transaction/list`)
  }
}

export default TransactionProvider
