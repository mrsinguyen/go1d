import React from 'react';
import PrettyPropType from '@storybook/addon-info/dist/components/types/PrettyPropType';
import { multiLineText } from '@storybook/addon-info/dist/components/PropTable';
const pdMap = require('../../docs/react-docs-for-storybook.json');

const Table = props => <table style={{marginTop:10}} {...props} />;
const Td = props => <td style={{ paddingRight: 10, verticalAlign: 'middle' }} height="30" {...props} />;
const Tr = props => <tr {...props} />;
const Th = props => <th style={{paddingRight: 10, textAlign: 'left', verticalAlign: 'middle', fontWeight: "bold" }} {...props} />;
const Tbody = props => <tbody {...props} />;
const Thead = props => <thead {...props} />;

export default function PropTable(props) {
  const {
    type,
    maxPropObjectKeys,
    maxPropArrayLength,
    maxPropStringLength,
  } = props;

  if (!type) {
    return null;
  }

  const propertiesDefinition = pdMap[type.displayName] ? pdMap[type.displayName].props : pdMap[`${type.displayName}Props`] ? pdMap[`${type.displayName}Props`].props : [];

  if (!propertiesDefinition.length) {
    return <small>No propTypes defined!</small>;
  }

  propertiesDefinition.sort(function(a, b) {
    var nameA = a.inheritedFrom.toUpperCase();
    var nameB = b.inheritedFrom.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const propValProps = {
    maxPropObjectKeys,
    maxPropArrayLength,
    maxPropStringLength,
  };

  let lastInheritedFrom = "";

  return (
    <Table>
      <Thead>
      <Tr>
        <Th>Property</Th>
        <Th>PropType</Th>
        <Th>Required</Th>
      </Tr>
      </Thead>
      <Tbody>
      {propertiesDefinition.map(row => (
        <React.Fragment>
        { lastInheritedFrom !== row.inheritedFrom? (
          <Tr key={row.inheritedFrom}>
            <Td colSpan="4" height="40"  style={{ paddingRight: 10, verticalAlign: 'middle', fontWeight: "bold", borderBottom: "1px solid #000000" }}>Inherited from {lastInheritedFrom = row.inheritedFrom}</Td>
          </Tr>
        ) : <React.Fragment/> }
          <Tr key={row.property}>
            <Td>{row.property}</Td>
            <Td>
              <PrettyPropType propType={row.propType} />
            </Td>
            <Td>{row.required ? 'yes' : '-'}</Td>
            { /*<Td>
              {row.defaultValue === undefined ? (
                '-'
              ) : (
                <PropVal val={row.defaultValue} {...propValProps} valueStyles={{}} />
              )}
            </Td>*/ }
          </Tr>
        </React.Fragment>
      ))}
      </Tbody>
    </Table>
  );
}

PropTable.displayName = 'PropTable';
PropTable.defaultProps = {
  type: null,
  propDefinitions: [],
  excludedPropTypes: [],
};
