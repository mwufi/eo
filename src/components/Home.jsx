import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

function Home({ variant, title, subtitle }) {
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
              <p class="home__text">{subtitle}</p>

              <div class="home__btns">
                <a href="explore.html" class="home__btn home__btn--clr">
                  Explore
                </a>
                <Link to="create.html" class="home__btn">
                  Create
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
