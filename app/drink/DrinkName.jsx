import React from 'react';
import PropTypes from 'prop-types';

function DrinkDisplayPart(props) {
  if (props.hideDefault && !props.part.label) {
    return null;
  }
  return (<div className="part" tabIndex="0">
    <div>{props.part.label || <div className="default"><br /></div>}</div>
    <div>{props.part.definition || <br />}</div>

    <div className="part-type">
    <span><strong>{props.part.type}</strong></span>
    </div>
  </div>);
}

function DrinkName(props){
  return (
    <div className='drink-name'>
      <div className='inline-block'>
      {
        props.drink
          .parts
          .map((part, i) => (<DrinkDisplayPart
            key={i}
            part={part}
            hideDefault={props.hideDefaults}
          />))
      }
      </div>
    </div>)
}

export default DrinkName;

DrinkDisplayPart.propTypes = {
  part: PropTypes.object.isRequired,
  hideDefault: PropTypes.bool.isRequired,
};
