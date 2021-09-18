<template>
  <div>
    <v-row class="mt-4">
      <v-col cols="3">
        <v-btn class="green lighten-1">
          <nuxt-link class=" white--text text-decoration-none" to="/authors/new">Create Author</nuxt-link>
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn class="green lighten-1">
          <nuxt-link class=" white--text text-decoration-none" to="/new">Create Book</nuxt-link>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="blue-grey lighten-5">
        <h1 class="text-center">Books</h1>
      </v-col>
    </v-row>
    <v-row v-for="(book, index) in books" :key="index">
      <v-col class="blue-grey lighten-5">
        <Book :book="book" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
    };
  },
  async created() {
    await this.getAllBooks();
  },
  methods: {
    //to get all existing books
    async getAllBooks() {
      const hostname = "http://localhost:4000/api/books";
      const response = await fetch(hostname + "/all");
      const books = await response.json();
      this.books = books;
    },
  },
};
</script>
