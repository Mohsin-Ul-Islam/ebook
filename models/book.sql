drop table if exists Books;
drop sequence if exists Book_Sequence;
create sequence Book_Sequence start with 1;

create table Books
(
    id int not null,
    name varchar(255) not null,


);