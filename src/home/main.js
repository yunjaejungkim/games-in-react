import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => (
    <div className="home">
        <header className="home-header">
        Games in React
        <Link className="game-link" to ="/hello">Hello</Link>
            <Link className="game-link" to ="/arithmetic">Arithmetic</Link>
        </header>
    </div>
);

export default Home;