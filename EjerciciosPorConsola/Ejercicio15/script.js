// Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo 
// con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El 
// radio del círculo lo proporcionará el usuario. 

let valor = parseInt(prompt("Ingrese el radio del circulo"));
circulo = {
    radio: 0,
    area: 0,
    perimetro: 0,

    setRadio: function(valor){
        this.radio = valor;
    }
    // ↓ metodos dentro del objeto
    ,
     calcularArea: function(radio){
        return Math.PI * radio * radio ;
    },
    calcularPerimetro: function(radio){
        return (2 * Math.PI * radio);
    }
  
    }
    // llamo a los metodos del objeto: (set, calcular area y calcular perimetro)
    circulo.setRadio(valor);
    circulo.area = circulo.calcularArea(circulo.radio);
    circulo.perimetro = circulo.calcularPerimetro(circulo.radio);

    // ↓ Funciones externas al objeto que cumplen la misma función que los metodos.

    // circulo.area = calcularArea(circulo);
    //  function calcularArea(circulo){ // le paso el objeto para poder utilizar sus parametros
    //     return Math.PI * circulo.radio * circulo.radio;
    // }
    // circulo.perimetro = calcularPerimetro(circulo);
    // function calcularPerimetro(circulo){ // le paso el objeto para poder utilizar sus parametros
    //      return (2 * Math.PI * circulo.radio);
    //  }

      prompt(`            El radio del circulo es: ${circulo.radio.toFixed(2)}
            El area del circulo es: ${circulo.area.toFixed(2)}
            El perimetro del circulo es: ${circulo.perimetro.toFixed(2)}`
      );
      
// ############################

//       let circulo1;
// class Circulo{
//     constructor(radio) {
//     this.radio= radio;
    
// }
// }

// function crearCirculo() {
//     let radio= prompt("Ingrese el radio del circulo");
//     let circulo1= new Circulo(radio);
//     return circulo1;
// }


// function calcularPerimetro(circulo1) {
//     return 2* Math.PI * circulo1.radio;
// }

// function calcularArea(circulo1) {
//     return Math.PI * Math.pow(circulo1.radio, 2);
    
// }
// circulo1= crearCirculo();
// let perimetro= calcularPerimetro(circulo1);
// let area= calcularArea(circulo1);

// console.log("El perimetro es: " + perimetro);
// console.log("El area es: " + area);





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
