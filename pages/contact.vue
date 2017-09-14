<template>
  <div>
    <div class="background">
      <div class="overlay container">
        <div class="page-header first-page-header">
          <h1>서비스에 대해서 궁금하신 사안은 inmin.me@gmail.com으로 보내주세요! 피드백은 얼마든지 환영입니다.</h1>
          <h3>더 재판하고 싶은 인물이 있다면 <a href="https://goo.gl/forms/5l57qLNCoavooe6m2" target="_blank">이 링크</a>로 의견을 보내주세요!</h3>
        </div>
        <div class="bd-pageheader">
          <div class="container">

            <div class="text-center">
              <h4>과연 우리 사회에서 정의란 무엇일까요?</h4>
              <h4>국민재판관님의 판결을 기다립니다.</h4>
              <nuxt-link to="/judges" class="btn btn-lg btn-primary" role="button">지금 판결하기</nuxt-link>
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
