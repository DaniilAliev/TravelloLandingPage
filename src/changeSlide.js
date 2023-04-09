const changeSlide = () => {
  const buttonsDiv = document.querySelector('.slider-buttons');
  buttonsDiv.addEventListener('click', (e) => {
    if (!e.target.classList.contains('slider-buttons')) {
      const sliders = document.querySelector('.slider');
      const sliderContent = document.querySelectorAll('.slider-content');
      const buttons = document.querySelectorAll('.slider-buttons button');

      sliderContent.forEach((slide) => slide.classList.remove('active'));
      buttons.forEach((button) => button.classList.remove('active'));
      e.target.classList.add('active');
      const activeClass = e.target.classList[0];
      const activeSlide = sliders.querySelector(`.${activeClass}`);
      activeSlide.classList.add('active');
    }
  });
};

export default changeSlide;
