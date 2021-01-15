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
          <input type="number" required>
        </label>
      </div>
      <div>
        <label>Ingresa el texto a cifrar
          <input type="text" required pattern="[A-Za-z ]+">
        </label>
      </div>
      <div>
        <label>Este es tu texto cifrado
          <input type="text" readonly>
        </label>
      </div>
      <button>ir</button
    </form>
  `
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
    <section>
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
    </section>
    <form>
      <div>
        <label>Ingresa tu consulta</label> <br>
        <textarea cols="30" rows="5">Descripción</textarea>
      </div>
    </form>
  `
}
console.log(cipher);
