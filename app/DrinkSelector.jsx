import React from 'react';
import VariationSelector from './VariationSelector';
import Constants from './Constants';
import Drink from './Drink';
import DrinkDisplay from './DrinkDisplay';

class DrinkSelector extends React.Component {
  constructor(props) {
    super(props);
    const ids = {
      base: 0,
      milk: 0,
      dilution: 0,
      temperature: 0,
      sweetness: 0,
      togo: 0,
      order: 0,
    };

    this.state = {
      selectionIds: ids,
      drink: new Drink(this.selections(ids)),
    };
  }

  selections(ids = this.state.selectionIds) {
    const keys = Object.keys(ids);
    const sel = {};
    keys.forEach((k) => {
      sel[k] = Constants[k.toUpperCase()][ids[k]];
    });
    return sel;
  }

  updateSelection(key, i) {
    const ids = this.state.selectionIds;
    ids[key.toLowerCase()] = i;
    this.setState({
      selectionIds: ids,
      drink: new Drink(this.selections()),
    });
  }

  render() {
    const selectors = Object.keys(Constants).map((key, i) => <VariationSelector
      label={key.toLowerCase()}
      key={i}
      variations={Constants[key]}
      onChange={this.updateSelection.bind(this, key)}
    />);

    return (<div>
      <DrinkDisplay drink={this.state.drink} />
      <div className="container">
        <form>
          {selectors}
        </form>
      </div>
    </div>);
  }

}

export default DrinkSelector;
