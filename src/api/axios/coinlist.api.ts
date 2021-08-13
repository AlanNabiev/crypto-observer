  import httpClient from './httpClient'
const END_POINT = '/markets'

const getTokens = () => {
  return httpClient.get(
    `${END_POINT}?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  )
}

export { getTokens }