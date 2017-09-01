import {getIp} from '../utils/ipApi'
import {getJustices, getJustice, postJustice, getJudgements, getComments, postComment, getStatistics} from '../utils/judgeApi'
import {prettyDateFunction} from '../utils/dateConverter'

const judge = {
  namespace: true,
  state: {
    ip: null,
    justices: null,
    justice: null,
    debate: null,
    judgements: null,
    comments: null,
    statistics: null
  },

  getters: {
  },

  mutations: {
    SET_JUSTICES (state, justices) {
      state.justices = justices
    },
    SET_JUSTICE (state, justice) {
      state.justice = justice
    },
    SET_JUDGEMENTS (state, judgements) {
      state.judgements = judgements.map((judgement) => {
        let prettyDate = prettyDateFunction(judgement.createdAt)
        judgement.createdAt = prettyDate
        return judgement
      })
    },
    SET_COMMENTS (state, comments) {
      state.comments = comments.map((comment) => {
        let prettyDate = prettyDateFunction(comment.createdAt)
        comment.createdAt = prettyDate
        return comment
      })
    },
    SET_STATISTICS (state, statistics) {
      state.statistics = statistics
    }
  },

  actions: {
    getJustices ({commit}) {
      return getJustices().then((justices) => {
        commit('SET_JUSTICES', justices.data)
      })
    },
    getJustice ({commit}, index) {
      return getJustice(index).then((justice) => {
        commit('SET_JUSTICE', justice.data)
      })
    },
    addJudgement ({commit}, judgement) {
      return postJustice(judgement).then(() => {
        console.log('댓글, 선고 정보 업데이트')
      })
    },
    getJudgements ({commit}, justiceId) {
      return getJudgements(justiceId).then((judgements) => {
        commit('SET_JUDGEMENTS', judgements.data.content)
      })
    },
    getComments ({commit}, justiceId) {
      return getComments(justiceId).then((comments) => {
        commit('SET_COMMENTS', comments.data.content)
      })
    },
    addComments ({commit}, comments) {
      return postComment(comments)
    },
    getStatistics ({commit}, justiceId) {
      return getStatistics(justiceId).then((statistics) => {
        console.log(statistics)
        commit('SET_STATISTICS', statistics.data)
      })
    },
    getIp ({commit}) {
      getIp().then((res) => {
        console.log(res)
      })
    }
  }
}

export default judge