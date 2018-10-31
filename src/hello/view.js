import React from 'react';
import HomeButton from '../common/HomeButton';
import './styles.css';

const Hello = ({ name, updateName }) => (
    <div id="hello">
        <HomeButton />
        <h2>Hello{name ? `, ${name}!` : ''}</h2>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" autoComplete="off" onChange={(event) => { updateName(event.target.value); }} />
    </div>
);

export default Hello;