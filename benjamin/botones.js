    function conectarBD(){
        $.ajax({
            url : "http://localhost:8080/inicio",
            type : 'GET'
        })

        .done(function(data){
            console.log("FUNCIONA");
        })

        .fail(function(jqXHR, textStatus, errorThrown){
            console.log("ERROR   ajá ajá");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        })
        // agarrarDatos();
   }

   function agarrarLinkConId(id){
    $.ajax({
        url : "http://localhost:8080/sonidos/" + id,
        type : 'GET'
    })
    .done(function(data){
        //console.log(data[0]);
        document.getElementById("audio").pause();//incomprobable si funciona o no :)))
        document.getElementById("audio").setAttribute('src', data[0].url);
        document.getElementById("audio").play();
    })

    .fail(function(jqXHR, textStatus, errorThrown){
        console.log("ERROR3");
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    })
    agarrarDatos(id);
}

   function agarrarDatos(id){
        $.ajax({
            url : "http://localhost:8080/sonidosDatos/" + id,
            type : 'GET'
        })
        .done(function(data){
            //console.log(data);
            let divVacio = document.getElementById("datosRecibidos");
            let nombre, duracion, tipo, autores, id, url;
            divVacio.innerHTML = "<div style='padding-left:5%; padding-top:2%;'><h3><u>SONIDO:</u></h3></div>";

            for(i = 0; i<data.length; i++ ){
                //console.log(i);
                nombre = data[i].nombre;
                duracion = data[i].duracion;
                tipo = data[i].tipo;
                autores = data[i].autores;
                id = data[i].id;
                url = data[i].url;
                divVacio.innerHTML = divVacio.innerHTML + "<br> <div style='padding-left: 5%;'><li><u>SONIDO "+id+"</u>:</li><li>nombre: "+nombre+"</li> <li>duracion: " 
                +duracion+"s</li><li>tipo: "+tipo+"</li><li>autores: "+autores+"</li><li>url: "+url+"</li> </div>";
            }
        })

        .fail(function(jqXHR, textStatus, errorThrown){
            console.log("ERROR2");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        })
   }