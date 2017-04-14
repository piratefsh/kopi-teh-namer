import React from 'react';
import VariationSelector from 'VariationSelector';
import Constants from 'Constants'
import Kopi from 'Kopi'
class KopiSelector extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selectionIds: {
        base: 0, 
        milk:0, 
        dilution: 0, 
        temperature:0, 
        sweetness:0, 
        togo:0, 
        order:0
      }
    }
  }

  selections(){
    const keys = Object.keys(this.state.selectionIds)
    const sel = {}
    keys.forEach((k) => {
      sel[k] = Constants[k.toUpperCase()][this.state.selectionIds[k]]
    })
    return sel;
  }

  updateSelection(key, i){
    const ids = this.state.selectionIds;
    ids[key.toLowerCase()] = i;
    this.setState({
      selectionIds: ids 
    })
  }

  render(){
    const selectors = Object.keys(Constants).map((key, i) => {
      return <VariationSelector 
        label={key.toLowerCase()} 
        key={i} 
        variations={Constants[key]}
        onChange={this.updateSelection.bind(this, key)}/>
    })
    const kopi = new Kopi(this.selections())

    return <div>
      <div className="well">{kopi.toString()}</div>
      <div className="well">{kopi.toFormalDefinition()}</div>
      <form>
        {selectors}
      </form>
    </div>
  }

}

export default KopiSelector