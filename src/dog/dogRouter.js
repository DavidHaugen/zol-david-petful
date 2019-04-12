'use strict';

const express = require('express');
const dogRouter = express.Router();
const dogService = require('./dogService');

dogRouter
  .route('/')
  .get((req,res, next) => {
    // console.log(dogService.getAllDogs())
    res.json(dogService.getAllDogs());
  })
  .delete((req, res, next) => {
    res.json(dogService.adoptDog())
  })


// dogRouter.get('/', (req, res, next) => {
//   console.log(dogService)
//   res.json(dogService.getAllDogs())
// })


module.exports = dogRouter;