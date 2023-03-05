import React from 'react';
// import PropTypes from 'prop-types';

const FilterTodo = props => {
  return (
    <div className="filter-btn">
      <button className='btn'>All</button>
      <button className='btn'>Incomplete</button>
      <button className='btn'>Complete</button>
    </div>
  )
}

// FilterTodo.propTypes = {}

export default FilterTodo;