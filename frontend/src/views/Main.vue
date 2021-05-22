<template>
  <v-container fluid class="ma-0 pa-0">
    <Carousel></Carousel>
    <MainCard></MainCard>
    <MainBlock></MainBlock>
    </v-container>
</template>

<script>
// import * as almias from '../../../../public/heavy.svg'
// import * as almihgas from '../../public/heavy.svg'

import Carousel from '../components/pages/main/Carousel.vue'
import MainBlock from '../components/pages/main/mainBlock/MainBlock.vue'
import MainCard from '../components/pages/main/mainCard/MainCard.vue'
export default {
  components: { Carousel, MainCard, MainBlock },
name:'main-page',
data () {
      return {
        // items:[
        //   {
        //     src: 'https://cdn1.ozone.ru/s3/sellerassets/wc1450_q80/98d71c25-b710-11eb-aeb2-c20a07c8fc3c.jpeg',
        //   },
        //   {
        //     src: 'https://cdn1.ozone.ru/s3/sellerassets/wc1450_q80/c7d85667-b983-11eb-8590-e2f408bd4a06.jpeg',
        //   },
        //   {
        //     src: 'https://cdn1.ozone.ru/s3/sellerassets/wc1450_q80/8e6159bf-a3ff-11eb-9a89-aea27fd94bcf.jpeg',
        //   },
        // ],
        cardItems:[
          {
            title: 'Heavy Machine', 
            desc: 'No need to worry of labour \
              costing more. Just rent all types of machine here!!',
            src:'/heavy.svg'
          },
          {
            title: 'Gardening Kits', 
            desc: 'We provides all of the gardening related \
            products i.e seeds, pestisides and heavy machine.',
            src:'/public/heavy.svg'
          },
          {
            title: 'Supplier', 
            desc: 'Now you produce. And we are here to sell \
            your product. Just list your sell, and get proper pay for it.',
            src:'/public/heavy.svg'
          },
                    {
            title: 'Consumer', 
            desc: 'Why to visit Super Store and Pay High? \
            Order all products and get deliver at your doorstep.',
            src:'/public/heavy.svg'
          },
        ]


      }
    },
}
</script>

<style>
.main-cards-color{
  /* background-color: rgb(238, 204, 153); */
  /* margin: 500px; */
  padding:  50px ;

}
.main-block{
    background-color: rgb(240, 235, 235);
    padding: 20px 70px;
    margin: 0;

}
</style>