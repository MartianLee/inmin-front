<template>
  <div class="judgement-page">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <div class="judgement-info overlay">
      <div class="text-center">
        <h4>{{ justice.no }} {{ justice.title }}</h4>
      </div>
    </div>
    <div class="page-header background">
      <div class="overlay container">
        <div class="text-center">
          <img :src="justice.undertrialPhotoUrl"/>
          <h2>피고 {{ justice.undertrial }}</h2>
          <h4>당신의 공정한 판결을 기다립니다.</h4>
        </div>
        <div>
          <h4>피고 : {{ justice.undertrial }}</h4>
          <h4>원고 : {{ justice.prosecutor }} 검사</h4>
          <h4>결심 : 징역 {{ justice.prosecution }} 구형</h4>
          <h4>선고 : 징역 {{ justice.judgment }}</h4>
        </div>
      </div>
    </div>
    <div class="container">
    <div class="jumbotron">
      <div class="container">
        <h4></h4>
        <div class="form-group text-center">
          <h3>
            국민재판관  <input type="text" v-model="judgeName" class="form-control judge" id="name" placeholder="입력"> 님이
            피고 이재용에게 징역
            <input type="text" v-model="judgeYear" class="form-control judge" id="year" placeholder="<=100">
            년을 선고합니다.
          </h3>
        </div>
        <div class="text-center lead">
          <modal :judgeYear="judgeYear" :judgeName="judgeName" :justiceId="justice.id" :undertrialPhotoUrl="justice.undertrialPhotoUrl"></modal>
        </div>
      </div>
    </div>
    <div class="jumbotron">
      <div class="text-center"><h2>피고인측 변론</h2></div>
      <div v-for="(pleading, index) in justice.pleadings">
        <h3>- {{ pleading.issue }}</h3>
        <h4>{{ pleading.attorneyArgument }} <a class="btn btn-primary" :href="pleading.articleUrl" target="_blank" role="button">관련 기사 »</a></h4>
      </div>
    </div>
    <div class="jumbotron">
      <div class="text-center"><h2>검사측 변론</h2></div>
      <div v-for="(pleading, index) in justice.pleadings">
        <h3>- {{ pleading.issue }}</h3>
        <h4>{{ pleading.prosecutorArgument }} <a class="btn btn-primary" :href="pleading.articleUrl" target="_blank" role="button">관련 기사 »</a></h4>
      </div>
    </div>
      <div class="jumbotron">
        <div class="text-center">
          <h1>국민재판 결과</h1>
        </div>
        <div class="row">
          <div class="col-xs-12 text-center">
            <div id="chart_div"></div>
            <!--<div is="vue-chart"-->
              <!--chart-type="ColumnChart"-->
              <!--:columns="chart.columns"-->
              <!--:rows="chart.rows"-->
              <!--:options="chart.options"-->
            <!--&gt;</div>-->
          </div>
          <div class="col-xs-6 text-center">
            <h1><span class="glyphicon glyphicon-fire" aria-hidden="true"></span></h1>
            <h1>{{ statistics.sumPenalty }}</h1>
            <h3>총 선고 형량</h3>
          </div>
          <div class="col-xs-6 text-center">
            <h1><span class="glyphicon glyphicon-king" aria-hidden="true"></span></h1>
            <h1>{{ statistics.averagePenalty }}</h1>
            <h3>평균 선고 형량</h3>
          </div>
        </div>

        <h1>최근 선고</h1>
        <div class="row">
          <div class="col-sm-12 col-md-6" v-for="(judgement, index) in judgements">
            <div class="thumbnail">
              <div class="caption">
                <h5 class="text-left">국민재판관 {{judgement.name}} 님 </h5>
                <h4 class="text-center">{{judgement.penalty}}년을 선고하셨습니다.</h4>
                <h5 class="text-right">{{judgement.createdAt}}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="jumbotron">
      <h1>국민방청객 의견</h1>
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="form-group">
            <label class="sr-only form-control" for="exampleInputEmail3">이름</label>
            <input v-model="myName" type="name" class="form-control" id="exampleInputEmail3" placeholder="이름">
          </div>
          <textarea v-model="myComment" class="textrea form-control" rows="1">
            </textarea>
          <div class="form-control btn btn-danger" @click="writeComment">의견 쓰기</div>
        </div>
        <div class="col-sm-12 col-md-6" v-for="(comment, index) in comments">
          <div class="thumbnail">
            <div class="caption">
              <h4>{{comment.content}}</h4>
              <h5 class="text-right">{{comment.name}}님의 의 {{comment.createdAt}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  /* eslint-disable no-undef */
  import modal from '../../components/modal'
  import NuxtLink from '../../.nuxt/components/nuxt-link'
  import { mapState } from 'vuex'

  export default {
    fetch ({ store, params }) {
      return store.dispatch('judge/getJustice', params.id)
      .then(() => {
        return store.dispatch('judge/getJudgements', params.id)
      }).then(() => {
        return store.dispatch('judge/getComments', params.id)
      }).then(() => {
        return store.dispatch('judge/getStatistics', params.id)
      })
    },
    validate ({ params }) {
      return !isNaN(+params.id)
    },
    data () {
      return {
        urlForShare: 'www.naver.com',
        judgeName: null,
        judgeYear: null,
        myName: null,
        myEmail: null,
        myComment: null,
        chart: {
//          chartType: 'LineChart',
          columns: [
            {'type': 'number', 'label': 'Time of Day'},
            {'type': 'number', 'label': 'Motivation Level'}
          ],
          rows: [
            [1, 1],
            [3, 70],
            [4, 30],
            [14, 80],
            [40, 80],
            [87, 20]
          ],
          options: {
            title: '판결 통계 그래프',
            colors: ['#9575cd', '#33ac71'],
            hAxis: {
              title: '형량',
              minValue: 0,
              maxValue: 100
            },
            vAxis: {
              title: '판결 수',
              minValue: 0
            }
          }
        },
        list: [],
        timer: ''
      }
    },
    created: function () {
      this.fetchEventsList()
      this.timer = setInterval(this.fetchEventsList, 10000)
    },
    components: {
      NuxtLink,
      modal
    },
    mounted () {
      google.charts.load('current', {packages: ['corechart', 'bar']})
      .catch(() => { console.log('asdfasdfasdf') })
      google.charts.setOnLoadCallback(() => {
        var data = new google.visualization.DataTable()
        data.addColumn('number', 'Time of Day')
        data.addColumn('number', 'Motivation Level')

        data.addRows(this.$store.state.judge.statistics.totalCountByPenalty)
        var options = {
          title: '판결 통계 그래프',

          colors: ['#9575cd', '#33ac71'],
          hAxis: {
            title: '형량',
            viewWindow: {
              min: 0,
              max: 100
            }
          },
          vAxis: {
            title: '판결 수'
          }
        }
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'))
        chart.draw(data, options)
      })
    },
    computed: mapState({
      justice: state => state.judge.justice,
      judgements: state => state.judge.judgements,
      comments: state => state.judge.comments,
      statistics: state => state.judge.statistics
    }),
    methods: {
      writeComment () {
        if (!this.myName || !this.myComment) {
          return
        }
        this.$store.dispatch('judge/addComments', {'justiceId': parseInt(this.justice.id), 'name': this.myName, 'content': this.myComment})
        .then(() => {
          return this.$store.dispatch('judge/getComments', this.justice.id)
        })
      },
      fetchEventsList: function () {
        this.$store.dispatch('judge/getJudgements', this.justice.id)
        .then(() => {
          return this.$store.dispatch('judge/getComments', this.justice.id)
        })
      },
      cancelAutoUpdate: function () { clearInterval(this.timer) }
    },
    beforeDestroy () {
      clearInterval(this.timer)
    },
    destroyed () {
      this.cancelAutoUpdate()
    }
  }
</script>
<style>
  .judge {
    width: 80px;
    display: inline;
  }

  .background {
    margin-top: -20px;
    background-image: url('../../assets/background.jpg');
    background-size: cover;
    background-position: center center;

  }

  .overlay {
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .judgement-info {
    margin-top: -20px;
    padding-top: 5px;
    margin-bottom: 20px;
    padding-bottom: 5px;
  }

  .jumbotron {
    background-color: rgba(76, 28, 4, 0.3);
  }

  .judgement-page {
    background-color: rgba(76, 28, 4, 0.4);
  }

  .hammer {
    width: 10%;
  }

  .glyphicon-fire, .glyphicon-king {
    font-size: 60px;
  }
</style>
