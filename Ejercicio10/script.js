document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");
  const generar = document.getElementById("boton");
  const resultado = document.getElementById("resultado");
  const resultado1 = document.getElementById("resultado1");
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

  let bandera = false;

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      let frase = input.value;

      if (frase == "") {
        appendAlert("Debes ingresar un valor", "danger");
        return;
      }

      const fraseInvertida = (frase) => frase.split("").reverse().join("");

    console.log(`La frase normal es: ${frase}`);
    console.log(`La frase invertida es: ${fraseInvertida(frase)}`);
    resultado.textContent = `La frase normal es: ${frase}`;
    resultado1.textContent = `La frase invertida es: ${fraseInvertida(frase)}`;
    bandera = true;

    input.value = "";
    }
  });

  generar.addEventListener("click", function () {
    let frase = input.value;

    if (frase == "") {
      appendAlert("Debes ingresar un valor", "danger");
      return;
    }

    const fraseInvertida = (frase) => frase.split("").reverse().join("");

    console.log(`La frase normal es: ${frase}`);
    console.log(`La frase invertida es: ${fraseInvertida(frase)}`);
    resultado.textContent = `La frase normal es: ${frase}`;
    resultado1.textContent = `La frase invertida es: ${fraseInvertida(frase)}`;
    bandera = true;

    input.value = "";
  });
  input.addEventListener("click", function () {
    if (bandera) {
      resultado.textContent = "";
      resultado1.textContent = "";
      bandera = false;
    }
  });
});
