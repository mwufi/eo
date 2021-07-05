import React from 'react';

function CarouselCard() {
  return (
    <div class="card">
      <div class="card__cover card__cover--carousel owl-carousel">
        <img src="img/cover/slide1.jpg" alt="" />
        <img src="img/cover/slide2.jpg" alt="" />
        <img src="img/cover/slide3.jpg" alt="" />
      </div>

      <h3 class="card__title">
        <a href="item.html">To Infinity And Beyond</a>
      </h3>
      <div class="card__author card__author--verified">
        <img src="img/avatars/avatar5.jpg" alt="" />
        <a href="author.html">@l1rose</a>
      </div>
      <div class="card__info">
        <div class="card__price">
          <span>Reserve price</span>
          <span>5.04 ETH</span>
        </div>

        <button class="card__likes" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
          </svg>
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default CarouselCard;
