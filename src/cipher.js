const cipher = {
  encode: function (offset, encodetext){
/*     const alphabet = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
            "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"); */
    let encodetextarrayjs = encodetext.split("");
    let text_resultN = encodetextarrayjs.includes("Ñ");
    let text_resultn = encodetextarrayjs.includes("ñ");

    if(text_resultN=== true || text_resultn===true){
      return alert('No debes ingresar ni "Ñ" ni "ñ"');
    }

    for (let i = 0; i < encodetextarrayjs.length; i++) {
      if(encodetextarrayjs[i] === encodetextarrayjs[i].toUpperCase()){
        encodetextarrayjs[i] = encodetextarrayjs[i].charCodeAt(0);
      } else if (encodetextarrayjs[i] === encodetextarrayjs[i].toLowerCase()) {
         encodetextarrayjs[i] = encodetextarrayjs[i].toUpperCase();
         encodetextarrayjs[i] = encodetextarrayjs[i].charCodeAt(0)
      }
    }
    console.log(encodetextarrayjs);

    let runencodetextarrayjs = encodetextarrayjs.map(function(element) {
      return String.fromCharCode((element - 65 + offset) % 26 + 65);
    })
    let stringconvert = runencodetextarrayjs.join('');
     if (encodetext === encodetext.toUpperCase()){
      return stringconvert;
     } else {
      return stringconvert.toLowerCase();
     }
    },

  decode: function (number1, text1){
    let decodetextarrayjs = text1.split('');
    let text_resultN = decodetextarrayjs.includes("Ñ");
    let text_resultn = decodetextarrayjs.includes("ñ");

    if(text_resultN=== true || text_resultn===true){
      return alert('No debes ingresar ni "Ñ" ni "ñ"');
    }

    for (let index = 0; index < decodetextarrayjs.length; index++) {
      if (decodetextarrayjs[index] === decodetextarrayjs[index].toUpperCase()) {
        decodetextarrayjs[index] = decodetextarrayjs[index].charCodeAt(0);
      }
      else if (decodetextarrayjs[index] === decodetextarrayjs[index].toLowerCase()) {
        decodetextarrayjs[index] = decodetextarrayjs[index].toUpperCase();
        decodetextarrayjs[index] = decodetextarrayjs[index].charCodeAt(0);
      }
    }
    let rundecodetextarrjs = decodetextarrayjs.map(function (elemento){
      return String.fromCharCode((elemento - number1 + 65 )% 26 + 65)
    });
    let stringconvert1 = rundecodetextarrjs.join('');
    if (text1 === text1.toUpperCase()){
      return stringconvert1;
    } else {
        return stringconvert1.toLowerCase();
    }
  }
};

export default cipher;
