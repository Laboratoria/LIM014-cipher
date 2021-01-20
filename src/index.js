import cipher from './cipher.js';
let btnCipher = document.getElementById('encodeText')

console.log(cipher);
// alfabeto
const alphabet = ['A','B','C','D','E','F',
                  'G','H','I','J','K','L',
                  'M','N','O','P','Q','R',
                  'S','T','U','V','W','X',
                  'Y','Z'];
// funcion para validar los desplazamientos
const encodeText=()=> {
    
    const form = document.Cifrar;
    let sourceText = form.sourceText.value;
    let des_cif = Number(form.des_cif.value);
    //Argumento
    cipher.encode(sourceText)

    des_cif = (alphabet.length +des_cif) % alphabet.length;

    form.sourceText.value = [... sourceText ].map(texto =>
    cifrar(texto,des_cif)).join('');
  }
btnCipher.addEventListener('click', encodeText)
// funcion para cifrar
function cifrar(texto, des_cif) {
  let include = alphabet.includes( texto .toUpperCase());

  if (include){
   let position = alphabet.indexOf( texto.toUpperCase());
   let newPosition = (position +des_cif) % alphabet.length;

   return alphabet[newPosition];
 }
 else
 return texto;
}
// funcion para descifrar
function decodeText() {
    const form = document.Descifrar;
    let des_des = Number(form.des_des.value);
    let resultText = form.ResultText.value;

    des_des = (alphabet.length -des_des) % alphabet.length;

    form.ResultText.value = [... resultText ].map(texto =>
    cifrar(texto,des_des)).join('');
  }




