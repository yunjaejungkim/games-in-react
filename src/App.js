import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routes/Home'),
  loading: Loading,
});

const Hello = Loadable({
  loader: () => import('./routes/games/Hello'),
  loading: Loading,
});

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/hello" component={Hello}/>
    </Switch>
  </Router>
)

export default App;
