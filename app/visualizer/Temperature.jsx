import iceUrl from 'images/Liquid_Temperature_Iced.svg';

import React from 'react';
import PropTypes from 'prop-types';
import Utils from 'Utils';

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.makeStyle(props)
    };
  }

  makeStyle(props=this.props){
    console.log(props.temperature)
    if(props.temperature == 'hot'){
      return {
        backgroundImage: `url(${iceUrl})`,
        width: '30px',
        height: '15px',
        display: 'block',
        marginTop: '10px',
        backgroundSize: 'contain'
      }
    }

    else if (props.temperature == 'cold'){
      return {
        backgroundImage: `url(${iceUrl})`,
        width: '30px',
        height: '15px',
        display: 'block',
        marginTop: '10px',
        backgroundSize: 'contain'
      }
    }
  }

  render(){
    return <div className='temperature'>
      <span style={this.makeStyle()} />
    </div>
  }
}

export default Temperature;