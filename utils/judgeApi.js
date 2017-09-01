import axios from 'axios'

const apiUrl = 'http://slb-453338.ncloudslb.com:8080/'

export function getJustices () {
  return axios.get(apiUrl + 'justices')
}

export function getJustice (index) {
  return axios.get(apiUrl + 'justices/' + index)
}

export function postJustice (judgement) {
  return axios.post(apiUrl + 'justices/judgements', judgement)
}

export function getJudgements (justiceId) {
  return axios.get(apiUrl + 'justices/judgements', {params: {'justiceId': justiceId}})
}

export function getComments (justiceId) {
  return axios.get(apiUrl + 'justices/comments', {params: {'justiceId': justiceId}})
}

export function postComment (comment) {
  return axios.post(apiUrl + 'justices/comments', comment)
}

export function getStatistics (justiceId) {
  return axios.get(apiUrl + 'justices/statistic/' + justiceId)
}

