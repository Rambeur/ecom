<template>
  <v-app>
        <router-view/>
    <v-app-bar app  color="primary" dark fixed>
      E-Com
      <v-spacer></v-spacer>
      <v-btn href="/cart">
        <v-icon>
          mdi-cart-variant
        </v-icon>
        Shop
      </v-btn>
    </v-app-bar>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
};
</script>
