create table categorias (id serial primary key, nome varchar(50));
create table produtos (
  id serial primary key,
  nome varchar(100),
  descricao text,
  preco integer,
  quantidade_em_estoque integer,
  categoria_id integer references categorias(id)
);
create table vendedores (
  cpf char(11) primary key,
  nome varchar(150)
);
create table clientes (
  cpf char(11) primary key,
  nome varchar(150)
);
create table pedidos (
  id serial primary key,
  valor integer,
  cliente_cpf char(11) references clientes(cpf),
  vendedor_cpf char(11) references vendedores(cpf)
);
create table itens_do_pedido (
  id serial primary key,
  pedido_id integer references pedidos(id),
  quantidade integer,
  produto_id integer references produtos(id)
);
insert into categorias (nome)
values ('frutas'),
  ('verduras'),
  ('massas'),
  ('bebidas'),
  ('ultilidades');
insert into pedidos (valor, cliente_cpf, vendedor_cpf)
values (
    300 + 300 + 6 * 1200 + 1000 + 5 * 90,
    '80371350042',
    '28007155023'
  ),
  (
    10 * 198 + 3 * 420 + 5 * 300 + 10 * 125 + 235,
    '63193310034',
    '23262546003'
  ),
  (
    2350 + 6 * 130 + 5 * 198,
    '75670505018',
    '23262546003'
  ),
  (
    2290 + 875 + 3 * 300 + 20 * 125 + 2 * 235,
    '75670505018',
    '82539841031'
  ),
  (
    8 * 420 + 875 + 3 * 198 + 8 * 125 + 2 * 1200,
    '67642869061',
    '82539841031'
  );