import request from '@/utils/request'

// 获取留言列表
export function getMessagesApi() {
  return request({
    url: '/api/message/list',
    method: 'get'
  })
}

// 发送留言
export function addMessageApi(data) {
  return request({
    url: '/api/message/add',
    method: 'post',
    data
  })
}

// 获取消息通知
export function getNotificationsApi(params) {
  return request({
    url: '/notifications/page',
    method: 'get',
    params: params
  })
}

// 标记消息已读
export function markNotificationAsReadApi(id) {
  return request({
    url: `/notifications/read/${id}`,
    method: 'get'
  })
}

// 标记全部消息已读
export function markAllNotificationsAsReadApi() {
  return request({
    url: '/notifications/read/all',
    method: 'get'
  })
}

// 删除消息
export function deleteNotificationApi(id) {
  return request({
    url: `/notifications/delete/${id}`,
    method: 'delete'
  })
}

// 获取未读消息数量
export function getUnreadNotificationsCountApi() {
  return request({
    url: '/notifications/unReadNum',
    method: 'get'
  })
}

// 获取系统通知
export function getSystemNoticeApi() {
  return request({
    url: '/notifications/is-unread',
    method: 'get'
  })
}
