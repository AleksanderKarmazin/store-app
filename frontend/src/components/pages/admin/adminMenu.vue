<template>
    <v-card
    class="mx-auto"
    min-width="200"
    min-height='400'
  >
    <v-list>
      <v-list-item-group v-model="model">
        <v-list-item :to="menu.link"
          v-for="(menu, i) in itemsMenu"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="menu.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content> 
            <v-list-item-title v-text="menu.text">
              
            </v-list-item-title>
           </v-list-item-content> 
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
name:'adminMenu',
data: () => ({
      itemsMenu: [
        {
          icon: 'stacked_bar_chart',
          text: 'Dashbord',
          link: '/dashbord',
        },
        {
          icon: 'person',
          text: 'Admin profile',
          link: '/adminProfile',
        },
        {
          icon: 'manage_accounts',
          text: 'User list',
          link: '/userlist',
        },
        {
          icon: 'list',
          text: 'Product list',
          link: '/productlist',
        },
        {
          icon: 'receipt_long',
          text: 'Order list',
          link: '/oderlist',
        },
        {
          icon: 'settings',
          text: 'Settings',
          link: '/settings',
        },
      ],
      model: 20,
    }),

}
</script>

<style>

</style>