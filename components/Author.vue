<template>
  <v-card class="shadow bg-body rounded mb-4">
    <v-row align="center">
      <v-col cols="8">
        <v-card-title>{{ author.first_name }} {{ author.last_name }}</v-card-title>
       
      </v-col>
      <v-col cols="4">
        <v-card-actions>
          <nuxt-link
            class="text-decoration-none mr-2"
            :to="`/authors/${author._id}`"
            ><v-btn class="cyan darken-1 white--text">See Details</v-btn></nuxt-link
          >

          <nuxt-link
            class="text-decoration-none"
            :to="`/authors/${author._id}/edit`"
            ><v-btn class="teal lighten-2 white--text">Update</v-btn></nuxt-link
          >
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
};
</script>
