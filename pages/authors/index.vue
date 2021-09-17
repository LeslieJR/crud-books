<template>
  <div class="mt-4">
    <v-row v-for="(author, index) in authors" :key="index">
      <v-col>
        <Author :author="author" />
      </v-col>
    </v-row>
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
      const hostname = "http://localhost:4000/api/authors";
      const response = await fetch(hostname + "/all");
      const authors = await response.json();
      this.authors = authors;
      console.log({ authors });
    },
  },
};
</script>
