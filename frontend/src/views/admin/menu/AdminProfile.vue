<template> 
   <v-container fluid>
      <v-row >
        <v-col cols='3'> <h1>ADMIN PROFILE</h1></v-col>
        <v-col cols='9' align="center" justify="center" ><h1>Tools to administrate platform</h1></v-col>
      </v-row>
      <v-row >
        <v-col cols='2'> <AdminMenu></AdminMenu> </v-col>
        <v-col cols='10'>
            Main content
        </v-col>
      </v-row>
    </v-container>
</template>


<script>
import AdminMenu from '../../../components/pages/admin/adminMenu.vue'
export default {
  components: { AdminMenu },
    
}
</script>

<style>

</style>