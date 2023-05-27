/*TALLER 6*/

/*Ejercicio 1*/
var arr = [-3, 2000, 1];
arr.sort((a, b) => a - b);
console.log(arr);

var a = 2;
var b = 2;
var c = 2;

if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
  console.log(`Los números: ${a}, ${b} y ${c} son pares`);
} else {
  console.log(`No son pares`);
}

/*Ejercicio 2*/
var decenas = 8;

function cantidad(decenas) {
  var precioDocena = 60000;
  var total = decenas * precioDocena;
  return total;
}

function porcentaje() {
  var descuento = undefined;

  if (decenas > 10) {
    descuento = 20;
  } else if (decenas >= 5) {
    descuento = 15;
  } else if (decenas > 1) {
    descuento = 10;
  }
  return descuento;
}

console.log(
  `el total es de ${cantidad(
    decenas
  )} el descuento que aplica es: ${porcentaje()}`
);

/*TALLER 7*/

/*Ejercicio 1*/
for (i = 10; i >= 1; i--) {
  console.log(i);
}
/*Ejercicio 2*/
let res = 0;
for (i = 1; i <= 5; i++) {
  res += i;
  console.log(res);
}
/*Ejercicio 3*/
const siete = 7;
let num = 0;

while (num <= 10) {
  let resu = siete * num;
  console.log(resu);
}
