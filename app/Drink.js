Array.prototype.clean = function clean () {
  return this.filter((e) => e && e.length > 0);
};

class Drink {
  constructor({ base, milk, dilution, temperature, sweetness, togo, order }) {
    this.parts = [base, milk, dilution, temperature, sweetness, togo, order];
  }

  toString() {
    return this.parts.map((i) => i.label)
      .clean()
      .join(' ');
  }

  toFormalDefinition() {
    return this.parts.map((i) => i.formal_definition)
      .clean()
      .join('\n  + ');
  }

  toCasualDefinition() {
    return this.parts.map((i) => i.definition)
      .clean()
      .join(' ');
  }
}

export default Drink;
