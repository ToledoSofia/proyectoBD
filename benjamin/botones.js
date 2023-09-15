    conectarBD();
    
    function conectarBD(){
        $.ajax({
            url : "http://localhost:8080/inicio",
            type : 'GET'
        })

        .done(function(data){
            console.log("FUNCIONA");
        })

        .fail(function(jqXHR, textStatus, errorThrown){
            console.log("ERROR conectarBD");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        })
        // agarrarDatos();
   }
   function insertarDatos(){
        var formulario = new FormData();
        var nombre = document.getElementById("nombre").value;
        var duracion = document.getElementById("duracion").value;
        var tipo = document.getElementById("tipo").value;
        var autores = document.getElementById("autores").value;
        var url = document.getElementById("url").value;
        let data = {"nombre": nombre, "duracion": duracion,"tipo": tipo,"autores": autores,"url": url};
        console.log(data);

        $.ajax({
            url:"http://localhost:8080/agregarSonido",
            type: "POST",
            contentType : 'application/json',
            data: JSON.stringify(data)
        })

        .done(function(data){
            console.log("joyaaaaaa");
        })

        .fail(function(jqXHR, textStatus, errorThrown){
            console.log("Error de insercion de datos");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        })
    }
    
    function eliminarSonido(){
        var id = document.getElementById("num").value;
        $.ajax({
            url: "http://localhost:8080/eliminarDatos/" + id,
            type: 'DELETE'
        })
        
        .done(function(data){
            console.log("joyaaaaaa");
        })

        .fail(function(jqXHR, textStatus, errorThrown){
            console.log("Error de eliminacion de datos");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        })
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
        function agarrarDatosCompletos(){
            $.ajax({
                url : "http://localhost:8080/sonidosDatos",
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
        function modificarDatos(){
            var formulario = new FormData();
            var id = document.getElementById("id").value;
            var nombre = document.getElementById("nombre").value;
            var duracion = document.getElementById("duracion").value;
            var tipo = document.getElementById("tipo").value;
            var autores = document.getElementById("autores").value;
            var url = document.getElementById("url").value;
            let data = {"id": id, "nombre": nombre, "duracion": duracion,"tipo": tipo,"autores": autores,"url": url};
            console.log(data);
    
    
            $.ajax({
                url: "http://localhost:8080/modificarDatos/" + id,
                type: 'PATCH',
                contentType: "application/json",
                data: JSON.stringify(data)
            })
    
            .done(function(data){
                console.log("FUNCIONA MODIFICACION");
            })
    
            .fail(function(jqXHR, textStatus, errorThrown){
                console.log("Error de modificacion de datos");
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            })
        }
    
   