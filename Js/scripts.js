//corousel evento play y pause
$(function() {
  $('#carouselExampleDark').carousel({interval: 8000 });
  $('#carouselButton').on("click",function(){
      if($('#carouselButton').children('span').hasClass('bi-pause-fill')){
         $('#carouselExampleDark').carousel('pause');
         $('#carouselButton').children('span').removeClass('bi-pause-fill');
         $('#carouselButton').children('span').addClass('bi-play-fill');
      }
      else if($('#carouselButton').children('span').hasClass('bi-play-fill')){
         $('#carouselExampleDark').carousel('cycle');
         $('#carouselButton').children('span').removeClass('bi-play-fill');
         $('#carouselButton').children('span').addClass('bi-pause-fill');
      }
  });  
});
//implementacion de la seccion calificame
const form = document.querySelector("#formulario-calificame");
const enviarFormulario = (e) => {
  e.preventDefault();
  
  const { N_orden, servicio, sucursal, calificacion} = e.target;
    
  console.log(N_orden.value, servicio.value, sucursal.value, calificacion.value);
};
document.getElementById('formulario-calificame').reset();

function registro() {
  alert("Gracias por su calificación!");
}

/*
function registro() {
  if(document.getElementById("N_orden").value == ""){
    alert("Por favor ingrese su número de orden");
    
  }
  else if(document.getElementById("N_orden").value != ""){
    alert("Gracias por su calificación!");
  } 
}
*/

document.addEventListener('DOMContentLoaded', function(){
  let formulario = document.getElementById('formulario-calificame');
  formulario.addEventListener('submit', function() {
    formulario.reset();
  });
});

form.addEventListener("submit", enviarFormulario);

 