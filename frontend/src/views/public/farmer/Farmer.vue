<template>
  <v-row class="main-cards-color ma-0">
     <v-row class="main-block  ma-5"
      align="center"
      justify="center"
       ><h1> <strong>FARMER</strong> </h1></v-row>
       <v-row
       > <div class="text-center mx-15 px-15 py-7"> <h2>
         If you are a farmer then you are at perfect platfrom from where you can order 
         all of your farming related products and you can sell your production also.</h2>
         </div>
         </v-row>
    <v-col v-for="(card, indx) in cardItems" :key="indx">
      <v-card class="mx-auto ma-3" max-width="400" min-height="200">
        <v-card-text >
          <p style="height: 20px " class="text-h5 text--primary text-center ma-8">
            {{ card.title }}
          </p>
          <v-container fluid>
            <v-layout justify-center align-center>
              <v-flex shrink>
                <v-img
                  flat
                  contain
                  height="350"
                  max-height="450"
                  max-width="450"
                  :src="card.src"
                ></v-img>
              </v-flex>
            </v-layout>
          </v-container>
          <div class="text--primary">
            {{ card.desc }} {{ card.src}}
          </div>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn text x-large class="ma-5" color="deep-purple accent-4" to="/">
            <h2>Learn More</h2>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// import moduleName from '../../../../public/heavy.svg'
export default {
  data() {
    return {
      cardItems: [
        {
          title: "Purchase Seeds, Pesticides & Fertilizer",
          desc:
            "If you are a farmer then you are at perfect platfrom \
          from where you can order all of your farming related products and you can sell your production also.",
          src:'/almond.jpg'
        },
        {
          title: "Sell Your Producing Material through Us",
          desc:
            "Sell your wide variety of products related to farming,\
          through our platform. We have millions of farmers connected from all parts of country.",
          src:'/mogra_rice.jpg'
        },
        {
          title: "Lend All of Heavy Machine And Tractros",
          desc:
            "No need to visit field to get grains!!! Just order here \
          and and get all kinds of grains deliverd at your doorstep. Why to wait? Go and order.",
          src:'/rowcrop.jpg'
        },
      ],
    };
  },
};
</script>

<style></style>
