document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const calcular = document.getElementById("boton");
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

    let bandera = false;

    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
       let valor = parseFloat(input.value);
        if(valor == "") {
          appendAlert("Debes ingresar un valor", "danger");
          return;
        }
        const diametro = valor;
        const radio = diametro / 2;
       
      console.log(`El radio del circulo es: ${radio}`);
      resultado.textContent = `El radio del círculo con diámetro ${diametro} es: ${radio.toFixed(2)}`
      bandera = true;

      input.value = "";
      }
    });

    calcular.addEventListener("click", function () {
        let valor = parseFloat(input.value);
        if(valor == "") {
          appendAlert("Debes ingresar un valor", "danger");
          return;
        }
        const diametro = valor;
        const radio = diametro / 2;
       
      console.log(`El radio del circulo es: ${radio}`);
      resultado.textContent = `El radio del círculo con diámetro ${diametro} es: ${radio.toFixed(2)}`
      bandera = true;

      input.value = "";
    });
    input.addEventListener("click", function () {
        if (bandera) {
          resultado.textContent = "";
          bandera = false;
        }
    });
});
