import React from 'react';
import VariationSelector from 'VariationSelector';
import Constants from 'Constants'
import Kopi from 'Kopi'
class KopiSelector extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selections: {
        base: Constants.BASE[0], 
        milk:Constants.MILK[0], 
        dilution: Constants.DILUTION[0], 
        temp:Constants.TEMPERATURE[0], 
        sweetness:Constants.SWEETNESS[0], 
        togo:Constants.TOGO[0], 
        order:Constants.ORDER[0]
      }
    }
  }

  render(){
    const selectors = Object.keys(Constants).map((key, i) => {
      return <VariationSelector label={key} key={i} variations={Constants[key]}/>
    })
    const kopi = new Kopi(this.state.selections)

    return <div>
      <form className=''>
        {selectors}
      </form>
      <div>{kopi.toString}</div>
    </div>
  }

}

export default KopiSelector