jQuery(
    function(){
        $("#navLinks a").mouseover(
            function(){
                $(this).addClass("navLinks");
            }//end mouseover function
        );//end mouseover event

        $("#navLinks a").mouseout(
            function(){
                $(this).removeClass();
            }//end mouseout function
        );//end mouseout event
    }//end main function container
);//end jQuery main container