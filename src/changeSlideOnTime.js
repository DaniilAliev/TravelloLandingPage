const ChangeSlideOnTime = () => {
  let i = 0;

  const changing = (index) => {
    const sliderContent = document.querySelectorAll('.slider-content');
    const buttons = document.querySelectorAll('.slider-buttons button');

    sliderContent.forEach((slide) => slide.classList.remove('active'));
    buttons.forEach((button) => button.classList.remove('active'));

    const activeSlider = sliderContent[index];
    const activeButton = buttons[index];

    activeButton.classList.add('active');
    activeSlider.classList.add('active');
    i = index;
  };

  const buttonsDiv = document.querySelector('.slider-buttons');
  buttonsDiv.addEventListener('click', (e) => {
    if (!e.target.classList.contains('slider-buttons')) {
      const index = [...buttonsDiv.children].indexOf(e.target);
      changing(index);
    }
  });

  setInterval(() => {
    i += 1;
    if (i === 3) {
      i = 0;
    }
    changing(i);
  }, 5000);
};

export default ChangeSlideOnTime;
