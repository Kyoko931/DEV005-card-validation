
import validator from './validator.js';

//ELEMENTOS DOM
const btnValidar = document.getElementById('btnValidar')
const resOcultar = document.getElementById('ocultar')
const nombre = document.getElementById('nombre')
const cardNumber = document.getElementById('cardNumber')
const resultado = document.getElementById('resultado')

//Funcion validar numero
function mostrarTarjeta() {
  let mensaje
  if (validator.isValid(cardNumber.value)) {
    mensaje = ' es: Valida'
  } else {
    mensaje = ' es: Invalida'
  }
  resultado.innerHTML = mensaje
}

// función mascara
function ocultarNumero() {
  const ocultar = cardNumber.value
  resOcultar.innerHTML = 'El número de tarjeta: ' + validator.maskify(ocultar)
}

function limpiar() {
  const nombre = document.getElementById('cardNumber').value = '';
  const numero = document.getElementById('nombre').value = '';
  nombre, numero
}

function datosVacios() {
  let respuestaDatosVacios = true
  if (cardNumber.value.length > 0 && nombre.value.length > 0) {
    respuestaDatosVacios = false
  }
  return respuestaDatosVacios
}

function confirmar() {
  if (datosVacios()) {
    alert('Los campos no pueden estar vacios');
    if (nombre.value.length === 0)
      nombre.focus()
  } else if (cardNumber.value.length === 0) {
    cardNumber.focus()
  } else {
    mostrarTarjeta()
    ocultarNumero()
    limpiar()
  }
}

//Eventos del DOM
btnValidar.addEventListener('click', confirmar);