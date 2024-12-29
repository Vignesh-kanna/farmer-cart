import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = ({ product }) => {
  console.log('Product in Breadcrum:', product); // Debugging line

  if (!product || !product.category || !product.name) {
    return <div className='breadcrum'>Loading...</div>;
  }

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> {product.category} <img src={arrow_icon} alt="arrow" /> {product.name}
    </div>
  );
}

export default Breadcrum;
