<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="5"
    >
    <v-card>
      <v-card-title class="cyan darken-1">
        <span class="headline white--text">Sarah Mcbeal</span>
          <v-spacer></v-spacer>
            </v-card-title>
              <v-card-text class="pt-4">
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                  prepend-icon="person"
                  label="Enter your name"
                  v-model="name"
                  type="text"
                  required
                ></v-text-field>
                <v-text-field
                  prepend-icon="person"
                  label="Enter your e-mail address"
                  v-model="email"
                  type="Email"
                  :rules="emailRules"
                  required
                ></v-text-field>
                <v-text-field
                  prepend-icon="lock"
                  label="Enter your password"
                  v-model="password"
                  min="8"
                  :append-icon="e1 ? 'visibility' : 'visibility_off'"
                  :append-icon-cb="() => (e1 = !e1)"
                  :type="e1 ? 'password' : 'text'"
                  :rules="passwordRules"
                  @click:append="() => (e1 = !e1)"
                  :counter="6"
                  required
                ></v-text-field>
                <v-text-field
                  name="confirm-password"
                  prepend-icon="lock"
                  label="Confirm your password"
                  v-model="confirmPassword"
                  min="8"
                  :append-icon="e1 ? 'visibility' : 'visibility_off'"
                  :append-icon-cb="() => (e1 = !e1)"
                  :type="e1 ? 'password' : 'text'"
                  :rules="confirmPasswordRules"
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
                    >Create account</v-btn
                  >
                  <a href="">Forgot Password</a>
                </v-layout>
              </v-form>
          </v-card-text>
      <!-- </v-flex>
    </v-layout>
  </v-container> -->
        </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      name:"",
      // v-model="email"
      email: "",
      // v-model="password"
      password: "",
      // v-model="confirmPassword"
      confirmPassword: "",
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
      confirmPasswordRules: [
          v => !!v || "Password is required",
          v => v === this.password || "Password must be equal",
      ]
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
          name: this.name,
          email: this.email,
          password: this.password,
          
        };

        this.$store.dispatch('registerUser', user)
        .then(()=>{
          this.$router.push('/')
        })
        .catch(() => {

        })

      }
    },
    clearErorr () {
      this.$store.dispatch('clearError')
    }
  },
};
</script>

<style></style>
