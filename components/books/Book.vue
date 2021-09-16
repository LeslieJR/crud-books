<template>
    <v-card class="text-center shadow bg-body rounded">
        <v-card-header>
            <v-card-title>Book Name</v-card-title>
        </v-card-header>
        <v-card-body >
            <v-card-text>Book Author</v-card-text>
            <v-card-actions>
                <nuxt-link class="btn btn-primary btn-sm" >Read</nuxt-link>
                <nuxt-link class="btn btn-warning btn-sm" >Update</nuxt-link>
            </v-card-actions>
        </v-card-body>
    </v-card>
</template>

<script>
export default{
    
}
</script>
