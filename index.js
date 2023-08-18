let express  = require('express');
let cors = require('cors');
let mysql = require('mysql');

let app = express();
app.use(cors());
app.use(express.json());
app.listen(8080);

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

app.get('/usuarios/:id', function (solicitud, respuesta) {
    let id = solicitud.params.id;
    let consulta = "SELECT * from Usuario where id = " + id + ";" ;
    conexion.query(consulta, function (resultado){
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

