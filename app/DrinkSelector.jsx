import React from 'react';
import VariationSelector from './VariationSelector';
import Constants from './Constants';
import Drink from './Drink';
import DrinkDisplay from './DrinkDisplay';

class DrinkSelector extends React.Component {
  constructor(props) {
    super(props);
    const selection = {}
    Object.keys(Constants).forEach((key) => {
      selection[key] = Constants[key].reduce((acc, v, i) => v.default ? i : acc, 0);
    });
    const drink =  new Drink(this.selections(selection));
    this.state = {
      selectionIds: selection,
      drink: drink
    };

    this.updateSelection = this.updateSelection.bind(this);
  }

  selections(ids = this.state.selectionIds) {
    const keys = Object.keys(ids);
    const sel = {};
    keys.forEach((k) => {
      sel[k.toLowerCase()] = Constants[k][ids[k]];
    });
    return sel;
  }

  updateSelection(key, i) {
    const ids = this.state.selectionIds;
    ids[key] = i;
    const drink = new Drink(this.selections(ids));
    this.setState({
      selectionIds: ids,
      drink: drink,
    });
  }

  render() {
    const selectors = Object.keys(Constants).map((key, i) => <VariationSelector
      label={key.toLowerCase()}
      key={i}
      value={this.state.selectionIds[key]}
      variations={Constants[key]}
      onChange={this.updateSelection.bind(null, key)}
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
