import React from 'react';

const Hello = ({ name, updateName }) => (
    <div>
        <h2>Hello{name ? `, ${name}!` : ''}</h2>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" onChange={(event) => { updateName(event.target.value); }} />
    </div>
);

export default Hello;