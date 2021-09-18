<template>
  <v-container>
    <v-row class="mt-4">
      <v-col>
        <nuxt-link class="blue--text text-decoration-none" to="/">
        <v-icon class="blue--text">
          mdi-arrow-left
        </v-icon>Back
        </nuxt-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="450">
          <v-card-title>AUTHOR FORM</v-card-title>
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
            <v-btn block class="primary" @click="createAuthor">Create</v-btn>
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
  
  methods: {
    async createAuthor() {
      try {
        const hostname = "http://localhost:4000/api/authors";
        const body = {
          first_name: this.first_name,
          last_name: this.last_name,
        };
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
        console.log({ data });
        this.$router.push("/");
      } catch (_) {
        alert("There was an error while creating the author");
      }
    },
  },
};
</script>
