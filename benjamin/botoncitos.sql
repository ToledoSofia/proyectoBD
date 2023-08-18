drop database if exists botoncitos;
create database if not exists botoncitos;
use botoncitos;
create table Usuario(
id int primary key auto_increment,
nombre varchar(100) not null,
masElegido varchar(100) default null,
menosElegido varchar(100) default null
);
create table Sonido(
	id int primary key auto_increment,
    url varchar(500),
	nombre varchar(200),
	duracion float, -- segundos
	tipo varchar(100),
	autores varchar(500)
);
create table detalleSonido(
	idUsuario int,
	idSonido int,
	cantidadRep int default 0,
  CONSTRAINT `UsuarioSonido`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `botoncitos`.`Usuario` (`id`),
      CONSTRAINT `SonidoUsuario`
    FOREIGN KEY (`idSonido`)
    REFERENCES `botoncitos`.`Sonido` (`id`)
)ENGINE = InnoDB;


insert into Sonido (nombre, url, duracion, tipo, autores) values ("miaudio.mp3","https://youtu.be/5B3JGUXSRJo", 60, "grabacion", "Jovani Vazquez");
insert into Sonido (nombre, url, duracion, tipo, autores) values ("sabado.mp3", "https://youtube.com/shorts/fVBlEfdtX7Q?feature=share", 7, "grabacion", "Jovani Vazquez");
insert into Sonido (nombre, url, duracion, tipo, autores) values ("orina.mp3", "https://youtu.be/f_Ov2FbRoBs", 29, "grabacion", "Jovani Vazquez");
insert into Sonido (nombre, url, duracion, tipo, autores) values ("llorar.mp3", "https://youtube.com/shorts/tDFgfLAj6n8?feature=share", 7, "grabacion", "Jovani Vazquez");

insert into Sonido (nombre, url, duracion, tipo, autores) values ("facil.mp3", "https://youtube.com/shorts/0oFElzKSINM?feature=share", 20, "grabacion", "Jovani Vazquez");
insert into Sonido (nombre, url, duracion, tipo, autores) values ("teamo.mp3", "https://youtube.com/shorts/P4_-eRQwcpI?feature=share", 33, "grabacion", "Jovani Vazquez");
insert into Sonido (nombre, url, duracion, tipo, autores) values ("lagartijo.mp3", "https://youtube.com/shorts/vPjHCK5Ccek?feature=share", 15, "grabacion", "Jovani Vazquez");
insert into Sonido (nombre, url, duracion, tipo, autores) values ("manzana.mp3", "https://youtube.com/shorts/GjLOOy1TmqI?feature=share", 15, "grabacion", "Jovani Vazquez");
insert into Sonido (nombre, url, duracion, tipo, autores) values ("milagros.mp3", "https://youtube.com/shorts/0oFElzKSINM?feature=share", 6, "grabacion", "Jovani Vazquez");


insert into Usuario (nombre) values ("Sofi");
insert into Usuario (nombre) values ("Bian");


insert into detalleSonido (idUsuario, idSonido, cantidadRep) values (1,2,23);
insert into detalleSonido (idUsuario, idSonido, cantidadRep) values (1,3,5);
insert into detalleSonido (idUsuario, idSonido, cantidadRep) values (1,4,1);
insert into detalleSonido (idUsuario, idSonido, cantidadRep) values (2,1,54);

select * from detalleSonido;
select * from Usuario;
select * from Sonido;
