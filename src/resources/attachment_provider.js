import HttpRequest from './httpRequest'

class AttachmentProvider extends HttpRequest {
  /**
   * List transaction
   *
   * @return {Promise}
   */
  postUpload (file, onUploadProgress) {
    let formData = new FormData()
    formData.append('file', file)

    return super.request('POST', 'attachment/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress
    })
  }

  getUpload () {
    return super.get('/attachment/list')
  }
}

export default AttachmentProvider
