import React from 'react';
import { shallow } from 'enzyme';
import SignInAndSignUpPage from './sign-in-and-sign-up';

it('should render SignInAndSignUpPage component', () => {
  expect(shallow(<SignInAndSignUpPage />)).toMatchSnapshot();
});