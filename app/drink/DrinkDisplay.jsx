import React from 'react';
import PropTypes from 'prop-types';
import DrinkVisualizer from 'visualizer/DrinkVisualizer';
import DrinkName from './DrinkName';
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
          <DrinkVisualizer className='drink' {...this.props}/>
          <DrinkName {...this.props} hideDefaults={this.state.hideDefaults}/>

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

export default DrinkDisplay;
