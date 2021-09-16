const models = require('../models')

const postBook = (req, res)=>{
    const {name, isbn, author} = req.body;
    const newBook = new models.author({
        name,
        isbn,
        author
    })
    await newBook.save(); 
    res.json(newBook)
}

const getBook = (req, res)=>{
    const {id} = req.params;
    try{
      const book = await models.book.findById(id);
      return res.json(book)  
    }catch{
        return res.json({message:"There was an error."})
    }
}

const getAll = (req, res)=>{
    try{
        const books = await models.book.find();
        return res.json(books)  
      }catch{
          return res.json({message:"There was an error."})
      }
}

module.exports = {
    postBook,
    getBook,
    getAll
}