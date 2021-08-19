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
        $('P').fadeOut();
        $('p').css("background-color", "blue");
        $('p').fadeOut();
        $('p').delay(1000);
        $('p').fadeIn();
    });

    /*$('#vermelho').click(function(){
        $('p').css("background-color", "red");
        $('p').fadeOut('slow');
        $('p').delay(1000);
        $('p').fadeIn('slow');
    });
});*/

//testando outras formas de delays 

$('#vermelho').click(function(){
        $('p').css("background-color", "red");
        $('p').fadeOut('slow');
        $('p').fadeIn('7000');
    });
});
