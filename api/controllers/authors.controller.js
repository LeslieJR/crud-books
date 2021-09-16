const postAuthor = (req, res)=>{
    res.json({message: 'create-author'})
}

const getAuthor = (req, res)=>{
    res.json({message: 'author'})
}

const getAll = (req, res)=>{
    res.json({message:'all authors'})
}

module.exports = {
    postAuthor,
    getAuthor,
    getAll
}