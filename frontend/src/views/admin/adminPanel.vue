<template> 
   <v-container fluid>
      <v-row >
        <v-col cols='2'> <h1>ADMIN PANEL</h1></v-col>
        <v-col cols='10' align="center" justify="center" ><h1>Tools to administrate platform</h1></v-col>
      </v-row>
      <v-row >
        <v-col cols='2'> <AdminMenu></AdminMenu> </v-col>
        <v-col cols='10'>
           <v-row>
             <v-col cols='4'>
               <v-img 
               contain
               height=100
               src="../../../public/chart2.png"></v-img>
               <div class="text-center">1. Dashbord</div>
               </v-col>
               <v-col cols='4'>
               <v-img 
               contain
               height=100
               src="../../../public/profile.png"></v-img>
               <div class="text-center">2. Administrater profile </div>
               </v-col>
               <v-col cols='4'>
               <v-img 
               contain
               height=100
               src="../../../public/users.png"></v-img>
               <div class="text-center">3. User list </div>
               </v-col>
           </v-row>
           <v-row>
             <v-col cols='4'>
               <v-img 
               contain
               height=100
               src="../../../public/prod.png"></v-img>
               <div class="text-center"> 4. Product list</div>
               </v-col>
               <v-col cols='4'>
               <v-img 
               contain
               height=100
               src="../../../public/product.png"></v-img>
               <div class="text-center">5. Order list </div>
               </v-col>
               <v-col cols='4'>
               <v-img 
               contain
               height=100
               src="../../../public/settings.png"></v-img>
               <div class="text-center">6. Settings </div>
               </v-col>
           </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>


<script>
import AdminMenu from '../../components/pages/admin/adminMenu.vue'
export default {
  components: { AdminMenu },
    
}
</script>

<style>

</style>