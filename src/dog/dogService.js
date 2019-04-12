'use strict';
const  queueBuilder  = require('../queue-builder')

const dogService = {
  // get next dog: store.dequeue;
  // if user clicks adopt, dequeue. 
  adoptDog(){
    let dogsQueue = queueBuilder();
    return dogsQueue.dequeue();
  },
  // get all dogs: generate an array of objects, return that.
  getAllDogs() {
    const dogs = [];
    const dogsQueue = queueBuilder();

    if(dogsQueue.first === null){
      return [];
    }

    let curr = dogsQueue.first;
    while(curr !== null){
      dogs.push(curr.value)
      curr = curr.next;
    }
    
    return dogs;
  }
  // insert dog: store.enqueue

};

module.exports = dogService;