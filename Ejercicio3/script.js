// let edad = prompt("Ingrese su edad");
// if(edad >= 18){
//     alert("Usted es mayor de edad");
//     console.log("Usted es mayor de edad");
// }else{
//     alert("Usted es menor de edad");
//     console.log("Usted es menor de edad");
// }

const input = document.getElementById("input");
const calcular = document.querySelector("#boton");
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

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // Aquí colocas el código que deseas ejecutar al presionar Enter
    console.log("Enter presionado. Ejecutar función...");
    let edad = parseFloat(input.value);
    if (isNaN(edad)) {
      // alert("Ingrese un valor numerico");

      appendAlert("Debes ingresar un valor", "danger");
      return;
    }
    input.value = "";
    if (edad >= 18) {
      appendAlert("El usuario es mayor de edad", "success");
      console.log("Usted es mayor de edad");
      resultado.style.backgroundColor = "#1F1659";
      resultado.textContent = `La edad del usuario es: ${edad}`;
    } else {
      appendAlert("El usuario es menor de edad", "warning");
      console.log("Usted es menor de edad");
      resultado.style.backgroundColor = "#1F1659";
      resultado.textContent = `La edad del usuario es: ${edad}`;
    }
   
    
  }
});

calcular.addEventListener("click", () => {
  let edad = parseFloat(input.value);
  if (isNaN(edad)) {
    // alert("Ingrese un valor numerico");
    appendAlert("Debes ingresar un valor", "danger");
    return;
  }
  input.value = "";
  console.log(edad);

  if (edad >= 18) {
    appendAlert("El usuario es mayor de edad", "success");
    console.log("Usted es mayor de edad");
    resultado.style.backgroundColor = "#1F1659";
    resultado.textContent = `La edad del usuario es: ${edad}`;
  } else {
    appendAlert("El usuario es menor de edad", "warning");
    console.log("Usted es menor de edad");
    resultado.style.backgroundColor = "#1F1659";
    resultado.textContent = `La edad del usuario es: ${edad}`;
  }
});
