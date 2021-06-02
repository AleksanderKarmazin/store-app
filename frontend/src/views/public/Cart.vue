<template>
   <v-container flud class="">
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="5"> 
          <v-row class="text-h3 mb-15"> Shopping Cart</v-row>
          <v-row>
            <v-col>1 </v-col>
            <v-col>2 </v-col>
            <v-col>3 </v-col>
            <v-col>4 </v-col>
            <v-col>5 </v-col>
          </v-row>
        </v-col>
        
        
        <v-col cols="3">
          <v-card 
          max-width="700"
          min-height="400"
        >
        <v-row><div class="text-h4 pa-5 ma-5">Information about order</div></v-row>
        <v-row>
          <div class="text-h4 pa-5 ma-5">Subtotal (3) items</div>
        </v-row>
        <v-row>
          <div class="text-h4 px-5 mx-5">Total payable</div>
        </v-row>
        <v-row><v-card-actions 
            class="justify-start">
            <v-btn
              text
              x-large
              class="ma-5"
              color="deep-purple accent-4"
              @click="$router.push(`/cart/${productcard._id}?qty=${slectedQty || 1}`)"
            >
              <h4>SUBMIT</h4>
            </v-btn>
          </v-card-actions></v-row>
        </v-card>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      productId: this.$route.params.id,
      productQty: location.search ? Number(location.search.split('=')[1]) : 1

    }
  },mounted() {
    console.log("productId", this.productId)
    console.log("productQty", this.productQty )
  },

    
  

}
</script>

<style>

</style>