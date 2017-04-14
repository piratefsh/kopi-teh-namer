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
      <div className="input-group label">
        <label>
          {this.props.label}
        </label>
      </div>

      <div
        className="input-group"
      >
        {
        this.props.variations.map((v, i) => {
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
        }
        )
      }
      </div>
    </fieldset>);
  }
}

export default VariationSelector;
