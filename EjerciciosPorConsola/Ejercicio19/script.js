// Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A 
// de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El 
// programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla. 
// Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números 
// ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor 
// 0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado 
// de 20.
let longitudA = 50;
let arrayA = [];
let arrayB = new Array(20);

for (let i = 0; i < longitudA -1; i++) {
    arrayA[i] = Math.floor(Math.random() * 1000) + 1;
}
    console.log(`(numeros Aleatorios). El resultado del array A es: ${arrayA}`);

    arrayA.sort((a, b) => a - b);
    console.log(`(Numeros Ordenados). El resultado del array A es: ${arrayA}`);

    arrayB = arrayA.slice(0, 10);
    console.log(`(Copia de Array A). El resultado del array B es: ${arrayB}`);

for (let i = 9; i < 19; i++) {
    numero = 0.5;
    arrayB.push(numero);
}
    console.log(`(Copia y llenado con 0.5) El resultado del array B es: ${arrayB}`);


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
