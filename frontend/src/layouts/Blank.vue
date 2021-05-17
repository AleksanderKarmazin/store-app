<template>
<!-- App.vue -->
<v-app>
  <v-navigation-drawer v-model="drawer" app>
    <!-- -->
  </v-navigation-drawer>

  <v-app-bar app color="blue accent-4 ">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- https://material.io/resources/icons/?icon=3d_rotation&style=baseline -->
      <v-toolbar-title>
        <router-link to="/" teg="span">
        
          <span class="pointer">STORE APP</span>
        </router-link>
      </v-toolbar-title>
      
      <v-app-bar-nav-icon @click="timeShow = !timeShow">
        <span class="material-icons pointer">
            access_time
        </span>
      </v-app-bar-nav-icon>
    <v-app-bar-nav-icon @click="btnShow = !btnShow">
        <span class="material-icons">
            check_box_outline_blank
            </span>
      </v-app-bar-nav-icon>
      <v-toolbar-title v-if="timeShow">
        <span class="wight-class">{{date | date('datetime')}}</span>
      </v-toolbar-title>

      
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="btnShow">
        <v-btn flat color="blue lighten-4">
          <v-icon left>bug_report</v-icon>
          Link One
        </v-btn>
        <v-btn flat color="blue lighten-3">Link One</v-btn>
        <v-btn flat color="blue lighten-2">Link One</v-btn>
        <v-btn flat color="blue lighten-1">Link One</v-btn>
      </v-toolbar-items> 
      <!-- <v-toolbar-items class="hidden-sm-and-down">
      <v-toolbar-items>
       <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          text
          color="blue lighten-4"
        >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn"  
          @click="logout"
          to="/login"
          text
          color="blue lighten-4"
        >
          <v-icon left>logout</v-icon>
          Logout
        </v-btn> 

      </v-toolbar-items>-->

      <v-btn icon>
        <!-- <v-icon>mdi-export</v-icon> -->
      </v-btn>
    </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main >

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
    
            
  </v-main>
  <v-card-text style="height: 100px; position: relative" v-if="btnShow">
<v-fab-transition>
              <v-btn
                v-show="!hidden"
                color="pink"
                dark
                absolute
                top
                right
                fab
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>
  <v-footer 

    color="primary lighten-1"
    padless
    app
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</v-app>
</template>

// <script>
import messages from '../utils/messages'


export default  {
    name: 'blank-layout',
      data() {
    return {
      drawer: false,
      timeShow:true,
      btnShow:false,
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
      date: new Date(),
        };
    },
    computed:{
        error () {
            return this.$store.getters.error

        }

    },
    mounted() {
    this.interval = 
    setInterval(() => {
      this.date = new Date()
    }, 1000);

    },
    watch: {
        error(error) {
            switch (error) {
                case 'Invalid email or password':
                    this.$error(messages.unvalidCredentials || 'Что - то пошло не так ')
                    break;
                case 'User already exists':
                    this.$error(messages.userAlreadyExist || 'Что - то пошло не так ')
                    break;
                default:
                    this.$error(this.$store.getters.user.name)
                    break;
            }
        }
    }
}

</script>

<style scoped>
.pointer {
  cursor: pointer;
  color: white;
}
.wight-class{
   color: white; 
   padding: 0 10px;
   }
</style>
