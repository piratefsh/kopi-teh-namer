import React from 'react';

class VariationSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
    this.props.onChange(parseInt(e.target.value, 10));
  }

  render() {
    return (<fieldset className="form-group">
      <label>{this.props.label}</label>
      <div>
        <select
          onChange={this.onChange}
          value={this.state.value}
        >
          {
          this.props.variations.map((v, i) => (
            <option
              key={i}
              value={i}
            >
              {v.formal_definition}
            </option>))

        }
        </select>
      </div>
    </fieldset>);
  }
}

export default VariationSelector;
