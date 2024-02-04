create database envio_newsletter;

create table clients_mail (
	id serial primary key,
  nome text not null,
  email text not null unique
);