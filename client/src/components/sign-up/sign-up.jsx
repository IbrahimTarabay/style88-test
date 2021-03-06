import React from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import {signUpStart} from '../../redux/user/user.actions';

import {SignUpContainer,SignUpTitle} from './sign-up.styles';

class SignUp extends React.Component{
  constructor(){
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event =>{
    event.preventDefault();
    const {signUpStart} = this.props;
    const {displayName,email,password,confirmPassword} = this.state;
    if(password !== confirmPassword){
      alert("passwords don't match");
      return;
    }
    signUpStart({displayName,email,password});
  };

  handleChange = event =>{
    const {name,value} = event.target;
    this.setState({[name]:value});
    /*[name]: value to dynamically change the name*/
  }

  render(){
    const {displayName,email,password,confirmPassword} = this.state;
    return(
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up if you don't have account</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            handleChange={this.handleChange}
            label='Display Name'
            required
            >
           </FormInput>
           {/*email*/}
           <FormInput
            type='email'
            name='email'
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required
            />
           {/*password*/}
           <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required
            />
           {/*confirm password*/}
           <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
            />
            <CustomButton type='submit'>SIGN UP</CustomButton>
          </form>
         </SignUpContainer>
      )
    }
  }

  const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
  })

  export default connect(null,mapDispatchToProps)(SignUp);