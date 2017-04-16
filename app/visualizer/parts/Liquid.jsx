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

  calcScale(props) {
    const scale = props.scale || 1;
    const res = {
      width: `${52 * scale}px`,
      height: `${(props.size || 0) * scale}px`,
    };
    return res;
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
    const scale = this.props.scale || 1;
    const s = this.calcScale(props);

    return {
      top: {
        position: 'relative',
        top: `${6 * scale}px`,
        width: s.width,
        height: `${12 * scale}px`,
        borderRadius: '50%',
        backgroundColor: Utils.hslCSS(props.color, 10),
      },
      middle: {
        backgroundColor: color,
        width: s.width,
        height: s.height,
      },
      bottom: {
        position: 'relative',
        bottom: `${8 * scale}px`,
        width: s.width,
        height: `${16 * scale}px`,
        borderRadius: '50%',
        backgroundColor: color,
      },
    };
  }

  getLiquidStyle() {
    return {
      width: '60px',
      bottom: `${this.props.offsetBottom}px`,
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
