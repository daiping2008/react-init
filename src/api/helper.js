import axios from 'axios'

export const get = url => (
  (params={}) => (
    axios.get(url, {
      params
    }).then(res => {
      let {status, data} = res
      return status === 200 ? data : ''
    }).catch(e => {})
  )
)