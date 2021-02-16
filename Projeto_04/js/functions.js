$(function(){

    $('.img-slide-footer').click(function(){
       
        $('.img-slide-footer').css('display','none');
        $('.img-slide-footer-2').css('display','block').click(function close(){
            $('.img-slide-footer').css('display','block');
            $('.img-slide-footer-2').css('display','none');
        });
        
    });

    $('.img-slide-footer').click(function(){
        $('footer').slideToggle(300, function(){
            console.log('Tudo certo');
        });
    });

    $('.img-slide-footer-2').click(function(){
        $('footer').slideToggle(300, function(){
            console.log('Tudo certo');
        });
    });

});