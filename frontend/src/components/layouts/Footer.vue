<template>
    <v-footer 
    style="padding: 0;"
    absolute 
    app 
    height="auto" 
    width="auto" 
    class="py-0"
  >
    <v-card 
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal maincolor7">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 maincolor3"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    
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
    </v-card>
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
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
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