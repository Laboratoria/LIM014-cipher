const asciiNumber = 65;
const alphabetNumber = 26;
let cipherMenssage = "";

const cipher = {

  encode: (offset, message) => {

    for (let i = 0; i < message.length; i++) {
      let displaceCharter

      let positionAscii = message.charCodeAt(i);
      console.log(message[i], positionAscii);
      if (positionAscii <= 122 && 65 <= positionAscii) {
        displaceCharter = (positionAscii - asciiNumber + offset) % alphabetNumber + asciiNumber;
        cipherMenssage += String.fromCharCode(displaceCharter);
      }
      else {
        cipherMenssage += String.fromCharCode(positionAscii);
      }


      console.log('DESPLAZAMIENTO', displaceCharter)
      console.log('nuevo char', cipherMenssage);


    }

    return cipherMenssage
  },

  decode: (offset, message) => {

    for (let i = 0; i < message.length; i++) {
      let displaceCharter;

      let positionAscii = message.charCodeAt(i);
      console.log(message[i], positionAscii);

      if (positionAscii <= 122 && 65 <= positionAscii) {
        displaceCharter =
        cipherMenssage += String.fromCharCode(displaceCharter);
      }
      else {
        cipherMenssage += String.fromCharCode(positionAscii);
      }


      console.log('DESPLAZAMIENTO', displaceCharter)
      console.log('nuevo char', cipherMenssage);


    }

    return cipherMenssage
  }
}

export default cipher;
