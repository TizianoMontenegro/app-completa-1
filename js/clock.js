$(document).ready(()=>{setInterval(()=>{
    $("#clock p").text(moment().format("h:mm:ss a"));},1000);
    $("#calendar").datepicker();
});