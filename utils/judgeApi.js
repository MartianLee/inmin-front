import axios from 'axios'

export function getJustices () {
  return axios.get('http://211.249.62.6:8080/justices')
}

export function getJustice (index) {
  return axios.get('http://211.249.62.6:8080/justices/' + index)
}

export function postJustice (judgement) {
  return axios.post('http://211.249.62.6:8080/justices/judgements', judgement)
}

export function getJudgements (justiceId) {
  return axios.get('http://211.249.62.6:8080/justices/judgements', {params: {'justiceId': justiceId}})
}

export function getComments (justiceId) {
  return axios.get('http://211.249.62.6:8080/justices/comments', {params: {'justiceId': justiceId}})
}

export function postComment (comment) {
  return axios.post('http://211.249.62.6:8080/justices/comments', comment)
}

export function getStatistics (justiceId) {
  return axios.get('http://211.249.62.6:8080/justices/statistic/' + justiceId)
}

