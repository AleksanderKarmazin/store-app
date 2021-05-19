<template>
  <div  id="app">
    <component :is="layout">
      <router-view></router-view>
   </component>
</div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout'
import MainLayout from './layouts/MainLayout'
import Blank from './layouts/Blank'
import MainLayout2 from './layouts/MainLayout2'
import BlankAuth from './layouts/BlankAuth.vue'



export default {
  computed: {
    layout(){
      console.log(this.$route.meta.layout)
      return (this.$route.meta.layout || 'empty' ) + '-layout'
    },
  },
  components:{
    EmptyLayout,
    'main2-layout': MainLayout2 , 
    MainLayout, 
    'blank-layout': Blank,
    'blank-auth-layout': BlankAuth
    
  },
   async mounted() {
    
    // this.$messages('TEST ')
    // this.$error('TEST ')
    // this.currency = await this.$store.dispatch('frtchCurrency')
    // await this.$store.dispatch('getAccount')
  },


  

}
</script>
<style>
/* @import '~materialize-css/dist/css/materialize.min.css'; */
@import './assets/index.css';
</style>
