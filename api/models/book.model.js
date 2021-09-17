const { Schema, model } = require('mongoose');

const BookSchema = new Schema(
    {
    name: {
        type:String,
        require:true
    },
    isbn: {
        type:String,
        unique: true,
        require:true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        require:true
    }
   },
   {
    versionKey: false,
    timestamps: true
   }
    );
 
const BookModel = model('Book', BookSchema);
module.exports = BookModel;