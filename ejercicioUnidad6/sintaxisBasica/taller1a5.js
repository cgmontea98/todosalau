/*TALLER 1*/

var nombre = "Cristian Montealegre";
var edad = 25;

console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);

/*TALLER 2*/

var name = "Cristian";
var surname = "Montealegre";
console.log(`Hola mi nombre es ${name} y mi apellido es ${surname}`);

{
  var anos = 25;
  console.log(`Tengo ${anos} años`);
  let comida = "Pasta";
  console.log(`Me gusta mucho comer ${comida}`);
}

console.log(`Hola, soy ${name} y tengo ${anos} años`);
//console.log(`Mi apellido es ${surname} y me gusta comer ${comida}`);

/* ¿En qué casos resulta mejor usar let o var para definir variables? RTA: dependerá mucho de la forma en que se estructure el 
código y sus funcionamiento, es decir, si se saben que van a tener datos expuestos a cambios constantes es mejor tener var dado 
que dentro o fuera de un bloque de código específico pueden llegar a ser muy versátiles en su uso. Pero también la posibildiad de 
usar let como una alternativa de control del flujo de los procesos ayudaría a solo identificar que en casos especiales se van a 
cambiar y este genera que se identifiquen errores sin necesidad de ver cuantas veces se ha modificado esa misma varibale. Pero 
es una decisión de acuerdo a las necesidades. En mi caso personal prefiero usar let y un entorno controlado y fácil de identificar 
para corregir errores.*/

/*TALLER 3*/

const seg = 60;
const min = 60;
const horas = 24;

console.log(
  `Un minuto tiene ${seg} segundos, una hora tiene ${min} minutos y un día tiene ${horas} horas`
);

/*TALLER 4*/

let cancionFavorita = undefined;
let respuesta = true;

console.log(`Hola! Mi nombre es ${name} ${surname} y tengo ${edad} años, mi canción favorita es ${cancionFavorita} y la
respuesta es ${respuesta}`);

/*TALLER 5*/

/*Ejercicio 1*/
var a = 1;
var b = 1;
var c = 1;

console.log((a * b) / c);
console.log((b + c) * a);
console.log(a / b - (a + c));

/*Ejercicio 2*/
for (i = 0; i < 6; i++) {
  var res = a + i;
  console.log(res);
}

/*Ejercicio 3*/
if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
  console.log(`Los números: ${a}, ${b} y ${c} son pares`);
} else {
  console.log(`No son pares`);
}

var or =
  a % 2 === 0 || b % 2 === 0 || c % 2 === 0
    ? console.log(`Los números: ${a}, ${b} y ${c} son pares`)
    : console.log(`Uno de ellos es 0`);
