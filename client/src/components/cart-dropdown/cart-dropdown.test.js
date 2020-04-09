import React from 'react';
import {shallow} from 'enzyme';

import {CartDropdown} from './cart-dropdown';
import CartItem from '../cart-item/cart-item';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { ItemDetailsContainer } from '../cart-item/cart-item.styles';

describe('CartDropdown component', () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{id:1},{id:2},{id:3}];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn()
    };
    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch
    };
    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  it('should render CartDropdown component', () =>{
    expect(wrapper).toMatchSnapshot();
  });

})