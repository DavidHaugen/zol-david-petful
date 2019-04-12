'use strict';

const express = require('express');
const catRouter = express.Router();
const catService = require('./catService');

catRouter
  .route('/')
  .get((req,res, next) => {
    res.status(200).json(catService.getNextCat())
    next();
  })
;


module.exports = catRouter;