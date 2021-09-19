<template>
  <div>
    <v-row class="mt-4">
      <v-col cols="3">
        <v-btn href="/authors/new">
          Create Author
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn href="/new">
          Create Book
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1 class="text-center">Books</h1>
      </v-col>
    </v-row>
    <v-row v-for="(book, index) in books" :key="index">
      <v-col>
        <Book :book="book" />
      </v-col>
    </v-row>
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
