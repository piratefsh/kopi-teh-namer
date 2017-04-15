import React from 'react';
import backgroundUrl from 'images/liquid-bg-nopadding.svg';
import Utils from 'Utils';
import PropertyConstants from './PropertyConstants';

class Liquid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        top: {
          position: 'relative',
          top: '3px',
          width: '30px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: Utils.hslCSS(props.color, 10),
        },
        middle: {
          backgroundColor: Utils.hslCSS(props.color),
          width: '30px',
          height: `${props.size}`,
        },
        bottom: {
          position: 'relative',
          bottom: '5px',
          width: '24px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: Utils.hslCSS(props.color),
        },
      },
    };
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
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.props, prevProps)
  }

  render() {
    const col = PropertyConstants.COLORS[this.props.name];

    if (col === undefined) {
      return null;
    }

    const color = col[this.props.selected];
    return (
      <div className="liquid-container">
        <Liquid
          color={color}
          size={PropertyConstants.SIZES[this.props.name] || PropertyConstants.SIZES.default}
        />
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
