const validator = {
  isValid: function (cardNumber) {
    const arrayNumero = cardNumber.split('').reverse()
    //Pares e Impares separados
    const indicesPares = arrayNumero.filter((valor, indice) => indice % 2 !== 0);
    const indicesImpares = arrayNumero.filter((valor, indice) => indice % 2 === 0).map(elemento => parseInt(elemento));

    // Multiplicar los pares 
    for (let i = 0; i < indicesPares.length; i++) {
      const numero = parseInt(indicesPares[i]);
      const multiplicacion = numero * 2
      if (multiplicacion >= 10) {
        const sumDigitos = multiplicacion - 9
        indicesPares[i] = sumDigitos
      }
      else if (multiplicacion <= 9) {
        const igualNumero = multiplicacion
        indicesPares[i] = igualNumero
      }
    }

    const parImp = indicesPares.concat(indicesImpares);
    const sumaTotal = parImp.reduce((a, b) => a + b);
    const modulo = sumaTotal % 10;

    if (modulo === 0) {
      return true;
    }
    else {
      return false;
    }
  },

  maskify: function (cardNumber, mascara = '#') {
    const numerosMostrar = ('' + cardNumber).slice(-4)
    const num = ('' + cardNumber).slice(0, -4).replace(/./g, mascara)
    const mascaraNumeros = num.concat(numerosMostrar);
    return mascaraNumeros
  }
}

export default validator;