<template>
  <v-app>
    <NavDrawer :items="items" :drawer="drawer"></NavDrawer>
    <v-app-bar 
    absolute 
    inset 
    app 
    class="maincolor2"
    >
      <v-toolbar-title class="logo-space">
        <router-link to="/" teg="span">
          <img class="logo-size" src="../../public/target.svg"
        /></router-link>

        <router-link to="/" teg="span">
          <span class="pointer">
            <h1
            >STORE APP</h1>
          </span>
        </router-link>
      </v-toolbar-title>
      <v-app-bar-nav-icon
        class="logo-size-d"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text v-if="user && admin">
          <v-badge :content="messages" :value="messages" color="blue" overlap>
            <v-icon x-large left>admin_panel_settings</v-icon></v-badge
          >
          <h3>admin panel</h3>
        </v-btn>
        <v-btn icon text v-if="user">
          <v-badge :content="messages" :value="messages" color="red" overlap>
            <v-icon>email</v-icon></v-badge
          >
        </v-btn>
        <v-btn icon text @click="(messages = 23), (show = true)" v-if="user">
          <v-badge :content="messages" :value="messages" color="green" overlap>
            <v-icon>shopping_cart</v-icon></v-badge
          >
        </v-btn>
        <v-btn icon text @click="(messages = 0), (show = false)" v-if="user">
          <v-badge :content="messages" :value="messages" color="green" overlap>
            <v-icon>mdi-heart</v-icon></v-badge
          >
        </v-btn>
        <v-btn icon text @click="messages = 0" v-if="user">
          <v-badge :content="messages" :value="messages" color="green" overlap>
            <v-icon>notifications</v-icon></v-badge
          >
        </v-btn>
        <v-list
        v-if="!user"
        style="background: none;
        align-items: center;
        display: flex;"

        >
            <v-list-item  to="/login">
              <v-list-item-icon>
            <v-icon>
                login
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
          </v-list-item>
          </v-list>
          <v-list
          style="background: none;
          align-items: center;
          display: flex;"
          v-if="!user"
          >
            <v-list-item  to="/registration">
              <v-list-item-icon>
            <v-icon>
                how_to_reg
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Registration</v-list-item-title>
          </v-list-item-content>
            </v-list-item>
        </v-list>
      </v-toolbar-items>
      <div class="text-center" v-if="user">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-list-item two-line v-bind="attrs" v-on="on">
              <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/women/81.jpg" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  ><v-badge :content="messages" :value="messages" color="green"
                    >Jane Smith</v-badge
                  ></v-list-item-title
                >
                <v-list-item-subtitle>Logged In</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid fill-height>
        
            <!-- If using vue-router -->
            <router-view></router-view>
         
      </v-container>


     
    </v-main> 
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "../components/layouts/Footer.vue";
import NavDrawer from "../components/layouts/NavDrawer.vue";
import messages from "../utils/messages";

export default {
  components: { NavDrawer, Footer },
  name: "blank-auth-layout",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      messages: 0,
      show: false,
    };
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    user() {
      return this.$store.getters.isUserLoggedIn;
    },
    admin() {
      console.log(this.$store.getters.user)
     return this.$store.getters.user.isAdmin;
    },
  },
  methods: {},
  mounted() {},
  watch: {
    error(error) {
      switch (error) {
        case "Invalid email or password":
          this.$error(messages.unvalidCredentials || "Что - то пошло не так ");
          break;
        case "User already exists":
          this.$error(messages.userAlreadyExist || "Что - то пошло не так ");
          break;
        default:
          this.$error(this.$store.getters.user.name);
          break;
      }
    },
  },
};
</script>

<style scoped></style>
