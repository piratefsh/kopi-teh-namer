const COLORS = {
  base: [
    {
      h: 18,
      s: 69,
      l: 40,
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
      l: 98,
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
      h: 0,
      s: 0,
      l: 100,
    }, {
      h: 0,
      s: 0,
      l: 100,
    }, {
      h: 0,
      s: 0,
      l: 100,
    }, {
      h: 0,
      s: 0,
      l: 100,
    },
  ],
};

const SIZES = {
  base: [30, 30],
  milk: [0, 20, 10],
  dilution: [0, 5, 10, 20],
};

const PropertyConstants = {
  COLORS,
  SIZES,
};

export default PropertyConstants;
