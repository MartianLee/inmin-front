<template>
  <div>
    <div class="background">
      <div class="overlay container">
        <div class="page-header first-page-header">
          <h1>우리는 분노했습니다.</h1>
          <h4>무전유죄 유전무죄. 모두 다 공감하시나요?</h4>
          <h4>사법권력과 재벌의 유착은 계속해서 국민들의 마음을 고통스럽게 합니다.</h4>
          <h4>왜 항상 형사재판의 결과는 내가 생각하는 결과와 다를까요?</h4>
          <h4>그래서 저희는 국민이 직접 재판하고 선고하는 서비스를 만들었습니다.</h4>
        </div>
        <div class="bd-pageheader">
          <div class="container">
            <div class="row">
              <div class="col-xs-3 col-md-3 thumbnailColumn">
                <a href="#" class="thumbnail">
                  <img class="" src="../assets/ljy.jpeg" alt="">
                </a>
              </div>
              <div class="col-xs-3 col-md-3 thumbnailColumn">
                <a href="#" class="thumbnail">
                  <img class="" src="../assets/jys.jpeg" alt="">
                </a>
              </div>
              <div class="col-xs-3 col-md-3 thumbnailColumn">
                <a href="#" class="thumbnail">
                  <img class="" src="../assets/kkc.jpeg" alt="">
                </a>
              </div>
              <div class="col-xs-3 col-md-3 thumbnailColumn">
                <a href="#" class="thumbnail">
                  <img class="" src="../assets/jdh.jpeg" alt="">
                </a>
              </div>
            </div>
            <div class="text-center">
              <h4>과연 우리 사회에서 정의란 무엇일까요?</h4>
              <h4>국민재판관님의 판결을 기다립니다.</h4>
              <nuxt-link to="/judges/1" class="btn btn-lg btn-primary" role="button">지금 판결하기</nuxt-link>
            </div>
            <div class="first-page-footer">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import modal from '../components/modal'
  import NuxtLink from '../.nuxt/components/nuxt-link'

  export default {
    data () {
      return {
        urlForShare: 'www.naver.com'
      }
    },
    components: {
      NuxtLink,
      modal
    },
    mounted () {
      this.$store.dispatch('judge/getIp')
    },
    methods: {}
  }
</script>
<style>
  .background {
    margin-top: -20px;
    background-image: url('../assets/background.jpg');
    background-size: cover;
    background-position: center center;

  }
  .overlay {
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .first-page-header {
    margin-top: 40%;
  }
  .first-page-footer {
    margin-bottom: 20%;
  }

  .thumbnailColumn {
    padding-left: 2px;
    padding-right: 2px;
  }

  .thumbnail{
    width: 100%;
    padding: 1px;
  }
</style>
