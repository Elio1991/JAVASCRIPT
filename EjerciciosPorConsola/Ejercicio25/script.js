
  function getFormValores() {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const nombre = document.getElementById("form1").nombre.value;
    const apellido = document.getElementById("form1").apellido.value;

    const resultado = document.getElementById("resultado");
    resultado.textContent = `Nombre: ${nombre}, Apellido: ${apellido}`;
  }

