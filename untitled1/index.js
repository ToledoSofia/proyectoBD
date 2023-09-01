let express  = require('express');
let cors = require('cors');
let mysql = require('mysql');

let app = express();
app.use(cors());
app.use(express.json());
app.listen(8000);

let conexion;

app.get('/inicio', function (solicitud, respuesta) {
    conexion = mysql.createConnection({
        host : 'localhost',
        user : 'alumno',
        password : 'alumnoipm'
    });
    conexion.connect();
    conexion.query("use botoncitos;");
    respuesta.send("¡Hola Mundo!");
})
/*app.post("/insertar", function(solicitud, respuesta){
    let nombre = solicitud.body.nombre;
    let consulta = "INSERT INTO botoncitos (nombre, duracion, tipo, autores, url) values (" + nombre + ");";
    conexion.query(consulta, function(resultado){
        respuesta.send(resultado);
    })

})*/

app.post('/sonidos', function (req, res){
    console.log(req.body);
   var nombre1 = req.body["nombre"];
    var duracion = req.body["duracion"];
    var tipo = req.body["tipo"];
    var autores = req.body["autores"];
    var url = req.body["url"];

    let query = "insert into Sonido (nombre, duracion, tipo, autores, url) values ('" + nombre1 + "', '" + duracion + "', '" + tipo + "', '" + autores +"', '" + url +"');"
    conexion.query(query, function (err, result, filed) {
        if (err) throw err
        console.log(result);
    })
})

app.get('/fin', function (solicitud, respuesta) {
    conexion.end();
    respuesta.send("¡Chau!");
})

app.get('/usuarios', function (solicitud, respuesta) {
    conexion.query('SELECT * from Usuario;', function (error, filas, fields){
        for(let elem of filas){
            console.log(elem.nombre);
        }
        respuesta.send(filas);
    });
})

app.get('/sonidos/:id', function (solicitud, respuesta) {
    let id = solicitud.params.id;
    let consulta = "SELECT url from Sonido where id = " + id + ";" ;
    conexion.query(consulta, function (err,resultado){
        if (err) throw err;
        respuesta.send(resultado);
    });
})
app.get('/sonidosDatos', function (solicitud, respuesta) {
    let id = solicitud.params.id;
    let consulta = "SELECT * from Sonido;" ;
    conexion.query(consulta, function (err,resultado){
        if (err) throw err;
        respuesta.send(resultado);
    });
})

app.get('/sonidosDatos/:id', function (solicitud, respuesta) {
    let id = solicitud.params.id;
    let consulta = "SELECT * from Sonido where id = " + id + ";" ;
    conexion.query(consulta, function (err,resultado){
        if (err) throw err;
        respuesta.send(resultado);
    });
})

app.get('/sonidos', function (solicitud, respuesta) {
    conexion.query('SELECT * from Sonido;', function (error, filas, fields){
        for(let elem of filas){
            console.log(elem.nombre);
        }
        respuesta.send(filas);
    });
})
app.post('/inicio', function (solicitud, respuesta) {
    conexion = mysql.createConnection({
        host : 'localhost',
        user : 'alumno',
        password : 'alumnoipm'
    });
    conexion.connect();
    conexion.query("use botoncitos;");
    respuesta.send("¡Hola Mundo!");
})

app.delete("/eliminarDatos/:id", function(solicitud, respuesta){
    let id = solicitud.params.id;
    let consulta = 'DELETE from Sonido where id = ' + id + ';';
    conexion.query(consulta, function (err,resultado){
        if (err) throw err;
        respuesta.send(resultado);
    });
})

app.put ("modificarDatos/:id", function(solicitud, respuesta){
    let id = solicitud.params.id;
    let url = solicitud.body.url;
    let nombre = solicitud.body.nombre;
    let duracion = solicitud.body.duracion;
    let tipo = solicitud.body.tipo;
    let autores = solicitud.body.autores;

    let consulta = 'UPDATE Sonido SET url = ' + url + ', nombre = ' + nombre + ', duracion = ' + duracion + ', tipo = ' + tipo + ', autores = ' + autores + ' where id = ' + id + ';';
    conexion.query(consulta, function (err,resultado){
        if (err) throw err;
        respuesta.send(resultado);
    });

})

