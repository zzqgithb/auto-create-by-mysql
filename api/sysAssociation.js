import request from '../request'

const baseUrl = '/market/SysAssociation'

/**
 * 获取分页记录详情
 */
export function getList(page) {
  return request({
    url: `${baseUrl}/getList`,
    method: 'get',
    params: page
  })
}

/**
 * 获取单条记录的详情
 */
export function getInfo(params) {
  return request({
    url: `${baseUrl}/getInfo`,
    method: 'get',
    params: params
  })
}

/**
 * 修改单条或多条记录的详情
 */
export function update(data) {
  return request({
    url: `${baseUrl}/update`,
    method: 'post',
    data: data
  })
}

/**
 * 创建单条记录详情
 */
export function create(data) {
  return request({
    url: `${baseUrl}/create`,
    method: 'post',
    data: data
  })
}

/**
 * 获取单条记录的详情
 */
export function del(data) {
  return request({
    url: `${baseUrl}/delete`,
    method: 'post',
    data: data
  })
}
