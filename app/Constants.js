const BASE = [
  {
    label: 'Kopi',
    definition: 'coffee',
    formal_definition: 'coffee',
  },
  {
    label: 'Teh',
    definition: 'tea',
    formal_definition: 'tea',
  },
];

const MILK = [
  {
    label: '',
    definition: '',
    default: true,
    formal_definition: 'condensed milk',

  },
  {
    label: 'o',
    definition: 'black',
    formal_definition: 'no condensed or evaporated milk',
  },
  {
    label: 'c',
    definition: 'evaporated milk',
    formal_definition: 'evaporated milk',
  },
];

const DILUTION = [
  {
    label: '',
    definition: '',
    default: true,
    formal_definition: '10% water dilution',
  },
  {
    label: 'po',
    definition: 'thin',
    formal_definition: '20% water dilution',
  },
  {
    label: 'gao',
    definition: 'thick',
    formal_definition: '5% water dilution',
  },
  {
    label: 'di lo',
    definition: 'super thick',
    formal_definition: '0% water dilution',
  },
];

const TEMPERATURE = [
  {
    label: '',
    definition: 'hot',
    default: true,
    formal_definition: 'hot',
  },
  {
    label: 'peng',
    definition: 'iced',
    formal_definition: 'iced',
  },
];

const TOGO = [
  {
    label: '',
    definition: 'having here',
    default: true,
    formal_definition: 'having here',
  },
  {
    label: 'da bao',
    definition: 'takeaway',
    formal_definition: 'takeaway',
  },
];

const ORDER = [
  {
    label: '',
    definition: 'one',
    default: true,
    formal_definition: 'single order',
  },
  {
    label: 'sua',
    definition: 'extra order',
    formal_definition: 'extra order',
  },
];

const SWEETNESS = [
  {
    label: 'kosong',
    definition: 'no sugar',
    formal_definition: '0% sugar level',
  },
  {
    label: 'siew siew dai',
    definition: 'less less sweet',
    formal_definition: '25% sugar level',
  },
  {
    label: 'siew dai',
    definition: 'less sweet',
    formal_definition: '50% sugar level',
  },
  {
    label: 'ga dai',
    definition: 'extra sweet',
    formal_definition: '150% sugar level',
  },
  {
    label: '',
    definition: 'normal',
    default: true,
    formal_definition: '100% sugar level',
  },
];

export default {
  BASE,
  MILK,
  SWEETNESS,
  TEMPERATURE,
  TOGO,
  DILUTION,
  ORDER,
};
