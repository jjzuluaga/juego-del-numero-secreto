let numsecreto = 0;
let intentos = 0 ;
let listanumsorteados = [];
let numeromaximo = 10


function asignartextoelemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}

function verificarintent(){
    let numerusuario = parseInt(document.getElementById("valorsuario").value);
     
    if (numerusuario === numsecreto) {
        asignartextoelemento("p",`Acertaste el númeroo en ${intentos} ${(intentos == 1) ? "vez" : "veces"}, eres lome!`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else{
        //usuario no acertoo
        if (numerusuario > numsecreto){
            asignartextoelemento("p","El número secreto es menor jeje");
        } else{
            asignartextoelemento("p","El número secreto es mayor jeje");
        }
        intentos++;
        limpiarcaja();
    }   
    
    return;
}

function limpiarcaja(){
    document.querySelector("#valorsuario").value = "";
    
}

function generarnumerosecreto() {
    let numerogenerado Math.floor(Math.random()*numeromaximo)+1;

    //si ya sorteamos el numero
    if (listanumsorteados.length == numeromaximo){
        asignartextoelemento("p","Ya se sortearon todos los numeros");

    }else{

         //el # esta en la lista?

        if (listanumsorteados.includes(numerogenerado)) {
            return generarnumerosecreto();

        }else{
            listanumsorteados.push(numerogenerado);
            return numerogenerado;
    }
    }

   
}

function condicionesiniciales(){
    asignartextoelemento("h1","Juego del número secreto");
    asignartextoelemento("p",`Indica un número del 1 al ${numeromaximo}:`);
    numsecreto = generarnumerosecreto();
    intentos = 1;  

}

function reiniciarjuego(){
    //limpiar caja
    limpiarcaja();
    //indicar mensaje de inicio
    //generar el  numero aleatorio
    //iniciar numero de intentos
    condicionesiniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesiniciales();


