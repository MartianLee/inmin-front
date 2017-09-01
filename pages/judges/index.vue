<template>
  <div class="container">
    <div class="container">

      <h1 class="my-4 text-center text-lg-left">당신의 공정한 판결을 기다립니다.</h1>

      <div class="row text-center text-lg-left">

        <div v-for="(justice, index) in justices" class="col-lg-3 col-md-4 col-xs-6">
          <nuxt-link :to="'judges/' + justice.id" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" :src="justice.undertrialPhotoUrl" alt="">
            <h5>{{justice.undertrial}} {{justice.judgment}}</h5>
          </nuxt-link>
        </div>
        <div class="col-lg-3 col-md-4 col-xs-6">
          <a href="#" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="http://placehold.it/300x300" alt="">
            <h5> 국민 재판관들의 제보를 기다립니다.</h5>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import modal from '../../components/modal'
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
      }
    },
    fetch ({ store }) {
      return store.dispatch('judge/getJustices')
    },
    computed: mapState({
      justices: state => state.judge.justices
    }),
    components: {
      modal
    }
  }
</script>
<style>
</style>
