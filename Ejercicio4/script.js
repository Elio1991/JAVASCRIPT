// let aux = prompt("ingrese 'S' o 'N'");
// aux1 = aux.toLowerCase();
// if(aux1 == 's' || aux1 == 'n'){alert("CORRECTO!")} else{alert("INCORRECTO!")}

const input = document.getElementById("input");
const comprobar = document.querySelector("#boton");
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
    const letra = input.value;
    if (letra == "") {
    // alert("Ingrese una letra");
      appendAlert("Debes ingresar una letra", "warning");
      return;
    }
    input.value = "";
    if (letra.toLowerCase() === "s" || letra.toLowerCase() === "n") {
      appendAlert("Correcto", "success");
    //   console.log("Correcto");

    } else {
      appendAlert("Incorrecto!", "danger");
    //   console.log("Incorrecto");

    }

  }
});

comprobar.addEventListener("click", () => {
  const letra = input.value;
  if (letra == "") {
    //  alert("Ingrese una letra");
    appendAlert("Debes ingresar una letra", "warning");
    return;
  }
  input.value = "";
// console.log(letra);

  if (letra.toLowerCase() === "s" || letra.toLowerCase() === "n") {
    appendAlert("Correcto!", "success");
    console.log("Correcto!");

  } else {
    appendAlert("Incorrecto", "danger");
// console.log("Incorrecto");
  }
});
