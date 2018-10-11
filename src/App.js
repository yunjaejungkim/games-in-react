import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Route exact path="/games-in-react" component={Home}/>
      <Route path="/games-in-react/hello" component={Hello}/>
    </Switch>
  </Router>
)

export default App;
