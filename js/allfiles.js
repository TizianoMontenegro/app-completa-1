$(document).ready(()=>{
    // autocomplete
    let listAutoComplete = ["JavaScript","Pyton","Java","Go","C++","Ruby","PHP","TypeScript","C#","C","Shell","Scala","Swift","Rust","Kotlin","Objetive-C","Groovy","Elixir","Lua","Dart"];
    $("#header__search").autocomplete({source: listAutoComplete});

    // slider
    $(".slider").bxSlider()

    // change theme
    let theme = $("#theme");
    $("#to-green").click(()=>{
        theme.attr("href", "./css/green-theme.css")
    });
    $("#to-red").click(()=>{
        theme.attr("href", "./css/red-theme.css")
    });
    $("#to-blue").click(()=>{
        theme.attr("href", "./css/blue-theme.css")
    });

    //go up
    $("#go-up").click((e)=>{
        e.preventDefault();
        $("html, body").animate({scrollTop: 0},400);
    });

    // sing up
    $(".singup__form").submit(function(e){
        let formName = $("#name__form").val();
        if(formName != null && formName != "" && formName != undefined && !formName.includes(" ")){
            localStorage.setItem("name", formName);
        }else{
            e.preventDefault();
            alert("Tienes que completar todos los campos");
        }
    });
    let formName = localStorage.getItem("name");
    if(formName != null && formName != " " && formName != undefined){
        let paragraph = $(".whoim p");
        paragraph.html("Bienvenido " + formName);
        $(".singup").hide();
        paragraph.append("<a id='logout' style='float: right' href='#'>Log out</a>")
        $("#logout").click(()=>{
            localStorage.clear();
            window.location.reload()
        })
    }
});