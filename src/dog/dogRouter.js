'use strict';

const express = require('express');
const dogRouter = express.Router();
const dogService = require('./dogService');

dogRouter
  .route('/')
  .get((req,res, next) => {
    res.status(200).json(dogService.getNextDog());
    next();
  })
;


module.exports = dogRouter;