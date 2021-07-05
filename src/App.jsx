import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import CreatePage from './pages/CreatePage';
import AuthorPage from './pages/AuthorPage';
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
          <Route path="/author.html">
            <AuthorPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
