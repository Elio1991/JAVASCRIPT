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

      input.addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            let frase = input.value;
    
            if (frase == "") {
                appendAlert("Debes ingresar un valor", "danger");
                return;
              }

                let fraseAux = frase.substring();
                let fraseAux1 = "";
                console.log(`frase sin subcadena: ${frase}`);
                console.log(`frase con subcadena: ${fraseAux}`);
                console.log(`frase vacia: ${fraseAux1}`);

                for (let i = 0; i < fraseAux.length; i++) {
                   if(fraseAux[i] === " ") {
                    fraseAux1 = fraseAux1 + fraseAux[i] + "__";
                }else{
                    fraseAux1 = fraseAux1 + fraseAux[i] + " ";
                }
                }

                console.log(`LA subcadena con espacios es: ${fraseAux1}`);
                resultado.textContent = `La frase sin espacios entre letras es: ${fraseAux}`;
                resultado1.textContent =`La frase con Espacios es: ${fraseAux1}`;
                bandera = true;
              
    
          input.value = "";

        }
      });
      let bandera = false;
    
      generar.addEventListener("click", function(){
    
        let frase = input.value;
    
            if (frase == "") {
                appendAlert("Debes ingresar un valor", "danger");
                return;
              }
              let fraseAux = frase.substring();
              let fraseAux1 = "";
              console.log(`frase sin subcadena: ${frase}`);
              console.log(`frase con subcadena: ${fraseAux}`);
              console.log(`frase vacia: ${fraseAux1}`);

              for (let i = 0; i < fraseAux.length; i++) {
                 if(fraseAux[i] === " ") {
                  fraseAux1 = fraseAux1 + fraseAux[i] + "__";
              }else{
                  fraseAux1 = fraseAux1 + fraseAux[i] + " ";
              }
              }

              console.log(`LA subcadena con espacios es: ${fraseAux1}`);
              resultado.textContent = `La frase sin espacios entre letras es: ${fraseAux}`;
              resultado1.textContent =`La frase con Espacios es: ${fraseAux1}`;
              bandera = true;
    
          input.value = "";

          })
        input.addEventListener("click", function(){
            if (bandera) {
                resultado.textContent = "";
                resultado1.textContent = "";    
                bandera = false;            
            }


        })
    
      })