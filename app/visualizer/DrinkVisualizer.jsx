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

  render(){
    console.log(this.props.drink.partsById)
    return(<div className='inline-block'>
      <div className='liquid-container' style={{
        transform: 'scale(1.75)',
        marginRight: '32px'
      }}>
        <div style={{
          transform: 'translateY(50px) perspective(120px) rotateX(-40deg) ',
        }}>
          <Liquid
            color={PropertyConstants.COLORS.sweetness[this.props.drink.partsById.sweetness.id]}
            size={5}
            offsetBottom={0}
          />
          <Liquid
            color={PropertyConstants.COLORS.milk[this.props.drink.partsById.milk.id]}
            size={10}
            offsetBottom={5}
          />

          <Liquid
            color={PropertyConstants.COLORS.base[this.props.drink.partsById.base.id]}
            offsetBottom={10}
            size={16}
          />
           <Liquid
            color={PropertyConstants.COLORS.dilution[this.props.drink.partsById.dilution.id]}
            offsetBottom={30}
            size={5}
          />
        </div>
        <img
          src={backgroundUrl}
          style={this.state.style}
          className={this.props.className}
        />
      </div>
    </div>)
  }
}

export default DrinkVisualizer;