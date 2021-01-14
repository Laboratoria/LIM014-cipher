import cipher from './cipher.js';

const startbutton = document.getElementById('button-start-js');
startbutton.addEventListener ('click', funcEmpezar);

function funcEmpezar (){
/*   const div = document.createElement("div"); */
  const containerwelcome = document.querySelector(".welcome")
  containerwelcome.innerHTML = `
    <h2> Hola, XXX. ¿Qué deseas realizar? </h2>
    <div class="container-botones">
      <button id="encodebutton">Cifrar</button>
      <button id="decodebutton">Descifrar</button>
      <button id="info">Información</button>
    </div>
    `
/*   containerwelcome.replaceChild(div); */
}
console.log(cipher);
