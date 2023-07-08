    // Tipos de datos:
    // Variables
    // string = 'HOLA MUNDO';
    // number = 79;
    // booleano = false;
    // booleano2 = true;
    // Constante

     
    // string 
    const nombre = 'DANY';
    const apellido = 'MIRON'
    // Salida: DANY MIRON
    console.log(nombre + ' ' + apellido); // Salida: DANY MIRON

    // number
    //  variable 
    let numero1=12.79;
    let numero2=15.79;
    let resultado = numero1 + numero2;
    console.log(resultado); // Salida: 28.58


    // Tipo de dato Booleano
    let eje_bool = true;
    console.log(eje_bool)
    let eje_bool2 = false;
    console.log(eje_bool2)


     //EJE 2
    let esVerdadero = true;
if (esVerdadero) {
  console.log('Es verdadero');
} else {
  console.log('Es falso');
}
    
// Tipo de dato Null

// Ejemplo 1: 
let numero3 = null;
console.log(numero3); // Salida: null

// Ejemplo 2
let valor = null;
if (valor === null) {
  console.log('El valor es nulo');
} else {
  console.log('El valor no es nulo');
}


//================================================================================================

// string
const nombre4 = 'DANY';
const apellido5 = 'MIRON';
console.log(nombre4.concat(' ', apellido5)); // Salida: DANY MIRON

// number
let numero4 = 12.79;
let numero5 = 15.79;
let resultado2 = numero4 + numero5;
console.log(resultado.toFixed(2)); // Salida: 28.58

// Tipo de dato Booleano
let eje_bool4 = true;
console.log(eje_bool.toString()); // Salida: true
let eje_bool5 = false;
console.log(eje_bool5.toString()); // Salida: false

// EJE 2
let esVerdadero1 = true;
if (esVerdadero1) {
  console.log('Es verdadero'); // Salida: Es verdadero
} else {
  console.log('Es falso');
}

// Tipo de dato Null
let numero6 = null;
console.log(numero6); // Salida: null

let valor1 = null;
if (valor1 === null) {
  console.log('El valor es nulo'); // Salida: El valor es nulo
} else {
  console.log('El valor no es nulo');
}

console.log(nombre); // Salida: DANY
console.log(apellido); // Salida: MIRON

let numero8 = 12.79;
console.log(numero8); // Salida: 12.79

let numero99 = null;
console.log(numero99); // Salida: null

let nombre9 = 'DANY', nombre8 = 'ERICK', apellido4 = 'MIRON';
console.log(`${nombre9}${nombre8}${apellido4}`); // Salida: DANYERICKMIRON

// Creacion de Objetos
let Persona = {
  nombre: 'DANY',
  peso: 150,
  edad: 28,
  altura: 1.68,
  saludar: function () {
    console.log('HOLA SOY DANY');
  },
};
console.log(Persona);

// Creacion de Arrays
let array = [1, 2, 3, 5, 6, 'Array'];
console.log(array);


//=============================================================================================================


    // alert(nombre)
    // console.log para que la varible aparezca dentro de la consola.
    console.log(nombre) 
    console.log(apellido) 

     // Aca si se puede modificar la variable a diferencia de una constante
    //numero=79;   
    //alert(numero)
    console.log(numero1)
    
    //Para definir varias variables en una sola linea.
    //let numero1=20, numero2=21, numero3=22
    
    
    //Null y Nad.
    //Null es un vacio intencional en una variable 
    let numero79=null;
    alert(numero79)
    
    
    
    
    //Concatenacion
    let nombre1='DANY', nombre2='ERICK', apellido1='MIRON';
    // alert(nombre1+apellido1); //Aca se concatena.
    //alert(nombre1*apellido1); 
    console.log(nombre1+nombre2+apellido1);
    
    
    
    
    // Creacion de Objetos
    
    // let Persona = {
    //     nombre : 'DANY',
    //     peso : 150,
    //     edad : 28,
    //     altura: 1.68,
    //     saludar: function (){
    //         alert("")HOLA SOY DANY
    //     }
    // }
    // // alert(Persona)
    // console.log(Persona)
    
    //Creacion de Arrays

    // let array = [1,2,3,5,6,"Array"]
    // console.log(array)
    // alert(array)
    
    