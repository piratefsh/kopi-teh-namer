import React from 'react';
import PropTypes from 'prop-types';

function DrinkDisplayPart(props) {
  return (<div className="part">
    <div>{props.part.label || <div className="default"><br /></div>}</div>
    <div>{props.part.definition || <br />}</div>
  </div>);
}

function DrinkDisplay(props) {
  return (
    <header>
      <div className="container">
        <div>{
          props.drink
            .parts
            .map((part, i) => (<DrinkDisplayPart
              key={i}
              part={part}
            />))
        }</div>
      </div>
    </header>
  );
}

DrinkDisplay.propTypes = {
  drink: PropTypes.object.isRequired,
};

DrinkDisplayPart.propTypes = {
  part: PropTypes.object.isRequired,
};

export default DrinkDisplay;
