import React from 'react';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HelloStore from './redux/hello/store';
import './App.css';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routes/Home'),
  loading: Loading,
});

const Hello = Loadable({
  loader: () => import('./routes/games/HelloContainer'),
  loading: Loading,
});

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Provider store={HelloStore}>
        <Route path="/hello" component={Hello}/>
      </Provider>
    </Switch>
  </Router>
)

export default App;
