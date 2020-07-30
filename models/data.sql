-- here is how to create endpoints

-- endpoint 1
--  first we define colors for the webpage 1

insert into colors
    (id,
    theme_color,
    theme_color_2,
    body_color,
    headings_color,
    paragraphs_color,
    links_color
    )
values
    (1,
        '#F9A826',
        '#FFFFFF',
        '#FAFAFA',
        '#000000',
        '#555555',
        '#3E373A');

-- then we create headings for the webpage 1
insert into headings
    (id,
    heading_1,
    heading_2,
    heading_3,
    heading_4,
    heading_5)
values
    (1,
        'First Heading',
        'Second Heading',
        'Third Heading',
        'Fourth Heading',
        'Fifth Heading');

-- then we create paragraphs for the webpage 1
insert into paragraphs
    (id,
    paragraph_1,
    paragraph_2,
    paragraph_3,
    paragraph_4)
values
    (1,
        'Content for first paragraph goes here.',
        'Content for second paragraph goes here.',
        'Content for third paragraph goes here.',
        'Content for last paragraph goes here.');


-- then we add images to the webpage 1
insert into images
    (id,
    image_1,
    image_2,
    image_3)
values
    (1,
        '/assets/images/hero_bg.svg',
        '/assets/images/advantages.svg',
        '/assets/images/testimonials.svg'
    );

-- then we add links to the webpage 1
insert into links
    (id,cta_1,cta_2,cta_3,cta_4,about,contact,testimonials)
values
    (1, '#', '#', '#', '#', '#about', '#contact', '#testimonials');

-- with essential components being set, we now create the webpage itself
insert into webpages
    (id,
    title,
    headings_id,
    paragraphs_id,
    colors_id,
    images_id,
    links_id)
values
    (1,
        'Book 1',
        1,
        1,
        1,
        1,
        1);

-- we add testimonials to webpage 1

-- create a testimonial
insert into testimonials
    (id,
    heading,
    caption,
    webpages_id)
values
    (1,
        'Wow',
        'Caption for first testimonial',
        1);

-- create a testimonial
insert into testimonials
    (id,
    heading,
    caption,
    webpages_id)
values
    (2,
        'Great',
        'Caption for second testimonial',
        1);

-- create a testimonial
insert into testimonials
    (id,
    heading,
    caption,
    webpages_id)
values
    (3,
        'Awesome',
        'Caption for third testimonial',
        1);



-- here is data for other endpoints;
-- endpoint 2
insert into colors
    (id,
    theme_color,
    theme_color_2,
    body_color,
    headings_color,
    paragraphs_color,
    links_color
    )
values
    (2,
        '#4122DD',
        '#FFFFFF',
        '#FAFAFA',
        '#000000',
        '#555555',
        '#3E373A');

insert into headings
    (id,
    heading_1,
    heading_2,
    heading_3,
    heading_4,
    heading_5)
values
    (2,
        'First Heading Endpoint 2',
        'Second Heading Endpoint 2',
        'Third Heading Endpoint 2',
        'Fourth Heading Endpoint 2',
        'Fifth Heading Endpoint 2');

insert into paragraphs
    (id,
    paragraph_1,
    paragraph_2,
    paragraph_3,
    paragraph_4)
values
    (2,
        'Content for first paragraph goes here. Endpoint 2',
        'Content for second paragraph goes here. Endpoint 2',
        'Content for third paragraph goes here. Endpoint 2',
        'Content for last paragraph goes here. Endpoint 2');


insert into images
    (id,
    image_1,
    image_2,
    image_3)
values
    (2,
        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
        'https://images.unsplash.com/photo-1492539161849-b2b18e79c85f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1495106245177-55dc6f43e83f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    );

insert into links
    (id)
values
    (2);

insert into webpages
    (id,
    title,
    headings_id,
    paragraphs_id,
    colors_id,
    images_id,
    links_id)
values
    (2,
        'Book 2',
        2,
        2,
        2,
        2,
        2);



-- endpoint 3
insert into colors
    (id,
    theme_color,
    theme_color_2,
    body_color,
    headings_color,
    paragraphs_color,
    links_color
    )
values
    (3,
        '#E11E36',
        '#FFFFFF',
        '#FAFAFA',
        '#000000',
        '#555555',
        '#1EE1C9');

insert into headings
    (id,
    heading_1,
    heading_2,
    heading_3,
    heading_4,
    heading_5)
values
    (3,
        'First Heading Endpoint 3',
        'Second Heading Endpoint 3',
        'Third Heading Endpoint 3',
        'Fourth Heading Endpoint 3',
        'Fifth Heading Endpoint 3');

insert into paragraphs
    (id,
    paragraph_1,
    paragraph_2,
    paragraph_3,
    paragraph_4)
values
    (3,
        'Content for first paragraph goes here. Endpoint 3',
        'Content for second paragraph goes here. Endpoint 3',
        'Content for third paragraph goes here. Endpoint 3',
        'Content for last paragraph goes here. Endpoint 3');


insert into images
    (id,
    image_1,
    image_2,
    image_3)
values
    (3,
        'https://img.freepik.com/free-vector/startup-life-concept-illustration_114360-1068.jpg?size=338&ext=jpg&ga=GA1.2.369047873.1595335511',
        'https://image.freepik.com/free-vector/telecommuting-concept-illustration_114360-1600.jpg',
        'https://image.freepik.com/free-vector/telecommuting-concept_23-2148496139.jpg'
    );

insert into links
    (id)
values
    (3);

insert into webpages
    (id,
    title,
    headings_id,
    paragraphs_id,
    colors_id,
    images_id,
    links_id)
values
    (3,
        'Book 3',
        3,
        3,
        3,
        3,
        3);