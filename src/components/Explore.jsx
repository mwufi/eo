import React from 'react';

function Explore() {
  return (
    <div class="col-12">
      <div class="main__carousel-wrap">
        <div
          class="main__carousel main__carousel--explore owl-carousel"
          id="explore"
        >
          <div class="card">
            <a href="item.html" class="card__cover">
              <img src="img/cover/cover1.jpeg" alt="" />
            </a>
            <h3 class="card__title">
              <a href="item.html">Walking on Air</a>
            </h3>
            <div class="card__author">
              <img src="img/avatars/avatar13.jpg" alt="" />
              <a href="author.html">@nickname</a>
            </div>
            <div class="card__info">
              <div class="card__price">
                <span>Reserve price</span>
                <span>4.89 ETH</span>
              </div>

              <button class="card__likes" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                </svg>
                <span>189</span>
              </button>
            </div>
          </div>

          <div class="card">
            <a href="item.html" class="card__cover">
              <img src="img/cover/cover2.jpeg" alt="" />
            </a>
            <h3 class="card__title">
              <a href="item.html">
                Les Immortels, the Treachery of Artificial Shadows
              </a>
            </h3>
            <div class="card__author card__author--verified">
              <img src="img/avatars/avatar10.jpg" alt="" />
              <a href="author.html">@neo</a>
            </div>
            <div class="card__info">
              <div class="card__price">
                <span>Reserve price</span>
                <span>2.61 ETH</span>
              </div>

              <button class="card__likes" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                </svg>
                <span>702</span>
              </button>
            </div>
          </div>

          <div class="card">
            <a href="#modal-asset" class="card__cover open-modal">
              <img src="img/cover/cover3.jpeg" alt="" />
            </a>
            <h3 class="card__title">
              <a href="#modal-asset" class="open-modal">
                Flowers in Concrete (Modal)
              </a>
            </h3>
            <div class="card__author">
              <img src="img/avatars/avatar.jpg" alt="" />
              <a href="author.html">@min1max</a>
            </div>
            <div class="card__info">
              <div class="card__price">
                <span>Reserve price</span>
                <span>3.19 ETH</span>
              </div>

              <button class="card__likes card__likes--active" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                </svg>
                <span>37</span>
              </button>
            </div>
          </div>

          <div class="card">
            <a href="item.html" class="card__cover">
              <img src="img/cover/cover4.jpg" alt="" />
            </a>
            <h3 class="card__title">
              <a href="item.html">Industrial Revolution</a>
            </h3>
            <div class="card__author card__author--verified">
              <img src="img/avatars/avatar8.jpg" alt="" />
              <a href="author.html">@midinh</a>
            </div>
            <div class="card__info">
              <div class="card__price">
                <span>Reserve price</span>
                <span>1.11 ETH</span>
              </div>

              <button class="card__likes" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                </svg>
                <span>23</span>
              </button>
            </div>
          </div>

          <div class="card">
            <a href="item.html" class="card__cover">
              <img src="img/cover/cover5.jpg" alt="" />
            </a>
            <h3 class="card__title">
              <a href="item.html">I Love You</a>
            </h3>
            <div class="card__author card__author--verified">
              <img src="img/avatars/avatar9.jpg" alt="" />
              <a href="author.html">@nicky87</a>
            </div>
            <div class="card__info">
              <div class="card__price">
                <span>Reserve price</span>
                <span>0.99 ETH</span>
              </div>

              <button class="card__likes" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                </svg>
                <span>358</span>
              </button>
            </div>
          </div>

          <div class="card">
            <a href="item.html" class="card__cover card__cover--video">
              <img src="img/cover/cover6.jpg" alt="" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.53,7.15a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,3-2.89l3.56,1.78A1,1,0,0,0,21,17a1,1,0,0,0,.53-.15A1,1,0,0,0,22,16V8A1,1,0,0,0,21.53,7.15ZM15,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h9a1,1,0,0,1,1,1Zm5-.62-3-1.5V11.12l3-1.5Z" />
              </svg>
            </a>
            <h3 class="card__title">
              <a href="item.html">Walking on Air</a>
            </h3>
            <div class="card__author">
              <img src="img/avatars/avatar14.jpg" alt="" />
              <a href="author.html">@redalert</a>
            </div>
            <div class="card__info">
              <div class="card__price">
                <span>Reserve price</span>
                <span>1.63 ETH</span>
              </div>

              <button class="card__likes" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                </svg>
                <span>90</span>
              </button>
            </div>
          </div>

          <div class="card">
            <a href="#modal-asset" class="card__cover open-modal">
              <img src="img/cover/cover7.jpg" alt="" />
            </a>
            <h3 class="card__title">
              <a href="#modal-asset" class="open-modal">
                Tranquility (Modal)
              </a>
            </h3>
            <div class="card__author">
              <img src="img/avatars/avatar4.jpg" alt="" />
              <a href="author.html">@aaarthur</a>
            </div>
            <div class="card__info">
              <div class="card__price">
                <span>Reserve price</span>
                <span>2.55 ETH</span>
              </div>

              <button class="card__likes" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                </svg>
                <span>64</span>
              </button>
            </div>
          </div>
        </div>

        <button
          class="main__nav main__nav--prev"
          data-nav="#explore"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
          </svg>
        </button>
        <button
          class="main__nav main__nav--next"
          data-nav="#explore"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Explore;
