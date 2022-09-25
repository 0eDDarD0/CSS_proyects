window.addEventListener('load', ()=>{
    const burger = $(".burger");
    const burger_nav = $(".burger_nav");

    setTimeout(() => {
        burger_nav.removeClass('burger_d_n');
    }, 1000);

    burger.click(function(){
        burger.toggleClass('burger_click')
        burger_nav.toggleClass('burger_nav_click');
    });
});