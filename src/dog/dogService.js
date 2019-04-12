'use strict';

const store = {
// queue of dogs

  dog: [
    {
      imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
      imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
      name: 'Zeus',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away'
    }]
};

const dogService = {
  // get next dog: store.dequeue;
  // get all dogs: generate an array of objects, return that.
  // insert dog: store.enqueue

  // if user clicks next, enqueue the dequeued dog.
  // if user clicks adopt, dequeue. 

  getNextDog: () => {return store.dog[0];
  }
};

module.exports = dogService;