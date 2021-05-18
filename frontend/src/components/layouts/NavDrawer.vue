<template>
    <v-navigation-drawer v-model="drawer"
        app
        left
        absolute
        height="100%"
        >
      
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
            <v-divider></v-divider>
            <v-list dense>
                <v-list-item
                v-for="item in items"
                :key="item.title"
                >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
    name:'nav-drawer',
    props: ["items", "drawer"],
    data() {
        return {
            // drawer: false,
        }
    },
}
</script>

<style>

</style>