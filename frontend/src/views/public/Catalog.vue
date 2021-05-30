<template>
  <v-row class="main-cards-color ma-0">
    <v-row class="main-block  ma-5" align="center" justify="center"
      ><h1><strong>CATALOG</strong></h1></v-row
    >
    <v-row>
      <div class="text-center mx-15 px-15 py-7"> <h2>
        No need to visit field to get grains!!! Just order here and and get all
        kinds of garins deliverd at your doorstep. Why to wait? Go and order.</h2>

      </div>
    </v-row>
    <v-col v-for="(card, indx) in product" :key="indx">
      <v-card class="mx-auto ma-3" max-width="400" min-height="200">
        <v-img
          class="white--text align-end ma-2"
          contain
          height="350"
          max-height="450"
          max-width="450"
          :src="VUE_BASE_URL + card.image"
        >
          
        </v-img>
          <v-card-title class="black--text align-center justify-center ma-2 py-3">
           <h2>{{ card.name }}</h2> 
            </v-card-title>
        <v-card-subtitle class="pa-0 text-center">
          <h2>Price: {{ card.price | currency('USD')}}</h2>
        </v-card-subtitle>
        <!-- <v-card-subtitle class="pa-0 text-center">
          <h2>Product size: {{ card.prod_size }}</h2>
        </v-card-subtitle> -->
        <!-- <v-card-text class="text--primary text-center">
          <div>Location: {{card.avalaible_location}}</div>
        </v-card-text> -->    
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
  data() {
    return {
      VUE_BASE_URL: "http://localhost:5000/uploads",
      product: [],
    };
  },

  async mounted() {
    const res = await this.$store.dispatch("getProduct");
    console.log("res Product Catalog", res);
    const product = this.$store.getters.getProduct;
    this.product = product;
    console.log("store", this.product);
    // 
    console.log("VUE_APP_BASE_URL", process.env.VUE_APP_BASE_URL);

  },
};
</script>

<style></style>
