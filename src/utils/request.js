import axios from 'axios'
import qs from 'qs'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
  // withCredentials: false
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (config.method === 'post') {
      config.data = qs.stringify({
        ...config.data
      })
    }

    return config
  },
  (error) => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response,
  (error) => {
    console.log(`err${error}`) // for debug
    return Promise.reject(error)
  }
)

export default service
