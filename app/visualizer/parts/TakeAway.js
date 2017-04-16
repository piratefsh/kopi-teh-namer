import React from 'react';
import PropTypes from 'prop-types';
import glassCupUrl from 'images/Drink_Hot_HavingHere.svg';
import takeAwayColdUrl from 'images/Drink_Iced_Takeaway.svg';
import takeAwayHotUrl from 'images/Drink_Hot_Takeaway.svg';

class TakeAway extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.makeStyle(props),
    };
  }

  getImage(){
    if(this.props.cold){
      return takeAwayColdUrl;
    }
    if(this.props.takeaway){
      return takeAwayHotUrl;
    }
    return glassCupUrl;
  }

  makeStyle(props = this.props) {
    return {
      width: '54px',
      position: 'absolute',
      left: '-9px',
      bottom: '0px',
    };
  }

  render() {
    return (<div className="num-order">
      <img style={this.makeStyle()} src={this.getImage()}/>
    </div>);
  }
}

export default TakeAway;
