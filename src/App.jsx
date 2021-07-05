import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Carousel from './components/Carousel';
import TopSellers from './components/TopSellers';
import Explore from './components/Explore';
import Collections from './components/Collections';
import GettingStarted from './components/GettingStarted';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Section from './components/Section';

// second page
import ExpandedExplore from './components/ExpandedExplore';

// create page
import CreatePage from './pages/CreatePage';
import AuthorPage from './pages/AuthorPage';
import ItemPage from './pages/ItemPage';
import CollectionPage from './pages/CollectionPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/collection.html">
            <CollectionPage />
          </Route>
          <Route path="/item.html">
            <ItemPage />
          </Route>
          <Route path="/create.html">
            <CreatePage />
          </Route>
          <Route path="/index2.html">
            <main class="main">
              <Home
                variant="center"
                title={
                  <>
                    Discover, collect, and sell <br />
                    extraordinary
                    <span>
                      <b> NFTs</b>
                    </span>
                  </>
                }
                subtitle={
                  'Digital marketplace for crypto collectibles and non-fungible tokens.'
                }
              />
              <div class="container">
                <ExpandedExplore />
                <Section title="Live Auctions">
                  <Carousel />
                </Section>
              </div>
            </main>
          </Route>
          <Route path="/author.html">
            <AuthorPage />
          </Route>
          <Route path="/">
            <main class="main">
              <Home
                title="The Largest NFT Marketplace"
                subtitle={
                  <>
                    Digital marketplace for crypto collectibles and non-fungible
                    tokens. <br />
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
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
