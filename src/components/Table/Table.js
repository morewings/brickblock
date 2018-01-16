import React from 'react';
import PropTypes from 'prop-types';
import {Table as TableComponent} from 'reactstrap';
import THead from 'components/Table/THead';
import TBody from 'components/Table/TBody';
import './Table.css';

const Table = props => (
  <TableComponent responsive hover bordered>
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
