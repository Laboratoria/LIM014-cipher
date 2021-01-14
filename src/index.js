import cipher from './cipher.js';

const encodeButton = document.getElementById('encode-button');
const decodeButton = document.getElementById('decode-button');


decodeButton.addEventListener('click', () => {
  let offsetNumber;
  let message;
  offsetNumber = parseInt(document.getElementById('user-number').value);
  message = document.getElementById('message').value.toUpperCase();
  cipher.decode(offsetNumber, message);
});

encodeButton.addEventListener('click', () => {
  let offsetNumber;
  let message;
  offsetNumber = parseInt(document.getElementById('user-number').value);
  message = document.getElementById('message').value.toUpperCase();



  cipher.encode(offsetNumber, message);
});
