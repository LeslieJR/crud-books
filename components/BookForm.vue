<template>
  <v-container>
    <v-row class="mt-4">
      <v-col>
        <nuxt-link class="white--text text-decoration-none" to="/">
          <v-icon class="white--text"> mdi-arrow-left </v-icon>Back
        </nuxt-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="450">
          <v-card-title>
            {{ isUpdate ? "UPDATE" : "CREATE NEW" }} BOOK
          </v-card-title>
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
              @change="onChange"
              :items="authors"
              item-text="fullname"
              item-value="_id"
              label="Select author"
              v-model="selected"
              dense
              solo
            ></v-select>

            <v-btn block class="cyan darken-1" @click="submitData">
              {{ isUpdate ? "UPDATE" : "CREATE" }}</v-btn
            >
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
      authors: [],
      name: "",
      isbn: "",
      author: "",
      selected: "",
    };
  },
  props: {
    isUpdate: {
      type: Boolean,
      default: false,
    },
  },
  async created() {
    await this.getAllAuthors();
    //to get the book to update
    if (this.isUpdate) {
      const hostname = "https://crud-books-server.herokuapp.com/api/books";
      const response = await fetch(hostname + `/book/${this.$route.params.id}`);
      const book = await response.json();
      this.name = book.name;
      this.isbn = book.isbn;
      this.selected = book.author._id;
      this.author = this.selected;
    }
  },
  methods: {
    //to get the list of authors to populate the select options
    async getAllAuthors() {
      const hostname = "https://crud-books-server.herokuapp.com/api/authors";
      const response = await fetch(hostname + "/all");
      const authors = await response.json();
      const fullNames = [];
      for (var i = 0; i < authors.length; i++) {
        const authorObj = {
          fullname: authors[i].first_name + " " + authors[i].last_name,
          _id: authors[i]._id,
        };
        fullNames.push(authorObj);
      }
      this.authors = fullNames;
    },
    onChange(obj) {
      this.author = obj;
    },
    async submitData() {
      try {
        const hostname = "https://crud-books-server.herokuapp.com/api/books";
        const body = {
          name: this.name,
          isbn: this.isbn,
          author: this.author,
        };

        //to update an existing book:
        if (this.isUpdate) {
          const res = await fetch(
            hostname + `/book/update/${this.$route.params.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            }
          );
          const data = await res.json();

          if (data.error) {
            alert(data.error);
          } else {
            this.$router.push("/");
          }
          //to create a new book
        } else {
          const res = await fetch(hostname + "/book", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });
          const data = await res.json();

          if (data.error) {
            alert(data.error);
          } else {
            this.$router.push("/");
          }
        }
      } catch (_) {
        alert("There was an error while submitting");
      }
    },
  },
};
</script>
