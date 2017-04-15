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

function hslCSS({h=0, s=0, l=0, a=1}, darken, lighten) {
  if(darken) {
    l -= darken;
  }
  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}

const Utils = {
  getDefaultProps,
  makeKopiArgs,
  hslCSS
}

export default Utils;