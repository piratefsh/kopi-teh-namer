Array.prototype.clean = function clean () {
  return this.filter((e) => e && e.length > 0);
};

class Drink {
  constructor({ base, milk, dilution, temperature, sweetness, togo, order }) {
    this.parts = [base, milk, dilution, temperature, sweetness, togo, order];
  }

  labels() {
    return this.parts.map((i) => i.label);
  }

  casualDef() {
    return this.parts.map((i) => i.definition);
  }

  toString() {
    return this.labels()
      .clean()
      .join(' ');
  }

  toFormalDefinition() {
    return this.parts.map((i) => i.formal_definition)
      .clean()
      .join('\n  + ');
  }

  toCasualDefinition() {
    return this.casualDef()
      .clean()
      .join(' ');
  }
}

export default Drink;
