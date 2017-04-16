import React from 'react';
import PropTypes from 'prop-types';
import backgroundUrl from 'images/liquid-bg-nopadding.svg';
import PropertyConstants from 'constants/PropertyConstants';
import Liquid from './parts/Liquid';

class DrinkVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        width: '35px',
      },
    };
  }

  getLiquids() {
    let prevHeight = 0;
    const WEIGHTS = [1, 2, 2.5, 1];
    const HEIGHT_UNIT = 6;
    return ['sweetness', 'milk', 'base', 'dilution'].map((part, i) => {
      const maxHeight = WEIGHTS[i] * HEIGHT_UNIT;
      const sizes = PropertyConstants.SIZES[part];
      const height = sizes[this.props.drink.partsById[part].id] / Math.max(...sizes) * maxHeight;
      const liquid = (<Liquid
        key={i}
        color={
              PropertyConstants.COLORS[part][this.props.drink.partsById[part].id]}
        size={height}
        offsetBottom={prevHeight}
      />);
      prevHeight = height + prevHeight;
      return liquid;
    });
  }
  render() {
    console.log(this.props.drink.partsById);
    return (<div className="inline-block">
      <div
        className="liquid-container" style={{
          transform: 'scale(1.75)',
          marginRight: '32px',
          marginTop: '16px'
        }}
      >
        <div
          style={{
            transform: 'translateY(50px) perspective(120px) rotateX(-40deg) ',
          }}
        >
          {this.getLiquids()}
        </div>
        <img
          src={backgroundUrl}
          style={this.state.style}
          className={this.props.className}
        />
      </div>
    </div>);
  }
}

export default DrinkVisualizer;
