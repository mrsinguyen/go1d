function applyArray(val, arr) {
  if (!val) {
    return null;
  }

  if (Array.isArray(val)) {
    return val.map(v => applyArray(v, arr));
  }

  return arr[val];
}

export default applyArray;
