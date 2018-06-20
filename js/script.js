$(function() {
     
    $("button").click(function() {
        $('#box').fadeOut(3000);
    });
    
    /* jQUERY ANIMATE */
    
    $('#left').click(function() {
        $('.box').animate({
            left: "-=40px",
            fontSize: "+=2px"
        }, function() {
            // animation is complete
        });
    });
    
    $('#up').click(function() {
        $('.box').animate({
            top: "-=40px",
            opacity: "+=0.1"
        }, function() {
            // animation is complete
        });
    });
    
    $('#right').click(function() {
        $('.box').animate({
            left: "+=40px",
            fontSize: "-=2px"
        }, function() {
            // animation is complete
        });
    });
    
    $('#down').click(function() {
        $('.box').animate({
            top: "+=40px",
            opacity: "-=0.1"
        }, function() {
            // animation is complete
        });
    });
    
}); 