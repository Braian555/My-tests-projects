$(function(){

   var indiceAtual = 0;
   var indiceMaximo = $('.slider img').length;
   var delay = 10000;

   initSlider();
   clickSlider();

   function initSlider(){
      
      $('.slider img').eq(0).fadeIn();
      setInterval(function(){
         alternarSlider();
      },delay);
      
   };
   
   function clickSlider(){
      $('.bullets-nav .bullets').click(function(){
         $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
         indiceAtual = $(this).index();
         $('.bullets-nav .bullets').css('border','0');
         $(this).css('border','13px solid #000');
         $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
      });
   }
   
      // Animação constante de slide
      function alternarSlider(){
         $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
         indiceAtual+=1;
         if(indiceAtual == indiceMaximo){
            indiceAtual=0;
         };
         $('.bullets-nav .bullets').css('border','0');
         $('.bullets-nav .bullets').eq(indiceAtual).css('border','13px solid #000');
         $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
   
      };
   
});