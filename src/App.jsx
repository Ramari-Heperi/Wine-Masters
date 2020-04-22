import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import PropsPage from './topics/1-props/PropsPage';
import ArrayPage from './topics/2-arrays/ArrayPage';
import ChildrenPage from './topics/3-children/ChildrenPage';
import StatePage from './topics/4-state/StatePage';
import FormsPage from './topics/5-forms/FormsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/props">
            <PropsPage />
          </Route>
          <Route path="/arrays">
            <ArrayPage />
          </Route>
          <Route path="/children">
            <ChildrenPage />
          </Route>
          <Route path="/state">
            <StatePage />
          </Route>
          <Route path="/forms">
            <FormsPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
