import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Home from './Home';
import Navbar from './Navbar';
import SearchContainer from '../containers/SearchContainer';
import SearchListContainer from '../containers/SearchListContainer';
import TopChartsContainer from '../containers/TopChartsContainer';
import PodcastContainer from '../containers/PodcastContainer';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(30, 30, 30);
    font-family: 'Roboto', sans-serif;
    color: rgb(255, 255, 255);
  }
`;

const App = () => (
  <Router>
    <GlobalStyle />
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    <Switch>
      <Route path="/search" component={SearchContainer} />
    </Switch>
    <Switch>
      <Route path="/top-charts" component={TopChartsContainer} />
    </Switch>
    <Switch>
      <Route path="/podcast" component={PodcastContainer} />
    </Switch>
  </Router>
);

export default App;
