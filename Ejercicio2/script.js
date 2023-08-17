// const PI= 3.14;
// let radio = prompt("ingrese el valor del Radio de una circunferencia");
// /*area = PI * radio2
// perimetro = 2 * PI * radio */
// let area =parseInt(PI * radio**2);
// let perimetro =parseInt(2 * PI * radio);
//  alert(`El area de la circunferencia es: ${area}
//   El Perimetro de una circunferencia es: ${perimetro}`);



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
    let radio = parseFloat(input.value);
    if(isNaN(radio)){
        // alert("Ingrese un valor numerico");
        
        appendAlert("Debes ingresar un valor", "danger");
        return;
    }
  input.value = "";
  // console.log(radio);
  const PI = 3.14;
  let area = PI * radio ** 2;
  let perimetro = 2 * PI * radio;
  resultado.style.backgroundColor="#1F1659";
  resultado2.style.backgroundColor="#1F1659";
  resultado.textContent = `El area es: ${area}`;
  resultado2.textContent = `El perimetro es: ${perimetro.toFixed(2)}`;
  appendAlert("Operación realizada con éxito.", "success");  
}
});

calcular.addEventListener("click", () => {
    let radio = parseFloat(input.value);
    if(isNaN(radio)){
        // alert("Ingrese un valor numerico");
        appendAlert("Debes ingresar un valor", "danger");
        return  ;
    }
  input.value = "";
  // console.log(radio);
  const PI = 3.14;
  let area = PI * radio ** 2;
  let perimetro = 2 * PI * radio;
  resultado.style.backgroundColor="#1F1659";
  resultado2.style.backgroundColor="#1F1659";
  resultado.textContent = `El area es: ${area}`;
  resultado2.textContent = `El perimetro es: ${perimetro.toFixed(2)}`;
  appendAlert("Operación realizada con éxito.", "success")
});
