const models = require('../models')

const postBook = async (req, res)=>{
    const {name, isbn, author} = req.body;
    const newBook = new models.book({
        name,
        isbn,
        author
    })
    await newBook.save(); 
    res.json(newBook)
}

const getBook = async (req, res)=>{
    const {id} = req.params;
    try{
      const book = await models.book.findById(id);
      return res.json(book)  
    }catch{
        return res.json({message:"There was an error."})
    }
}

const getAll = async (req, res)=>{
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