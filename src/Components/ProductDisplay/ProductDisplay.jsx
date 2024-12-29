import React, { useContext } from 'react'
import'./ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {

    const {product} = props;
    const{addToCart} =useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">₹{product.old_price}</div>
            <div className="productdisplay-right-price-new">₹{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        Framer offers an unparalleled design experience with its seamless integration of design and development. It's user-friendly, efficient, and promotes creativity, making it an essential tool for anyone looking to quickly bring their ideas to life
        </div>
        <div className="productdisplay-right-size">
            <h1>Select quantity</h1>
            <div className="productdisplay-right-sizes">
                <div>5kg</div>
                <div>10kg</div>
                <div>15kg</div>
                <div>20kg</div>
                <div>25kg</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Bio-Fertilizers</p>
        <p className='productdisplay-right-category'><span>Tag :</span> latest product</p>
      </div>
    </div>
  )
}

export default ProductDisplay
