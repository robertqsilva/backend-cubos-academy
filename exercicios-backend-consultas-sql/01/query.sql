select id, compositor from musicas;

select compositor, tempo from musicas where tempo > 4*60;

select compositor, composicao from musicas where id between 47 and 123;

select * from musicas where compositor is not null and tempo < 300 and compositor <> 'Bach';

select composicao, tempo from musicas where compositor <> 'Mozart' or compositor <> 'Bach';

select * from musicas order by id desc;

select * from musicas order by tempo desc;

select * from musicas order by tempo asc limit 5;

select * from musicas order by tempo desc limit 10;

select * from musicas order by tempo asc limit 10 offset 5;

select * from musicas limit 10 offset 30;

select * from musicas limit 12 offset 12*5;

select distinct compositor from musicas where compositor is not null;

select distinct compositor, composicao from musicas;

select * from musicas where compositor like 'Bra%';

select * from musicas where ritmo like '%troppo';

select * from musicas where composicao ilike '%quartet%';

select * from musicas where composicao not ilike '%quintet%';