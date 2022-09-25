window.addEventListener('load', ()=>{
    //PRIMERO ESCONDEMOS EL MENU
    $('#menu').first().hide();
    //DESPUES AÑADIMOS EL EVENTO QUE LO MUESTRA U OCULTA
    $('#button').click(function(){
        if($('#menu').first().is(':hidden')){
            $('#menu').first().fadeIn();
        }else{
            $('#menu').first().fadeOut();
        }
      });
});