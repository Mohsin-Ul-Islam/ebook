drop table if exists colors;

-- color value can any valid CSS3 color value
-- e.g
--   #FAFAFA
--   rgb(0,0,0) 
--   rgba(0,0,0,1)
--   orange

create table colors
(

    -- id which needs to be referenced from webpage
    id int not null,

    -- theme color of webpage

    -- theme color will be applied to
    -- buttons as well as style bars over certain
    -- headings on a webpage
    theme_color varchar(20) default '#F9A826',

    -- secondary theme color
    -- this color will appear beside theme color
    -- for example, buttons with background theme color will have
    -- text in secondary theme color
    theme_color_2 varchar(20) default '#FFFFFF',

    -- body background color
    body_color varchar(20) default '#FFFFFF',

    -- headings color
    headings_color varchar(20) default '#000000',

    -- paragraphs color
    paragraphs_color varchar(20) default '#444444',

    -- navigation links color
    links_color varchar(20) default '#3E373A',

    primary key (id)

);

drop table if exists headings;

create table headings
(

    -- id which needs to be referenced from webpage
    id int not null,

    -- first heading
    heading_1 varchar(64) default '',

    -- second heading
    heading_2 varchar(64) default '',

    -- third heading
    heading_3 varchar(64) default '',

    -- fourth heading
    heading_4 varchar(64) default '',

    --fifth heading (last)
    heading_5 varchar(64) default '',

    primary key (id)

);

drop table if exists images;

create table images
(
    -- id which needs to be referenced from webpage
    id int not null,

    -- url of image 1
    image_1 text default '',

    -- url of image 2
    image_2 text default '',

    --url of image 3
    image_3 text default '',

    primary key (id)

);

drop table if exists paragraphs;

create table paragraphs
(

    -- id which needs to be referenced from webpage
    id int not null,

    -- first paragraph
    paragraph_1 text default '',

    -- second paragraph
    paragraph_2 text default '',

    -- third paragraph
    paragraph_3 text default '',

    -- fourth paragraph (last)
    paragraph_4 text default '',

    primary key (id)

);

drop table if exists testimonials;

create table testimonials
(
    -- unique id of a testimonial
    id int not null,

    -- heading of a testimonial
    heading varchar(64),

    -- caption of the testimonial
    caption text,

    primary key (id)
);

drop table if exists webpages;

create table webpages
(

    -- endpoint id to be called with URL
    id int not null,

    -- id pointing to headings of this webpage
    headings_id int,

    -- id pointing to paragraphs of this webpage
    paragraphs_id int,

    -- id of colors to be used on this webpage
    colors_id int,

    -- id of images to be used on this webpage
    images_id int,

    -- id of links to be used on this webpage
    links_id int,

    primary key (id),

    foreign key (headings_id) references headings(id),
    foreign key (paragraphs_id) references paragraphs(id),
    foreign key (colors_id) references colors(id),
    foreign key (images_id) references images(id),
    foreign key (links_id) references links(id)
);

drop table if exists dynamic_assets;

create table dynamic_assets
(

    -- unique id of the asset
    id int not null,

    -- type of the asset either stylesheet (.css file) or script (.js file)
    asset_type varchar(10),

    -- url to the asset
    asset_url varchar(255),

    -- id of the webpages to which this asset is to be binded
    webpages_id int,

    primary key (id),

    foreign key (webpages_id) references webpages(id)
);

drop table if exists links;

create table links
(

    -- unique id of the links
    id int not null,

    -- call to action link (for start now buttons) in navigation menu
    cta_1 text default '#',

    -- call to action link in first section
    cta_2 text default '#',

    -- call to action link in last section
    cta_3 text default '#',

    -- call to action link in the footer
    cta_4 text default '#',

    -- link to about us page
    about text default '#',

    -- link to contact us page
    contact text default '#',

    -- link to testimonials
    testimonials text default '#testimonials',

    primary key (id)

);