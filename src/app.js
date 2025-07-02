import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
 let opcionesEspeciales = ["A","J","K","Q"]
 let opcionesEspecialFinal = "";
 let interiorCartaContenido = Math.floor(Math.random() * 12) + 1;
 if (interiorCartaContenido >= 11) {
      let interioespecial = Math.floor(Math.random() * 4);
      opcionesEspecialFinal = (opcionesEspeciales[interioespecial]);
      document.getElementById("cardContend").textContent = opcionesEspecialFinal;
    } else{
   document.getElementById("cardContend").textContent = interiorCartaContenido;
   }

  let bordeCartaContenido = ["♦", "♥", "♣", "♠"]
    let elegirBordeCarta = Math.floor(Math.random() * 4);
  if(elegirBordeCarta <=1){
    document.getElementById("card-suit").textContent = bordeCartaContenido[elegirBordeCarta];
    document.getElementById("card-suit2").textContent = bordeCartaContenido[elegirBordeCarta];
    document.getElementById("card-suit").className = "text-danger";
    document.getElementById("card-suit2").className = "text-danger";  
  }else {
    document.getElementById("card-suit").textContent = bordeCartaContenido[elegirBordeCarta];
    document.getElementById("card-suit2").textContent = bordeCartaContenido[elegirBordeCarta];
    document.getElementById("card-suit").className = "text-black";
    document.getElementById("card-suit2").className = "text-black";
  }

};

