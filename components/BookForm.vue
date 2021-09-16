<template>
    <v-form>
        <h1 mb="5" class="text-center">BOOK FORM</h1>
        <div mb="3">
            <label class="form-label">Book Name</label>
            <input class="form-control" type="text" />
        </div>
        <div mb="3">
            <label class="form-label">Book author</label>
            <textarea class="form-control" rows="5" v-model="form.text"></textarea>
        </div>
        <v-btn>UPDATE/CREATE BOOK</v-btn>
    </v-form>
</template>

<script>
export default{
    
}
</script>