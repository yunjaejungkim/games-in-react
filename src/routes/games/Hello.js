import React from 'react';
import { Link } from 'react-router-dom';
import './Hello.css';

const Hello = ({ name, updateName }) => (
    <div id="hello">
        <div class="home"><Link to ="/">Home</Link></div>
        <h2>Hello{name ? `, ${name}!` : ''}</h2>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" autoComplete="off" onChange={(event) => { updateName(event.target.value); }} />
    </div>
);

export default Hello;