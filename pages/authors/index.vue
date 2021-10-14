<template>
  <div class="mt-4">
    <v-row>
      <v-col>
        <nuxt-link class="white--text text-decoration-none" to="/">
          <v-icon class="white--text"> mdi-arrow-left </v-icon>Back
        </nuxt-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1 class="text-center">Authors</h1>
      </v-col>
    </v-row>
    <div v-if="authors.length>0">
      <v-row v-for="(author, index) in authors" :key="index">
        <v-col>
          <Author :author="author" />
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row>
        <v-col>
          <h2 class="text-center">There are no authors to display</h2>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authors: [],
    };
  },
  mounted() {
    this.getAllAuthors();
  },
  methods: {
    async getAllAuthors() {
      const hostname = "https://crud-books-server.herokuapp.com/api/authors";
      const response = await fetch(hostname + "/all");
      const authors = await response.json();
      this.authors = authors;
    },
  },
};
</script>
