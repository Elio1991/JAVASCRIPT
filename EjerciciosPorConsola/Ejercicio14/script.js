// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
// Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
// y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
// numero de páginas.

let isbn1 = parseFloat(prompt("Ingrese el isbn del libro. Ej: '123456' "));
let titulo1 = prompt("ingrese el título");
let autor1 = prompt("ingrese el autor");
let numPag1 = parseInt(prompt("ingrese el numero de paginas"));

libro = {
    isbn: isbn1,
    titulo: titulo1,
    autor: autor1,
    numPag: numPag1
};

console.log(libro);



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
