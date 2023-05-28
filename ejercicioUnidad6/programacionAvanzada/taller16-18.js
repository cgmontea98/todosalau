/*Taller 16*/

//Ejercicio 1
try {
  let num;
  if (num == NaN) {
    throw new Error("¡Cuidado! No se reciben datos no numéricos.");
  }
  //Ingrese número o letra para que sirva
  num = console.log(num + num);
} catch (e) {
  console.log(
    `Ingrese solo números, se detecto un caracter no reconocido ${Error}`
  );
} finally {
  console.log(`Análisis de datos terminado.`);
}

//Ejercicio 2
function calculadora(op, num1, num2) {
  try {
    // Verificar que sean números
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("¡Cuidado! No se reciben datos no numéricos.");
    }
    // Operaciones
    switch (op) {
      case "suma":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
      case "resta":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
      case "multiplicacion":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
      case "division":
        // Condición si alguno es cero
        if (num1 === 0 || num2 === 0) {
          throw new Error("La división por cero no es posible.");
        } else {
          console.log(`${num1} / ${num2} = ${num1 / num2}`);
        }
        break;
      case "potencia":
        console.log(`${num1} ^ ${num2} = ${Math.pow(num1, num2)}`);
        break;
      default:
        throw new Error("Operación no válida.");
    }
    console.log(`Análisis de datos terminado.`);
  } catch (error) {
    console.error(error);
  }
}

calculadora("suma", 1, 0);
calculadora("resta", 1, 0);
calculadora("multiplicacion", 1, 0);
calculadora("division", 1, 0);
calculadora("potencia", 1, 0);

/*Taller 17*/
//Ejercicio 1

const palabras = ["edificio", "perla", "estrella", "pescado", "salero", "biblioteca", "guitarra", "dinero", "música"];

palabras.forEach(palabra => {
  if (palabra.toLowerCase().includes("a")) {
    console.log(`La palabra ${palabra} es un sustantivo femenino`);
  } else {
    console.log(`La palabra ${palabra} es un sustantivo masculino`);
  }
});

//Ejercicio 1
/*Taller 18*/
//Ejercicio 1
//Ejercicio 1
