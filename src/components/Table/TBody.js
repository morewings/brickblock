import React from 'react';
import PropTypes from 'prop-types';
import TRow from 'components/Table/TRow';

const TBody = props => (
  <tbody>
    {props.content.map((rowData, i) => (
      <TRow
        key={`tableRow-${i}`}
        {...rowData} />
        ))}
  </tbody>
);

TBody.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    address: PropTypes.string,
    currency: PropTypes.string,
    value: PropTypes.number,
    txid: PropTypes.string,
  })).isRequired,
};

export default TBody;
