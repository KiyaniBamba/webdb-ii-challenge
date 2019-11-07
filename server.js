const express = require('express');
const helmet = require('helmet');

// add connexion au file avec les endpoints
// ex: constr fruitRouter=require("./kdkdk/kfkfkf.js")

const server = express(); // creates the server

server.use(helmet());
server.use(express.json());

// connecter server au dossier avec les endpoints et l'url
// server.use(/api/fruits, fruitRouter);

server.get('/', (req, res) => {
  res.send('Hello from Express!!');
});

module.exports = server;