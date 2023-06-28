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


const form = document.querySelector("#formulario-calificame");
const enviarFormulario = (e) => {
  e.preventDefault();
  
  const { N_orden, servicio, sucursal} = e.target;
    
  console.log(N_orden.value, servicio.value, sucursal.value);

};
form.addEventListener("submit", enviarFormulario);



/*$(document).ready(function(){
    $('#carouselExampleDark').carousel( { interval: 2000 } );
    $('#carouselButton').onClick("click", function(){
      if ($('carouselButton').children('span').hasClass('bi-pause-fill')){
        $('#carouselExampleDark').carousel('pause');
        $('#carouselButton').children('span').removeClass('bi-pause-fill');
        $('#carouselButton').children('span').addClass('bi-play-fill');
      }  
      else if ($('carouselButton').children('span').hasClass('bi-play-fill')){
        $('#carouselExampleDark').carousel('cycle');
        $('#carouselButton').children('span').removeClass('bi-play-fill');
        $('#carouselButton').children('span').addClass('bi-pause-fill');
      }          
    }); 
    
  });
*/
 