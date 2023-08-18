create database if not exists botoncitos;
use botoncitos;
create table Usuario(
id int primary key auto_increment,
nombre varchar(100)
);
create table Sonido(
	id int primary key auto_increment,
	nombre varchar(200),
	duracion float,
	tipo varchar(100),
	autores varchar(500)
);