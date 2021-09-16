const express = require('express');
const server = express();
const routes = require('./routes');

//Settings
server.set('port', 4000);
server.use(express.json()); 

//Middlewares

//Routes
server.use('/api/books', routes.books);
server.use('/api/authors', routes.authors)

//Static Folder


module.exports = server;