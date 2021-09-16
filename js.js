//Popurrí de variables 
//=========Preguntas===============\\
const pGeografia = "¿Cuál es la capital de España?";
const pArte = "¿Quién pintó la Mona Lisa?";
const pEspectculos = "¿Qué personaje interpreta Jhon Travolta en Grease";
const pHistoria = "¿Cuando murió Hitler?";
const pCiencias = "¿Que elemento es K?";
const pDeportes = "¿Cuándo se celebró la primera Copa Mundial de Fútbol?";
//==========Respuestas=============\\
const rGeografia = "Madrid";
const rArte = "Leonardo da Vinci";
const rEspectculos = "Danny Zuko";
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
//============Otros==================================\\
var acabado = false;
var ganado = false;
var perdido = false;

//Bienvenida e instrucciones
alert("Bienvenido al trivia de Aitor Enríquez.");
alert("Debes responder a 6 preguntas en el orden que quieras.");
alert("Si respondes correctamnte a 4 de ellas ganarás el jueo.");
alert("Por el contrario, si respondes mal 3 preguntas el juego se detendrá y habrás perdido.");

//Seleccion de pregunta
function  preguntas() { var eleccion  = prompt("Escoge una de las 6 opciones:\n"+
                    "1. Geografía\n"+
                    "2. Arte\n"+
                    "3. Espectáculos\n"+
                    "4. Historia\n"+
                    "5. Ciencias\n"+
                    "6. Deportes");
                    return eleccion;
}

//Comprobar si el texto está vacío
function estaVacio(texto) {
    if (texto != "" || texto != " ") {
        return false;
    }
    else {
        return true;
    }
}

console.log("a");



do  {
    var eleccion = preguntas();
    switch (eleccion) {
    case  "1":
        if (rrGeografia == "" || rrGeografia == " ") {
            rrGeografia = prompt(pGeografia);
        }
        else {
            alert("Ya has escogido esa pregunta");
        }
        break;
    case "2":
        if (rrArte == "" || rrArte == " ") {
            rrArte = prompt(pArte);
        }
        else {
            alert("Ya has escogido esa pregunta");
        }
        break;
    case "3":
        if (rrEspectaculos == "" || rrEspectaculos == " ") {
            rrEspectaculos = prompt(pEspectaculos);
        }
        else {
            alert("Ya has escogido esa pregunta");
        }
        break;
    case "4":
        if (rrHistoria == "" || rrHistoria == " ") {
            rrHistoria = prompt(pHistoria);
        }
        else {
            alert("Ya has escogido esa pregunta");
        }
        break;
    case "5":
       if (rrCiencias == "" || rrCiencias == " ") {
            rrCiencias = prompt(pCiencias);
        }
        else {
            alert("Ya has escogido esa pregunta");
        }
        break;
    case "6":
        if (rrDeportes == "" || rrDeportes == " ") {
            rrDeportes = prompt(pDeportes);
        }
        else {
            alert("Ya has escogido esa pregunta");
        }
        break;
    default:
        alert("Tienes que escribir un dígito de la lista");
        break;
}
    // if (ganado == true || perdidio == true) {
    //     acabado = true;
    // }
}
while(acabado == false)

if (ganado == true) {
    document.write("<h1>Felicidades, has ganado.</h1>");
}
else if (perdido == true) {
    document.write("<h1>Has perdido, suerte para la próxima</h1>");
}

