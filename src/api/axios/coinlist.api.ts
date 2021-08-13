  
import httpClient from './httpClient'
const END_POINT = '/coinlist'

const getTokens = () => {
  return httpClient.get(`${END_POINT}?summary=true`)
}

export { getTokens }