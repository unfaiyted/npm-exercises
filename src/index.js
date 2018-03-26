const $ = require('jquery');
const message = require('./say-hello.js');
/*
Inside of the src directory, create a file named index.js. This is the entry point of your application.
Inside of index.js, write a function named sayHello using a arrow function, that logs hello to the console.
Then call that function.
 */


const sayHello = () => console.log('Hello');

sayHello();


$('#hello').text('Hello Friend NODE! JQUERY IS HERE!!!');

console.log(message.aNiceMessage());
