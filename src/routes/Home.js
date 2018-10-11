import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ match }) => (
    <div className="home">
        <header className="home-header">
        Games in React
        <Link className="game-link" to ="/hello">Hello</Link>
        </header>
    </div>
);

export default Home;