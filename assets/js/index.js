document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });

$(document).ready(function()
{ 
    $("#mainvideo").hide();
    $("#hidevideo").hide();
   
   
    $( "#first-card" ).click(function() 
    {
        $("#mainvideo").show(1000);
        $("#hidevideo").show(1000);
       
        $('html, body').animate(
            {
                scrollTop: $("#mainvideo").offset().top
            },
             1000);
    });



    $( "#hidevideo" ).click(function() 
    {
        $("#mainvideo").hide(1000);
        $("#hidevideo").hide(1000);
    });

   
    
    });