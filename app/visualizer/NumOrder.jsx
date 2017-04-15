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
      backgroundImage: `url(${steamUrl})`,
      width: '30px',
      height: '15px',
      display: 'block',
      marginTop: '-16px',
      backgroundSize: 'contain',
    };
  }

  render() {
    return (<div className="num-order">
      <span style={this.makeStyle()} />
    </div>);
  }
}

export default NumOrder;
