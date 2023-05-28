/*TALLER 10*/

var objeto = {
  marca: "Hyundai",
  modelo: "Getz",
  año: 1998,
  color: "Negro",
  descripcion: function () {
    console.log(
      `Hola! Mi marca es ${objeto.marca}, soy modelo ${objeto.modelo} del ${objeto.año} y mi color es ${objeto.color}`
    );
  },
};
console.log(objeto);
objeto.descripcion();

/*TALLER 11*/

/*Ejercicio 1*/
class figura {
  constructor(color) {
    this.color = color;
  }
  saludar() {
    console.log("Hola! Soy una figura y mi color es color");
  }
}

const rombo = new figura("azul");
console.log(rombo);

/*Ejercicio 2*/
class cuadraro extends figura {
  constructor(alto, ancho, color) {
    super(color);
    this.alto = alto;
    this.ancho = ancho;
  }
  saludar() {
    console.log(
      `Hola! Soy un cuadrado. Mi color es ${this.color} y mis medidas son ${this.alto} x ${this.ancho}`
    );
  }
}

const rectangulo = new cuadraro(16, 20, "rojo");
console.log(rectangulo);
rectangulo.saludar();

/*Ejercicio 3*/
class circulo extends figura {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }
  saludar() {
    console.log(
      `Hola! Soy un círculo. Mi color es ${this.color} y mi radio es ${this.radio}`
    );
  }
}
const ciruclo = new circulo("verde", 5);
console.log(ciruclo);
ciruclo.saludar();

/*TALLER 12*/
class Persona {
  constructor(nombre, apellido, edad, nacionalidad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
  }

  static numPerson() {
    console.log("Hay 8.010.359.063 personas en el mundo");
  }

  get getNombre() {
    return this.nombre;
  }
  set setNombre(nombre) {
    this.nombre = nombre;
  }

  get getApellido() {
    return this.apellido;
  }
  set setApellido(apellido) {
    this.apellido = apellido;
  }

  get getEdad() {
    return this.edad;
  }
  set setEdad(edad) {
    this.edad = edad;
  }

  get getNacionalidad() {
    return this.nacionalidad;
  }
  set setNacionalidad(nacionalidad) {
    this.nacionalidad = nacionalidad;
  }
}
//Asignando valores o setando los predefinidos
const person = new Persona("Cristian", "Montealegre", 25, "Colombiano");
//Mostrando valores
console.log(person.getNombre);
console.log(person.getApellido);
console.log(person.getEdad);
console.log(person.getNacionalidad);

Persona.numPerson() 
