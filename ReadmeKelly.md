## CIFRADO CÉSAR🧐
El cifrado César, también conocido como cifrado por desplazamiento, es una de las técnicas de cifrado más simples y usadas. Es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

La transformación se puede representar alineando dos alfabetos; el alfabeto cifrado es un alfabeto normal que está desplazado un número determinado de posiciones hacia la izquierda o la derecha.

Para codificar un mensaje, simplemente se debe buscar cada letra de la línea del texto original y escribir la letra correspondiente en la línea codificada. Para decodificarlo se debe hacer lo contrario.

![](https://jaboman2.files.wordpress.com/2019/02/caesar.png)

------------

#### Resumen del proyecto
En este proyecto se creará una aplicación web que interactuará con los usuarios finales a través del navegador para que puedan cifrar y descifrar un texto indicando un desplazamiento específico de caracteres (offset), utilizando HTML, CSS y JavaScript como tecnologías.

------------

#### Criterios mínimos del proyecto
Usar este alfabeto simple (solamente mayúsculas y sin ñ):

- **A B C D E F G H I J K L M N O P Q R S T U V W X Y Z**

------------

#### Definición de Producto
**¿ Quiénes son los principales usuarios de producto?**
La pandemia actual ha vulnerado varios aspectos de nuestra vida, en el caso de los adolescentes se les ha adicionado el problema de su privacidad, pues, sus padres con la excusa de pagar los móviles u ordenadores de sus hijos se sienten con el derecho de revisar los mensajes que envían y reciben por esos canales, aduciendo "protección" y esa no es una buena fórmula de control pues, controlar no es igual que espiar. 

**Problemática**
Para este proyecto tomaré el caso de Samantha de 15 años que vive con padres y dos hermanos quien no tiene permitido poner clave a sus aparatos tecnológicos por lo que sus padres o hermanos al menor descuido toman su celular y sin pemiso leen sus mensajes con el afán de molestarla (hermanos) o "protegerla" (padres); ya no puede hablar con su mejor amiga de los chicos que le gustan, chismear o contarse secretos como antes.

**¿Cuáles son los objetivos de estos usuarios en relación con tu producto?.**
Conseguir una herramienta que les permita encriptar sus mensajes, en donde sólo el emisor y receptor conociendo el número de desplazamiento del cifrado podrán decifrar su contenido.

**¿Cómo crees que el producto que estás creando está resolviendo sus problemas?.**
Con Ciphers conseguirán encriptar sus mensajes, evitando así que las sigan molestando, recuperar su privacidad y hasta puedan aducir que lo que estan viendo es un virus o spam cuando alguien vea sin permiso.😋

------------

#### Interfaz del Usuario (UI)
La interfaz  le permite al usuario:

**CIFRADO**

- Se muestra la pantalla principal
- El usuario coloca el texto que desea cifrar
- Indica el # de desplazamientos que desea (derecha o izquierda) / (Offset)
- Click en el botón cifrar

**DESCIFRADO**

- Muestra el texto cifrado
- El usuario coloca el texto que desea descifrar
- Indica el # de desplazamientos que desea (derecha o izquierda) / (Offset)
- Click en botón descifrar

![](https://github.com/kelmita22/LIM014-cipher/blob/master/src/UX/Interfaz.jpg?raw=true)


------------

#### Proceso UX
**Prototipado en Papel**
Realicé 2 diseños, al segundo le agregué los botones necesarios para que pueda realizar correctamente la funcionalidad.

**Diseño 1:**

![](https://github.com/kelmita22/LIM014-cipher/blob/master/src/UX/prototipopapel1.jpg?raw=true)

**Diseño 2:**
![](https://github.com/kelmita22/LIM014-cipher/blob/master/src/UX/prototipopapel2.jpg?raw=true)

**Diseño logo en Photoshop**
Tome como referencia la iconografía de candado en una burbuja de diálogo que simboliza seguridad. [Link Iconografía](https://es.123rf.com/photo_30806197_icono-de-candado-en-una-burbuja-de-di%C3%A1logo-sobre-blanco.html "Link Iconografía")

![](https://github.com/kelmita22/LIM014-cipher/blob/master/src/UX/logo.png?raw=true)

**Prototipado en Figma**

Primer diseño presentado a 5 usuarios objetivos entre hombres y mujeres. 
- **Temática de los colores:** En cuanto a la psicología del color en marketing, la combinación de los colores negro y rosa denota  más personalidad, juega entre lo misterioso y juvenil,  ideal para la aplicación.
[Significado de los colores en Marketing](https://clientesonyoffline.es/significado-los-colores-marketing/ "Significado de los colores en Marketing")

**Cambios resultado del testeo**
Realicé las siguientes modificaciones como resultado de las observaciones de los usuarios tipo:
- Atenuar el fondo
- Darle borde a la letra porque se pierde con el fondo
- Agrandar el tamaño de la letra de los botones
- Darle un margen de separación a los cuadros de texto de Cifrado y Descifrado

![](https://github.com/kelmita22/LIM014-cipher/blob/master/src/UX/cambios.png?raw=true)

[Prototipo Final Figma](https://www.figma.com/file/xMx8M3iX4lOS4oG3KDave3/Ciphers?node-id=0%3A1 "Prototipo Figma")

**Interfaz**
- Pantalla Inicial

![](https://github.com/kelmita22/LIM014-cipher/blob/master/src/UX/figma1.png?raw=true)

- Usuario coloca el texto que desea cifrar, ingresa el número de desplazamiento con el shift del recuadro y da click al botón cifrar.

![](https://github.com/kelmita22/LIM014-cipher/blob/master/src/UX/figma2.png?raw=true)

- El sistema muestra el texto cifrado

![](https://github.com/kelmita22/LIM014-cipher/blob/master/src/UX/figma3.png?raw=true)

- Para decifrar copia y pega el texto cifrado en el recuadro de descrifrar, ingresar el número de desplazamiento con el shift y da click en el botón de decifrar.

![](https://github.com/kelmita22/LIM014-cipher/blob/master/src/UX/figma4.png?raw=true)

- Muestra el texto decifrado.

![](https://github.com/kelmita22/LIM014-cipher/blob/master/src/UX/figma5.png?raw=true)

