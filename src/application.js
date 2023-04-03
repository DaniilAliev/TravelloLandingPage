import parses from "./parses.js";

const inputItem = async () => {
    const hotels = await parses();
    hotels.forEach((item) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item')
        
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
        const prices = [previousPriceDiv, currentPriceDiv]
        prices.forEach((price) => pricesDiv.append(price));
        
        const p = document.createElement('p');
        p.classList.add("description-item");
        p.textContent = item.description;

        const button = document.querySelector('.select-rooms-button').cloneNode(true);
        [img, hotelName, pricesDiv, p, button].forEach((item) => itemDiv.append(item))

        document.querySelector('#tab1').append(itemDiv)
    })
}
    
export default inputItem;