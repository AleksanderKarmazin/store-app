<template>
  <div>
    
  <div class="page-title"><h1>Главная страница приложения</h1></div>

</div>
</template>

<script>
// import messages from '../utils/messages'
// import HomeBill from '../components/HomeBill'
// import HomeCurrency from '../components/HomeCurrency'


export default {
  name:'homePage',
  data: () => ({
    loading:false,
    currency: null,
    pesentDone: 0,
    currentGoal: 0,
    bar: false
  }),
  // async mounted() {
  //   this.currency = await this.$store.dispatch('frtchCurrency')
  //   await this.$store.dispatch('getAccount')
  //   this.pesentDone = this.$store.getters.persentageFullfilment
  //   this.currentGoal = this.$store.getters.getFinancialGoalInRub
  //   this.loading = false
  // }, 
  methods: {
    async refresh() {
      this.loading = true;
      // this.currency = await this.$store.dispatch('frtchCurrency')
      this.loading = false
    },
    show_chart() {
      this.bar = !this.bar
    }


  },

  components:{ 
  // HomeBill,
  // HomeCurrency

  
  },

}
</script>

<style>

</style>




