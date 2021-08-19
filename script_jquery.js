$(function(){
    $('button').click(function(){
        $('h1').hide();
    });
})

$(function(){
        $('h1').css("color", "red");
});

$(function(){
    $('#unico').css("color", "green");
});

$(function(){
    $('#azul').click(function(){
        $('p').css("background-color", "blue");
    });

    $('#vermelho').click(function(){
        $('p').css("background-color", "red");
    });
});