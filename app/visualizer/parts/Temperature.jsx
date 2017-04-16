import iceUrl from 'images/Liquid_Temperature_Iced.svg';
import steamUrl from 'images/hot-steam.svg';
import React from 'react';
import PropTypes from 'prop-types';

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.makeStyle(props),
    };
  }

  makeStyle(props = this.props) {
    const common = {
      width: `${props.width}px`,
      height: `${props.height}px`,
      display: 'block',
      left: '50%',
      transform: 'translateX(-50%)',
      position: 'relative',
      backgroundSize: 'contain',
    };

    let temp = {};

    if (props.temperature === 'hot') {
      temp = {
        backgroundImage: `url(${steamUrl})`,
        marginTop: '-16px',
      };
    } else if (props.temperature === 'cold') {
      temp = {
        backgroundImage: `url(${iceUrl})`,
        marginTop: '6px',
      };
    }
    return Object.assign(temp, common);
  }

  render() {
    return (<div className="temperature"
      style={{
        marginTop: `${this.props.offsetTop}px`,
        width: '100%'
      }}>
      <span style={this.makeStyle()} />
    </div>);
  }
}

Temperature.defaultProps = {
  width: 30,
  height: 15,
  offsetTop: 0,
};

export default Temperature;
