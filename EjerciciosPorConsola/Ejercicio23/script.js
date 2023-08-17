document.addEventListener("DOMContentLoaded", function () {
    const textArea = document.getElementById("textArea");
    const resaltar = document.getElementById("boton");
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

    textArea.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        let parrafo = textArea.value;

        if(parrafo == "") {
          appendAlert("Debes ingresar un texto", "danger");
          return;
        }

         let array = parrafo.split(" ");
         let longitud = array.length;
        for (let i = 0; i < longitud; i++) {
            const palabra = array[i];
            const ultimaLetra = palabra.charAt(palabra.length - 1);

            if (array[i].length >= 8 && !/[.,;!?:]/.test(ultimaLetra)) {
                array[i] = `<span style="background-color: pink">${array[i]}</span>`;
            }
        }
        
        const parrafoModificado = array.join(" ");
        console.log(parrafoModificado);

      resultado.innerHTML = `${parrafoModificado}`;
      bandera = true;

      textArea.value = "";

      }
    });

    resaltar.addEventListener("click", function () {
        let parrafo = textArea.value;

        if(parrafo == "") {
          appendAlert("Debes ingresar un texto", "danger");
          return;
        }

         let array = parrafo.split(" ");
         let longitud = array.length;
        for (let i = 0; i < longitud; i++) {
            const palabra = array[i];
            const ultimaLetra = palabra.charAt(palabra.length - 1);

            if (array[i].length >= 8 && !/[.,;!?:]/.test(ultimaLetra)) {
                array[i] = `<span style="background-color: pink">${array[i]}</span>`;
            }
        }
        
        const parrafoModificado = array.join(" ");
        console.log(parrafoModificado);

      resultado.innerHTML = `${parrafoModificado}`;
      bandera = true;

      textArea.value = "";
   });
});
