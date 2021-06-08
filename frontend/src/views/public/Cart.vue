<template>
   <v-container flud>
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="8"> 
          <v-row class="text-h3 mb-15"> Shopping Cart</v-row>
          <v-row v-for="(p, idx) in products" :key="idx">
            <v-col>
              <v-img
                    class="white--text align-end ma-2"
                    contain
                    max-height="170"
                    max-width="170"
                    :src="VUE_BASE_URL + p.image"
                  >
                  </v-img>
              
            </v-col>
            <v-col><router-link :to="'/product-card/' + p._id">
              <div class="text-h6">{{p.name}}</div></router-link>
            </v-col>
            <v-col>
              <div class="text-h6">{{p.price | currency('USD')}}</div>
            </v-col>
            <v-col>
              <!-- <v-row>
                <v-col cols="4">
                  <v-btn
              icon
              color="deep-purple accent-4"
              @click="count++"
            >
              <v-icon>shopping_cart</v-icon>
            </v-btn>
                </v-col>
                <v-col cols="4">{{count}}</v-col>
                <v-col cols="4">1</v-col>
              </v-row> -->
              <div class="text-h6 justify-center pa-5"><v-select
                  :items="qty"
                  label="Qty"
                  @change="selectionChange"
                  :v-model="slectedQty"
                  item-value="value"
                ></v-select></div> 
            </v-col>
            <v-col>
                             <v-btn
              icon
              color="deep-purple accent-4"
              @click="deleteFromeCart(p._id)"
            >
              <v-icon>delete</v-icon>
            </v-btn>
              </v-col>
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
        <v-col cols="1"></v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      productId: this.$route.params.id,
      productQty: location.search ? Number(location.search.split('=')[1]) : 1,
      product:[],
      VUE_BASE_URL: "http://localhost:5000/uploads",
      qty:[],
      slectedQty: undefined,
      count:0


    }
  },
  async mounted() {
    console.log("productId", this.productId)
    console.log("productQty", this.productQty )
    const res = await this.$store.dispatch("getProduct");
    console.log("res Product Catalog", res);
    const product = this.$store.getters.getCartItems;
    this.product = product;
    console.log("store", this.product);
    

    this.qty = [...Array(10).keys()].map(x=> x + 1)
    console.log('this.qty', this.qty )
  },
  methods: {
    selectionChange(e){
      this.slectedQty = e
        console.log('slectedQty', this.slectedQty )
    },
    deleteFromeCart(id){
      this.$store.dispatch("deleteFromCart", id);
    },
  },
  computed: {
        products () {
            return this.$store.getters.getCartItems
        }
    },

  

}
</script>

<style>

</style>