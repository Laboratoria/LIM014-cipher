import cipher from './cipher.js';

const startbutton = document.getElementById('button-start-js');
startbutton.addEventListener ('click', funcEmpezar);

function funcEmpezar (event){
  event.preventDefault();
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

// AHORA TRABAJAMOS LA FUNCION CODIFICAR
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
}
function encode(){
  const offset = parseInt(document.getElementById("offset").value);
  let encodetext = document.getElementById("encodetext").value;

  let arraytext = encodetext.split("");
  for (let i = 0; i < arraytext.length; i++) {
    arraytext[i] = arraytext[i].charCodeAt(0);
  }

  let runarraytext = arraytext.map(function(element) {
    return String.fromCharCode((element - 65 + offset) % 26 + 65);
  })

  let stringconvert = runarraytext.join('');
  let screenshow = document.getElementById("screenshow");
  screenshow.value = stringconvert
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

  for (let index = 0; index <decodetextarr.length; index++) {
    decodetextarr[index] = decodetextarr[index].charCodeAt(0);
  }

  let rundecodetextarr = decodetextarr.map(function (elemento){
    return String.fromCharCode((elemento + 65 - offset1)% 26 + 65)
  });

  let stringconvert1 = rundecodetextarr.join('');
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
