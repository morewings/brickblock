import React from 'react';
import PropTypes from 'prop-types';

const TRow = props => (
  <tr>
    <td>{props.address}</td>
    <td>{props.currency}</td>
    <td>{props.value}</td>
    <td>{props.txid}</td>
  </tr>
);

TRow.propTypes = {
  address: PropTypes.string,
  currency: PropTypes.string,
  value: PropTypes.number,
  txid: PropTypes.string,
};

TRow.defaultProps = {
  address: '',
  currency: '',
  value: NaN,
  txid: '',
};

export default TRow;
