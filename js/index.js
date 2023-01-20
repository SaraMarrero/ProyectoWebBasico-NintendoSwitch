// Variable y evento
const button = document.getElementById("buttonLuz");
button.addEventListener("click", cambiarBody);

const body = document.getElementById("body");
const textoNovedades = document.querySelector(".textoNovedades");


// Función
function cambiarBody(){
    if(button.checked){
        body.style.background = "#1C1C1C";
    } else{
        body.style.background = "#D8D8D8";
    }
}