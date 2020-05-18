import axios from 'axios'

export const apiUrl: string = 'http://localhost:3000'

export function url(suffix: string = '') {
  return apiUrl + suffix
}

export function Api() {
  const instance = axios.create({
    baseURL: apiUrl,
  })

  return instance
}
