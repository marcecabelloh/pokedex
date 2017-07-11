$(document).ready(function() {

    $.ajax({
        url:'https://pokeapi.co/api/v2/pokemon/',
        type:'GET',
        dataType:'JSON',
        data:{"limit":'719'},

    })

    .done(function(respuesta){
        console.log(respuesta);
        console.log("success");
        for (var i = 1; i < respuesta.results.length; i++) {
        var pokePic = $("<a class='waves-effect waves-light btn' href='#modal1'><div class= 'col s3 m3 l3 xl3'> <img src=http://pokeapi.co/media/img/" + i + ".png id=" + i + "></div>");
        /*a pokePic le asigno un div para ordenarlo por columnas y al img en css le asigno un background-color*/
        $('div.pokemon').append(pokePic);
        console.log(pokePic);
}
        $('#modal1').modal('open');
        $('#modal1').modal('close');

    })

    .fail(function(){
        console.log("error");

    })

    .always(function(){
        console.log("complete");

    });

    });