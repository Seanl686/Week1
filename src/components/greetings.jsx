import React from 'react';

// TODO: Update this component to utilize the variable passed to it!

export function Greeting({ name }) {

    return (
        <div className='greeting'>
            <h1>Hello, {name}!</h1>
            <button onClick={() => alert(`Hello World!`)}>Yo, {name}!</button>
        </div>
    );
}