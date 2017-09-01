import axios from 'axios'

export function getIp () {
  return axios.get('//freegeoip.net/json/?callback=?')
}
