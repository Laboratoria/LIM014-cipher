import cipher from './cipher.js';


const encodeButton = document.getElementById('encode-button');
const decodeButton = document.getElementById('decode-button');
const labelMessage = document.getElementById('labelFinalMessage');
const errorContainer = document.getElementById('error-container');
let finalMessage = document.getElementById('finalMessage');
let userName = 'nombre usuario';


decodeButton.addEventListener('click', () => {

  errorContainer.innerHTML = '';
  let offsetNumber;
  let message;
  offsetNumber = parseInt(document.getElementById('user-number').value);
  //message = document.getElementById('message').value.toUpperCase();
  message= document.getElementById('message').value;
  try {

    let saveMessageDecode = cipher.decode(offsetNumber, message);
    labelMessage.innerHTML = `${userName}, tu mensaje fue Decifrado con exito!! `;
    finalMessage.innerHTML = `${saveMessageDecode}`;
  } catch (error) {

    let NewMessageError = document.createElement('p');
    NewMessageError.innerHTML = error;
    errorContainer.appendChild(NewMessageError);

    /*Preguntar como funciona document.body.insertBefore(NewMessageError, errorContainer); porque me sa error en el nodo*/


  }
});

encodeButton.addEventListener('click', () => {
  errorContainer.innerHTML = '';
  let offsetNumber;
  let message;
  offsetNumber = parseInt(document.getElementById('user-number').value);
  //message = document.getElementById('message').value.toUpperCase();
  message =document.getElementById('message').value;

  try {

    let saveMessageEncode = cipher.encode(offsetNumber, message);
    labelMessage.innerHTML = `${userName}, tu mensaje fue Cifrado con exito!! `;
    finalMessage.innerHTML = `${saveMessageEncode}`;
  } catch (error) {
    let NewMessageError = document.createElement('p');
    NewMessageError.innerHTML = error;
    errorContainer.appendChild(NewMessageError);

  }


});
