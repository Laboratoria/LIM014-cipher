import cipher from './cipher.js';

const encodeButton = document.getElementById('encode-button');
const decodeButton = document.getElementById('decode-button');
let offsetNumber;
let message ;
let messageValue;
let offsetValue;
const submitButton = document.getElementById('submit-button');

decodeButton.addEventListener('click', ()=> console.log('hi soy decode'));
encodeButton.addEventListener('click', ()=> console.log('soy cifrar'));


  submitButton.addEventListener('click', ()=>{

  offsetNumber = document.getElementById('user-number');
  message = document.getElementById('message');
console.log(message);
  messageValue = message.value;
  offsetValue = offsetNumber.value;
  console.log(offsetValue, messageValue);

}
);


//console.log(cipher);
