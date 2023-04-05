const changeSlide = () => {
    const slider = document.querySelector('.slider');
    const sliderContent = document.querySelector('.slider-content');
    const slides = sliderContent.children;
    const buttons = document.querySelectorAll('.slider-buttons button');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 5000);

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function prevSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    buttons.forEach((btn, i) => {
        btn.addEventListener('click', () => {
        if (i === currentSlide) {
            return;
        }
        slides[currentSlide].classList.remove('active');
        currentSlide = i;
        slides[currentSlide].classList.add('active');
        });
    });

    slider.addEventListener('mouseover', () => clearInterval(slideInterval));
    slider.addEventListener('mouseout', () => slideInterval = setInterval(nextSlide, 5000));
}

export default changeSlide;