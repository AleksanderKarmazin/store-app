<template>
<!-- App.vue -->
<v-app>
  <v-navigation-drawer v-model="drawer"
        app
        left
        absolute
        >
      
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>

  <v-app-bar app class="maincolor2">
      <!-- color="blue accent-4 " -->
      <!-- https://material.io/resources/icons/?icon=3d_rotation&style=baseline -->
      <v-toolbar-title class="logo-space">
        <router-link to="/" teg="span">
        <img 
        class="logo-size"
        src="../../public/target.svg"
        ></router-link>
        <router-link to="/" teg="span">
        <span class="pointer">
          <h5><strong>STORE APP</strong></h5>
          
          
          
          </span>
        </router-link>
      </v-toolbar-title>
      <v-app-bar-nav-icon class="logo-size" @click="drawer = !drawer"></v-app-bar-nav-icon>
      

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
      <v-toolbar-items class="hidden-sm-and-down">
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

      </v-toolbar-items>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
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
  <v-footer 

    color="primary lighten-1"
    padless
    app
  >
    <v-row
      justify="center"
      no-gutter
      class="maincolor"
    >
      <v-btn
        v-for="link in footerLinks"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="maincolor py-4 text-center white--text"
        cols="12"
      >
      <!-- class="primary lighten-2 " -->
      <p v-if="timeShow">&copy; {{date | date('datetime')}}  
        <strong>STORE APP</strong>
        <span class="material-icons  group pa-2" @click="timeShow = !timeShow">
            <v-icon left>access_time</v-icon>
        </span></p>
        <p v-if="!timeShow">&copy; {{ new Date().getFullYear() }} 
          <strong>STORE APP</strong>
          <span class="material-icons group pa-2" @click="timeShow = !timeShow">
            <v-icon left>access_time</v-icon>
         </span>
          </p>
      </v-col>
      
    </v-row>
  </v-footer>
</v-app>
</template>

// <script>
import messages from '../utils/messages'
// import messages from '../../public/target.svg'

export default  {
    name: 'blank-layout',
      data() {
    return {
      drawer: false,
      timeShow:true,
      btnShow:false,
      footerLinks: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
      date: new Date(),
      items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
      } 
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
  padding: 0 20px;
}
.pointer-f {
  cursor: pointer;
  color: white;
  padding: 0 20px;
}
.wight-class{
   color: white; 
   padding: 0 10px;
   }
.logo-size{
  
  height: 3rem;
  width: auto;
  margin: 5px 30px 5px 10px;
  
}
.logo-space{
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
