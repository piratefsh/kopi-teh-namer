import iceUrl from 'images/Liquid_Temperature_Iced.svg';
import steamUrl from 'images/hot-steam.svg';
import React from 'react';
import PropTypes from 'prop-types';
import Utils from 'Utils';

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.makeStyle(props),
    };
  }

  makeStyle(props = this.props) {
    if (props.temperature == 'hot') {
      return {
        backgroundImage: `url(${steamUrl})`,
        width: '30px',
        height: '15px',
        display: 'block',
        marginTop: '-16px',
        backgroundSize: 'contain',
      };
    } else if (props.temperature == 'cold') {
      return {
        backgroundImage: `url(${iceUrl})`,
        width: '30px',
        height: '15px',
        marginTop: '6px',
        display: 'block',
        backgroundSize: 'contain',
      };
    }

    return {};
  }

  render() {
    return (<div className="temperature">
      <span style={this.makeStyle()} />
    </div>);
  }
}

export default Temperature;
