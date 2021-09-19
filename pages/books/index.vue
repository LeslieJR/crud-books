<template>
  <div>
    <v-row class="mt-4">
      <v-col cols="3">
        <v-btn href="/authors/new">
          1. Create Author
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn href="/new">
          2. Create Book
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1 class="text-center">Books</h1>
      </v-col>
    </v-row>
    <div v-if="books.length>0">
      <v-row v-for="(book, index) in books" :key="index">
        <v-col>
          <Book :book="book" />
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row>
        <v-col>
          <h2 class="text-center">There are no books to display</h2>
        </v-col>
      </v-row>
    </div>
    <v-row>
      <v-col>
        <v-btn href="/authors">
          See All Authors
        </v-btn>
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
  async mounted() {
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
