require('./mongo');

const express = require('express');
const cors = require('cors')
const server = express();
const routes = require('./routes');

//Settings
server.set('port', 4000);
server.listen(server.get('port'), ()=>{
    console.log('listening to port number: ', server.get('port'));
})
server.use(express.json()); 
server.use(cors());
//Middlewares

//Routes
server.use('/api/books', routes.books);
server.use('/api/authors', routes.authors)

//Static Folder


module.exports = server;



