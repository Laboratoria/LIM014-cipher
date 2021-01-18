const asciiNumber = 65;
const asciiNumberDecode = 90;
const lowerAsciiNumber = 97;
const lowerAsciiNumberDecode = 122;
const alphabetNumber = 26;
const cipher = {

  encode: (offset, message) => {

    if (typeof offset !== 'number' || isNaN(offset) || offset < 1) {

      throw new TypeError('Número invalido, vuelve a intentar');
    }
    else if (typeof message !== 'string' || message === '') {
      throw new TypeError('Mensaje invalido, vuelve a intentar');
    }
    let cipherMessage = '';
    for (let i = 0; i < message.length; i++) {

      let displaceCharter;
      let positionAscii = message.charCodeAt(i);

      if (positionAscii <= asciiNumberDecode && asciiNumber <= positionAscii) {
        displaceCharter = (positionAscii - asciiNumber + offset) % alphabetNumber + asciiNumber;
        cipherMessage += String.fromCharCode(displaceCharter);
      }
      else if (positionAscii <= lowerAsciiNumberDecode && lowerAsciiNumber<= positionAscii) {

        displaceCharter = (positionAscii - lowerAsciiNumber + offset) % alphabetNumber + lowerAsciiNumber;
        cipherMessage += String.fromCharCode(displaceCharter);

      }
      else {
        cipherMessage += String.fromCharCode(positionAscii);
      }
    }
    return cipherMessage;
  },

  decode: (offset, message) => {
    if (typeof offset !== 'number' || isNaN(offset) || offset < 1) {

      throw new TypeError('Número invalido, vuelve a intentar');
    }
    else if (typeof message !== 'string' || message === '') {

      throw new TypeError('Mensaje invalido, vuelve a intentar');

    }

    let decodeMesagge = '';

    for (let i = 0; i < message.length; i++) {
      let displaceCharter;

      let positionAscii = message.charCodeAt(i);

      if (positionAscii <= asciiNumberDecode && asciiNumber <= positionAscii) {

        displaceCharter = (positionAscii - asciiNumberDecode - offset) % alphabetNumber + asciiNumberDecode;

        decodeMesagge += String.fromCharCode(displaceCharter);
      }
      else if (positionAscii <= lowerAsciiNumberDecode && lowerAsciiNumber <= positionAscii) {
        displaceCharter = (positionAscii - lowerAsciiNumberDecode - offset) % alphabetNumber + lowerAsciiNumberDecode;
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

