Array.prototype.clean = function() { 
  return this.filter((e) => e && e.length > 0)
}

export default class Kopi{
  constructor({base, milk, dilution, temp, sweetness, togo, order}){
    this.parts = [base, milk, dilution, temp, sweetness, togo, order]
    
  }
  toString(){
    const name = this.parts.map((i) => i.label).clean().join(' ')
    const def = this.parts.map((i) => i.definition).clean().join(' ')
    const formalDef = this.parts.map((i) => i.formal_definition).clean().join('\n  + ')
    
    return `${name}\n  ${def}\n  = ${formalDef}\n`;
  }
}