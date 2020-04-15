// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "cualquier cosa";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 2;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str;
  }

function suma(x, y) {
  var suma = x + y;
  return suma;
}

function resta(x, y) {
  const resta = x - y;
  return resta;
}

function multiplica(x, y) {
  const multiplica = x * y;
  return multiplica;
}

function divide(x, y) {
  const divide = x / y;
  return divide;
}

function sonIguales(x, y) {
  if (x === y) {
    return true;
} else {
return false;
}
}


function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length) {
    return true;
} else {
    return false;
}
}

function menosQueNoventa(num) {
  if (num < 90) {
    return true;
  } else {
    return false;
    }
  }

function mayorQueCincuenta(num) {
 return (num > 50)
  }

function obtenerResto(x, y) {
  return (x % y);
  } 

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
    }
  }
function esImpar(num) {
  if (num % 2 !== 0) {
    return true;
}else {
return false;
}
}

function elevarAlCuadrado(num) {
  var elevarAlCuadrado = num ** 2;
  return elevarAlCuadrado;
}

function elevarAlCubo(num) {
  var elevarAlCubo = num ** 3;
  return elevarAlCubo;
}

function elevar(num, exponent) {
  var elevarAlExponencial = num ** exponent;
  return elevarAlExponencial;
}

function redondearNumero(num) {
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  return Math.ceil(num);
}

function agregarSimboloExclamacion(str) {
 return (str + "!");
}

function combinarNombres(nombre, apellido) {
  return (nombre + " " + apellido);
}

function obtenerSaludo(nombre) {
return ("Hola " + nombre + "!")
}

function obtenerAreaRectangulo(alto, ancho) {
  return (alto * ancho)
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};