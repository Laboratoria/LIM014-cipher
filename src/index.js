import cipher from './cipher.js';

const encodeButton = document.getElementById('encode-button');
const decodeButton = document.getElementById('decode-button');
let offsetNumber;
let message;

decodeButton.addEventListener('click', () => {

  offsetNumber = parseInt(document.getElementById('user-number').value);
  message = document.getElementById('message').value.toUpperCase();

  console.log(message, offsetNumber);

  cipher.decode(offsetNumber, message);
})

  encodeButton.addEventListener('click', () => {
  offsetNumber = parseInt(document.getElementById('user-number').value);
  message = document.getElementById('message').value.toUpperCase();

  console.log(message, offsetNumber);

  cipher.encode(offsetNumber, message);
});
