import cipher from './cipher.js';

const startbutton = document.getElementById('button-start-js');
startbutton.addEventListener ('click', funcEmpezar);
console.log(startbutton)
function funcEmpezar (){
    /*const div = document.createElement("div"); */
  const containerwelcome = document.querySelector(".welcome")
  containerwelcome.innerHTML = `
    <h2> Hola, XXX. ¿Qué deseas realizar? </h2>
    <section class="container-botones">
      <button id="encodebutton">Cifrar</button>
      <button id="decodebutton">Descifrar</button>
      <button id="infobutton">Informacion</button>
    </section>
    <section id="container-mainjs" class=container-main></section>
    `
    /*containerwelcome.replaceChild(div); */

  const encodebutton = containerwelcome.querySelector("#encodebutton");
  encodebutton.addEventListener ('click', funcEncode);
  console.log(encodebutton)

  const decodebutton = containerwelcome.querySelector("#decodebutton");
  decodebutton.addEventListener ('click', funcDecode);
  console.log(decodebutton)

  const infobutton = containerwelcome.querySelector("#infobutton");
  infobutton.addEventListener ('click', funcInfo);
  console.log(infobutton)
}
// AHORA TRABAJAMOS LA FUNCION DECODIFICAR
function funcEncode (event) {
  event.preventDefault();
  const containermainjs = document.getElementById("container-mainjs");
  //solo con action# + event preventdefault ya no se resetea la pagina, xqe?, además esto ocurre solo en el 2do click al primeroigual se resetea?
  //no se supone que solo con event preventdefault ya se evita ello?
  containermainjs.innerHTML = `
    <form action="#">
      <div>
        <label>Elige el número de offset <br>
          <input type="number" id="offset" required>
        </label>
      </div>
      <div>
        <label>Ingresa el texto a cifrar <br>
          <input type="text" id="encodetext" required pattern="[A-Za-z ]+">
        </label>
      </div>
      <div>
        <label>Este es tu texto cifrado <br>
          <input type="text" id="screenshow" readonly>
        </label>
      </div>
      <button id="codificar">ir</button
    </form>
  `
  const codificar = document.getElementById("codificar");
  codificar.addEventListener('click', encode);
  console.log(codificar);
}
function encode(){
  const offset = parseInt(document.getElementById("offset").value); //x default el valor del offset es 1 STRING numérico, x ende el parseInt lo transforma a valor numérico
  let encodetext = document.getElementById("encodetext").value;
  console.log(offset);
  console.log(encodetext);

  let arraytext = encodetext.split("");// el split coge 1 string, lo divide en elementos y LO DEVUELVE EN 1 ARRAY
  console.log(arraytext)
  for (let i = 0; i < arraytext.length; i++) {// ESTO VA A RECORRER CADA ELEMENTO DEL NUEVO ARRAY Y LO CONVERTIRÁ AL CHARCODEAT
    arraytext[i] = arraytext[i].charCodeAt(0);//este charCodeAt 0 me dice que desde el indice 0 de los valores spliteados se va a aplicar el codigo ascci
  }//esos numeros ascii se van a guardar en arraytext
  console.log(arraytext) // ESTO ME DA EL NUMERO ASCII CORRESPONDIENTE A CADA LETRA O ELEMENTO DEL ARRAY PREVIAMENTE SPLITEADO

  let runarraytext = arraytext.map(function(element) {//con esto cojo cada numero ascii del array arraytext y los recorro con map y les doy 1 funciona  cada 1
    console.log(offset)//el offset estaba en cadena y x ello tenia que parsearlo y obtener el valor numérico de esta cadena
    return String.fromCharCode((element - 65 + offset) % 26 + 65);// LA FORMULA HACE QUE APLIQUE EL OFFSET Y ESA NUEVA LETRA Y SE CONVIERTA EN NUMERO ASCII DE NUEVO
  })// DESPUES VIENE EL STRING FROM CHARCODE QUE HACE QUE ESE NUEVO NUMERO ASCII OFFSEADO SE CONVIERTA A LETRA
  console.log(runarraytext);

  let stringconvert = runarraytext.join('');//ahora convierto denuevo a astring las letras
  console.log(stringconvert);//join vs toString// al poner '' dentro del join automaticamente dice que no pegue con nada cada letra que junto, osea sin comas

  let screenshow = document.getElementById("screenshow");
  console.log(screenshow);
  screenshow.value = stringconvert//.replaceAll(",",""); // y los inyecto en valor al input pero me da con comas así que los reempzo por "nada"


}

// AHORA TRABAJAMOS LA FUNCION DECODIFICAR
function funcDecode () {
  const containermainjs = document.getElementById("container-mainjs");
  containermainjs.innerHTML = `
    <form>
      <div>
        <label>Elige el número de offset
          <input type="number" id="offset1" required>
        </label>
      </div>
      <div>
        <label>Ingresa el texto a descifrar
          <input type="text" id="decodetext" required pattern="[A-Za-z]+">
        </label>
      </div>
      <div>
        <label>Este es tu texto descifrado <br>
          <input type="text" id="screenshow1" readonly>
        </label>
      </div>
      <button id="decodificar">ir</button
    </form>
  `
 const decodificar = document.getElementById("decodificar");
 decodificar.addEventListener('click', decode);
}
function decode (){
  const offset1 = document.getElementById("offset1").value;
  let decodetext = document.getElementById("decodetext").value;

  let decodetextarr = decodetext.split('');
  console.log(decodetextarr);

  for (let index = 0; index <decodetextarr.length; index++) {
    decodetextarr[index] = decodetextarr[index].charCodeAt(0);
  }
  console.log(decodetextarr); //ahora me devuelve ascii en la matriz

  let rundecodetextarr = decodetextarr.map(function (elemento){
    return String.fromCharCode((elemento + 65 - offset1)% 26 + 65) //65; //* -1);
  });
  console.log(rundecodetextarr);

  let stringconvert1 = rundecodetextarr.join('');
  console.log(stringconvert1);

  let screenshow1 = document.getElementById('screenshow1');
  screenshow1.value = stringconvert1;
}












function funcInfo (){
  const containermainjs = document.getElementById("container-mainjs");
  containermainjs.innerHTML = `
    <section>
      <h2>Preguntas Frecuentes</h2>
      <div>
        <div class="FAQ">
          <article>
            <h3>¿Qué es el fishing cibernético?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quam similique. Eligendi blanditiis suscipit et?</p>
          </article>
          <article>
            <h3>¿Qué es el fishing cibernético?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quam similique. Eligendi blanditiis suscipit et?</p>
          </article>
          <article>
            <h3>¿Qué es el fishing cibernético?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quam similique. Eligendi blanditiis suscipit et?</p>
          </article>
          <article>
            <h3>¿Qué es el fishing cibernético?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quam similique. Eligendi blanditiis suscipit et?</p>
          </article>
        </div>
        <form>
          <div>
            <label>Ingresa tu consulta</label> <br>
            <textarea cols="30" rows="5">Descripción</textarea>
          </div>
        <button>Enviar</button>
        </form>
      </div>
    </section>
    `
}
console.log(cipher);
