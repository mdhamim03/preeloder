//J QUERY
$(function(){
    //NAV ANIMATION START
        let navbar = $('.ny_nav');

        $(window).scroll(function(){
            let scrTop = $(window).scrollTop();
            if(scrTop > 400){
                navbar.addClass("allMenuFixed");
            }else{
                navbar.removeClass("allMenuFixed");
            }
        });
    //NAV ANIMATION END
    //PREELODER ANIMATION START
        $(window).ready(function(){
        let preeloder = $(".preeloder");
            preeloder.delay(1000).fadeOut(300);
        });
    //PREELODER ANIMATION END
   


    

});