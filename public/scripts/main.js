window.addEventListener('load', function () {

    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.preload').classList.remove('preload');

    init();

});

function init() {

    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    const testimonials = document.querySelectorAll('.testimonial');

    let current = 0;

    nextButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        deactivateTestimonial(current);
        current = (current + 1) % testimonials.length;
        activateTestimonial(current);
        testimonials[current].classList.add('testimonial--float-left');
    });

    prevButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        deactivateTestimonial(current);
        current = current - 1;
        if (current < 0) current = testimonials.length - 1;
        activateTestimonial(current);
        testimonials[current].classList.add('testimonial--float-right');
    });
}

function deactivateTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials[index].classList.remove('testimonial--active');
    testimonials[index].classList.remove('testimonial--float-left');
    testimonials[index].classList.remove('testimonial--float-right');
}

function activateTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials[index].classList.add('testimonial--active');
}