import React from 'react';
import PropTypes from 'prop-types';
import backgroundUrl from 'images/liquid-bg-nopadding.svg';
import Utils from 'Utils';
import PropertyConstants from './PropertyConstants';

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

  makeStyle(props){
    const color = Utils.hslCSS(props.color);
    return {
      top: {
        position: 'relative',
        top: '3px',
        width: '30px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: Utils.hslCSS(props.color, 10),
      },
      middle: {
        backgroundColor: color,
        width: '30px',
        height: `${props.size}`,
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

class PropertyVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        width: '32px',
      },
      color: this.getColor(props.selected),
    };
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.props.selected != nextProps.selected) {
      console.log(this.props.selected, nextProps.selected);
    }
  }

  getColor() {
    const colors = PropertyConstants.COLORS[this.props.label];
    if (colors === undefined) {
      return null;
    }

    return colors[parseInt(this.props.selected, 10)];
  }

  getSize() {
    return PropertyConstants.SIZES[this.props.label][this.props.selected];
  }

  isLiquid() {
    return ['base', 'milk', 'dilution', 'sugar'].indexOf(this.props.label) > -1;
  }

  getVisualType() {
    if (this.isLiquid()) {
      return (<Liquid
        color={this.getColor()}
        size={this.getSize()}
      />);
    }
    return null;
  }

  render() {
    return (
      <div className="liquid-container">
        {this.getVisualType()}
        <img
          src={backgroundUrl}
          style={this.state.style}
          className={this.props.className}
        />
      </div>
    );
  }
}

export default PropertyVisualizer;

PropertyVisualizer.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  selected: PropTypes.any.isRequired,
}
