const models = require('../models')

const postAuthor = async (req, res)=>{
    const {first_name, last_name} = req.body;
    const newAuthor = new models.author({
        first_name,
        last_name
    })
    await newAuthor.save(); 
    res.json(newAuthor)
}

const getAuthor = async (req, res)=>{
    const {id} = req.params;
    try{
      const author = await models.author.findById(id);
      return res.json(author)  
    }catch{
        return res.json({message:"There was an error."})
    }
}

const getAll = async (req, res)=>{
    try{
      const authors = await models.author.find();
      return res.json(authors)  
    }catch{
        return res.json({message:"There was an error."})
    }
}

module.exports = {
    postAuthor,
    getAuthor,
    getAll
}