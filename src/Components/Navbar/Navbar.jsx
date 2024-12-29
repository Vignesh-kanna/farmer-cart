import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext) || { getTotalCartItems: () => 0 };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>FARMER CART</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu('shop')}>
          <Link style={{ textDecoration: 'none' }} to='/'>
            Shop
          </Link>
          {menu === 'shop' && <hr />}
        </li>
        <li onClick={() => setMenu('fertilizers')}>
          <Link style={{ textDecoration: 'none' }} to='/fertilizers'>
            Fertilizer
          </Link>
          {menu === 'fertilizers' && <hr />}
        </li>
        <li onClick={() => setMenu('seeds')}>
          <Link style={{ textDecoration: 'none' }} to="/seeds">
            Seed
          </Link>
          {menu === 'seeds' && <hr />}
        </li>
        <li onClick={() => setMenu('bio-fertilizers')}>
          <Link style={{ textDecoration: 'none' }} to='/bio-fertilizers'>
            Bio-fertilizers
          </Link>
          {menu === 'bio-fertilizers' && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
