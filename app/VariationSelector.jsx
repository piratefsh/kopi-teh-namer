import React from 'react';

class VariationSelector extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 1
    }
  }

  render(){
    return (<fieldset className='form-group row'>
      <label className='col-sm-2 col-form-label'>{this.props.label}</label>
      <div className= 'col-sm-10'>
      <select className="form-control" value={this.state.value}>
        {
          this.props.variations.map((v, i) => {
            return(
              <option 
                key={i} 
                value={i}>
                {v.label}
              </option>)
          }) 

        }
        </select>
        </div>
      </fieldset>)
  }
}

export default VariationSelector;