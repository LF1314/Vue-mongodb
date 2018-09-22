import axios from 'axios'
import {
  resolve
} from 'path';
import {
  rejects
} from 'assert';

const baseURL = '/admin'
const instance = axios.create({
  baseURL,
  timeout: 10000,
});
const xhr = {
  get(url, params, methods = 'get', config) {
    return new Promise((resolve, rejects) => {
      instance[methods](url, {
        params
      }, config).then(res => {
        resolve(res)
      }).catch(ree => {
        rejects(ree)
      })
    })
  },
  post(url, data, methods = 'post', config) {
    return new Promise((resolve, rejects) => {
      instance[methods](url, data, config).then(res => {
        resolve(res)
      }).catch(err => {
        rejects(err)
      })
    })
  },
  delete(url, data, config) {
    return this.get(url, data, 'delete', config)
  }


}

export const $xhr = xhr
