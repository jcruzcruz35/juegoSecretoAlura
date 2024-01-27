let numeroSectreto = 0;
let numeroIntentos =0;
let listaNumerosSorteados = [];
let numeroMaximo =10;

function asignarTextoElemento(elemento, texto ) {

let elementoHTML = document.querySelector(elemento);

elementoHTML.innerHTML = texto;
return;

}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p','Se han sorteado todos los números posibles');
    
  } else {
  
        if (listaNumerosSorteados.includes(numeroGenerado)) {
       return generarNumeroSecreto();
    }  else {
       listaNumerosSorteados.push(numeroGenerado);
       return numeroGenerado;
      } 
  }
}

function verificarIntento( ) {
  
  let numeroDelUsuario = parseInt(document.getElementById("valorUsuario").value)
  
  
  if (numeroDelUsuario === numeroSectreto) {
    
    asignarTextoElemento('p', `¡Acertaste el número en ${ numeroIntentos} ${ ( numeroIntentos === 1) ? 'intento' : 'intentos' }! `);
    limpiarCaja();
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    
    if (numeroDelUsuario > numeroSectreto) {
    asignarTextoElemento("p", "El número debería ser menor");
    } else {
      asignarTextoElemento("p", "El número debería ser mayor");
    }
    numeroIntentos++;
    limpiarCaja();
  }
   
}

function limpiarCaja() {
  let valorCaja = document.querySelector('#valorUsuario').value='';
}

function condicionesIniciales() {
asignarTextoElemento('h1', 'Juego del número secreto');

asignarTextoElemento("p " ,`Indica un número del 1 al ${numeroMaximo}.`) ;

document.getElementById('reiniciar').setAttribute('disabled', 'true');

numeroSectreto = generarNumeroSecreto();
numeroIntentos =1;

}

function reinicarJuego() {
  ///Limpiar caja
  limpiarCaja();
  /// mensaje de inicio
  condicionesIniciales();
  ///generar número aleatorio
//numeroSectreto = generarNumeroSecreto();
  ///desahabilitar boton 
  
  ///reiniciar número de inventos 
}

condicionesIniciales();