import React from "react";
import backgroundUrl from 'images/liquid-bg.svg';

class DrinkVisualizer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      style: {
        width: '50px',
      }
    }
  }
  render(){
    return <img src={backgroundUrl} 
      style={this.state.style}
      className={this.props.className}/>
  }
}

export default DrinkVisualizer;