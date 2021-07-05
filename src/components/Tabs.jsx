import React from 'react';
import CarouselCard from './CarouselCard';
import Card from './Card';
import { cards } from '../data/cards';

function Tabs() {
  return (
    <div class="tab-content">
      <div class="tab-pane fade show active" id="tab-1" role="tabpanel">
        <div class="row row--grid">
          {cards.map((props) => (
            <div class="col-12 col-sm-6 col-lg-4">
              <Card {...props} />
            </div>
          ))}

          <div class="col-12 col-sm-6 col-lg-4">
            <CarouselCard />
          </div>
        </div>

        <div class="row row--grid collapse" id="collapsemore">
          {cards.map((props) => (
            <div class="col-12 col-sm-6 col-lg-4">
              <Card {...props} />
            </div>
          ))}
        </div>

        <div class="row row--grid">
          <div class="col-12">
            <button
              class="main__load"
              type="button"
              data-toggle="collapse"
              data-target="#collapsemore"
              aria-expanded="false"
              aria-controls="collapsemore"
            >
              Load more
            </button>
          </div>
        </div>
      </div>

      <div class="tab-pane fade" id="tab-2" role="tabpanel">
        <div class="row row--grid">
          {cards.map((props) => (
            <div class="col-12 col-sm-6 col-lg-4">
              <Card {...props} wasSoldFor={true} />
            </div>
          ))}
        </div>

        <div class="row row--grid">
          <div class="col-12">
            <div class="paginator">
              <span class="paginator__pages">8 from 169</span>

              <ul class="paginator__list">
                <li>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
                    </svg>
                  </a>
                </li>
                <li class="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="tab-pane fade" id="tab-3" role="tabpanel">
        <div class="row">
          <div class="col-12 col-xl-4 order-xl-2">
            <div class="filter-wrap">
              <button
                class="filter-wrap__btn"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFilter"
                aria-expanded="false"
                aria-controls="collapseFilter"
              >
                Open filter
              </button>

              <div class="collapse filter-wrap__content" id="collapseFilter">
                <div class="filter filter--sticky">
                  <h4 class="filter__title">
                    Filters <button type="button">Clear all</button>
                  </h4>

                  <div class="filter__group">
                    <ul class="filter__checkboxes">
                      <li>
                        <input
                          id="type5"
                          type="checkbox"
                          name="type5"
                          checked=""
                        />
                        <label for="type5">Listings</label>
                      </li>
                      <li>
                        <input id="type6" type="checkbox" name="type6" />
                        <label for="type6">Purchases</label>
                      </li>
                      <li>
                        <input
                          id="type7"
                          type="checkbox"
                          name="type7"
                          checked=""
                        />
                        <label for="type7">Sales</label>
                      </li>
                      <li>
                        <input
                          id="type8"
                          type="checkbox"
                          name="type8"
                          checked=""
                        />
                        <label for="type8">Transfers</label>
                      </li>
                      <li>
                        <input id="type9" type="checkbox" name="type9" />
                        <label for="type9">Bids</label>
                      </li>
                      <li>
                        <input id="type10" type="checkbox" name="type10" />
                        <label for="type10">Likes</label>
                      </li>
                      <li>
                        <input id="type11" type="checkbox" name="type11" />
                        <label for="type11">Followings</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-xl-8 order-xl-1">
            <div class="row row--grid">
              <div class="col-12 col-lg-6 col-xl-12">
                <div class="activity">
                  <a href="item.html" class="activity__cover">
                    <img src="img/cover/cover1.jpeg" alt="" />
                  </a>
                  <div class="activity__content">
                    <h3 class="activity__title">
                      <a href="item.html">Walking on Air</a>
                    </h3>
                    <p class="activity__text">
                      listed by <a href="author.html">@Nickname</a>
                      <br />
                      for <b>0.049 ETH</b>
                    </p>
                    <span class="activity__time">4 minutes ago</span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-6 col-xl-12">
                <div class="activity">
                  <a href="item.html" class="activity__cover">
                    <img src="img/cover/cover2.jpeg" alt="" />
                  </a>
                  <div class="activity__content">
                    <h3 class="activity__title">
                      <a href="item.html">To Infinity And Beyond</a>
                    </h3>
                    <p class="activity__text">
                      9 editions listed by
                      <a href="author.html">@neo</a> <br />
                      for
                      <b>0.085 ETH</b> each
                    </p>
                    <span class="activity__time">21 minutes ago</span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-6 col-xl-12">
                <div class="activity">
                  <a href="item.html" class="activity__cover">
                    <img src="img/cover/cover3.jpeg" alt="" />
                  </a>
                  <div class="activity__content">
                    <h3 class="activity__title">
                      <a href="item.html">Flowers in Concrete</a>
                    </h3>
                    <p class="activity__text">
                      purchased by <a href="author.html">@johndoe</a>
                      <b>0x23d2dc92b...82c6</b> for
                      <b>0.011 ETH</b> from
                      <a href="author.html">@min1max</a>
                    </p>
                    <span class="activity__time">21 minutes ago</span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-6 col-xl-12">
                <div class="activity">
                  <a href="item.html" class="activity__cover">
                    <img src="img/cover/cover4.jpg" alt="" />
                  </a>
                  <div class="activity__content">
                    <h3 class="activity__title">
                      <a href="item.html">Industrial Revolution</a>
                    </h3>
                    <p class="activity__text">
                      transferred from
                      <a href="author.html">@midinh</a> <br />
                      to
                      <a href="author.html">@johndoe</a>
                    </p>
                    <span class="activity__time">23 minutes ago</span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-6 col-xl-12">
                <div class="activity">
                  <a href="item.html" class="activity__cover">
                    <img src="img/cover/cover5.jpg" alt="" />
                  </a>
                  <div class="activity__content">
                    <h3 class="activity__title">
                      <a href="item.html">Tranquility</a>
                    </h3>
                    <p class="activity__text">
                      <a href="author.html">@aaarthur</a> offered
                      <b>0.002 WETH</b>
                    </p>
                    <span class="activity__time">41 minutes ago</span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-6 col-xl-12">
                <div class="activity">
                  <a href="item.html" class="activity__cover">
                    <img src="img/cover/cover6.jpg" alt="" />
                  </a>
                  <div class="activity__content">
                    <h3 class="activity__title">
                      <a href="item.html">Tetradecapus</a>
                    </h3>
                    <p class="activity__text">
                      liked by <a href="author.html">@johndoe</a>
                    </p>
                    <span class="activity__time">45 minutes ago</span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-6 col-xl-12">
                <div class="activity">
                  <a href="item.html" class="activity__cover">
                    <img src="img/cover/cover7.jpg" alt="" />
                  </a>
                  <div class="activity__content">
                    <h3 class="activity__title">
                      <a href="item.html">Elegance</a>
                    </h3>
                    <p class="activity__text">
                      started following
                      <a href="author.html">@johndoe</a>
                    </p>
                    <span class="activity__time">48 minutes ago</span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-6 col-xl-12">
                <div class="activity">
                  <a href="item.html" class="activity__cover">
                    <img src="img/cover/cover8.jpg" alt="" />
                  </a>
                  <div class="activity__content">
                    <h3 class="activity__title">
                      <a href="item.html">Walking on Air</a>
                    </h3>
                    <p class="activity__text">
                      started following
                      <a href="author.html">@johndoe</a>
                    </p>
                    <span class="activity__time">49 minutes ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row row--grid collapse" id="collapsemore1">
              <div class="col-12 col-lg-6 col-xl-12">
                <div class="activity">
                  <a href="item.html" class="activity__cover">
                    <img src="img/cover/cover1.jpeg" alt="" />
                  </a>
                  <div class="activity__content">
                    <h3 class="activity__title">
                      <a href="item.html">Walking on Air</a>
                    </h3>
                    <p class="activity__text">
                      listed by <a href="author.html">@Nickname</a>
                      <br />
                      for <b>0.049 ETH</b>
                    </p>
                    <span class="activity__time">4 minutes ago</span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-6 col-xl-12">
                <div class="activity">
                  <a href="item.html" class="activity__cover">
                    <img src="img/cover/cover2.jpeg" alt="" />
                  </a>
                  <div class="activity__content">
                    <h3 class="activity__title">
                      <a href="item.html">To Infinity And Beyond</a>
                    </h3>
                    <p class="activity__text">
                      9 editions listed by
                      <a href="author.html">@neo</a> <br />
                      for
                      <b>0.085 ETH</b> each
                    </p>
                    <span class="activity__time">21 minutes ago</span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-6 col-xl-12">
                <div class="activity">
                  <a href="item.html" class="activity__cover">
                    <img src="img/cover/cover3.jpeg" alt="" />
                  </a>
                  <div class="activity__content">
                    <h3 class="activity__title">
                      <a href="item.html">Flowers in Concrete</a>
                    </h3>
                    <p class="activity__text">
                      purchased by <a href="author.html">@johndoe</a>
                      <b>0x23d2dc92b...82c6</b> for
                      <b>0.011 ETH</b> from
                      <a href="author.html">@min1max</a>
                    </p>
                    <span class="activity__time">21 minutes ago</span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-6 col-xl-12">
                <div class="activity">
                  <a href="item.html" class="activity__cover">
                    <img src="img/cover/cover4.jpg" alt="" />
                  </a>
                  <div class="activity__content">
                    <h3 class="activity__title">
                      <a href="item.html">Industrial Revolution</a>
                    </h3>
                    <p class="activity__text">
                      transferred from
                      <a href="author.html">@midinh</a> <br />
                      to
                      <a href="author.html">@johndoe</a>
                    </p>
                    <span class="activity__time">23 minutes ago</span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-6 col-xl-12">
                <div class="activity">
                  <a href="item.html" class="activity__cover">
                    <img src="img/cover/cover5.jpg" alt="" />
                  </a>
                  <div class="activity__content">
                    <h3 class="activity__title">
                      <a href="item.html">Tranquility</a>
                    </h3>
                    <p class="activity__text">
                      <a href="author.html">@aaarthur</a> offered
                      <b>0.002 WETH</b>
                    </p>
                    <span class="activity__time">41 minutes ago</span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-6 col-xl-12">
                <div class="activity">
                  <a href="item.html" class="activity__cover">
                    <img src="img/cover/cover6.jpg" alt="" />
                  </a>
                  <div class="activity__content">
                    <h3 class="activity__title">
                      <a href="item.html">Tetradecapus</a>
                    </h3>
                    <p class="activity__text">
                      liked by <a href="author.html">@johndoe</a>
                    </p>
                    <span class="activity__time">45 minutes ago</span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-6 col-xl-12">
                <div class="activity">
                  <a href="item.html" class="activity__cover">
                    <img src="img/cover/cover7.jpg" alt="" />
                  </a>
                  <div class="activity__content">
                    <h3 class="activity__title">
                      <a href="item.html">Elegance</a>
                    </h3>
                    <p class="activity__text">
                      started following
                      <a href="author.html">@johndoe</a>
                    </p>
                    <span class="activity__time">48 minutes ago</span>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-6 col-xl-12">
                <div class="activity">
                  <a href="item.html" class="activity__cover">
                    <img src="img/cover/cover8.jpg" alt="" />
                  </a>
                  <div class="activity__content">
                    <h3 class="activity__title">
                      <a href="item.html">Walking on Air</a>
                    </h3>
                    <p class="activity__text">
                      started following
                      <a href="author.html">@johndoe</a>
                    </p>
                    <span class="activity__time">49 minutes ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row row--grid">
              <div class="col-12">
                <button
                  class="main__load"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsemore1"
                  aria-expanded="false"
                  aria-controls="collapsemore1"
                >
                  Load more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tab-pane fade" id="tab-4" role="tabpanel">
        <div class="row row--grid">
          <div class="col-12 col-lg-6">
            <form action="#" class="sign__form sign__form--profile">
              <div class="row">
                <div class="col-12">
                  <h4 class="sign__title">Profile details</h4>
                </div>

                <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                  <div class="sign__group">
                    <label class="sign__label" for="username">
                      Login
                    </label>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      class="sign__input"
                      placeholder="User123"
                    />
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                  <div class="sign__group">
                    <label class="sign__label" for="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      name="email"
                      class="sign__input"
                      placeholder="email@email.com"
                    />
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                  <div class="sign__group">
                    <label class="sign__label" for="firstname">
                      First name
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      name="firstname"
                      class="sign__input"
                      placeholder="John"
                    />
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                  <div class="sign__group">
                    <label class="sign__label" for="lastname">
                      Last name
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      name="lastname"
                      class="sign__input"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <button class="sign__btn" type="button">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div class="col-12 col-lg-6">
            <form action="#" class="sign__form sign__form--profile">
              <div class="row">
                <div class="col-12">
                  <h4 class="sign__title">Change password</h4>
                </div>

                <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                  <div class="sign__group">
                    <label class="sign__label" for="oldpass">
                      Old password
                    </label>
                    <input
                      id="oldpass"
                      type="password"
                      name="oldpass"
                      class="sign__input"
                    />
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                  <div class="sign__group">
                    <label class="sign__label" for="newpass">
                      New password
                    </label>
                    <input
                      id="newpass"
                      type="password"
                      name="newpass"
                      class="sign__input"
                    />
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                  <div class="sign__group">
                    <label class="sign__label" for="confirmpass">
                      Confirm new password
                    </label>
                    <input
                      id="confirmpass"
                      type="password"
                      name="confirmpass"
                      class="sign__input"
                    />
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-12 col-xl-6">
                  <div class="sign__group">
                    <label class="sign__label" for="select">
                      Select
                    </label>
                    <select name="select" id="select" class="sign__select">
                      <option value="0">Option</option>
                      <option value="1">Option 2</option>
                      <option value="2">Option 3</option>
                      <option value="3">Option 4</option>
                    </select>
                  </div>
                </div>

                <div class="col-12">
                  <button class="sign__btn" type="button">
                    Change
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
