const calcular = document.querySelector("#boton");
const valor = document.getElementById("input");
const valor1 = document.getElementById("input1");
const letra = document.getElementById("input2");
const resultado = document.getElementById("resultado");

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

letra.addEventListener("keydown", function (event) {
  const letra1 = letra.value.toLowerCase();
  if (event.key === "Enter") {
    // Aquí colocas el código que deseas ejecutar al presionar Enter
    console.log("Enter presionado. Ejecutar función...");

    let numero = parseInt(valor.value);
    if (isNaN(numero)) {
      //   alert("Ingrese un valor numerico");

      appendAlert("Debes ingresar un valor", "danger");
      return;
    }
    valor.value = "";
    let numero1 = parseInt(valor1.value);
    if (isNaN(numero1)) {
      //   alert("Ingrese un valor numerico");

      appendAlert("Debes ingresar un valor", "danger");
      return;
    }
    valor1.value = "";

    if (letra1 === "") {
      //   alert("Ingrese una letra");

      appendAlert("Debes ingresar una letra", "danger");
      return;
    }
    if (
      (letra1 !== "s") &
      (letra1 !== "r") &
      (letra1 !== "d") &
      (letra1 !== "m")
    ) {
      appendAlert("Debes ingresar una letra correcta", "danger");
    }
    letra.value = "";

    switch (letra1) {
      case "s":
        let resultado1 = suma(numero, numero1);
        console.log(resultado1);
        resultado.style.backgroundColor = "#1F1659";
        resultado.classList.add("resultado");
        resultado.innerHTML = `El resultado de la suma es: ${ resultado1}`;
        resultado.classList.add("resultado");
        
        break;
      case "r":
        let resultado2 = resta(numero, numero1);
        console.log(resultado2);
        resultado.style.backgroundColor = "#1F1659";
        resultado.classList.add("resultado");
        resultado.innerHTML = `El resultado de la resta es: ${ resultado2}`;
        resultado.classList.add("resultado");
        break;
      case "m":
        let resultado3 = multiplicacion(numero, numero1);
        console.log(resultado3);
        resultado.style.backgroundColor = "#1F1659";
        resultado.classList.add("resultado");
        resultado.innerHTML = `El resultado de la multiplicación es: ${ resultado3}`;
        resultado.classList.add("resultado");  
        break;
      case "d":
        let resultado4 = division(numero, numero1);
        console.log(resultado4);
        resultado.style.backgroundColor = "#1F1659";
        resultado.classList.add("resultado");
        resultado.innerHTML = `El resultado de la división es: ${ resultado4}`;
        resultado.classList.add("resultado");  
        break;
    }
  }
});
function suma(numero, numero1){return numero + numero1};
function resta(numero, numero1){return numero - numero1};
function multiplicacion(numero, numero1){return numero * numero1};
function division(numero, numero1){return numero / numero1};

calcular.addEventListener("click", function (event) {
  let numero = parseInt(valor.value);
  if (isNaN(numero)) {
    //   alert("Ingrese un valor numerico");

    appendAlert("Debes ingresar un valor", "danger");
    return;
  }
  numero.value = "";
  let numero1 = parseInt(valor1.value);
  if (isNaN(numero1)) {
    //   alert("Ingrese un valor numerico");

    appendAlert("Debes ingresar un valor", "danger");
    return;
  }
  numero1.value = "";
  const letra1 = letra.value.toLowerCase();
  if (letra1 === "") {
    //   alert("Ingrese una letra");

    appendAlert("Debes ingresar una letra", "danger");
    return;
  }
  if (
    (letra1 !== "s") &
    (letra1 !== "r") &
    (letra1 !== "d") &
    (letra1 !== "m")
  ) {
    appendAlert("Debes ingresar una letra correcta", "danger");
  } else {
  }
  letra.value = "";

  switch (letra1) {
    case "s":
      let resultado1 = suma(numero, numero1);
      console.log(resultado1);
      resultado.style.backgroundColor = "#1F1659";
      resultado.classList.add("resultado");
      resultado.innerHTML = `El resultado de la suma es: ${ resultado1}`;
      resultado.classList.add("resultado");
      
      break;
    case "r":
      let resultado2 = resta(numero, numero1);
      console.log(resultado2);
      resultado.style.backgroundColor = "#1F1659";
      resultado.classList.add("resultado");
      resultado.innerHTML = `El resultado de la resta es: ${ resultado2}`;
      resultado.classList.add("resultado");
      break;
    case "m":
      let resultado3 = multiplicacion(numero, numero1);
      console.log(resultado3);
      resultado.style.backgroundColor = "#1F1659";
      resultado.classList.add("resultado");
      resultado.innerHTML = `El resultado de la multiplicación es: ${ resultado3}`;
      resultado.classList.add("resultado");  
      break;
    case "d":
      let resultado4 = division(numero, numero1);
      console.log(resultado4);
      resultado.style.backgroundColor = "#1F1659";
      resultado.classList.add("resultado");
      resultado.innerHTML = `El resultado de la división es: ${ resultado4}`;
      resultado.classList.add("resultado");  
      break;
  }
});


