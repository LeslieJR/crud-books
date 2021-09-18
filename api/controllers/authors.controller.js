const models = require('../models')

const postAuthor = async (req, res)=>{
    try{
        const {first_name, last_name} = req.body;
        if(!first_name || !last_name){
            return res.status(409).json({error:'First name or Last name missing '})
        }
        const newAuthor = new models.author({
            first_name,
            last_name
        })
        await newAuthor.save(); 
        return res.status(201).json(newAuthor)
    }catch(_){
        return res.status(409).json({error: 'Error while creating the author'})
    }
}

const getAuthor = async (req, res)=>{
    const {id} = req.params;
    try{
      const author = await models.author.findById(id);
      return res.status(201).json(author)  
    }catch(_){
        return res.status(409).json({error:'Author was not found'})
    }
}

const getAll = async (req, res)=>{
    try{
      const authors = await models.author.find();
      return res.status(201).json(authors)  
    }catch{
        return res.status(409).json({error:'Authors not found'})
    }
}

module.exports = {
    postAuthor,
    getAuthor,
    getAll
}