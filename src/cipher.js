const asciiNumber = 65;
const alphabetNumber = 26;



const cipher = {

  encode: (offset, message) => {

    if(typeof offset !== 'number' || isNaN(offset) || offset < 1) {

      throw new TypeError('offset invalido');
    }
    else if(typeof message !== 'string' || message===''){
      throw new TypeError('message invalido');
    }
    let cipherMessage = '';
    for (let i = 0; i < message.length; i++) {
      let displaceCharter;

      let positionAscii = message.charCodeAt(i);
      if (positionAscii <= 122 && 65 <= positionAscii) {
        displaceCharter = (positionAscii - asciiNumber + offset) % alphabetNumber + asciiNumber;
        cipherMessage += String.fromCharCode(displaceCharter);
      }
      else {
        cipherMessage += String.fromCharCode(positionAscii);
      }

    }

    return cipherMessage;

  },

  decode: (offset, message) => {

    if(typeof offset !== 'number' || isNaN(offset) || offset < 1) {

      throw new TypeError('offset invalido');
    }
    else if(typeof message !=='string'){

      throw new TypeError('message invalido');

    }

    let decodeMesagge = '';

    for (let i = 0; i < message.length; i++) {
      let displaceCharter;

      let positionAscii = message.charCodeAt(i);

      if (positionAscii <= 122 && 65 <= positionAscii) {
        displaceCharter = (positionAscii + asciiNumber - offset) % alphabetNumber + asciiNumber;

        decodeMesagge += String.fromCharCode(displaceCharter);
      }
      else {
        decodeMesagge += String.fromCharCode(positionAscii);
      }


    }
    return decodeMesagge;
  },
}

export default cipher;

