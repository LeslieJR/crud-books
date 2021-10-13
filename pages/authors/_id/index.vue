<template>
  <v-container class="mt-5 mb-5">
    <v-row>
      <v-col>
        <nuxt-link class="white--text text-decoration-none" to="/authors">
          <v-icon class="white--text"> mdi-arrow-left </v-icon>Back
        </nuxt-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <AuthorDetails :author="author" :books="books"/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  asyncData(ctx) {
    const id = ctx.params.id;
    return {
      id,
    };
  },
  data() {
    return {
      author: {},
      books: []
    };
  },
  async mounted() {
    await this.getAuthor();
    await this.getBooks();
  },
  methods: {
    //to get the author
    async getAuthor() {
      const hostname = "http://localhost:4000/api/authors";
      const res = await fetch(hostname + "/author/" + this.id);
      const author = await res.json();
      this.author = author;
     
    },
    //to get the book of this author
    async getBooks(){
        const hostname = `http://localhost:4000/api/books/${this.id}/allBooks`;
        const res = await fetch(hostname);
        const books = await res.json();
        this.books = books;
      
    }
  },
};
</script>