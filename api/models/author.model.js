const { Schema, model } = require('mongoose');
 
const AuthorSchema = new Schema(
    {
    first_name: String,
    last_name: String,
   },
   {
    versionKey: false,
    timestamps: true
   }
    );
 
//the model = (name, schema) -> collection
//'Book' is how it will be stored in the db and how we will reference it
const AuthorModel = model('Author', AuthorSchema);
module.exports = AuthorModel;