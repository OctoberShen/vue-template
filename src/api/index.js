import request from '@/utils/request'
// 入口
export function zeroEntry (data) {
  return request({
    url: '/app/web/freegoodsV1',
    method: 'post',
    data
  })
}
