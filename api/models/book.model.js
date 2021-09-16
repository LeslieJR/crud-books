const { Schema, model } = require('mongoose');

const BookSchema = new Schema(
    {
    name: String,
    isbn: String,
    author: String,
   },
   {
    versionKey: false,
    timestamps: true
   }
    );
 
const BookModel = model('book', BookSchema);
module.exports = BookModel;