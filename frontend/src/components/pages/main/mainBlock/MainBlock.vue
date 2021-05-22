<template>
    <v-row class="main-block"
      align="center"
      justify="center" >
       <v-row class="main-block"
      align="center"
      justify="center" 
      
       ><h1> <strong>COMPREHENSIVE SERVICES</strong> </h1></v-row>
       <v-row
       > <div class="text-center">Lorem ipsum, dolor sit amet consectetur 
         adipisicing elit. Quaerat amet error ducimus ad, 
         similique officia?Lorem ipsum, dolor sit amet consectetur 
         adipisicing elit. Quaerat amet error ducimus ad, 
         similique officia?Lorem ipsum, dolor sit amet consectetur 
         adipisicing elit. Quaerat amet error ducimus ad, 
         similique officia?Lorem ipsum, dolor sit amet consectetur 
         adipisicing elit. Quaerat amet error ducimus ad, 
         similique officia?Lorem ipsum, dolor sit amet consectetur 
         adipisicing elit. Quaerat amet error ducimus ad, 
         similique officia?Lorem ipsum, dolor sit amet consectetur 
         adipisicing elit. Quaerat amet error ducimus ad, 
         similique officia? </div>
         </v-row>
        <v-row>
          <v-col class="ma-5" v-for="(i, indx) in blockItems" :key="indx">
            <v-row class="ma-5"
                align="center"
                justify="center" 
            
            ><h2>{{i.title}}</h2></v-row>
            <v-row 
                align="center"
                justify="center" 
            class="text-center ma-5">
            <v-img
              flat
              contain
              height="250"
              max-height="250" 
              max-width="200"
              :src="i.src"
            ></v-img>
            </v-row>
            <v-row 
                align="center"
                justify="center" 
            class="text-center ma-5"> <p>{{i.desc}}</p></v-row>
          </v-col>
        </v-row>
        </v-row>
</template>

<script>
export default {
  data() {
    return {
        blockItems:[
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
            src:'/gardening.svg'
          },
          {
            title: 'Supplier', 
            desc: 'Now you produce. And we are here to sell \
            your product. Just list your sell, and get proper pay for it.',
            src:'/supplier.svg'
          },
                    {
            title: 'Consumer', 
            desc: 'Why to visit Super Store and Pay High? \
            Order all products and get deliver at your doorstep.',
            src:'/consumer.svg'
          },
        ]
    }
  },
}
</script>

<style>

</style>