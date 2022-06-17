import store from '@/store'
import axios from 'axios'

const client = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL,
  withCredentials: true,
  timeout: 1000 * 60 * 20,
})

client.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log(error)
    if (error.response.status === 403) {
      store.dispatch('logout')
    }
    throw new Error(`Axios: ${error.message}. ${error.response.data}`)
  }
)

export default client