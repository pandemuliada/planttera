export const apiUrl: string = 'http://localhost:3000'

export function url(suffix: string = '') {
  return apiUrl + suffix
}
