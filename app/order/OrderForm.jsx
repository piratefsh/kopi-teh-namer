import React from 'react';
import VariationSelector from './VariationSelector';
import DrinkConstants from 'constants/DrinkConstants';

class OrderForm extends React.Component {

  /**
    Curry order update function with key
  **/
  makeUpdateOrder(key) {
    return this.props.updateOrder.bind(null, key);
  }

  /**
    Compose selectors
  **/
  getSelectors() {
    return Object.keys(DrinkConstants).map((key, i) => <VariationSelector
      label={key.toLowerCase()}
      key={i}
      value={this.props.order[key]}
      variations={DrinkConstants[key]}
      onChange={this.makeUpdateOrder(key)}
    />);
  }

  render() {
    return (<div className="container">
      <h1>How to Kopi</h1>
      <form>
        {this.getSelectors()}
      </form>
    </div>)
  }
}

export default OrderForm;