<template>
  <v-container>
    <v-row class="mt-4">
      <v-col>
        <nuxt-link class="blue--text text-decoration-none" to="/">
          <v-icon class="blue--text"> mdi-arrow-left </v-icon>Back
        </nuxt-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="450">
          <v-card-title>
            {{ isUpdate ? "UPDATE" : "CREATE NEW" }} AUTHOR
          </v-card-title>
          <v-card-text>
            <v-text-field
              solo
              label="First name"
              clearable
              v-model="first_name"
            ></v-text-field>
            <v-text-field
              solo
              label="Last name"
              clearable
              v-model="last_name"
            ></v-text-field>
            <v-btn block class="primary" @click="submitData">{{ isUpdate ? "UPDATE" : "CREATE" }}</v-btn>
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
      first_name: "",
      last_name: "",
    };
  },
  props: {
    isUpdate: {
      type: Boolean,
      default: false,
    },
  },
  async created() {
    //to get the author to update
    if (this.isUpdate) {
      const hostname = "http://localhost:4000/api/authors";
      const response = await fetch(
        hostname + `/author/${this.$route.params.id}`
      );
      const author = await response.json();
      this.first_name = author.first_name;
      this.last_name = author.last_name;
    }
  },
  methods: {
    async submitData() {
      try {
        const hostname = "http://localhost:4000/api/authors";
        const body = {
          first_name: this.first_name,
          last_name: this.last_name,
        };
        //to update an existing author:
        if (this.isUpdate) {
          const res = await fetch(
            hostname + `/author/update/${this.$route.params.id}`,
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
            this.$router.push("/authors");
          }
          //to create a new book
        } else {
        const res = await fetch(hostname + "/author", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        const data = await res.json();
        if (data.error) {
          alert(data.error);
          return;
        }
        this.$router.push("/authors");
        }
      } catch (_) {
        alert("There was an error while creating the author");
      }
      
    },
  },
};
</script>
