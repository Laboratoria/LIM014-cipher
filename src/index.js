import cipher from './cipher.js';

// TRABAJAMOS LA FUNCION MODAL
const donatebutton = document.getElementById('btn-modal');
const closebutton = document.getElementById('close');
const modal = document.getElementById('modal');

donatebutton.onclick = function(event){
  event.preventDefault();
  modal.style.display = 'block';
}
closebutton.onclick = function(){
  modal.style.display = 'none';
}

// TRABAJAMOS LA FUNCION NOMBRE ALEATORIO
const startbutton = document.getElementById('button-start-js');
startbutton.addEventListener ('click', funcEmpezar);

function funcEmpezar (event){
  event.preventDefault();
  const containerwelcome = document.querySelector(".welcome");
  let nombres = new Array (" Hipopótamo precavido",
    " Cocodrilo astuto" , " zorro inteligente",
    " tortuga veloz", " chimpancé desconfiado",
    " conejo analítico", "marmota ágil", "tigre ahorrador"
  );

  let numero = nombres.length; //6
  let random = Math.floor((Math.random())* numero);//me da 1 index cualquiera del array nombres
  let seudonimo = nombres[random];

  containerwelcome.innerHTML = `
    <h2> Hola, ${seudonimo}. ¿Qué deseas realizar? </h2>
    <section class="container-botones">
      <button id="encodebutton" class="container-botones-btn">Cifrar</button>
      <button id="decodebutton" class="container-botones-btn">Descifrar</button>
      <button id="infobutton" class="container-botones-btn">Información</button>
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

// TRABAJAMOS LA FUNCION CODIFICAR
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
      <button id="codificar" class="btn-ejecutar">Ejecutar</button
    </form>
  `
  const codificar = document.getElementById("codificar");
  codificar.addEventListener('click', codificar1 );
}
function codificar1 (event) {
  event.preventDefault();
  const offset = parseInt(document.getElementById("offset").value);
  let encodetext = document.getElementById("encodetext").value;

  let screenshow = document.getElementById("screenshow");
  screenshow.value = cipher.encode(offset, encodetext);
}

// TRABAJAMOS LA FUNCION DECODIFICAR
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
          <input type="text" id="decodetext" required pattern="[A-Za-z ]+">
        </label>
      </div>
      <div>
        <label>Este es tu texto descifrado <br>
          <input type="text" id="screenshow1" readonly>
        </label>
      </div>
      <button id="decodificar" class="btn-ejecutar">Ejecutar</button
    </form>
  `
 const decodificar = document.getElementById("decodificar");
 decodificar.addEventListener('click', decodificar1);
}
function decodificar1 (event){
  event.preventDefault();
  const offset1 = document.getElementById("offset1").value;
  let decodetext = document.getElementById("decodetext").value;

  let screenshow1 = document.getElementById('screenshow1');
  screenshow1.value = cipher.decode(offset1, decodetext);
}

// TRABAJAMOS LA FUNCION INFORMACION
function funcInfo (){
  const containermainjs = document.getElementById("container-mainjs");
  containermainjs.innerHTML = `
    <section class="info">
      <h2 class="faq-h2">Preguntas Frecuentes</h2>
      <div  class="FAQ">
        <div>
          <article>
            <h3>¿Qué es el phishing cibernético?</h3>
            <p>es una técnica que consiste en engañar al usuario para robarle información confidencial, claves de acceso, etc., haciéndole creer que está en un sitio de total confianza.</p>
          </article>
          <article>
            <h3>¿Qué medios electrónicos utilizan los hackers para cometer delitos electrónicos?</h3>
            <p>Usualmente los hackers han utilizado los correos electrónicos para lanzar este tipo de ataques, pero con el uso masivo de redes sociales y smartphones con conexión a Internet, las vías de ataque se están multiplicando mediante mensajes de texto, whatsapp, y demás redes sociales.</p>
          </article>
          <article>
            <h3>¿Cómo podemos prevenir este tipo de ataques de phishing?</h3>
            <p>1. Aprende a identificar claramente los correos electrónicos sospechosos de ser phishing.</p>
            <p>Existen algunos aspectos que inequívocamente, identifican este tipo de ataques a través de correo electrónico:
            Utilizan nombres y adoptan la imagen de empresas reales.
            Llevan como remitente el nombre de la empresa o el de un empleado real de la empresa.
            Incluyen webs que visualmente son iguales a las de empresas reales.
            Como gancho utilizan regalos o la perdida de la propia cuenta existente.</p>
           <p>2. Verifica la fuente de información de tus correos entrantes.</p>
           <p>Tu banco nunca te pedirá que le envíes tus claves o datos personales por correo. Nunca respondas a este tipo de preguntas y si tienes una mínima duda, llama directamente a tu banco para aclararlo.</p>
           <p>3. Nunca entres en la web de tu banco pulsando en links incluidos en correos electronicos.</p>
           <p>No hagas clic en los hipervínculos o enlaces que te adjunten en el correo, ya que de forma oculta te podrían dirigir a una web fraudulenta.
              Teclea directamente la dirección web en tu navegador o utiliza marcadores/favoritos si quieres ir más rápido.</p>
            <p>4. Refuerza la seguridad de tu ordenador.</p>
            <p>El sentido común y la prudencia es tan indispensable como mantener tu equipo protegido con un buen antivirus que bloquee este tipo de ataques. Además, siempre debes tener actualizado tu sistema operativo y navegadores web.</p>
            <p>5. Introduce tus datos confidenciales únicamente en webs seguras.</p>
            <p>Las webs seguras han de empezar por ‘https://’ y debe aparecer en tu navegador el icono de un pequeño candado cerrado.</p>
            <p>6. Revisa periódicamente tus cuentas.</p>
            <p>Nunca está de más revisar tus cuentas bancarias de forma periódica, para estar al tanto de cualquier irregularidad en tus transacciones online.</p>
            <p>7. No sólo de banca online vive el phishing.</p>
            <p>La mayor parte de ataques de phishing van contra entidades bancarias, pero en realidad pueden utilizar cualquier otra web popular del momento como gancho para robar datos personales: eBay, Facebook, Pay Pal, etc.</p>
            <p>8. El phishing sabe idiomas.</p>
            <p>El phishing no conoce fronteras y pueden llegarte ataques en cualquier idioma. Por norma general están mal escritos o traducidos, así que este puede ser otro indicador de que algo no va bien.
              Si nunca entras a la web en inglés de tu banco, ¿Por qué ahora debe llegarte un comunicado suyo en este idioma?</p>
            <p>9. Ante la mínima duda se prudente y no te arriesgues.</p>
            <p>La mejor forma de acertar siempre es rechazar de forma sistemática cualquier correo electrónico o comunicado que incida en que facilites datos confidenciales.
              Elimina este tipo de correos y llama a tu entidad bancaria para aclarar cualquier duda.</p>
            <p>10. Infórmate periódicamente sobre la evolución de los malwares.</p>
            <p>Si quieres mantenerte al día de los últimos ataques de malware, recomendaciones o consejos para evitar cualquier peligro en la red, etc., siempre puedes leernos este blog o seguirnos en Twitter y Facebook. ¡Estaremos encantados de contestar cualquier duda que tengas!</p>
          </article>
          <article>
            <h3>¿Es posible que algún representante de tu banca vaya a tu casa a recoger tus tarjetas para renovarlas?</h3>
            <p>Jamás des tus tarjetas a nadie ni mucho menos tus claves. Si tienes que cambiar tu tarjeta, acércate a tu banco y realiza la operación correspondiente.</p>
          </article>
        </div>
        <form>
          <div>
            <label>Ingresa tu consulta</label> <br><br>
            <textarea cols="40" rows="5">Descripción</textarea>
          </div>
        <button class="boton-enviar"  class="btn-ejecutar">Enviar</button>
        </form>
      </div>
    </section>
    `
}

console.log(cipher);
