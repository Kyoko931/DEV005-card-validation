const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

targets.forEach(target => {
  target.addEventListener('click', () => {
    content.forEach(c => {
      c.classList.remove('active');
    });
    const t = document.querySelector(target.dataset.target);
    t.classList.add('active');
  })
})

const inputs = document.querySelectorAll('#form input')

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  cardNumber: /^[0-9]{1,19}$/, // Letras, numeros.
}

const campos = {
  nombre: false,
  cardNumber: false
}

const validarFormulario = (e) => { 
  switch (e.target.name) { 
  case 'nombre':
    validarCampo(expresiones.nombre, e.target, 'nombre');
    break;
  case 'cardNumber':
    validarCampo(expresiones.cardNumber, e.target, 'cardNumber');
    break;
  }
}

const validarCampo = (expresion,input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`grupo-${campo}`).classList.remove('form-group-incorrecto');
    document.getElementById(`grupo-${campo}`).classList.add('form-group-correcto');
    document.querySelector(`#grupo-${campo} .form-error`).classList.remove('form-error-activo')
    campos[campo] = true;
  } else {
    document.getElementById(`grupo-${campo}`).classList.add('form-group-incorrecto');
    document.getElementById(`grupo-${campo}`).classList.remove('form-group-correcto');
    document.querySelector(`#grupo-${campo} .form-error`).classList.add('form-error-activo')
    campos[campo] = false;
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});