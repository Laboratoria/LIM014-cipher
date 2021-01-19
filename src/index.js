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
function funcEncode (event) {
  event.preventDefault();
  const containermainjs = document.getElementById("container-mainjs");
  //solo con action# + event preventdefault ya no se resetea la pagina, xqe?, además esto ocurre solo en el 2do click al primeroigual se resetea?
  //no se supone que solo con event preventdefault ya se evita ello?
  containermainjs.innerHTML = `
    <form action="#">
      <div>
        <label>Elige el número de offset
          <input type="number" id="offset" required>
        </label>
      </div>
      <div>
        <label>Ingresa el texto a cifrar
          <input type="text" id="encodetext" required pattern="[A-Za-z ]+">
        </label>
      </div>
      <div>
        <label>Este es tu texto cifrado
          <input type="text" id="screenshow" >
        </label>
      </div>
      <button id="codificar">ir</button
    </form>
  `
  const codificar = document.getElementById("codificar");
  codificar.addEventListener('click', funcCodificar);
  console.log(codificar);
}
function funcCodificar(){
  const offset1 = parseInt(document.getElementById("offset").value);
  let encodetext = document.getElementById("encodetext").value;
  console.log(offset1);
  console.log(encodetext);

  let arraytext = encodetext.split("");
  console.log(arraytext)
  for (let i = 0; i < arraytext.length; i++) {
    arraytext[i] = arraytext[i].charCodeAt(0);
  }
  console.log(arraytext) // ESTO ME DA CODIGO ASCII

  let runarraytext = arraytext.map(function(element) {
    console.log(offset1)

    return String.fromCharCode((element - 65 + offset1) % 26 + 65);
  })

  console.log(runarraytext);

  let stringconvert = runarraytext.toString();

  let screenshow = document.getElementById("screenshow");
  console.log(screenshow);
  screenshow.value = stringconvert.replaceAll(",","");


}

function funcDecode () {
  const containermainjs = document.getElementById("container-mainjs");
  containermainjs.innerHTML = `
    <form>
      <div>
        <label>Elige el número de offset
          <input type="number" required>
        </label>
      </div>
      <div>
        <label>Ingresa el texto a descifrar
          <input type="text" required pattern="[A-Za-z]+">
        </label>
      </div>
      <div>
        <label>Este es tu texto descifrado
          <input type="text" readonly>
        </label>
      </div>
    </form>
  `
}
function funcInfo (){
  const containermainjs = document.getElementById("container-mainjs");
  containermainjs.innerHTML = `
    <div>
      <h2>Preguntas Frecuentes</h2>
      <article>
        <h3>¿Qué es el fishing cibernético?</h3>
        <p>loremlnlnblnblkxnlkxnlknxkmkbmlmfblkmlbkmlxkdmmcnbxbnlxknkxfblkxlbkxlkbmxmlxmlxmn</p>
      </article>
      <article>
        <h3>¿Qué es el fishing cibernético?</h3>
        <p>loremlnlnblnblkxnlkxnlknxkmkbmlmfblkmlbkmlxkdmmcnbxbnlxknkxfblkxlbkxlkbmxmlxmlxmn</p>
      </article>
      <article>
        <h3>¿Qué es el fishing cibernético?</h3>
        <p>loremlnlnblnblkxnlkxnlknxkmkbmlmfblkmlbkmlxkdmmcnbxbnlxknkxfblkxlbkxlkbmxmlxmlxmn</p>
      </article>
      <article>
        <h3>¿Qué es el fishing cibernético?</h3>
        <p>loremlnlnblnblkxnlkxnlknxkmkbmlmfblkmlbkmlxkdmmcnbxbnlxknkxfblkxlbkxlkbmxmlxmlxmn</p>
      </article>
    </div>
    <form>
      <div>
        <label>Ingresa tu consulta</label> <br>
        <textarea cols="30" rows="5">Descripción</textarea>
      </div>
    </form>
  `
}
console.log(cipher);
