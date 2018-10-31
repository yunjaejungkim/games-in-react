import React from 'react';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Store from './store';
import './App.css';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
    loader: () => import('./home/main'),
    loading: Loading,
});

const Hello = Loadable({
    loader: () => import('./hello/main'),
    loading: Loading,
});

const Arithmetic = Loadable({
    loader: () => import('./arithmetic/main'),
    loading: Loading,
});

const App = () => (
    <Provider store={Store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/hello" component={Hello}/>
                <Route path="/arithmetic" component={Arithmetic}/>
            </Switch>
        </Router>
    </Provider>
);

export default App;
