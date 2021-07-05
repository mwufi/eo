import React from 'react';

import TopSellers from '../components/TopSellers';
import Home from '../components/Home';
import Modal from '../components/Modal';
import Explore from '../components/Explore';
import Collections from '../components/Collections';
import GettingStarted from '../components/GettingStarted';

import Carousel from '../components/Carousel';
import Section from '../components/Section';

const variants = [
  {
    title: () => (
      <>
        The first <br />
        <span>
          <b> author-created NFT</b>
        </span>
        <br />
        universe
      </>
    ),
  },
  {
    variant: 'center',
    title: () => (
      <>
        Discover, collect, and sell <br />
        <span>
          <b> author-created </b>
        </span>
        NFTs
      </>
    ),
  },
];

function HomePage() {
  const idx = 0;
  return (
    <main class="main">
      <Home
        title={variants[idx].title()}
        variant={variants[idx].variant}
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
