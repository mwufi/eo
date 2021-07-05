import React from 'react';

function Home() {
  return (
    <div class="home">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="home__content">
              <h1 class="home__title">The largest NFT marketplace</h1>
              <p class="home__text">
                Digital marketplace for crypto collectibles and non-fungible
                tokens. <br />
                Buy, sell, and discover exclusive digital assets.
              </p>

              <div class="home__btns">
                <a href="explore.html" class="home__btn home__btn--clr">
                  Explore
                </a>
                <a href="signin.html" class="home__btn">
                  Create
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
