drop table if exists webpage;

create table webpage
(
    id int not null,
    firstHeading varchar(255),
    firstParagraph text,
    firstImage text,

    secondHeading varchar(255),
    secondParagraph text,

    thirdHeading varchar(255),
    thirdParagraph text,
    thirdImage text,

    fourthHeading varchar(255),
    fourthImage varchar(255),

    fifthHeading varchar(255),
    fifthParagraph text,

    headingColor varchar(20),
    paragraphColor varchar(20),
    bodyColor varchar(20),
    linkColor varchar(20),
    ctaPrimaryLabelColor varchar(20),
    ctaPrimaryColor varchar(20),
    ctaSecondaryLabelColor varchar(20),
    ctaSecondaryColor varchar(20),

    primary key (id)
);

drop table if exists testimonials;

create table testimonials
(
    id int not null,
    heading varchar(255),
    caption text,

    primary key (id)
);

insert into webpage
    (id,firstHeading,firstParagraph,firstImage,
    secondHeading,secondParagraph,
    thirdHeading, thirdParagraph, thirdImage,
    fourthHeading,fourthImage,
    fifthHeading, fifthParagraph,
    headingColor,paragraphColor,bodyColor,
    linkColor,ctaPrimaryLabelColor,
    ctaPrimaryColor,ctaSecondaryLabelColor,
    ctaSecondaryColor)
values
    (1, 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        '/assets/images/hero_bg.svg', 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Our advantages', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        '/assets/images/advantages.svg',
        'Testimonials', '/assets/images/testimonials.svg', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        '#000000', '#000000', '#E5E5E5', '#3E373A', '#FFFFFF', '#F9A826', '#FFFFFF', '#F9A826');



insert into webpage
    (id,firstHeading,firstParagraph,firstImage,
    secondHeading,secondParagraph,
    thirdHeading, thirdParagraph, thirdImage,
    fourthHeading,fourthImage,
    fifthHeading, fifthParagraph,
    headingColor,paragraphColor,bodyColor,
    linkColor,ctaPrimaryLabelColor,
    ctaPrimaryColor,ctaSecondaryLabelColor,
    ctaSecondaryColor)
values
    (2, 'Loaded from database', 'This content is directly loaded from database.',
        'https://image.freepik.com/free-vector/people-putting-puzzle-pieces-together_52683-28610.jpg', 'Another Heading',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Benefits', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'https://image.freepik.com/free-vector/multitasking-concept-illustration-character_23-2148403716.jpg',
        'Testimonials', 'https://image.freepik.com/free-vector/group-people-working-together_52683-28615.jpg', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        '#FFFFFF', '#FAFAFA', '#000000', '#FFFFFF', '#FFFFFF', 'blue', '#FFFFFF', 'lightblue');

insert into testimonials
    (id,heading,caption)
values
    (1, 'Wow!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

insert into testimonials
    (id,heading,caption)
values
    (2, 'Great!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');