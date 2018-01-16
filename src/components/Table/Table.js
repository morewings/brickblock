import React from 'react';
import PropTypes from 'prop-types';
import {Table as TableComponent} from 'reactstrap';
import THead from 'components/Table/THead';
import TBody from 'components/Table/TBody';

const Table = props => (
  <TableComponent>
    <THead />
    <TBody content={props.content} />
  </TableComponent>
);

Table.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    address: PropTypes.string,
    currency: PropTypes.string,
    value: PropTypes.number,
    txid: PropTypes.string,
  })).isRequired,
};

export default Table;
