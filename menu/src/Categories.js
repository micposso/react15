import React from 'react';

const Categories = ({filterItems}) => {

  console.log('from categories component', filterItems);

  return <div className="bnt-container">
    <button className="filter-btn" onClick={() => {
      filterItems('all');
    }}>
      all
    </button>
    <button className="filter-btn" onClick={() => {
      filterItems('breakfast');
    }}>
      breakfast
    </button>
  </div>;
};

export default Categories;