<template>
   <v-container class="">
      <v-row>
        <v-col> <div class="text-h1">Part 1 </div> </v-col>
        <v-col> <div class="text-h1">Part 2 </div> </v-col>
        <v-col> <div class="text-h1">Part 3 </div> </v-col>
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