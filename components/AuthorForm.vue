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
          <v-card-title>AUTHOR FORM</v-card-title>
          <v-card-text>
            <v-text-field solo label="First name" clearable v-model="first_name"></v-text-field>
            <v-text-field solo label="Last name" clearable v-model="last_name"></v-text-field>
            <v-btn block class="blue">Create</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            first_name:"",
            last_name:"",
        }
    }
};
</script>
