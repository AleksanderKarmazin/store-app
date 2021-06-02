<template>
  <v-container   class="align-center justify-center pa-15 ma-15">
    <v-row
      ><v-btn
        text
        x-large
        class="ma-5"
        color="deep-purple accent-4"
        @click="$router.push('/catalog')"
      >        
      <div class="text-h3">Go back</div> 
      </v-btn>
      </v-row>
      <v-row class="align-center justify-center">
      <v-col>
        <v-img
          class="white--text align-end ma-10"
          contain

          max-height="450"
          max-width="450"
          :src="VUE_BASE_URL + productcard.image"
        >
        </v-img>
      </v-col>
      <v-col class="text-center">
        <v-row> 
        <div class="text-h3 text-center pa-5">  {{ productcard.name }}</div> 
        </v-row>
        <v-row> 
        <div class="text-h4 text-center pa-5">Price:  {{ productcard.price | currency('USD')}}</div> 
        </v-row>
        <v-row> 
        <div class="text-h6 text-start pa-5"> Description:  {{ productcard.description }}</div> 
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
        <div class="text-h6 justify-center pa-5"><v-select
          :items="qty"
          label="Qty"
          @change="selectionChange"
          :v-model="slectedQty"
          item-value="value"
        ></v-select></div> 
        </v-row>
            <v-card-actions 
            class="justify-start">
            <v-btn
              text
              x-large
              class="ma-5"
              color="deep-purple accent-4"
              @click="$router.push(`/cart/${productcard._id}?qty=${slectedQty || 1}`)"
            >
              <h2>Add To Cart</h2>
            </v-btn>
          </v-card-actions>
          </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-card 
          max-width="700"
          min-height="400"
        >
        <v-row><div class="text-h4 pa-5 ma-5">Write a Customer Review</div></v-row>
        <v-row><v-select 
          class="px-5 mx-5"
          :items="ratingValues"
          label="Rating"
          @change="ratingOnChange"
          :v-model="slectedRating"
          item-value="value"
        ></v-select></v-row>
        <v-row>
          <v-textarea 
          class="pa-5 ma-5"
          outlined
          name="input-7-4"
          label="Comment"
        ></v-textarea>
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
      <v-col cols="8">
        <v-row class="text-h3 text-center py-15 px-5 mx-10">Reviews</v-row>
        <v-row 
        v-for="(rew, i) in productcard.reviews" :key="i"
        class="text-h6 text-center  px-5 mx-5"
        > <v-col>
          <v-row>{{rew.name}}</v-row>
          <v-row>{{rew.rating}}</v-row>
          <v-row>{{rew.updatedAt | date('date')}}</v-row>
          <v-row>{{rew.comment}}</v-row>
          </v-col>
        </v-row>
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
      slectedQty: undefined,
      ratingValues: [                                         
                '1 - Poor',
                '2 - Fair',
                '3 - Good',
                '4 - Very Good',
                '5 - Excellent'
      ],
      slectedRating: undefined

    };
  },
  async mounted() {
    const getProductdById = await this.$store.dispatch("getProductById", {
      _id: this.$route.params.id,
    });
    this.productcard = getProductdById;
    console.log(this.productcard)

    this.qty = [...Array(this.productcard.countInStock).keys()]

    console.log("qty " , this.qty)



  }, methods: {
    selectionChange(e){
      this.slectedQty = e
        console.log('slectedQty', this.slectedQty )
    },
    ratingOnChange(e){
      this.slectedRating = e
        console.log('slectedRating', this.slectedRating )
    }
  },
};
</script>

<style></style>
