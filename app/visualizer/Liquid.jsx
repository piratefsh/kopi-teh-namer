import React from 'react';
import PropTypes from 'prop-types';
import Utils from 'Utils';

class Liquid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.makeStyle(props)
    };
  }

  componentWillReceiveProps(nextProps){
    this.state = {
      style: this.makeStyle(nextProps),
    };
  }

  getTopWidth(height=0, maxHeight=30){
    const n = 24 + 6 * (height/maxHeight)
    return `${n}px`
  }
  makeStyle(props){
    if(!props.color){
      return {
        top: {},
        middle: {},
        bottom: {},
      }
    }

    const color = Utils.hslCSS(props.color);
    return {
      top: {
        position: 'relative',
        top: '3px',
        width: this.getTopWidth(props.size),
        height: '6px',
        borderRadius: '50%',
        backgroundColor: Utils.hslCSS(props.color, 10),
      },
      middle: {
        backgroundColor: color,
        width: '30px',
        height: `${props.size || 0}px`,
      },
      bottom: {
        position: 'relative',
        bottom: '6px',
        width: '24px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: color,
      },
    }
  }

  render() {
    return (<div className="liquid">
      <span className="top" style={this.state.style.top} />
      <span className="middle" style={this.state.style.middle} />
      <span className="bottom" style={this.state.style.bottom} />
    </div>);
  }
}
export default Liquid;
