import cipher from './cipher.js';

const startbutton = document.getElementById('button-start-js');
startbutton.addEventListener ('click', funcEmpezar);

function funcEmpezar (event){
  event.preventDefault();
  const containerwelcome = document.querySelector(".welcome");
  let nombres = new Array (" Hipopótamo precavido",
    " Cocodrilo astuto" , " zorro inteligente",
    " tortuga veloz", " chimpancé desconfiado", " conejo analítico", "marmota ágil", "tigre ahorrador"
  );

  let numero = nombres.length; //6
  let random = Math.floor((Math.random())* numero);//me da 1 index cualquiera del array nombres
  let seudonimo = nombres[random];

  containerwelcome.innerHTML = `
    <h2> Hola, ${seudonimo}. ¿Qué deseas realizar? </h2>
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
  codificar.addEventListener('click', codificar1 );
}
function codificar1 () {
  const offset = parseInt(document.getElementById("offset").value);
  let encodetext = document.getElementById("encodetext").value;

  let screenshow = document.getElementById("screenshow");
  screenshow.value = cipher.encode(offset, encodetext);
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
 decodificar.addEventListener('click', decodificar1);
}
function decodificar1 (){
  const offset1 = document.getElementById("offset1").value;
  let decodetext = document.getElementById("decodetext").value;

  let screenshow1 = document.getElementById('screenshow1');
  screenshow1.value = cipher.decode(offset1, decodetext);
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
