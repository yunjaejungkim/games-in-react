import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
              <header className="home-header">
                Games in React
                <Link to ="/hello">Hello</Link>
              </header>
            </div>
        );
    }
}

export default Home;