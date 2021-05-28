<template>
  <v-container class="align-center justify-center pa-10 ma-10">
    <v-row
      ><v-btn
        text
        x-large
        class="ma-5"
        color="deep-purple accent-4"
        @click="$router.push('/consumer')"
      >        
      <div class="text-h3">Go back</div> 
      </v-btn>
    </v-row>
    <v-row class="align-center justify-center">
      <v-col>
        <v-img
          class="white--text align-end ma-10"
          contain
          height="650"
          max-height="650"
          max-width="650"
          :src="VUE_BASE_URL + productcard.image"
        >
        </v-img>
      </v-col>
      <v-col class="text-center">
        <v-row> 
        <div class="text-h1 text-center pa-5">  {{ productcard.prod_name }}</div> 
        </v-row>
        <v-row> 
        <div class="text-h4 text-center pa-5">Seller:  {{ productcard.seller_name }}</div> 
        </v-row>
        <v-row> 
        <div class="text-h4 text-center pa-5">Price:  {{ productcard.price }}</div> 
        </v-row>
                <v-row> 
        <div class="text-h6 text-center pa-5">Avalaible Location:  {{ productcard.avalaible_location }}</div> 
        </v-row>
      </v-col>
      <v-col> 
        <v-card class="mx-auto ma-3" max-width="400" min-height="200">
        <v-row> 
        <div class="text-h4 text-center pa-5">Price:  {{ productcard.price }}</div> 
        </v-row>
        <v-row> 
        <div class="text-h4 text-center pa-5">Status: </div> 
        </v-row>
          <v-row> 
        <div class="text-h6 text-center pa-5"><v-select
          :items="qty"
          label="Qty"
        ></v-select></div> 
        </v-row>
            <v-card-actions class="justify-center">
            <v-btn
              text
              x-large
              class="ma-5"
              color="deep-purple accent-4"
              @click="$router.push('/product-card/' + card._id)"
            >
              <h2>Add To Cart</h2>
            </v-btn>
          </v-card-actions>
          </v-card> </v-col>
    </v-row>

    <!-- <v-row class="main-cards-color ma-0">
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
            <v-card-title
              class="black--text align-center justify-center ma-2 py-3"
            >
              <h2>{{ productcard.prod_name }}</h2>
            </v-card-title>
            <v-card-subtitle class="pa-0 text-center">
              <h2>Price: {{ productcard.price | currency("USD") }}</h2>
            </v-card-subtitle>
            <v-card-subtitle class="pa-0 text-center">
              <h2>Product size: {{ productcard.prod_size }}</h2>
            </v-card-subtitle>
            <v-card-text class="text--primary text-center">
              <div>Location: {{ productcard.avalaible_location }}</div>
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
          <v-card-title
            class="black--text align-center justify-center ma-2 py-3"
          >
            <h2>{{ productcard.prod_name }}</h2>
          </v-card-title>
          <v-card-subtitle class="pa-0 text-center">
            <h2>Price: {{ productcard.price | currency("USD") }}</h2>
          </v-card-subtitle>
          <v-card-subtitle class="pa-0 text-center">
            <h2>Product size: {{ productcard.prod_size }}</h2>
          </v-card-subtitle>
          <v-card-text class="text--primary text-center">
            <div>Location: {{ productcard.avalaible_location }}</div>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              text
              x-large
              class="ma-5"
              color="deep-purple accent-4"
              @click="$router.push('/product-card/' + card._id)"
            >
              <h2>Preview here</h2>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  name: "product-card",
  data() {
    return {
      productcard: [],
      VUE_BASE_URL: "http://localhost:5000/uploads",
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      qty:[]
    };
  },
  async mounted() {
    const getConsumerdById = await this.$store.dispatch("getConsumerById", {
      _id: this.$route.params.id,
    });
    this.productcard = getConsumerdById;
    console.log(this.productcard)

    this.qty = [...Array(this.productcard.quantity).keys()]

    console.log("qty " , this.qty)



  },
};
</script>

<style></style>
