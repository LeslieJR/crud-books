<template>
  <div>
    <h1 class="text-center mb-4">Author Details</h1>
    <v-card class="shadow bg-body rounded mb-4 mx-auto" max-width="400">
      <v-row>
        <v-col>
          <v-card-title
            >Name: {{ author.first_name }} {{ author.last_name }}</v-card-title
          >
          <div class="pb-0" v-if="books.length>0">
            <v-card-text
              >Books
              <div v-for="(book, index) in books" :key="index">
                <p>{{ book.name }}</p>
              </div>
            </v-card-text>
          </div>
          <div v-else>
            <v-card-text> There are no books to display </v-card-text>
            </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
    books: {
      type: Array,
    },
  },
};
</script>
