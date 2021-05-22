<template>
  <v-row class="main-cards-color ma-0">
    <v-col v-for="(i, indx) in cardItems" :key="indx">
      <v-card class="mx-auto ma-3" max-width="400" min-height="200">
        <v-card-text>
          <p class="display-1 text--primary text-center ma-8">
            {{ i.title }}
          </p>
          <v-container fluid>
            <v-layout justify-center align-center>
              <v-flex shrink>
                <v-img
                  flat
                  contain
                  height="250"
                  max-height="250"
                  max-width="200"
                  :src="i.src"
                ></v-img>
              </v-flex>
            </v-layout>
          </v-container>
          <div class="text--primary">
            {{ i.desc }}
          </div>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn text x-large class="ma-5" color="deep-purple accent-4">
            <h2>Learn More</h2>
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
      cardItems: [
        {
          title: "Farmer",
          desc:
            "If you are a farmer then you are at perfect platfrom \
          from where you can order all of your farming related products and you can sell your production also.",
          src:'/gardening.svg'
        },
        {
          title: "Supplier",
          desc:
            "Sell your wide variety of products related to farming,\
          through our platform. We have millions of farmers connected from all parts of country.",
          src:'/supplier.svg'
        },
        {
          title: "Consumer",
          desc:
            "No need to visit field to get grains!!! Just order here \
          and and get all kinds of grains deliverd at your doorstep. Why to wait? Go and order.",
          src:'/consumer.svg'
        },
      ],
    };
  },
};
</script>

<style></style>
