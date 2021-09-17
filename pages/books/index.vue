<template>
  <div>
    <v-row class="mt-4">
      <v-col>
        <nuxt-link to="/authors/new">Create Author</nuxt-link>
      </v-col>
      <v-col>
        <nuxt-link to="/new">Create Book</nuxt-link>
      </v-col>
    </v-row>
    <v-row v-for="(book, index) in books" :key="index">
      <v-col>
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
  mounted() {
    this.getAllBooks();
  },
  methods: {
    async getAllBooks() {
      const hostname = "http://localhost:4000/api/books";
      const response = await fetch(hostname + "/all");
      const books = await response.json();
      this.books = books;
      console.log({ books });
    },
  },
};
</script>
