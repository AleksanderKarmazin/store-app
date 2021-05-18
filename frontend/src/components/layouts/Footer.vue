<template>
    <v-footer 

    absolute 
    app 
    height="auto" 
    width="auto" 
    class="py-3"
  >
    <v-row
      justify="center"
      no-gutter
      class="maincolor"
    >
      <v-btn
        v-for="(link, index) in footerLinks"
        :key="index"
        color="white"
        text
        rounded
        class="my-0"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="maincolor py-2 text-center white--text"
        cols="12"
      >
      
      <p v-if="timeShow">&copy; {{date | date('datetime')}}  
        <strong>STORE APP</strong>
        <span class="material-icons  group pa-0" @click="timeShow = !timeShow">
            <v-icon left>access_time</v-icon>
        </span></p>
        <p v-if="!timeShow">&copy; {{ new Date().getFullYear() }} 
          <strong>STORE APP</strong>
          <span class="material-icons group pa-0" @click="timeShow = !timeShow">
            <v-icon left>access_time</v-icon>
         </span>
          </p>
      </v-col> 
      
    </v-row>
  </v-footer>
</template>

<script>
export default {
    name:'footer-part',
    data() {
        return {
        footerLinks: [
            'Home',
            'About Us',
            'Team',
            'Services',
            'Blog',
            'Contact Us',
            ],
        timeShow:true,
        date: new Date(),
        }
    },

    mounted() {
    this.interval = 
    setInterval(() => {
      this.date = new Date()
    }, 1000);
    }
}
</script>

<style>

</style>