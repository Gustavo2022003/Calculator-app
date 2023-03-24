var output = [];

$("span").click(function(){
    let tema = $(this);

    if (tema.attr("id") == "theme-1"){
        defaultTheme();
    } else if (tema.attr("id") == "theme-2"){
        desertTheme();
    } else {
        nightTheme();
    }
});

$(".col-2").click(function(){

    let botao = $(this);

    $(botao).addClass("btn-click");
    setTimeout(function(){
        $(botao).removeClass("btn-click");
    }, 100);

    if (botao.attr("id") == "del") {
        output.pop();
        $("#output").text(output.join(""));
    } else {
        output.push(botao.attr("id"));
        $("#output").text(output.join(""));
    }


    console.log(botao.attr("id"));
    console.log(output);
});

$(".col-5").click(function(){

    let botao = $(this);

    $(botao).addClass("btn-click");
    setTimeout(function(){
        $(botao).removeClass("btn-click");
    }, 100);

    if (botao.attr("id") == "=") {
        if (output[0] == "+" || output[0] == "-" || output[0] == "X" || output[0] == "." || output[0] == "/" || output[0] == "=")  {
            $(".warning").text("O primeiro valor tem que ser um número!");
        } else {
            let equacao = output.join("").replace(/X/g, "*");
            console.log(eval(equacao));
            $("#output").text(eval(equacao));
            output=[];
        }
    }


    // Resetar os número da lista do output
    if (botao.attr("id") == "limpar") {
        for (let i = -1; i < output.length; i++) {
            output=[];
            $("#output").text("");
            $(".warning").text("");
        }
    }

    console.log(botao.attr("id"));
});

$("#theme-toggle").click(function() {

    if ($("#theme-toggle").attr("class") == "theme-circle-3"){
        $(this).removeClass("theme-circle-3");
        $(this).addClass("theme-circle-1");

        defaultTheme();

    } else if ($("#theme-toggle").attr("class") == "theme-circle-2"){
        $(this).removeClass("theme-circle-2");
        $(this).addClass("theme-circle-3");

        nightTheme();

    } else if ($("#theme-toggle").attr("class") == "theme-circle-1"){
        $(this).removeClass("theme-circle-1");
        $(this).addClass("theme-circle-2");

        desertTheme();

    }


});


function defaultTheme() {
    $("#theme-toggle").removeClass("theme-circle-3");
    $("#theme-toggle").removeClass("theme-circle-2");
    $("#theme-toggle").addClass("theme-circle-1");


    $("body").css("background-color","#4947a3");
    $(".header-title").css("color","white");
    $(".theme").css("background-color","#282450");
    $(".calculator-output").css("background-color","#282450");
    $(".output").css("color","white");
    $(".calculator-btns").css("background-color","#3d367e");
    $(".calculator-btn").css("background-color","#ffffff");
    $(".calculator-btn").css("box-shadow","#bbbbbb 0 5px");
    $(".calculator-btn").css("color","#6160a3");
    $(".calculator-btn-blue").css("background-color","#9896e7");
    $(".calculator-btn-blue").css("box-shadow","#6160a3 0 5px");
    $(".calculator-btn-large-blue").css("background-color","#9896e7");
    $(".calculator-btn-large-blue").css("box-shadow","#6160a3 0 5px");
    $(".calculator-btn-large-red").css("background-color","#e97070");
    $(".calculator-btn-large-red").css("box-shadow","#a55050 0 5px");
}

function desertTheme() {
    $("#theme-toggle").removeClass("theme-circle-1");
    $("#theme-toggle").removeClass("theme-circle-3");
    $("#theme-toggle").addClass("theme-circle-2");


    $("body").css("background-color","#e6e6e6");
    $(".header-title").css("color","#35352b");
    $(".theme").css("background-color","#d3cdcd");
    $(".calculator-output").css("background-color","#eeeeee");
    $(".output").css("color","#35352b");
    $(".calculator-btns").css("background-color","#d3cdcd");
    $(".calculator-btn").css("background-color","#ffffff");
    $(".calculator-btn").css("box-shadow","#bbbbbb 0 5px");
    $(".calculator-btn").css("color","#35352b");
    $(".calculator-btn-blue").css("background-color","#388187");
    $(".calculator-btn-blue").css("box-shadow","#24606b 0 5px");
    $(".calculator-btn-large-blue").css("background-color","#388187");
    $(".calculator-btn-large-blue").css("box-shadow","#24606b 0 5px");
    $(".calculator-btn-large-red").css("background-color","#c85401");
    $(".calculator-btn-large-red").css("box-shadow","#873700 0 5px");
}

function nightTheme() {
    $("#theme-toggle").removeClass("theme-circle-2");
    $("#theme-toggle").removeClass("theme-circle-1");
    $("#theme-toggle").addClass("theme-circle-3");


    $("body").css("background-color","#17062a");
    $(".header-title").css("color","#ffe23f");
    $(".theme").css("background-color","#1e0837");
    $(".calculator-output").css("background-color","#1e0836");
    $(".output").css("color","#ffe73c");
    $(".calculator-btns").css("background-color","#1e0836");
    $(".calculator-btn").css("background-color","#56077c");
    $(".calculator-btn").css("box-shadow","#881fa0 0 5px");
    $(".calculator-btn").css("color","#ffe434");
    $(".calculator-btn-blue").css("background-color","#57067e");
    $(".calculator-btn-blue").css("box-shadow","#bf15f4 0 5px");
    $(".calculator-btn-large-blue").css("background-color","#56077c");
    $(".calculator-btn-large-blue").css("box-shadow","#be15f4 0 5px");
    $(".calculator-btn-large-red").css("background-color","#00decf");
    $(".calculator-btn-large-red").css("box-shadow","#6ef7ef 0 5px");
}