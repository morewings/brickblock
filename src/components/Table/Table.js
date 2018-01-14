import React from 'react';
import PropTypes from 'prop-types';
import {Table as TableComponent} from 'reactstrap';
import THead from 'components/Table/THead';
import TBody from 'components/Table/TBody';

const Table = props => (
  <TableComponent>
    <THead />
    <TBody />
  </TableComponent>
);

export default Table;
