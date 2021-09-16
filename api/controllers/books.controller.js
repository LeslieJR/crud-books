const postBook = (req, res)=>{
    res.json({message: 'create-book'})
}

const getBook = (req, res)=>{
    res.json({message: 'book'})
}

const getAll = (req, res)=>{
    res.json({message:'all books'})
}

module.exports = {
    postBook,
    getBook,
    getAll
}