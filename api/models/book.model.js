const { Schema, model } = require('mongoose');

const BookSchema = new Schema(
    {
    name: String,
    isbn: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }
   },
   {
    versionKey: false,
    timestamps: true
   }
    );
 
const BookModel = model('Book', BookSchema);
module.exports = BookModel;