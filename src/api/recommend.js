// import jsonp from '@/assets/js/jsonp'
import axios from 'axios'
import { CYQQParams, UYQQParams } from './config'

// 设置拦截器
axios.interceptors.response.use((res) => {
  // 先进行预处理，再返回数据，只返回结果中的data数据
  return res.data
})

export function getRecommend (url, params) {
  return axios.get(url, {
    params: { ...CYQQParams, ...params }
  })
}

export function getRunk (url, params) {
  return axios.get(url, {
    params: { ...CYQQParams, ...params }
  })
}

export function getSinger (url, params) {
  return axios.get(url, {
    params: { ...UYQQParams, ...params }
  })
}
