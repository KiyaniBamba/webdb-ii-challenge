const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
      const carList = await Cars.get();
      res.status(200).json(carList);
    } catch (error) {
      next(error);
    }
  });