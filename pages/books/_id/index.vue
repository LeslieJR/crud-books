<template>
  <v-container class="mt-5 mb-5">
    <v-row>
      <v-col>
        <nuxt-link to="/books">All books</nuxt-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <BookDetails :book="book" />
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
      book: {},
    };
  },
  async mounted() {
    await this.getBook();
  },
  methods: {
    async getBook() {
      const hostname = "http://localhost:4000/api/books";
      const res = await fetch(hostname + "/book/" + this.id);
      const book = await res.json();
      this.book = book;
    },
  },
};
</script>