import React from 'react';

import TopSellers from './components/TopSellers';
import Explore from './components/Explore';
import Collections from './components/Collections';
import GettingStarted from './components/GettingStarted';

import Carousel from './components/Carousel';
import Section from './components/Section';


function HomePage() {
  return (
    <main class="main">
      <Home
        title={
          <>
            The first <br />
            <span>
              <b> author-created NFT</b>
            </span>
            <br />
            universe
          </>
        }
        subtitle={
          <>
            Digital marketplace for writers, fans, and creators. <br />
            Buy, sell, and discover exclusive digital assets.
          </>
        }
      />
      <div class="container">
        <Section title="Live Auctions">
          <Carousel id="live" />
        </Section>
        <TopSellers />

        <Section title="Explore">
          <Explore />
        </Section>

        <Collections />
        <GettingStarted />
        <Modal />
      </div>
    </main>
  );
}

export default HomePage;
