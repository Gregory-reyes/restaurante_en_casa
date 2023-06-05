$(document).ready(function(){
    $('#carouselExampleDark').carousel( { interval: 2000 } );
    $('#carouselButton').click(function(){
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
    
    $('#reserveButton').click(function(){
        $('#reserveModal').modal('show');
        }
    );
    $('#loginButton').click(function(){
        $('#loginModal').modal('show');
        }
    );
  });
