document.addEventListener("DOMContentLoaded", function () {
    const texto = document.getElementById("texto");
    const click = document.getElementById("boton");
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

    click.addEventListener("click", function () {

  console.log(`click Activado: Success`);

  resultado.textContent = `Eres El Mejor`;
        bandera = true;
    });

    texto.addEventListener("click", function () {
        if (bandera) {
          resultado.textContent = "";
          resultado1.textContent = "";
          bandera = false;
        }
      });

  });
