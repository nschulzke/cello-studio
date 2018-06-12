interface Value {
}

function isValue(obj: any): obj is Value {
  return typeof obj.equals === 'function';
}

class ValueClass implements Value {
  equals(obj: any) {
    for (let key in this) {
      if (!obj.hasOwnProperty(key))
        return false;
      if (isValue(obj[key]) && !obj[key].equals(this[key]))
        return false;
      if (!isValue(obj[key]) && obj[key] !== this[key])
        return false;
    };
    return true;
  }
}

export { Value, ValueClass };
