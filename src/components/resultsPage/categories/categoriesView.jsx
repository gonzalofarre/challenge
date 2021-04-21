import React from 'react';

const Categories = ({ categories }) => {

  return (
    <div className="categories-container">
      {categories.map((category, index) => index < categories.length - 1 ?
        <span key= {category}>{`${category} > `}</span> :
        <b key= {category}>{`${category}`}</b>
      )}
    </div>
  );
};

export default Categories;