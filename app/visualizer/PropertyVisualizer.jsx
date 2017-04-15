import React from 'react';
import backgroundUrl from 'images/liquid-bg-nopadding.svg';
import Utils from 'Utils';

class Liquid extends React.Component {
  constructor(props) {
    super(props);
    console.log(Utils.hslCSS(props.color))
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
          height: '30px'
        },
        bottom: {
          position: 'relative',
          bottom: '5px',
          width: '24px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: Utils.hslCSS(props.color)
        },
      }
    }
  }
  render() {
    return (<div className="liquid">
      <span className="top" style={this.state.style.top}/>
      <span className="middle" style={this.state.style.middle}/>
      <span className="bottom" style={this.state.style.bottom}/>
    </div>);
  }
}

const COLORS ={
  base: {
    h: 18,
    s: 69,
    l: 40
  },
  milk: {
    h: 56,
    s: 18,
    l: 98,
  },
  default: {
    h: 0,
    s: 0,
    l: 50,
  },
  dilution: {
    h: 241,
    s: 22,
    l: 82,
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
  render() {
    return (
      <div className='liquid-container'>
        <Liquid color={COLORS[this.props.name] || COLORS['default']}/>
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
