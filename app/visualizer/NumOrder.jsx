import React from 'react';
import PropTypes from 'prop-types';
import Utils from 'Utils';

class NumOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.makeStyle(props),
    };
  }

  makeStyle(props = this.props) {
    return {
      textAlign: 'center',
      fontSize: '18px',
      display: 'block',
      position: 'absolute',
      top: '14px',
      width: '100%',
    };
  }

  render() {
    return (<div className="num-order">
      <span style={this.makeStyle()} >
        <small>x</small>{this.props.numOrder}
      </span>
    </div>);
  }
}

export default NumOrder;
