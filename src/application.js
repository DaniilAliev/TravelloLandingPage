/* eslint-disable import/extensions */
import parses from './parses.js';

const inputItem = async () => {
  const data = await parses();

  const print = (hotels, i) => {
    hotels.forEach((item) => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');

      const img = document.createElement('img');
      img.src = item.photoPath;

      const hotelName = document.createElement('h3');
      hotelName.classList.add('hotel-name');
      hotelName.textContent = 'DoubleTree Montreal Hotel';

      const pricesDiv = document.createElement('div');
      pricesDiv.classList.add('prices');
      const previousPriceDiv = document.createElement('h3');
      previousPriceDiv.classList.add('previous-price');
      previousPriceDiv.textContent = item.previousPrice;
      const currentPriceDiv = document.createElement('h3');
      currentPriceDiv.classList.add('current-price');
      currentPriceDiv.textContent = item.currentPrice;
      const prices = [previousPriceDiv, currentPriceDiv];
      prices.forEach((price) => pricesDiv.append(price));

      const p = document.createElement('p');
      p.classList.add('description-item');
      p.textContent = item.description;

      const button = document.querySelector('.select-rooms-button').cloneNode(true);
      [img, hotelName, pricesDiv, p, button].forEach((item1) => itemDiv.append(item1));

      document.querySelector(`#tab${i + 1}`).append(itemDiv);
    });
  };

  for (let j = 0; j < data.length; j += 1) {
    print(data[j], j);
  }
};

export default inputItem;
