document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");
    const hombre = document.getElementById("hombre");
    const mujer = document.getElementById("mujer");
    const otro = document.getElementById("otro");
    const guardar = document.getElementById("boton");
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
        let dato = input.value;
  
        if(dato == "") {
          appendAlert("Debes ingresar un valor", "danger");
          return;
        }

      console.log(`La opción es: ${dato}`);
      console.log(`El tipo de dato es: ${tipoDeDato}`);
      resultado.innerHTML = `La opción es: ${dato}`;
      resultado1.textContent = `El tipo de dato es: ${tipoDeDato}`;
      bandera = true;
  
      input.value = "";
      }
    });
  
    generar.addEventListener("click", function () {
      let dato = (input.value);
      let aux;  
      let tipoDeDato;
      if(dato == "") {
        appendAlert("Debes ingresar un valor", "danger");
        return;
      }
      if(dato!== "1" & dato!== "2" & dato!== "3"){
        appendAlert("Debes ingresar una opción correcta", "danger");
      return;
    }
  
      if(dato === "1"){
        aux = 1
        const flecha = (aux) => (typeof aux);
        tipoDeDato = flecha(aux);

    }
    else if(dato === "2"){
        aux = "hola";
        const flecha = (aux) => (typeof aux);
        tipoDeDato = flecha(aux);
    }else{
        aux = true;
        const flecha = (aux) => (typeof aux);
        tipoDeDato = flecha(aux);
    }    

  console.log(`La opción es: ${dato}`);
  console.log(`El tipo de dato es: ${tipoDeDato}`);
  resultado.textContent = `La opción es: ${dato}`;
  resultado1.textContent = `El tipo de dato es: ${tipoDeDato}`;
  bandera = true;
    });

    input.addEventListener("click", function () {
        if (bandera) {
          resultado.textContent = "";
          resultado1.textContent = "";
          bandera = false;
        }
      });

  });
  