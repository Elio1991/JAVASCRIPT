document.addEventListener("DOMContentLoaded", function () {
  event.preventDefault();
  const input = document.getElementById("input");
  const input1 = document.getElementById("input1");
  const establecer = document.getElementById("boton");
  const calcular = document.querySelector("#boton1");
  const resultado = document.getElementById("resultado");
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

  let limite = 0;
  let suma = 0;
  console.log(`limite1: ${limite}`);
  console.log(`suma1: ${suma}`);
  // Presionando 'Enter' se establece el valor limite
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      limite = parseInt(input.value);
      console.log(`Enter presionado. El limite es ${limite}`);
      if (isNaN(limite)) {
        appendAlert("Debes ingresar un valor", "danger");
        return;
      }
      input.value = "";
      resultado.textContent = `El Limite establecido es: ${limite}`;
      resultado.style.backgroundColor = "#1F1659";
    }
  });
  // precionando 'Enter' va realizando la suma de los numeros
  input1.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // Aquí colocas el código que deseas ejecutar al presionar Enter
      // console.log('Enter presionado.');
      const numero1 = parseInt(input1.value);
      if (isNaN(numero1)) {
        // alert("Ingrese un valor numerico")

        appendAlert("Debes ingresar un valor numerico", "danger");
        return;
      }
      input1.value = "";
      suma += numero1;
      if (numero1 > limite) {
        appendAlert("El numero supero el limite", "danger");
        return;
      }
      if (suma > limite) {
        resultado2.textContent = `El resultado final es: ${suma}`;
        resultado2.style.backgroundColor = "#1F1659";
        suma = 0;
        appendAlert("La suma supero el limite", "warning");
        return;
      } else {
        resultado2.style.backgroundColor = "#1F1659";
        resultado2.textContent = `La suma termporal es: ${suma}`;
      }
    }
  });
  input.addEventListener("click", () => {
    resultado.textContent = "";
    resultado2.textContent = "";
    suma = 0;
  });

  establecer.addEventListener("click", () => {
    limite = parseInt(input.value);
    // console.log(`Enter presionado. El limite es ${limite}`);
    if (isNaN(limite)) {
      resultado.textContent = "";
      resultado2.textContent = "";
      suma = 0;
      appendAlert("Debes ingresar un valor numerico", "danger");
      return;
    }
    input.value = "";
    resultado.textContent = `El Limite establecido es: ${limite}`;
    resultado.style.backgroundColor = "#1F1659";
  });

  calcular.addEventListener("click", () => {
    const numero1 = parseInt(input1.value);
    if (isNaN(numero1)) {
      // alert("Ingrese un valor numerico")
      appendAlert("Debes ingresar un valor numerico", "danger");
      return;
    }
    input1.value = "";
    suma += numero1;
    if (numero1 > limite) {
      appendAlert("El numero supero el limite", "danger");
      return;
    }
    if (suma > limite) {
      resultado2.textContent = `El resultado final es: ${suma}`;
      resultado2.style.backgroundColor = "#1F1659";
      suma = 0;
      appendAlert("La suma supero el limite", "warning");
      return;
    } else {
      resultado2.style.backgroundColor = "#1F1659";
      resultado2.textContent = `La suma termporal es: ${suma}`;
    }
  });
});
