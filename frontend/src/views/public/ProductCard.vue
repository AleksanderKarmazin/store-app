<template>
  <v-container class="align-center justify-center pa-5 ma-5">
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
        <div class="text-h3 text-center pa-5">  {{ productcard.prod_name }}</div> 
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
      <v-col class="ma-5"> 
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
          @change="selectionChange"
          :v-model="slectedQty"
          item-value="value"
        ></v-select></div> 
        </v-row>
            <v-card-actions class="justify-center">
            <v-btn
              text
              x-large
              class="ma-5"
              color="deep-purple accent-4"
              @click="$router.push(`/cart/${productcard._id}?qty=${slectedQty}`)"
            >
              <h2>Add To Cart</h2>
            </v-btn>
          </v-card-actions>
          </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "product-card",
  data() {
    return {
      productcard: [],
      VUE_BASE_URL: "http://localhost:5000/uploads",
      qty:[],
      slectedQty: undefined 
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



  }, methods: {
    selectionChange(e){
      this.slectedQty = e
        console.log('slectedQty', this.slectedQty )
    }
  },
};
</script>

<style></style>
