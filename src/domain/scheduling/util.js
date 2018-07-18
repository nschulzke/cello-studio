export const pipe = (...funcs) => val =>
  funcs.reduce((ret, func) => {
    return func(ret);
  }, val);

export const conditional = (ifMap, elseMap = (v) => v) => cond => val =>
  cond
    ? ifMap(val)
    : elseMap(val);
