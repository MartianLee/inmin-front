<template>
  <div>
    <!-- Trigger the modal with a button -->
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" :data-target="dataTarget" @click="checkYear">선고하기
      <img class="hammer" src="../assets/judgement-hammer.png" alt=""></button>

    <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="text-center"><img :src="undertrialPhotoUrl"/></div>
          <div class="modal-header">
            <h4 class="modal-title">국민재판관 {{ judgeName }}님</h4>
          </div>
          <div class="modal-body">
            <p>다음과 같이 판결 선고. 주문 피고 이재용을 <b>{{ judgeYear }}년형</b>에 처한다.</p>
          </div>
          <div class="modal-footer">
            소셜 네트워크에서 공유해 다른 친구들도 판결하게 해주세요!
            <social-sharing :url="urlForShare" :description="descriptionForShare" :quote="descriptionForShare" inline-template>
              <div>
                <network network="facebook">
                  <i class="fa fa-facebook"></i> Facebook
                </network>
                <network network="googleplus">
                  <i class="fa fa-google-plus"></i> Google +
                </network>
                <network network="linkedin">
                  <i class="fa fa-linkedin"></i> LinkedIn
                </network>
                <network network="twitter">
                  <i class="fa fa-twitter"></i> Twitter
                </network>
              </div>
            </social-sharing>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      justiceId: null,
      judgeYear: null,
      judgeName: null,
      undertrialPhotoUrl: null
    },
    data () {
      return {
        urlForShare: 'inmin.me/judges/' + this.justiceId,
        dataTarget: null
      }
    },
    computed: {
      descriptionForShare: function () {
        return '다음과 같이 판결 선고. 주문 피고 이재용을 ' + this.judgeYear + '년형에 처한다.'
      }
    },
    components: {
    },
    methods: {
      checkYear () {
        if (!this.judgeName) {
          alert('재판관님의 이름을 입력해 주세요!')
          this.dataTarget = '#asdf'
        } else if (this.judgeYear < 0 || !this.judgeYear) {
          alert('0 이상의 값을 입력해 주세요!')
          this.dataTarget = '#asdf'
        } else if (this.judgeYear > 100) {
          alert('100 이하의 값을 입력해 주세요!')
          this.dataTarget = '#asdf'
        } else if (!Number.isInteger(this.judgeYear * 1)) {
          alert('숫자를 입력해 주세요!')
        } else {
          this.dataTarget = '#myModal'
          this.$store.dispatch('judge/addJudgement', { 'justiceId': this.justiceId, 'name': this.judgeName, 'penalty': this.judgeYear })
          .then(() => {
            return this.$store.dispatch('judge/getJudgements', this.justiceId)
          })
        }
      }
    }
  }
</script>
