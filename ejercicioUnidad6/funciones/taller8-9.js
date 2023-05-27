/*TALLER8*/

/*EJERCICO 1*/
function operaciones(num1, num2, signo) {
  switch (signo) {
    case 0:
      res = num1 + num2;
      break;
    case 1:
      res = num1 - num2;
      break;
    case 2:
      res = num1 * num2;
      break;
    case 3:
      res = num1 / num2;
      break;
  }
  return res;
}
console.log(operaciones(10, 20, 3));

/*EJERCICO 2*/
var resultado = undefined;
function usd_a_pesos(usd, pesos) {
  resultado = usd * pesos;
  return resultado;
}
console.log(usd_a_pesos(2, 4500));

function pesos_a_usd(pesos, usd) {
  resultado = pesos * usd;
  return resultado;
}
console.log(pesos_a_usd(4500, 5));

/*EJERCICO 3*/
function cuadrado(l1, l2) {
  resultado = l1 * l2;
  return resultado;
}
console.log(cuadrado(25, 25));

function circulo(r) {
  resultado = 3.1415 * r ** 2;
  return resultado;
}
console.log(circulo(5));

function triangulo(b, a) {
  resultado = (b * a) / 2;
  return resultado;
}
console.log(triangulo(3, 4));

/*TALLER 9*/

/*Ejercicio 1*/
const relacion = function (a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
};
console.log(relacion(1, 1));
console.log(relacion(1, 2));
console.log(relacion(5, 3));

/*Ejercicio 2*/
(function (a) {
  return console.log(a % 2 === 0 ? "par" : "impar");
})(123);
