import DrinkProperty from './DrinkProperty';

Array.prototype.clean = function clean() {
  return this.filter((e) => e && e.length > 0);
};

class Drink {
  constructor({ base, milk, dilution, temperature, sweetness, togo, order }) {
    this.partsById = {
      base: new DrinkProperty(base, 'base'),
      milk: new DrinkProperty(milk, 'milk'),
      dilution: new DrinkProperty(dilution, 'dilution'),
      temperature: new DrinkProperty(temperature, 'temperature'),
      sweetness: new DrinkProperty(sweetness, 'sweetness'),
      togo: new DrinkProperty(togo, 'togo'),
      order: new DrinkProperty(order, 'order'),
    }

    this.parts = Object.keys(this.partsById).map((k) => this.partsById[k])
  }

  get(part) {
    return this.partsById[part];
  }

  isTall() {
    return this.get('togo').id === 1;
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
