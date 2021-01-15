import cipher from './cipher.js';


const encodeButton = document.getElementById('encode-button');
const decodeButton = document.getElementById('decode-button');
const labelMessage = document.getElementById('labelFinalMessage');
let finalMessage = document.getElementById('finalMessage');
let userName = 'nombre usuario';


decodeButton.addEventListener('click', () => {
  let offsetNumber;
  let message;
  offsetNumber = parseInt(document.getElementById('user-number').value);
  message = document.getElementById('message').value.toUpperCase();

  try {

    let saveMessageDecode = cipher.decode(offsetNumber, message);
    labelMessage.innerHTML = `${userName}, tu mensaje fue Decifrado con exito!! `;
    finalMessage.innerHTML = `${saveMessageDecode}`;
  } catch (e) {
    console.log('catch', e);
  }
});

encodeButton.addEventListener('click', () => {
  let offsetNumber;
  let message;
  offsetNumber = parseInt(document.getElementById('user-number').value);
  message = document.getElementById('message').value.toUpperCase();
  try {

    let saveMessageEncode = cipher.encode(offsetNumber, message);
    labelMessage.innerHTML = `${userName}, tu mensaje fue Cifrado con exito!! `;
    finalMessage.innerHTML = `${saveMessageEncode}`;
  } catch(e){
    console.log(e);
  }


  });
