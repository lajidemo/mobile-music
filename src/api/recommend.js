// import jsonp from '@/assets/js/jsonp'
import axios from 'axios'
import { baseParams } from './config'

export function getRecommend (url, params) {
  return axios.get(url, {
    params: { ...baseParams, ...params }
  })
}

export function getRunk (url, params) {
  return axios.get(url, {
    params: { ...baseParams, ...params }
  })
}
