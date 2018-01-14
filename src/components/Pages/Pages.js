import React from 'react';
import PropTypes from 'prop-types';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import config from 'config';

const Pages = (props) => {
  const pagesAmount = Math.ceil(props.dataLength / config.itemsPerPage);
  const pagesTemplate = new Array(pagesAmount).fill('');
  const onClick = page => (e) => {
    e.preventDefault();
    props.setCurrentPage(page, props.dataSource);
  };
  return (
    <Pagination>
      <PaginationItem disabled={props.currentPage === 1}>
        <PaginationLink
          onClick={onClick(props.currentPage - 1)}
          previous
          href="#" />
      </PaginationItem>
      {pagesTemplate.map((empty, i) => (
        <PaginationItem
          active={props.currentPage === (i + 1)}
          key={`page-${i}`}>
          <PaginationLink
            onClick={onClick(i + 1)}
            href="#">
            {i + 1}
          </PaginationLink>
        </PaginationItem>
        ))}
      <PaginationItem disabled={props.currentPage === pagesAmount}>
        <PaginationLink
          onClick={onClick(props.currentPage + 1)}
          next
          href="#" />
      </PaginationItem>
    </Pagination>
  );
};

Pages.propTypes = {
  dataLength: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired, // eslint-disable-line
  dataSource: PropTypes.string.isRequired, // eslint-disable-line
};

export default Pages;
