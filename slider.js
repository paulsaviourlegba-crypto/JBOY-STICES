$(document).ready(function () {

    let slider = $(".slider-container");
    let slides = $(".slide");
    let totalSlides = slides.length;
    let index = 0;

    // Auto slide every 4 seconds
    function autoSlide() {
        index++;
        if (index >= totalSlides) index = 0;
        moveSlider();
    }

    let timer = setInterval(autoSlide, 4000);

    // Move slider by index
    function moveSlider() {
        let position = -index * 100 + "%";
        slider.css({
            transform: `translateX(${position})`,
            transition: "0.8s ease-in-out"
        });
    }

    // Manual navigation
    $(".next").click(function () {
        clearInterval(timer);
        index++;
        if (index >= totalSlides) index = 0;
        moveSlider();
        timer = setInterval(autoSlide, 4000);
    });

    $(".prev").click(function () {
        clearInterval(timer);
        index--;
        if (index < 0) index = totalSlides - 1;
        moveSlider();
        timer = setInterval(autoSlide, 4000);
    });

});