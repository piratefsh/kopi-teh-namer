function getDefaultProps(thing={}){
  const selection = {}
  Object.keys(thing).forEach((key) => {
    selection[key] = thing[key].reduce((acc, v, i) => v.default ? i : acc, 0);
  });
  return selection;
}

function makeKopiArgs(ids, obj){
  const keys = Object.keys(ids);
  const args = {};
  keys.forEach((k) => {
    args[k.toLowerCase()] = obj[k][ids[k]];
  });
  return args;
}

const Utils = {
  getDefaultProps,
  makeKopiArgs,
}

export default Utils;