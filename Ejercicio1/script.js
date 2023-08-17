// let estado = prompt("como esta el dia de hoy?(soleado, nublado, lloviendo)");
// alert("El dia de hoy esta " + estado);
const estado = document.getElementById("estado");
const boton = document.querySelector("#boton"); //query sirve para guardar todos los tipos de atributos
const botonReset = document.querySelector("#botonReset");
const resultado = document.querySelector(".resultado");
const h5 = document.querySelector(".resultado h5");
boton.addEventListener ("click", () =>{
    // un elemento: 
    //  let valorInput = estado.value;
    //  const nuevoelemento = document.createElement("p");
    //  nuevoelemento.textContent = valorInput
    //  resultado.appendChild(nuevoelemento);
    //  resultado.classList.add("result");

    // una lista:
    let valoresInput = estado.value.split(","); // Separamos los valores por comas
  
    valoresInput.forEach(valor => {
      const nuevoElemento = document.createElement("p");
      nuevoElemento.textContent = valor.trim(); // Eliminamos los espacios en blanco al inicio y final del texto
      resultado.appendChild(nuevoElemento);
       resultado.classList.add("result");
    });
    
  });
  botonReset.addEventListener("click", () => {
    resultado.innerHTML = ""; // Borramos todos los elementos dentro del div
  });

     //  const padre = document.createElement("div");
    //  padre.classList.add("padre");
    //  resultado.innerHTML = `Resultado: ${valorInput}`;

    //  resultado.style.display="flex";
    //  resultado.style.flexDirection="column";
    //  resultado.style.justifyContent="center";
    //  resultado.style.backgroundColor="#51b697";



