import React from 'react';
import PropTypes from 'prop-types';
import Utils from 'util/Utils';

class Liquid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.makeStyle(props),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      style: this.makeStyle(nextProps),
    };
  }

  getTopWidth(height = 0, maxHeight = 30) {
    const n = 26 + 6 * (height / maxHeight);
    return `${n}px`;
  }
  makeStyle(props) {
    if (!props.color) {
      return {
        top: {},
        middle: {},
        bottom: {},
      };
    }

    const color = Utils.hslCSS(props.color);
    return {
      top: {
        position: 'relative',
        top: '3px',
        width: '26px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: Utils.hslCSS(props.color, 10),
      },
      middle: {
        backgroundColor: color,
        width: '26px',
        height: `${props.size || 0}px`,
      },
      bottom: {
        position: 'relative',
        bottom: '4px',
        width: '26px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: color,
      },
    };
  }

  getLiquidStyle() {
    return {
      width: '32px',
      bottom: `${this.props.offsetBottom}px`
    };
  }

  render() {
    return (<div className="liquid" style={this.getLiquidStyle()}>
      <span className="top" style={this.state.style.top} />
      <span className="middle" style={this.state.style.middle} />
      <span className="bottom" style={this.state.style.bottom} />
    </div>);
  }
}
export default Liquid;
