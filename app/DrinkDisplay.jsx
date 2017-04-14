import React from 'react';

function DrinkDisplay(props) {
  return (
    <header>
      <div className="container">
        <h1>{props.drink.toString()}</h1>
        <p>{props.drink.toCasualDefinition()}</p>
      </div>
    </header>
  );
}

export default DrinkDisplay;
