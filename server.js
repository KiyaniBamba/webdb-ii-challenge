const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


// add connexion au file avec les endpoints
const carsRouter = require("./cars/cars-router");

const server = express(); // creates the server

server.use(helmet());
server.use(express.json());
server.use(cors());


// connecter server au dossier avec les endpoints et l'url
server.use('/api/cars', carsRouter);


module.exports = server;