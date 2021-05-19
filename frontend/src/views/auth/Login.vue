<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="5"
    >
    <v-card>
      <v-card-title class="blue">
        <span class="headline white--text">Welcome back</span>
          <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="pt-4">
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                  prepend-icon="person"
                  label="Enter your e-mail address"
                  v-model="email"
                  type="Email" 
                  required
                ></v-text-field>
                <v-text-field
                  name='password'
                  prepend-icon="lock"
                  label="Enter your password"
                  v-model="password"
                  min="8"
                  :append-icon="e1 ? 'visibility_off' : 'visibility'"
                  :append-icon-cb="() => (e1 = !e1)"
                  :type="e1 ? 'password' : 'text'"
                  :rules="passwordRules"
                  @click:append="() => (e1 = !e1)"
                  :counter="6"
                  required
                ></v-text-field>
                <v-layout justify-space-between>
                  <v-btn
                    :loading="loading"
                    @click="onSubmit"
                    :class="{ 
                      'blue darken-4 white--text': valid,
                      disabled: !valid || loading,
                    }"
                    >Login</v-btn
                  >
                  <p class="center">
                    Not registered yet?
                    <v-btn color="success" class="white--text" to="/registration">
                      Registration
                    </v-btn>
                  </p>
                </v-layout>
              </v-form>
              </v-card-text>
        </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      // v-model="email"
      email: "",
      // v-model="password"
      password: "",
      valid: false,
      e1: false,
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 6) ||
          "Password must be equals or more than 6 characters",
        (v) =>
          (v && v.length <= 8) ||
          "Password must not be equals or more than 9 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
    };
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password,
        };
        this.$store.dispatch('loginUser', user)
        .then(()=>{
          this.$router.push('/home')
        })
        .catch(() => {
          
        })

      }
    },
    clearErorr () {
      this.$store.dispatch('clearError')
    }
  }, 
  created() {
    if (this.$route.query['loginError']) {
      this.$store.dispatch('setError','Please log in to access this page!')
  } 
  },
};
</script>

<style></style>
