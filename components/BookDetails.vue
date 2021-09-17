<template>

  <v-card class="shadow bg-body rounded mb-4
    mx-auto" max-width="400">
    <v-row>
      <v-col>
        <v-card-title>Title: {{ book.name }}</v-card-title>
        <v-card-text>ISBN: {{ book.isbn }}</v-card-text>
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
