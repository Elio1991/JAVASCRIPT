// Realizar un programa que elimine los dos últimos elementos de un array. 
// Mostrar el resultado

let array = [1, "hola", true, 34, "chau"]

function eliminarElemento(array) {
 array.splice(array.length - 2, 2)
    return array;
}
console.log(`El array definitivo es: ${eliminarElemento(array)}`);




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
