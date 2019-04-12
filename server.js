'use strict';
const {PORT} = require('./src/config');
const app = require('./src/app');


app.listen(PORT,()=>{
  console.log('Serving on 8000');
});