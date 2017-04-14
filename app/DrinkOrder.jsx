import React from 'react';
import VariationSelector from './VariationSelector';
import Constants from './Constants';
import Drink from './Drink';
import DrinkDisplay from './DrinkDisplay';
import Utils from './Utils';

class DrinkOrder extends React.Component {
  constructor(props) {
    super(props);
    // set defaults
    const order = Utils.getDefaultProps(Constants);
    const drink = this.makeDrink(order);

    this.state = {
      order,
      drink,
    };

    this.updateOrder = this.updateOrder.bind(this);
  }

  /**
    Compose selectors
  **/
  getSelectors() {
    return Object.keys(Constants).map((key, i) => <VariationSelector
      label={key.toLowerCase()}
      key={i}
      value={this.state.order[key]}
      variations={Constants[key]}
      onChange={this.makeUpdateOrder(key)}
    />);
  }

  /**
    Make drink from order
  **/
  makeDrink(props = this.state.order) {
    const args = Utils.makeKopiArgs(props, Constants);
    return new Drink(args);
  }

  /**
    Curry order update function with key
  **/
  makeUpdateOrder(key) {
    return this.updateOrder.bind(null, key);
  }

  /**
    Update order
  **/
  updateOrder(key, i) {
    // set new prop
    const order = this.state.order;
    order[key] = i;

    // make new drink
    const drink = this.makeDrink();

    this.setState({
      order,
      drink,
    });
  }

  render() {
    return (<div>
      <DrinkDisplay drink={this.state.drink} />
      <div className="container">
        <form>
          {this.getSelectors()}
        </form>
      </div>
    </div>);
  }
}

export default DrinkOrder;
