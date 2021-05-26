<template>
  <!-- <h1>{{productcard}}</h1> -->
  <v-row class="main-cards-color ma-0">
    <v-row class="main-block  ma-5" align="center" justify="center"
      ><h1><strong>CONSUMER</strong></h1></v-row
    >
    <v-row>
      <div class="text-center mx-15 px-15 py-7"> <h2>
        No need to visit field to get grains!!! Just order here and and get all
        kinds of garins deliverd at your doorstep. Why to wait? Go and order.</h2>

      </div>
    </v-row>
    <v-col>
      <v-card class="mx-auto ma-3" max-width="400" min-height="200">
        <v-img
          class="white--text align-end ma-2"
          contain
          height="350"
          max-height="450"
          max-width="450"
          :src="VUE_BASE_URL + productcard.image"
        >  
        </v-img>
      </v-card>
          <v-col>
      <v-card class="mx-auto ma-3" max-width="400" min-height="200">
          <v-card-title class="black--text align-center justify-center ma-2 py-3">
           <h2>{{ productcard.prod_name }}</h2> 
            </v-card-title>
        <v-card-subtitle class="pa-0 text-center">
          <h2>Price: {{ productcard.price | currency('USD')}}</h2>
        </v-card-subtitle>
        <v-card-subtitle class="pa-0 text-center">
          <h2>Product size: {{ productcard.prod_size }}</h2>
        </v-card-subtitle>
        <v-card-text class="text--primary text-center">
          <div>Location: {{productcard.avalaible_location}}</div>
        </v-card-text>
      </v-card>
    </v-col>
    </v-col>
        <v-col>
      <v-card class="mx-auto ma-3" max-width="400" min-height="200">
        <v-img
          class="white--text align-end ma-2"
          contain
          height="350"
          max-height="450"
          max-width="450"
          :src="VUE_BASE_URL + productcard.image"
        >
          
        </v-img>
          <v-card-title class="black--text align-center justify-center ma-2 py-3">
           <h2>{{ productcard.prod_name }}</h2> 
            </v-card-title>
        <v-card-subtitle class="pa-0 text-center">
          <h2>Price: {{ productcard.price | currency('USD')}}</h2>
        </v-card-subtitle>
        <v-card-subtitle class="pa-0 text-center">
          <h2>Product size: {{ productcard.prod_size }}</h2>
        </v-card-subtitle>
        <v-card-text class="text--primary text-center">
          <div>Location: {{productcard.avalaible_location}}</div>
        </v-card-text>
        <v-card-actions class="justify-center">
           <v-btn text x-large class="ma-5" color="deep-purple accent-4" 
           @click="$router.push('/product-card/' + card._id)"
           >
            <h2>Preview here</h2>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name:"product-card",
  data() {
    return {
        productcard: [],
        VUE_BASE_URL: "http://localhost:5000/uploads",

    }
  },
  async mounted() {
    
    const getConsumerdById =  await this.$store.dispatch(
      'getConsumerById', {_id:this.$route.params.id }
      )
      this.productcard = getConsumerdById 

  },
}
</script>

<style>

</style>