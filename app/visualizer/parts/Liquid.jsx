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
    const scale = props.scale;
    const res = {
      width: `${52 * scale}px`,
      height: `${(props.size) * scale}px`,
    };
    return res;
  }

  scale(n) {
    return Math.round(n * this.props.scale);
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
    const s = this.calcScale(props);

    return {
      top: {
        backgroundColor: Utils.hslCSS(props.color, 10),
        height: `${this.scale(12)}px`,
        top: `${this.scale(6)}px`,
        width: s.width,
      },
      middle: {
        backgroundColor: color,
        width: s.width,
        height: s.height,
      },
      bottom: {
        backgroundColor: color,
        bottom: `${this.scale(8)}px`,
        height: `${this.scale(16)}px`,
        width: s.width,
      },
    };
  }

  getLiquidStyle() {
    const scale = this.props.scale;
    return {
      bottom: `${this.props.offsetBottom * scale}px`,
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

Liquid.defaultProps = {
  scale: 1,
  size: 0,
};

Liquid.propTypes = {
  scale: PropTypes.number,
  size: PropTypes.number,
  offsetBottom: PropTypes.number,
};

export default Liquid;

