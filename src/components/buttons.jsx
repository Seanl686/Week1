import React from 'react';

function Button({ name }) {
  return (
    <button onClick={() => alert(`Hello, ${name}!`)}>Yo, {name}!</button>
  );
}

export default Button;