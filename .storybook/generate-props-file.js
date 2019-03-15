const definition = require('../docs/react-docs.json');
const fs = require('fs');

const resultObj = {};

Object.keys(definition.typescript).forEach((index) => {
    resultObj[index] = {props:[]};
    const props = definition.typescript[index].properties;
    if (props) {
      props.forEach(prop => {
        resultObj[index].props.push({
          property: prop.name,
          defaultValue: prop.defaultValue,
          propType: prop.type,
          inheritedFrom: prop.inheritedFrom ? prop.inheritedFrom.split(".").shift() : "",
          required: prop.flags && prop.flags.isOptional ? false : true
        });
      })

    }
  }
)

fs.writeFile("./.storybook/react-docs-for-storybook.json", JSON.stringify(resultObj), function(err) {
  if(err) {
    return console.log(err);
  }
});
