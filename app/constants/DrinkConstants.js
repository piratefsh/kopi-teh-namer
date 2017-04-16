const BASE = [
  {
    id: 0,
    type: 'base',
    label: 'Kopi',
    definition: 'coffee',
    formal_definition: 'coffee',
  },
  {
    id: 1,
    type: 'base',
    label: 'Teh',
    definition: 'tea',
    formal_definition: 'tea',
  },
];

const MILK = [
  {
    id: 0,
    type: 'milk',
    label: 'o',
    definition: 'black',
    formal_definition: 'no condensed or evaporated milk',
  },
  {
    id: 1,
    type: 'milk',
    label: '',
    definition: 'condensed milk',
    default: true,
    formal_definition: 'condensed milk',

  },
  {
    id: 2,
    type: 'milk',
    label: 'c',
    definition: 'evaporated milk',
    formal_definition: 'evaporated milk',
  },
];

const DILUTION = [
  {
    id: 0,
    type: 'dilution',
    label: 'di lo',
    definition: 'super thick',
    formal_definition: '0% water dilution',
  },
  {
    id: 1,
    type: 'dilution',
    label: 'gao',
    definition: 'thick',
    formal_definition: '5% water dilution',
  },
  {
    id: 2,
    type: 'dilution',
    label: '',
    definition: 'normal',
    default: true,
    formal_definition: '10% water dilution',
  },
  {
    id: 3,
    type: 'dilution',
    label: 'po',
    definition: 'thin',
    formal_definition: '20% water dilution',
  },
];

const TEMPERATURE = [
  {
    id: 0,
    type: 'temperature',
    label: '',
    definition: 'hot',
    default: true,
    formal_definition: 'hot',
  },
  {
    id: 1,
    type: 'temperature',
    label: 'peng',
    definition: 'iced',
    formal_definition: 'iced',
  },
];

const TOGO = [
  {
    id: 0,
    label: '',
    type: 'togo',
    definition: 'having here',
    default: true,
    formal_definition: 'having here',
  },
  {
    id: 1,
    label: 'da bao',
    type: 'togo',
    definition: 'takeaway',
    formal_definition: 'takeaway',
  },
];

const ORDER = [
  {
    id: 0,
    type: 'order',
    label: '',
    definition: 'one',
    default: true,
    formal_definition: 'single order',
  },
  {
    id: 1,
    type: 'order',
    label: 'sua',
    definition: 'extra order',
    formal_definition: 'extra order',
  },
];

const SWEETNESS = [
  {
    id: 0,
    type: 'sweetness',
    label: 'kosong',
    definition: 'no sugar',
    formal_definition: '0% sugar level',
  },
  {
    id: 1,
    type: 'sweetness',
    label: 'siew siew dai',
    definition: 'less less sweet',
    formal_definition: '25% sugar level',
  },
  {
    id: 2,
    type: 'sweetness',
    label: 'siew dai',
    definition: 'less sweet',
    formal_definition: '50% sugar level',
  },
  {
    id: 3,
    type: 'sweetness',
    label: '',
    definition: 'normal',
    default: true,
    formal_definition: '100% sugar level',
  },
  {
    id: 4,
    type: 'sweetness',
    label: 'ga dai',
    definition: 'extra sweet',
    formal_definition: '150% sugar level',
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
