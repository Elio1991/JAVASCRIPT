const input = document.getElementById("input");
const calcular = document.querySelector("#boton");
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
};

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Aquí colocas el código que deseas ejecutar al presionar Enter
    console.log('Enter presionado. Ejecutar función...');
    let numero = parseFloat(input.value);
    if(isNaN(numero)){
        // alert("Ingrese un valor numerico");
        
        appendAlert("Debes ingresar un valor", "danger");
        return;
    }
  input.value = "";
    if(numero %2 === 0){
        resultado.textContent = `El numero es: ${numero}`;
        resultado.style.backgroundColor="#1F1659";
        appendAlert("El numero es par", "success");  
    }else{
        resultado.style.backgroundColor="#1F1659";
        resultado.textContent = `El numero es: ${numero}`
        appendAlert("El numero es impar", "warning");
    }
  
  
}
});

calcular.addEventListener("click", () => {
    let numero = parseFloat(input.value);
    if(isNaN(numero)){
        // alert("Ingrese un valor numerico");
        appendAlert("Debes ingresar un valor", "danger");
        return  ;
    }
  input.value = "";
 
  if(numero %2 === 0){
    resultado.textContent = `El numero es: ${numero}`;
    resultado.style.backgroundColor="#1F1659";
    appendAlert("El numero es par", "success");  
}else{
    resultado.style.backgroundColor="#1F1659";
    resultado.textContent = `El numero es: ${numero}`
    appendAlert("El numero es impar", "warning");
}
  
});
