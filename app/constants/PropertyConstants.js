const COLORS = {
  base: [
    {
      h: 18,
      s: 69,
      l: 40,
    },
    {
      h: 30,
      s: 69,
      l: 45,
    },
  ],

  milk: [
    {
      h: 0,
      s: 0,
      l: 0,
      a: 0,
    },
    {
      h: 40,
      s: 40,
      l: 85,
    },
    {
      h: 10,
      s: 18,
      l: 94,
    },
  ],

  dilution: [
    {
      h: 241,
      s: 22,
      l: 82,
      a: 0,
    }, {
      h: 241,
      s: 22,
      l: 82,
    }, {
      h: 241,
      s: 22,
      l: 82,
    }, {
      h: 241,
      s: 22,
      l: 82,
    },
  ],

  sweetness: [
    {
      h: 250,
      s: 50,
      l: 100,
      a: 0,
    }, {
      h: 250,
      s: 50,
      l: 100,
    }, {
      h: 250,
      s: 50,
      l: 100,
    }, {
      h: 250,
      s: 50,
      l: 100,
    }, {
      h: 250,
      s: 50,
      l: 100,
    },
  ],
};

const SIZES = {
  base: [60, 60],
  milk: [0, 20, 30],
  sweetness: [0, 5, 10, 15, 20],
  dilution: [0, 5, 10, 20],
};

const TEMPS = ['hot', 'cold'];
const ORDER = [1, 2];
const TOGO = [false, true];

const PropertyConstants = {
  COLORS,
  SIZES,
  TEMPS,
  ORDER,
  TOGO
};

export default PropertyConstants;
