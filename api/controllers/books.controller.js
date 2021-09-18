const models = require('../models')

const postBook = async (req, res)=>{
    try{
        const {name, isbn, author} = req.body;
        if(!name || !isbn || !author){
            return res.status(409).json({error:'Name, ISBN or author missing'})
        }
        const newBook = new models.book({
            name,
            isbn,
            author
        })
        await newBook.save(); 
        return res.status(201).json(newBook);
    }catch(_){
        return res.status(409).json({error:'Error while creating the book'})
    }
}

const getBook = async (req, res)=>{
    const {id} = req.params;
    try{
      const book = await models.book.findById(id).populate('author');
      return res.status(201).json(book)  
    }catch(_){
        return res.status(409).json({error:'Book was not found'})
    }
}

const getAll = async (req, res)=>{
    try{
        const books = await models.book.find();
        return res.status(201).json(books)  
      }catch{
        return res.status(409).json({error:'Books not found'})
      }
}

const updateBook = async (req,res) =>{
    try{
        const {id} = req.params;
        const {name, isbn, author} = req.body;
    // to update one book -> updateOne({_id:id},{$set: {name,isbn, author}}) -> this does not return the updated object
    // to update and return an object: findOneAndUpdate({_id:id},{$set:{name,isbn, author}}, {new:true})
       const book = await models.book.findOneAndUpdate(
        {_id:id},
        {$set:{name, isbn, author}},
        {new: true}
        )
        return res.status(201).json(book)  
    }catch(_){
        return res.status(409).json({error:'There was an error updating the book'})
    }
    
}

module.exports = {
    postBook,
    getBook,
    getAll,
    updateBook
}