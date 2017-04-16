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
    return(<div className='inline-block'>
      <div className='liquid-container' style={{
        transform: 'scale(1.75)',
        marginRight: '32px'
      }}>
        <div style={{
          transform: 'translateY(50px) perspective(120px) rotateX(-40deg) ',
        }}>
          <Liquid
            color={PropertyConstants.COLORS.sweetness[3]}
            size={5}
            offsetBottom={0}
          />
          <Liquid
            color={PropertyConstants.COLORS.milk[1]}
            size={10}
            offsetBottom={5}
          />
          <Liquid
            color={PropertyConstants.COLORS.base[0]}
            offsetBottom={10}
            size={25}
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