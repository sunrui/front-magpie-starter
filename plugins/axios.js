import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.timeout = 30 * 1000

axios.interceptors.request.use((config) => {
  return config
}, (err) => {
  return Promise.reject(err)
})

axios.interceptors.response.use(function (response) {
  console.groupCollapsed('%c' + response.config.method.toUpperCase() + '%c ' + response.request.responseURL, 'background:#FF6958;color:white', 'color:#000')
  console.log(response.config.data ? JSON.parse(response.config.data) : '<null>')
  console.log(response.data ? response.data : '<null>')
  console.groupEnd()

  return response
}, function (err) {
  if (err && err.response) {
    if (err.response.data.exception === 'Unauthorized') {
      window.location.href = `/user/login`
      return
    }
  }

  return Promise.reject(err)
})
