const asciiNumber = 65;
const alphabetNumber = 26;
let cipherMenssage = '';
let decodeMensagge ='';

const cipher = {

  encode: (offset, message) => {

    for (let i = 0; i < message.length; i++) {
      let displaceCharter;

      let positionAscii = message.charCodeAt(i);
      if (positionAscii <= 122 && 65 <= positionAscii) {
        displaceCharter = (positionAscii - asciiNumber + offset) % alphabetNumber + asciiNumber;
        cipherMenssage += String.fromCharCode(displaceCharter);
      }
      else {
        cipherMenssage += String.fromCharCode(positionAscii);
      }

    }

    return cipherMenssage
  },

  decode: (offset, message) => {

    for (let i = 0; i < message.length; i++) {
      let displaceCharter;

      let positionAscii = message.charCodeAt(i);

      if (positionAscii <= 122 && 65 <= positionAscii) {
        displaceCharter = (positionAscii + asciiNumber -offset) %alphabetNumber + asciiNumber;

        decodeMensagge += String.fromCharCode(displaceCharter);
      }
      else {
        decodeMensagge += String.fromCharCode(positionAscii);
      }


    }

    return decodeMensagge;
  }
}

export default cipher;
