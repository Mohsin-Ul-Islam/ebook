drop table if exists Sections
cascade;

create table Sections
(
    id int not null,
    headingId int,
    paragraphId int,
    imageId int,

    primary key (id),

    foreign key (headingId) references Headings(id),
    foreign key (paragraphId) references Paragraphs(id),
    foreign key (imageId) references Images(id)
);

drop table if exists Colors
cascade;

create table Colors
(
    id int not null,
    code varchar(20),

    primary key (id)
);

drop table if exists Headings
cascade;

create table Headings
(
    id int not null,
    content varchar(255) default null,
    colorId int not null,

    primary key (id),

    foreign key (color_id) references Colors(id)
);

drop table if exists Paragraphs
cascade;

create table Paragraphs
(
    id int not null,
    content text default null,
    colorId int not null,

    primary key (id),

    foreign key (color_id) references Colors(id)
);

drop table if exists Images
cascade;

create table Images
(
    id int not null,
    src text not null,

    primary key (id)
);

drop table if exists Buttons
cascade;

create table Buttons
(
    id int not null,
    labelId int not null,
    linkId int,

    primary key (id),

    foreign key (linkId) references Links(id),
    foreign key (labelId) references Labels(id)
);

drop table if exists Labels
cascade;

create table Labels
(
    id int not null,
    colorId int not null,
    content varchar(255) not null,

    primary key (id),

    foreign key (colorId) references Colors(id)
);

drop table if exists Links
cascade;

create table Links
(
    id int not null,
    href varchar(255) not null,

    primary key (id)
);

drop sequence if exists ColorSequence;
drop sequence if exists SectionSequence;
drop sequence if exists HeadingSequence;
drop sequence if exists ImageSequence;
drop sequence if exists ParagraphSequence;
drop sequence if exists ButtonSequence;
drop sequence if exists LinkSequence;
drop sequence if exists LabelSequence;

create sequence ColorSequence
start 1 increment 1;
create sequence SectionSequence
start 1 increment 1;
create sequence HeadingSequence
start 1 increment 1;
create sequence ImageSequence
start 1 increment 1;
create sequence ParagraphSequence
start 1 increment 1;
create sequence ButtonSequence
start 1 increment 1;
create sequence LinkSequence
start 1 increment 1;
create sequence LabelSequence
start 1 increment 1;
