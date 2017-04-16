import React from 'react';
import PropTypes from 'prop-types';
import backgroundUrl from 'images/liquid-bg-nopadding.svg';
import PropertyConstants from 'constants/PropertyConstants';
import Liquid from './parts/Liquid';
import glassCupUrl from 'images/Drink_Hot_HavingHere.svg';
import takeAwayCupUrl from 'images/Drink_Iced_Takeaway.svg';

class DrinkVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        width: '90px',
        opacity: 1,
        position: 'relative',
        bottom: 0,
        zIndex: 1,
      },
    };
  }

  getLiquids() {
    let prevHeight = 0;
    const WEIGHTS = [1, 2, 2.5, 1];
    const HEIGHT_UNIT = 10;
    const scale = 0.7;
    return ['sweetness', 'milk', 'base', 'dilution'].map((part, i) => {
      const maxHeight = WEIGHTS[i] * HEIGHT_UNIT;
      const sizes = PropertyConstants.SIZES[part];
      const height = sizes[this.props.drink.partsById[part].id] / Math.max(...sizes) * maxHeight;
      const liquid = (<Liquid
        scale={scale}
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
    const cup = [glassCupUrl, takeAwayCupUrl][this.props.drink.partsById.togo.id];

    return (<div className={this.props.className}>
      <div
        className="liquid-container" >
        <img
          src={cup}
          style={this.state.style}
          className={this.props.className}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            transform: 'perspective(120px) rotateX(-40deg) ',
          }}
        >
          {this.getLiquids()}
        </div>
      </div>
    </div>);
  }
}

export default DrinkVisualizer;
