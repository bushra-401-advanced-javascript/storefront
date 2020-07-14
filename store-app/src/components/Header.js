import React, {Component} from 'react';
import { connect } from 'react-redux';

import './styles/Header.scss';

function Header(props) {
    return (
      <header>
          <span id="banner">
          <h1>Store App</h1>
          {/*<img src="" alt="Store Logo" className="App-logo" width="50" height="50" />*/}
          <div id="cart">
             <h2>Cart ({props.cart})</h2>
          </div>
          </span>
      </header>
    )
  }

const mapStateToProps = state => ({
    cart: state.categories.cart
  });
  
export default connect(mapStateToProps)(Header);
