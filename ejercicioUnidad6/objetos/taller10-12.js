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
    this.nombre = null;
    this.apellido = null;
    this.edad = null;
    this.nacionalidad = null;
  }
}

class Persona1 extends Persona{
    constructor(nombre, apellido, edad, nacionalidad){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.nacionalidad=nacionalidad
    }
    set setNombre(){
        this.Nombre
    }
    get getNombre(){
        return this.Nombre
    }
    set setApellido(){
        this.Apellido
    }
    get getApellido(){
        return this.Apellido
    }
    set setEdad(){
        this.Edad
    }
    get getEdad(){
        return this.Edad
    }
    set setNacionalidad(){
        this.Nacionalidad
    }
    get getNacionalidad(){
        return this.Nacionalidad
    }
}