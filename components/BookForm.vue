<template>
  <v-container>
    <v-row class="mt-4">
      <v-col>
        <nuxt-link to="/">All Books</nuxt-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="450">
          <v-card-title>BOOK FORM</v-card-title>
          <v-card-text>
            <v-text-field
              solo
              label="Book name"
              clearable
              v-model="name"
            ></v-text-field>
            <v-text-field
              solo
              label="ISBN"
              clearable
              v-model="isbn"
            ></v-text-field>
            <v-select 
              v-model="author"
              :authors="authors"
              label="Select author"
              dense
              solo
            ></v-select>

            <v-btn block class="primary" @click="saveBook">Create</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      authors: "",
      name: "",
      isbn: "",
      author: "",
    };
  },
  
  methods: {
    async getAllAuthors() {
      const hostname = "http://localhost:4000/api/authors";
      const response = await fetch(hostname + "/all");
      const authors = await response.json();
      this.authors = authors;
      console.log({ authors });
    },
    async saveBook() {
      const hostname = "http://localhost:4000/api/books";
      const data = {
        name: this.name,
        isbn: this.isbn,
        author: this.author,
      };

      const res = await fetch(hostname + "/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const final = await res.json();
      console.log(final);
      return final;
    },
  },
};
</script>
