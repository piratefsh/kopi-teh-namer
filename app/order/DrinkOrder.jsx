import React from 'react';
import VariationSelector from './VariationSelector';
import DrinkConstants from 'constants/DrinkConstants';
import Drink from 'drink/Drink';
import DrinkDisplay from 'drink/DrinkDisplay';
import Utils from 'util/Utils';

class DrinkOrder extends React.Component {
  constructor(props) {
    super(props);
    // set defaults
    const order = Utils.getDefaultProps(DrinkConstants);
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
    return Object.keys(DrinkConstants).map((key, i) => <VariationSelector
      label={key.toLowerCase()}
      key={i}
      value={this.state.order[key]}
      variations={DrinkConstants[key]}
      onChange={this.makeUpdateOrder(key)}
    />);
  }

  /**
    Make drink from order
  **/
  makeDrink(props = this.state.order) {
    const args = Utils.makeKopiArgs(props, DrinkConstants);
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
      <div className="container">
        <form>
          {this.getSelectors()}
        </form>
      </div>
      <DrinkDisplay drink={this.state.drink} />
    </div>);
  }
}

export default DrinkOrder;
