import React from 'react';
import backgroundUrl from 'images/liquid-bg-nopadding.svg';

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
          backgroundColor: 'hsl(16, 71%, 32%)'
        },
        middle: {
          backgroundColor: 'hsl(16, 71%, 42%)',
          width: '30px',
          height: '30px'
        },
        bottom: {
          position: 'relative',
          bottom: '5px',
          width: '24px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'hsl(16, 71%, 42%)'
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
        <Liquid />
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
