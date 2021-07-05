import React from 'react';

function Collections() {
  return (
    <section class="row row--grid">
      <div class="col-12">
        <div class="main__title">
          <h2>Hot collections</h2>
        </div>
      </div>

      <div class="col-12">
        <div class="main__carousel-wrap">
          <div
            class="main__carousel main__carousel--collections owl-carousel"
            id="collections"
          >
            <div class="collection">
              <a
                href="collection.html"
                class="collection__cover"
                data-bg="img/bg/bg-small.png"
              ></a>
              <div class="collection__meta">
                <a
                  href="author.html"
                  class="collection__avatar collection__avatar--verified"
                >
                  <img src="img/avatars/avatar3.jpg" alt="" />
                </a>
                <h3 class="collection__name">
                  <a href="collection.html">Hashmasks</a>
                </h3>
                <span class="collection__number">ERC-721</span>
              </div>
            </div>

            <div class="collection">
              <a
                href="collection.html"
                class="collection__cover"
                data-bg="img/bg/bg-small2.png"
              ></a>
              <div class="collection__meta">
                <a
                  href="author.html"
                  class="collection__avatar collection__avatar--verified"
                >
                  <img src="img/avatars/avatar9.jpg" alt="" />
                </a>
                <h3 class="collection__name">
                  <a href="collection.html">NFTheft</a>
                </h3>
                <span class="collection__number">ERC-721</span>
              </div>
            </div>

            <div class="collection">
              <a
                href="collection.html"
                class="collection__cover"
                data-bg="img/bg/bg-small3.png"
              ></a>
              <div class="collection__meta">
                <a
                  href="author.html"
                  class="collection__avatar collection__avatar--verified"
                >
                  <img src="img/avatars/avatar12.jpg" alt="" />
                </a>
                <h3 class="collection__name">
                  <a href="collection.html">Inventory</a>
                </h3>
                <span class="collection__number">ERC-1155</span>
              </div>
            </div>

            <div class="collection">
              <a
                href="collection.html"
                class="collection__cover"
                data-bg="img/bg/bg-small4.png"
              ></a>
              <div class="collection__meta">
                <a href="author.html" class="collection__avatar">
                  <img src="img/avatars/avatar15.jpg" alt="" />
                </a>
                <h3 class="collection__name">
                  <a href="collection.html">ProphecyNFT</a>
                </h3>
                <span class="collection__number">ERC-721</span>
              </div>
            </div>

            <div class="collection">
              <a
                href="collection.html"
                class="collection__cover"
                data-bg="img/bg/bg-small5.png"
              ></a>
              <div class="collection__meta">
                <a
                  href="author.html"
                  class="collection__avatar collection__avatar--verified"
                >
                  <img src="img/avatars/avatar4.jpg" alt="" />
                </a>
                <h3 class="collection__name">
                  <a href="collection.html">Hashavatars</a>
                </h3>
                <span class="collection__number">ERC-1155</span>
              </div>
            </div>

            <div class="collection">
              <a
                href="collection.html"
                class="collection__cover"
                data-bg="img/bg/bg-small6.png"
              ></a>
              <div class="collection__meta">
                <a href="author.html" class="collection__avatar">
                  <img src="img/avatars/avatar11.jpg" alt="" />
                </a>
                <h3 class="collection__name">
                  <a href="collection.html">Clap Token</a>
                </h3>
                <span class="collection__number">ERC-1155</span>
              </div>
            </div>

            <div class="collection">
              <a href="collection.html" class="collection__cover"></a>
              <div class="collection__meta">
                <a
                  href="author.html"
                  class="collection__avatar collection__avatar--verified"
                >
                  <img src="img/avatars/avatar15.jpg" alt="" />
                </a>
                <h3 class="collection__name">
                  <a href="collection.html">InventoryNFT</a>
                </h3>
                <span class="collection__number">ERC-721</span>
              </div>
            </div>
          </div>

          <button
            class="main__nav main__nav--prev"
            data-nav="#collections"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
            </svg>
          </button>
          <button
            class="main__nav main__nav--next"
            data-nav="#collections"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Collections;
