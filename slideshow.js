document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slideshowTest");
    const contents = document.querySelectorAll(".content");
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
        contents.forEach((content, i) => {
            content.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        slides[currentSlide].classList.remove("active");
        setTimeout(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 500); // Match this delay with the CSS transition duration
    }

    function prevSlide() {
        slides[currentSlide].classList.remove("active");
        setTimeout(() => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }, 500); // Match this delay with the CSS transition duration
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Automatically change slides every 3.5 seconds
    startSlideShow();

    // Initial display
    showSlide(currentSlide);

    // Pause slideshow on hover
    const aboutMeTestContainer = document.querySelector(".aboutMeTest");
    aboutMeTestContainer.addEventListener("mouseover", stopSlideShow);
    aboutMeTestContainer.addEventListener("mouseout", startSlideShow);

    // Expose functions to global scope for button onclick handlers
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
});