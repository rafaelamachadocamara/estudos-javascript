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
    //gravar mensagem
    /*$('#vermelho').click(function(){
        $('p').css("background-color", "red");
        $('#mensagem').text("Cor alterada com sucesso");
        $('#mensagem').css('color', 'red');
        $('#mensagem').css('border', '1px solid black');
        $('#mensagem').delay(3000);
        $('#mensagem').fadeOut('fast');
    }); */
    
    //testando encadeamento em bloco
    $('#vermelho').click(function(){
        $('p').css("background-color", "red");
        $('#mensagem').text("Cor alterada com sucesso")
        .css('color', 'red')
        .css('border', '1px solid black')
        .delay(3000).fadeOut('fast');
    })
});

//testando declaração multipla de css
$('#azul').click(function(){
    $('p').css("background-color", "red");
    $('#mensagem').text("Cor alterada com sucesso")
    .css({color: 'red', border: '1px solid black'})
    .delay(3000)
    //adicionando e removendo classes
    .addClass('green')
    $('button').removeClass('red')
    .fadeOut('fast');
});