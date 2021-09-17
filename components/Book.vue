<template>
  <v-card class="shadow bg-body rounded mb-4">
    <v-row>
      <v-col cols="8">
        <v-card-title>{{ book.name }}</v-card-title>
      </v-col>
      <v-col cols="4">
        <v-card-actions>
          <v-btn class="primary">
            <nuxt-link class=" white--text text-decoration-none" :to="`/books/${book._id}`">See Details</nuxt-link>
          </v-btn>
          <v-btn class="teal">
            <a class="white--text">Update</a>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>
