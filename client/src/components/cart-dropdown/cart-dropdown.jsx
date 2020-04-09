import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import {CartDropdownContainer,ImgContainer,EmptyMessageContainer,
        Img,CartItemsContainer,CartDropdownButton}
  from './cart-dropdown.styles';

import shopping from '../../assets/shopping.png';

export const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
     {
        cartItems.length ? 
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        :
        <ImgContainer>
         <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
         <Img alt="shopping-cart" src={shopping}/> 
        </ImgContainer>
      }
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));