import React from 'react';
import PropTypes from 'prop-types';

function DrinkDisplayPart(props) {
  if (props.hideDefault && !props.part.label) {
    return null;
  }
  return (<div className="part">
    <div>{props.part.label || <div className="default"><br /></div>}</div>
    <div>{props.part.definition || <br />}</div>

    <div className="part-type">
    <span><strong>{props.part.type}</strong></span>
    </div>
  </div>);
}

class DrinkDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideDefaults: true,
    };

    this.onShowDefaultChange = this.onShowDefaultChange.bind(this);
  }

  onShowDefaultChange(e) {
    this.setState({
      hideDefaults: e.target.checked,
    });
  }

  render() {
    return (
      <header>
        <div className="container">
          <div>{
          this.props.drink
            .parts
            .map((part, i) => (<DrinkDisplayPart
              key={i}
              part={part}
              hideDefault={this.state.hideDefaults}
            />))
        }</div>

          <span className="fieldset-sm hide-defaults">
            <input
              type="checkbox"
              checked={this.state.hideDefaults ? 'checked' : ''}
              onChange={this.onShowDefaultChange}
            /><label>Hide defaults</label>
          </span>
        </div>
      </header>
    );
  }
}

DrinkDisplay.propTypes = {
  drink: PropTypes.object.isRequired,
};

DrinkDisplayPart.propTypes = {
  part: PropTypes.object.isRequired,
  hideDefault: PropTypes.bool.isRequired,
};

export default DrinkDisplay;
