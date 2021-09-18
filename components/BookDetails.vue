<template>
  <div>
    <h1 class="text-center mb-4">Book Details</h1>
    <v-card class="shadow bg-body rounded mb-4
    mx-auto" max-width="400">
    <v-row>
      <v-col>
        <v-card-title>Title: {{ book.name }}</v-card-title>
        <v-card-text class="pb-0">ISBN: {{ book.isbn }}</v-card-text>
        <v-card-text>Author: {{book.author.first_name}} {{book.author.last_name}}</v-card-text>
      </v-col>
    </v-row>
  </v-card>
  </div>
  
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
