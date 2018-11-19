import React from 'react';
import { Grid } from 'react-bootstrap';
import { FaSearch, FaChevronLeft } from 'react-icons/fa';

const SearchNav = ({ title, search, backNav }) => {
  return (
    <div className="search-nav-header">
      <Grid>
        {backNav && (
          <span style={{ verticalAlign: 'middle' }}>
            <FaChevronLeft />
          </span>
        )}{' '}
        {title}{' '}
        {search && (
          <span style={{ float: 'right' }}>
            <FaSearch />
          </span>
        )}
      </Grid>
    </div>
  );
};

export default SearchNav;
