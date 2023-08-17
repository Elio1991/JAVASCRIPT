// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]: 
//           a. Determinar cual de los dos elementos de texto es mayor 
//           b. Utilizando exclusivamente los dos valores booleanos del array, determinar los 
//           operadores necesarios para obtener un resultado true y otro resultado false 
//           c. Determinar el resultado de las cinco operaciones matemáticas realizadas con los 
//           dos elementos numéricos.

var valores = [true, 5, false, "hola", "adios", 2];

// A.
// let arrayChico = valores.slice(3, 5); // Corto el array y lo guardo.
// const arrayString = (arrayChico) => arrayChico.join(", "); //convierto el array en string.

// let palabraMasLarga = ""; // variable para alojar el resultado.
// let palabras = arrayString(arrayChico); // llamo a la función y la guardo en una variable.
//  if(palabras.split(', ')[0].lenght > palabras.split(', ')[1].length){ // separo las palabras y las comparo.
//     palabraMasLarga = palabras.split(', ')[0];
//  }else{
//     palabraMasLarga = palabras.split(', ')[1];
//  }
//  console.log(`El texto mas largo es: ${palabraMasLarga}`);

 // B.
//  let resultado1;
//  let resultado2;

//     if(valores[0] === true){
//     resultado1 = true;
//     }
//     if(valores[2] === false){
//     resultado2 = false;     
//     }
//     console.log(`resultado 1: ${resultado1}`);
//     console.log(`resultado 2: ${resultado2}`);

// C. 
 let numero;
 let numero1;
 let suma;
 let resta;
 let multiplicacion;
 let division;
 for (let i = 0; i < valores.length; i++) {
    if(valores[i] === 5){
        numero = valores[i];
    }else if(valores[valores.length-1] === 2){
        numero1 = valores[valores.length-1];
    }
    suma = numero + numero1;
    resta = numero - numero1;
    multiplicacion = numero * numero1;
    division = numero / numero1; 
 }
console.log(`El resultado de la suma es: ${suma}`);
console.log(`El resultado de la resta es: ${resta}`);
console.log(`El resultado de la multiplicación es: ${multiplicacion}`);
console.log(`El resultado de la división es: ${division}`);



// document.addEventListener("DOMContentLoaded", function () {
//     const input = document.getElementById("input");
//     const generar = document.getElementById("boton");
//     const resultado = document.getElementById("resultado");
//     const resultado1 = document.getElementById("resultado1");
//     const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

//     const appendAlert = (message, type) => {
//       const wrapper = document.createElement("div");
//       alertPlaceholder.innerHTML = "";
//       wrapper.innerHTML = [
//         `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//         `   <div>${message}</div>`,
//         '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//         "</div>",
//       ].join("");

//       alertPlaceholder.append(wrapper);

//       if (type === "success") {
//         setTimeout(() => {
//           location.reload();
//         }, 5000);
//       }
//       if (type === "danger") {
//         setTimeout(() => {
//           alertPlaceholder.innerHTML = "";
//         }, 5000);
//       }
//       if (type === "warning") {
//         setTimeout(() => {
//           alertPlaceholder.innerHTML = "";
//         }, 5000);
//       }
//     };

//     let bandera = false;

//     input.addEventListener("keydown", function (event) {
//       if (event.key === "Enter") {
//         let dato = input.value;
//         let aux;
//         let tipoDeDato;

//         if(dato == "") {
//           appendAlert("Debes ingresar un valor", "danger");
//           return;
//         }
//         if(dato!== "1" & dato!== "2" & dato!== "3"){
//             appendAlert("Debes ingresar una opción correcta", "danger");
//           return;
//         }
//         if(dato === "1"){
//             aux = 1
//             const flecha = (aux) => (typeof aux);
//             tipoDeDato = flecha(aux);
//         }
//         else if(dato === "2"){
//             aux = "hola";
//             const flecha = (aux1) => (typeof aux);
//             tipoDeDato = flecha(aux);
//         }else{
//             aux = true;
//             const flecha = (aux2) => (typeof aux);
//             tipoDeDato = flecha(aux);
//         }

//       console.log(`La opción es: ${dato}`);
//       console.log(`El tipo de dato es: ${tipoDeDato}`);
//       resultado.textContent = `La opción es: ${dato}`;
//       resultado1.textContent = `El tipo de dato es: ${tipoDeDato}`;
//       bandera = true;

//       input.value = "";
//       }
//     });

//     generar.addEventListener("click", function () {
//       let dato = (input.value);
//       let aux;
//       let tipoDeDato;
//       if(dato == "") {
//         appendAlert("Debes ingresar un valor", "danger");
//         return;
//       }
//       if(dato!== "1" & dato!== "2" & dato!== "3"){
//         appendAlert("Debes ingresar una opción correcta", "danger");
//       return;
//     }

//       if(dato === "1"){
//         aux = 1
//         const flecha = (aux) => (typeof aux);
//         tipoDeDato = flecha(aux);

//     }
//     else if(dato === "2"){
//         aux = "hola";
//         const flecha = (aux) => (typeof aux);
//         tipoDeDato = flecha(aux);
//     }else{
//         aux = true;
//         const flecha = (aux) => (typeof aux);
//         tipoDeDato = flecha(aux);
//     }

//   console.log(`La opción es: ${dato}`);
//   console.log(`El tipo de dato es: ${tipoDeDato}`);
//   resultado.textContent = `La opción es: ${dato}`;
//   resultado1.textContent = `El tipo de dato es: ${tipoDeDato}`;
//   bandera = true;
//     });

//     input.addEventListener("click", function () {
//         if (bandera) {
//           resultado.textContent = "";
//           resultado1.textContent = "";
//           bandera = false;
//         }
//       });

//   });
