import React from 'react';
import cx from 'classnames';

function Home({ variant, title, subtitle}) {
  return (
    <div class="home">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div
              class={cx('home__content', {
                'home__content--center': variant === 'center',
              })}
            >
              <h1 class="home__title">{title}</h1>
              <p class="home__text">
                {subtitle}
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
