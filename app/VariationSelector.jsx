import React from 'react';
import PropTypes from 'prop-types';
import PropertyVisualizer from './visualizer/PropertyVisualizer';

class VariationSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
    this.props.onChange(parseInt(e.target.value, 10));
  }

  makeRadios(){
    return this.props.variations.map((v, i) => {
      const id = `${this.props.label}-${i}`;
      const def = v.default ? <em>default</em> : null;
      return (
        <div key={i}>
          <input
            type="radio"
            onChange={this.onChange}
            checked={this.state.value == i ? 'checked' : ''}
            name={this.props.label.split(/\s/).join('_')}
            value={i}
            id={id}
          />
          <label htmlFor={id}>{v.formal_definition} {def}</label>
        </div>
      );
    });
  }

  render() {
    return (<fieldset className="form-group">
      <div className="input-group label">
        <PropertyVisualizer/>
        <span className="label uppercase">{this.props.label}</span>
      </div>

      <div className="input-group">
        {this.makeRadios()}
      </div>
    </fieldset>);
  }
}

VariationSelector.propTypes = {
  label: PropTypes.string.isRequired,
  variations: PropTypes.array.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default VariationSelector;
