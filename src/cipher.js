
const cipher = {
  
  encode: function (offset, encodetext){
    let encodetextarrayjs = encodetext.split("");
    for (let i = 0; i < encodetextarrayjs.length; i++) {
      encodetextarrayjs[i] = encodetextarrayjs[i].charCodeAt(0);
    }
    let runencodetextarrayjs = encodetextarrayjs.map(function(element) {
      console.log(offset)
      return String.fromCharCode((element - 65 + offset) % 26 + 65);
    })
    let stringconvert = runencodetextarrayjs.join('');

    return stringconvert;
  },

  decode: function (number1, text1){
    let decodetextarrjs = text1.split('');
    console.log(decodetextarrjs);

    for (let index = 0; index <decodetextarrjs.length; index++) {
      decodetextarrjs[index] = decodetextarrjs[index].charCodeAt(0);
    }
    let rundecodetextarrjs = decodetextarrjs.map(function (elemento){
      return String.fromCharCode((elemento + 65 - number1)% 26 + 65)
    });
    let stringconvert1 = rundecodetextarrjs.join('');
    console.log(stringconvert1);
    return stringconvert1;
  }
};

export default cipher;
