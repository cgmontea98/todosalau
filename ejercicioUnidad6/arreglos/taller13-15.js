/*TALLER 13*/

const nombrePelicula = [
  "La milla verde",
  "Parásitos",
  "El viaje de Chihiro",
  "Coco",
  "Interstellar",
];

nombrePelicula.forEach((element, index) => {
  console.log(`${index + 1} ${element}`);
});

/*TALLER 14*/

//Ejercicio 1
const a = [];
for (i = 1; i <= 100; i++) {
  a.push(i);
}
console.log(a);

//Ejercicio 2

const numPares = [];
for (i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    numPares.push(i);
  }
}
console.log(numPares);

//Ejercicio 2

const numOrder = [3, 1, 2];
console.log(numOrder.sort());

/*TALLER 15*/

//Ejercicio 1
const diasSemana = [1, 2, 3, 4, 5, 6, 7];
let diaUno = diasSemana[0];
diaDos = diasSemana[1];
diaTres = diasSemana[2];
diaCuatro = diasSemana[3];
diaCinco = diasSemana[4];
diaSeis = diasSemana[5];
diaSiete = diasSemana[6];

console.log(diaUno, diaDos, diaTres, diaCuatro, diaCinco, diaSeis, diaSiete);

//Ejercicio 2
const nombre = "Garfield";
const edad = 11;
const tamanho = "mediano";
const color = "naranja";

const mascota = {
  nombre: nombre,
  edad: edad,
  tamanho: tamanho,
  color: color,
};

console.log(mascota)
