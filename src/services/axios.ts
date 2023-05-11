import axios from 'axios'

const _api = axios.create({
  baseURL: "https://192.168.3.24/rest",
  headers: {
    'Content-Type': 'application/json'
  },
  auth: {
    username: "admin",
    password: "admin"
  }
})

export interface HSUser {
  name: string
  server: string
  password: string
  profile: string
  'limit-uptime': string
}

export async function _put(payload: HSUser) {
  const { data } = await _api.put('/ip/hotspot/user', payload)
  return data
}
