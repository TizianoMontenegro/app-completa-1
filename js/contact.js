$(document).ready(()=>{
    // validation
    
    //go up
    $("#go-up").click((e)=>{
        e.preventDefault();
        $("html, body").animate({scrollTop: 0},400);
    });
});