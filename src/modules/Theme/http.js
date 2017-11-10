import axios from 'axios'

const client = axios.create({
  baseURL: 'http://5a04a506f1ec99001252849d.mockapi.io/'
})

export default client
