//Popurrí de variables 

//=========Preguntas===============\\
const pGeografia = "¿Cuál es la capital de España?";
const pArte = "¿Quién pintó la Mona Lisa?";
const pEspectaculos = "¿Qué personaje interpreta Jhon Travolta en Grease";
const pHistoria = "¿Cuando murió Hitler?";
const pCiencias = "¿Que elemento es K?";
const pDeportes = "¿Cuándo se celebró la primera Copa Mundial de Fútbol?";
//==========Respuestas=============\\
const rGeografia = "Madrid";
const rArte = "Leonardo da Vinci";
const rEspectaculos = "Danny Zuko";
const rHistoria = 1945;
const rCiencias = "Potasio";
const rDeportes = 1930;
//============Recogida de datos===================\\
var rrGeografia = "";
var rrArte = "";
var rrEspectaculos = "";
var rrHistoria = "";
var rrCiencias = "";
var rrDeportes = "";
//============ElementosHTML===================\\
const eGeografia = document.getElementById("geografia");
const eArte = document.getElementById("arte");
const eEspectaculos = document.getElementById("espectaculos");
const eHistoria = document.getElementById("historia");
const eCiencias = document.getElementById("ciencias");
const eDeportes = document.getElementById("deportes");
const ePuntuacionTotal = document.getElementById("puntuacionTotal");
const ePuntuacionErronea = document.getElementById("puntuacionErronea");
const eResultado1 = document.getElementById("resultado1");
const eResultado2 = document.getElementById("resultado2");
//============Otros===================\\
var puntuacionTotal = 0;
var puntuacionErronea = 0;


/*
 * Función estaVacio 
 * @return true|false
 * Verifica si el texto de entrada está vacío o no
 */

function estaVacio(texto) {
    if(texto == "" || texto == " " || texto == null) {
        return true;
    }

    else {
        return false;
    }
}
/* 
*Función puntuar
* no retorna nada
* Verifica si la respuesta es correcta o no y puntúa
*/
function puntuar(texto, respuesta) {
    if (texto == respuesta ) {
        puntuacionTotal++;
        ePuntuacionTotal.innerHTML = "Respuestas correctas: " + puntuacionTotal;
    }
    else {
        puntuacionErronea++;
        ePuntuacionErronea.innerHTML= "Respuestas erróneas: " + puntuacionErronea;
    }
}

/*
* Función terminar
* @return true|false
* Verifica si el jugador ha perdido o ganado.
* Si es así el juego ha acabado. Tambien imprime el resultado y respuestas.
*/

function terminado() {
    // preguntas = [pGeografia,pArte,pEspectaculos,pHistoria,pCiencias,pDeportes];
    // respuestas = [rGeografia,rArte,rEspectaculos,rHistoria,rCiencias,rDeportes];
    // respuestasUsuario = [rrGeografia,rrArte,rrEspectaculos,rrHistoria,rrCiencias,rrDeportes];
    if (puntuacionTotal >= 4) {
        eResultadonh1.innerHTML = "Enhorabuena. Has ganado.";
        // for (var i = 0; i <= 5; i++ ) {
        //     eResultado2.innerHTML =  "Pregunta: " + preguntas[i] + "Respuesta: " + respuestas[i] + "Has escrito: " + respuestasUsuario[i];
        // }
        return true;
    }
    else if(puntuacionErronea >= 3) {
        eResultado1.innerHTML = "Has perdido. Suerte para la próxima.";
        // for (var i = 0; i <= 5; i++ ) {
        //     eResultado2.innerHTML = "Pregunta: " + preguntas[i] + "<br>Respuesta: " + respuestas[i];
        // }
        return true;
    }
    else {
        return false;
    }
}

/*
 * Función pregunta 
 * no retorna nada
 * Muestra la pregunta y guarda respuesta
 */

function pregunta(opcion) {
    //Dependiendo de la opcion que escojas,
    //Se activará una secuencia de instrucciones hacia una sección:

    //Si es la primera vez que seleccionas la opción (texto está vacío o null)
    //Te muestra la pregunta y un cuadro para escribir

    //Si le das a cancelar, o no escribes nada (texto vacío o null)
    //Se cancela la iteracción y no se puntúa ni bien ni mal

    //Si escribes algo, no podrás volver a escribir en esa sección y se puntúa o bien o mal

    switch (opcion) {
        case eGeografia:
            if (terminado()) {
                alert("Se ha terminado el juego.\nPregunta: " + pGeografia + "\nRespuesta: " + rGeografia);
            }
            else {
               if (estaVacio(rrGeografia)) {
                    rrGeografia = prompt(pGeografia);
                    if (estaVacio(rrGeografia)) break;
                    puntuar(rrGeografia,rGeografia);
                    terminado();
               }
                else {
                    alert("Ya has escogido esta opción.");
                    console.log(rrGeografia);
                }
            }
            console.log("Geografía");
            break;
    
        case eArte:
            if (terminado()) {
                alert("Se ha terminado el juego.\nPregunta: " + pArte + "\nRespuesta: " + rArte);
            }
            else {
                if (estaVacio(rrArte)) {
                    rrArte = prompt(pArte);
                    if (estaVacio(rrArte)) break;
                    puntuar(rrArte,rArte);
                    terminado();
                }
                else {
                    alert("Ya has escogido esta opción.");
                }
            }
            console.log("Arte");
            break;
        case eEspectaculos:
            if (terminado()) {
                alert("Se ha terminado el juego.\nPregunta: " + pEspectaculos + "\nRespuesta: " + rEspectaculos);
            }
            else {
                if (estaVacio(rrEspectaculos)) {
                    rrEspectaculos = prompt(pEspectaculos);
                    if (estaVacio(rrEspectaculos)) break;
                    puntuar(rrEspectaculos,rEspectaculos);
                    terminado();
                }
                else {
                    alert("Ya has escogido esta opción.");
                }
            }
            console.log("Espectaculos");
            break;
        case eHistoria:
            if (terminado()) {
                alert("Se ha terminado el juego.\nPregunta: " + pHistoria + "\nRespuesta: " + rHistoria);
            }
            else {
                if (estaVacio(rrHistoria)) {
                    rrHistoria = prompt(pHistoria);
                    if (estaVacio(rrHistoria)) break;
                    puntuar(rrHistoria,rHistoria);
                    terminado();
                }
                else {
                    alert("Ya has escogido esta opción.");
                }
            }
            console.log("Historia");
            break;
        case eCiencias:
            if (terminado()) {
                alert("Se ha terminado el juego.\nPregunta: " + pCiencias + "\nRespuesta: " + rCiencias);
            }
            else {
                if (estaVacio(rrCiencias)) {
                    rrCiencias = prompt(pCiencias);
                    if (estaVacio(rrCiencias)) break;
                    puntuar(rrCiencias,rCiencias);
                    terminado();
                }
                else {
                    alert("Ya has escogido esta opción.");
                }
            }
            console.log("Ciencias");
            break;
        case eDeportes:
            if (terminado()) {
                alert("Se ha terminado el juego.\nPregunta: " + pDeportes + "\nRespuesta: " + rDeportes);
            }
            else {
                if (estaVacio(rrDeportes)) {
                    rrDeportes = prompt(pDeportes);
                    if (estaVacio(rrDeportes)) break;
                    puntuar(rrDeportes,rDeportes);
                    terminado();
                }
                else {
                    alert("Ya has escogido esta opción.");
                }
            }
            console.log("Deportes");
            break;
    }
}