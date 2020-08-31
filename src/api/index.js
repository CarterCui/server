import request from '../utlis/request'

export function getLoginBg (param) {
  return request({
    method: 'post',
    url: '/HPImageArchive.aspx?format=js&idx=2&n=1&mkt=zh-CN',
    data: param,
    baseURL: '/bg'
  })
}
