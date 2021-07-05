import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Home from './components/Home';
import LiveAuctions from './components/LiveAuctions';
import TopSellers from './components/TopSellers';
import Explore from './components/Explore';

import './App.css';

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
    <div className="App">
      <Header />
      <main class="main">
        <Home />
        <div class="container">
          <LiveAuctions />
          <TopSellers />
          <Explore />
        </div>
      </main>
    </div>
  );
}

export default App;
