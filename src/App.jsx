/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Kumara from './components/kumara/Kumara';
import HomeButton from './components/kumara/HomeButton';
import Home from './pages/Home/Home';
import './App.css';

/**
 * API URLs for reference
 */
const SEARCH_URL = 'https://api.themoviedb.org/3/search/multi';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'; // api key not required
console.log(SEARCH_URL, IMAGE_URL);

function App() {
  return (
    <div className="App">
      <Router>
        <nav id="kumara-navbar" className="navbar navbar-dark bg-dark">
          <Kumara />
          <HomeButton />
        </nav>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
