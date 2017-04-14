Array.prototype.clean = function() { 
  return this.filter((e) => e && e.length > 0)
}

export default class Kopi{
  constructor({base, milk, dilution, temperature, sweetness, togo, order}){
    this.parts = [base, milk, dilution, temperature, sweetness, togo, order]
    
  }
  toString(){
    const name = this.parts.map((i) => i.label).clean().join(' ')
    return name 
  }
  toFormalDefinition(){
    const formalDef = this.parts.map((i) => i.formal_definition).clean().join('\n  + ')
    const def = this.parts.map((i) => i.definition).clean().join(' ')
    return formalDef
  }
}