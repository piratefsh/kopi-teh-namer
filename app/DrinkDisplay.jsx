import React from 'react';
import PropTypes from 'prop-types';

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

DrinkDisplay.propTypes = {
  drink: PropTypes.object.isRequired,
};

export default DrinkDisplay;
