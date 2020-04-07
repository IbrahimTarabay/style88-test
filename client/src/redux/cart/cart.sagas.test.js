import {all,call,takeLatest,put,select} from 'redux-saga/effects';

import {getUserCartRef} from '../../firebase/firebase.utils';
import UserActionTypes from '../user/user.types';
import {selectCurrentUser} from '../user/user.selectors';
import {clearCart,setCartFromFirebase} from './cart.actions';
import CartActionTypes from './cart.types';
import {selectCartItems} from './cart.selectors';

import {clearCartOnSignOut,onSignOutSuccess,onUserSignIn,onCartChange,
    updateCartInFirebase,checkCartFromFirebase} from './cart.sagas';
import { onSignUpSuccess } from '../user/user.sagas';


describe('clear cart on sign out saga', () => {
  it('should fire clearCart', () => {
    const generator = clearCartOnSignOut();
    expect(generator.next().value).toEqual(put(clearCart()));
  });
});

describe('on sign out success saga', () => {
  it('should trigger on SIGN_OUT_SUCCESS', () => {
    const generator = onSignOutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
    );
  });
});

describe('on user sign in saga', () => {
    it('should trigger on SIGN_IN_SUCCESS', () => {
      const generator = onUserSignIn();
      expect(generator.next().value).toEqual(
        takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase)
      );
    });
  });

describe('on cart change saga', () => {
it('should trigger on ADD_ITEM OR REMOVE_ITEM OR CLEAR_ITEM_FROM_CART', () => {
    const generator = onCartChange();
    expect(generator.next().value).toEqual(
    takeLatest([
        CartActionTypes.ADD_ITEM,
        CartActionTypes.REMOVE_ITEM,
        CartActionTypes.CLEAR_ITEM_FROM_CART
          ], updateCartInFirebase)
    );
 });
});  

describe('update cart in firebase', () => {
 const mockParameters = {user:{currentUser:{id:1}},cart:{cartItems:[{id:3}]}};
 const mockCurrentUser = mockParameters.user.currentUser;
 const mockCartItems = mockParameters.cart.cartItems;
 const generator = updateCartInFirebase();

  it('should selectCurrentUser', () => {
    const selected = selectCurrentUser.resultFunc(mockParameters.user);
    expect(selected).toEqual(mockCurrentUser);
  });

  it('should getUserCartRef', () => {  
    
    generator.next()/*we use two next() because we want to reach
    second line in cart.sagas.js */
    expect(generator.next(mockCurrentUser.id).value)
     .toEqual(getUserCartRef(mockCurrentUser.id))
  })

  it('should selectCartItems', () => {
    const selected = selectCartItems.resultFunc(mockParameters.cart);
    expect(selected).toEqual(mockCartItems);
  })
});