document.addEventListener("DOMContentLoaded", function () {
const input = document.getElementById("input");
const Comprobar = document.getElementById("boton");
const resultado = document.getElementById("resultado");
const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const appendAlert = (message, type) => {
    const wrapper = document.createElement("div");
    alertPlaceholder.innerHTML = "";
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);

    if (type === "success") {
      setTimeout(() => {
        location.reload();
      }, 5000);
    }
    if (type === "danger") {
      setTimeout(() => {
        alertPlaceholder.innerHTML = "";
      }, 5000);
    }
    if (type === "warning") {
      setTimeout(() => {
        alertPlaceholder.innerHTML = "";
      }, 5000);
    }

  };

  let maximo = 0;
  let minimo = Infinity;
  let promedio = 0;
  let suma = 0;
  let cont = 0;
  let bandera = false;

  input.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        let numero = parseInt(input.value);

        if (isNaN(numero)) {
            appendAlert("Debes ingresar un valor", "danger");
            return;
          }

      input.value = "";
      resultado.textContent = `El número ingresado es: ${numero}`;

     
        console.log(`maximo: ${maximo}`); 
        console.log(`minimo: ${minimo}`);
        console.log(`suma: ${suma}`);
        console.log(`contador: ${cont}`);

        suma += numero;
        cont ++;

      if (numero > maximo) {maximo = numero;};
      if (numero < minimo & numero !=0) {minimo = numero;};

      if (numero === 0) {
        promedio = suma / cont;
        resultado.textContent = `Número Máximo: ${maximo}`;
        resultado1.textContent = `Número minimo: ${minimo}`;
        resultado2.innerText = `Promedio de todos los numeros ingresados: ${promedio.toFixed(2)}`;
        
      }
    }
  });

  Comprobar.addEventListener("click", function(){

    let numero = parseInt(input.value);

        if (isNaN(numero)) {
            appendAlert("Debes ingresar un valor", "danger");
            return;
          }

      input.value = "";
      resultado.textContent = `El número ingresado es: ${numero}`;

     
        console.log(`maximo: ${maximo}`); 
        console.log(`minimo: ${minimo}`);
        console.log(`suma: ${suma}`);
        console.log(`contador: ${cont}`);

        suma += numero;
        cont ++;

      if (numero > maximo) {maximo = numero;};
      if (numero < minimo & numero !=0) {minimo = numero;};
   
      if (numero === 0) {
        promedio = suma / cont;
        resultado.textContent = `Número Máximo: ${maximo}`;
        resultado1.textContent = `Número minimo: ${minimo}`;
        resultado2.innerText = `Promedio de todos los numeros ingresados: ${promedio.toFixed(2)}`;
        bandera = true;
      }
      input.addEventListener("click", function(){
        if (bandera) {
            bandera = false;
            resultado.textContent = "";
            resultado1.textContent = "";
            resultado2.textContent = "";
            maximo = 0;
            minimo = Infinity;
            promedio = 0;
            suma = 0;
            cont = 0;
            
        }

      })


  })

});