import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Home from './components/Home';
import LiveAuctions from './components/LiveAuctions';
import TopSellers from './components/TopSellers';
import Explore from './components/Explore';
import Collections from './components/Collections';
import GettingStarted from './components/GettingStarted';
import Footer from './components/Footer';
import Modal from './components/Modal';

// second page
import ExpandedExplore from './components/ExpandedExplore';

// author page
import ProfileTabs from './components/ProfileTabs';
import Tabs from './components/Tabs';
import Author from './components/Author';

// create page
import CreatePage from './pages/CreatePage';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
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
                <LiveAuctions />
              </div>
            </main>
          </Route>
          <Route path="/author.html">
            <main class="main">
              <div class="main__author" data-bg="img/bg/bg.jpeg"></div>
              <div class="container">
                <div class="row row--grid">
                  <div class="col-12 col-xl-3">
                    <Author />
                  </div>
                  <div class="col-12 col-xl-9">
                    <ProfileTabs />
                    <Tabs />
                  </div>
                </div>
              </div>
            </main>
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
                <LiveAuctions />
                <TopSellers />
                <Explore />
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
