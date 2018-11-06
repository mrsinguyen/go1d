function facepaint(mq) {
  function flatten(obj) {
    if (typeof obj !== "object" || obj == null) {
      return [];
    }

    if (Array.isArray(obj)) {
      return obj.map(flatten);
    }

    const slots = {};
    const objects = {};
    const props = {};
    Object.keys(obj).forEach(key => {
      const item = obj[key];

      if (Array.isArray(item) && key.charCodeAt(0) !== 38) {
        item.forEach((v, index) => {
          if (v == null) {
            // Do not create entries for undefined values as this will
            // generate empty media media queries
            return;
          }

          if (slots[mq[index]] === undefined) {
            slots[mq[index]] = { [key]: v };
          } else {
            slots[mq[index]][key] = v;
          }
        });
      } else if (typeof item === "object") {
        objects[key] = flatten(item);
      } else {
        props[key] = item;
      }
    });

    // Ensure that all slots and then child objects are pushed to the end
    mq.forEach(el => {
      if (slots[el]) {
        props[el] = slots[el];
      }
    });

    Object.assign(props, objects);
    return props;
  }

  return (...values) => values.map(flatten);
}

export default facepaint;
