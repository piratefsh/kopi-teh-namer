import React from 'react';
import PropTypes from 'prop-types';
import backgroundUrl from 'images/liquid-bg-nopadding.svg';
import PropertyConstants from 'constants/PropertyConstants';
import Liquid from './parts/Liquid';
import Temperature from './parts/Temperature';
import glassCupUrl from 'images/Drink_Hot_HavingHere.svg';
import takeAwayColdUrl from 'images/Drink_Iced_Takeaway.svg';
import takeAwayHotUrl from 'images/Drink_Hot_Takeaway.svg';

class DrinkVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        width: '89px',
        opacity: 1,
        position: 'relative',
        bottom: 0,
        zIndex: 1,
      },
    };
  }

  getLiquids() {
    let prevHeight = 6;
    const drink = this.props.drink;
    const scale = 0.7;
    const WEIGHTS = [1, 1.8, 3, 0.8];
    const LIQUIDS = ['sweetness', 'milk', 'base', 'dilution'];
    const heightUnit = drink.isTall() ? 13 : 10;


    return LIQUIDS.map((part, i) => {
      const maxHeight = WEIGHTS[i] * heightUnit;
      const sizes = PropertyConstants.SIZES[part];
      const height = sizes[drink.get(part).id] / Math.max(...sizes) * maxHeight;
      const liquid = (<Liquid
        scale={scale}
        key={i}
        color={
              PropertyConstants.COLORS[part][drink.get(part).id]}
        size={height}
        offsetBottom={prevHeight}
      />);
      prevHeight = height + prevHeight;
      this.state.liquidHeight = prevHeight;
      return liquid;
    });
  }

  getCup(){
    if(this.props.drink.isCold()){
      return takeAwayColdUrl
    }
    else{
      if(this.props.drink.isTakeAway()){
        return takeAwayHotUrl
      }
      return glassCupUrl
    }
  }
  render() {
    const cup = this.getCup();
    const temp = PropertyConstants.TEMPS[this.props.drink.get('temperature').id];

    return (<div className={this.props.className}>
      <div
        className="liquid-container"
      >
        <img
          src={cup}
          style={this.state.style}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            transform: 'perspective(120px) rotateX(-36deg) ',
          }}
        >
          {this.getLiquids()}
        </div>
      </div>
      <div
        className="pos-relative"
        style={{
          zIndex: 3,
        }}
      >
        <Temperature
          temperature={temp}
          width={50}
          height={25}
          offsetTop={-this.state.liquidHeight - 25/2}
        />
      </div>
    </div>);
  }
}

export default DrinkVisualizer;
