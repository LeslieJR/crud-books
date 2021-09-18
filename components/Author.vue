<template>
  <v-card class="shadow bg-body rounded mb-4">
    <v-row>
      <v-col cols="8">
        <v-card-text>{{ author.first_name }}</v-card-text>
        <v-card-text>{{ author.last_name }}</v-card-text>
      </v-col>
      <v-col cols="4">
        <v-card-actions>
          <v-btn class="teal">
            <a class="white--text">Update</a>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
};
</script>
