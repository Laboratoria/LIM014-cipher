function encode (number, text){
  let arraytextjs = text.split("");// el split coge 1 string, lo divide en elementos y LO DEVUELVE EN 1 ARRAY
  for (let i = 0; i < arraytextjs.length; i++) {// ESTO VA A RECORRER CADA ELEMENTO DEL NUEVO ARRAY Y LO CONVERTIRÁ AL CHARCODEAT
    arraytextjs[i] = arraytextjs[i].charCodeAt(0);//este charCodeAt 0 me dice que desde el indice 0 de los valores spliteados se va a aplicar el codigo ascci
  }
  let runarraytextjs = arraytextjs.map(function(element) {//con esto cojo cada numero ascii del array arraytext y los recorro con map y les doy 1 funciona  cada 1
    console.log(number)//el offset estaba en cadena y x ello tenia que parsearlo y obtener el valor numérico de esta cadena
    return String.fromCharCode((element - 65 + number) % 26 + 65);// LA FORMULA HACE QUE APLIQUE EL OFFSET Y ESA NUEVA LETRA Y SE CONVIERTA EN NUMERO ASCII DE NUEVO
  })
  let stringconvert = runarraytextjs.join('');//ahora convierto denuevo a astring las letras
  // let sincomas= stringconvert.replaceAll(",","");
    /*let screenshow = document.getElementById("screenshow");
  console.log(screenshow);//WARNING INVESTIGAR XQE EL REPLACEALL NO ESTA CONVIRTIENDO LOS STRINGS
  screenshow.value = stringconvert.replaceAll(",",""); replacetoall no es 1 funcion*/
  //return sincomas; join vs toString
  return stringconvert;
}
function decode (number1, text1){
  let decodetextarrjs = text1.split('');
  console.log(decodetextarrjs);

  for (let index = 0; index <decodetextarrjs.length; index++) {
    decodetextarrjs[index] = decodetextarrjs[index].charCodeAt(0);
  }
  let rundecodetextarrjs = decodetextarrjs.map(function (elemento){
    return String.fromCharCode((elemento + 65 - number1)% 26 + 65) //65; //* -1);
  });
  let stringconvert1 = rundecodetextarrjs.join('');
  console.log(stringconvert1);
}
const cipher = {
  encode,
  decode
};
/* use strict */
export default cipher;
