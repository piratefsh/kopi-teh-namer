import React from 'react';
import PropTypes from 'prop-types';
import backgroundUrl from 'images/liquid-bg-nopadding.svg';
import PropertyConstants from 'constants/PropertyConstants';
import Liquid from './parts/Liquid';
import Temperature from './parts/Temperature';
import TakeAway from './parts/TakeAway';
import NumOrder from './parts/NumOrder';

class PropertyVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        width: '35px',
      },
      color: this.getColor(props.selected),
    };
  }

  getColor() {
    const colors = PropertyConstants.COLORS[this.props.label];
    if (colors === undefined) {
      return null;
    }

    return colors[parseInt(this.props.selected, 10)];
  }

  getSize() {
    const sizes = PropertyConstants.SIZES[this.props.label];
    if (sizes === undefined) {
      return null;
    }
    return sizes[this.props.selected];
  }

  isLiquid() {
    return ['base', 'milk', 'dilution', 'sweetness'].indexOf(this.props.label) > -1;
  }

  isTemperature() {
    return this.props.label === 'temperature';
  }

  isNumOrder() {
    return this.props.label === 'order';
  }

  isTogo() {
    return this.props.label === 'togo';
  }

  getVisualType() {
    if (this.isLiquid()) {
      return (<Liquid
        color={this.getColor()}
        size={this.getSize()}
      />);
    } else if (this.isTemperature()) {
      const temp = PropertyConstants.TEMPS[this.props.selected];
      return (<Temperature
        temperature={temp}
      />);
    } else if (this.isNumOrder()) {
      return (<NumOrder
        numOrder={PropertyConstants.ORDER[this.props.selected]}
      />);
    } else if (this.isTogo()) {
      return (<TakeAway
        takeaway={PropertyConstants.TOGO[this.props.selected]}
      />);
    }
    return null;
  }

  render() {
    return (
      <div className="liquid-container">
        {this.getVisualType()}<img
          src={backgroundUrl}
          style={this.state.style}
          className={this.props.className}
        />
      </div>
    );
  }
}

export default PropertyVisualizer;

PropertyVisualizer.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  selected: PropTypes.any.isRequired,
};
