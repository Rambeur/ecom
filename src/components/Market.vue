<template>
    <v-container class="grey lighten-5">
        <v-row v-for="n in 12"
            :key="n"
            cols="12"
            sm="4">
        <v-col>
            <v-card
                class="mx-auto"
                flat
            >
                <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                    Article {{n}}
                    </v-list-item-title>
                    <v-list-item-subtitle>Description de l'artcle {{n}} </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                ></v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                <v-btn
                    outlined
                    rounded
                    text
                >
                    Add to Cart
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'Market',
  components: {
  },
  data: () => ({
  }),
};
</script>
