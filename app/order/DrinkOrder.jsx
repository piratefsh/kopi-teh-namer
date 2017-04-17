import React from 'react';
import DrinkConstants from 'constants/DrinkConstants';
import Drink from 'drink/Drink';
import DrinkDisplay from 'drink/DrinkDisplay';
import Utils from 'util/Utils';
import OrderForm from './OrderForm';

function Footer() {
  return (<footer>
    <div className="container">
      <p>WIP lovingly made by <a href="http://twitter.com/piratefsh">Sher Minn</a> and <a href="http://jasonkung.com">Jason</a>. Kopirights © 2017 Howtokopi.com.</p>
    </div>
  </footer>);
}

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

  /**
    Make drink from order
  **/
  makeDrink(props = this.state.order) {
    const args = Utils.makeKopiArgs(props, DrinkConstants);
    return new Drink(args);
  }

  render() {
    return (<div className="order">
      <div className="order-form">
        <OrderForm order={this.state.order} updateOrder={this.updateOrder} />
        <Footer />
      </div>
      <div className="order-display">
        <DrinkDisplay drink={this.state.drink} />
      </div>
    </div>);
  }
}

export default DrinkOrder;
