$(document).ready(()=>{
    // validation
    $("#contact--form").validate({
        rules:{
            name: {
                required: true,
                minlength: 2},
            surname: {
                required: true,
                minlength: 3},
            email: "required",
            message: {
                required: true,
                minlength: 15}
        },
        messages: {
            name: "please write a valid first name",
            surname: "please write a valid last name",
            email: "please write a valid email",
            message: "please write a valid message"
        }
    })
    
    //go up
    $("#go-up").click((e)=>{
        e.preventDefault();
        $("html, body").animate({scrollTop: 0},400);
    });
});