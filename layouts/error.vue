<template>
  <div>
    <section class="content-wrapper">
      <div class="main-wrapper">
        <div>
          <h1 class="title">
            죄송합니다.
          </h1>
          <h2 class="subtitle">
            현재 지원하지 않는 기능입니다.
          </h2>
          <h3>
            기능 사용 문의는 INMINJAEPAN 으로 문의주시기 바랍니다.
          </h3>
          <button class="btn btn-large">
            <nuxt-link to="/">홈으로</nuxt-link>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    props: ['error'],
    layout: 'main'
  }
</script>

<style>
  .main-wrapper
  {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .title
  {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
  .subtitle
  {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  .links
  {
    padding-top: 15px;
  }
</style>
