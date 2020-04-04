import React from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import {googleSignInStart,emailSignInStart} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

class SignIn extends React.Component{
  constructor(props){
    super(props);

    this.state = {
       email: '',
       password: ''
    }
  }

  handleSubmit = async event =>{
    event.preventDefault();/*to have control and prevent default behavior*/
    const {emailSignInStart} = this.props;
    const {email,password} = this.state;
    emailSignInStart(email,password);
  };

  handleChange = event =>{
    const {value,name} = event.target;
    this.setState({[name]:value})/*[name] to dynamically work with any name*/ 
  }

  render(){
    const {googleSignInStart} = this.props;
    return(
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
           name="email"
           type="email"
           label="Email"
           value={this.state.email}
            handleChange={this.handleChange}
             required />
    
          <FormInput 
          name="password" 
          type="password"
          label="Password"
           value={this.state.password}
            handleChange={this.handleChange}
             required />
          
          <ButtonsBarContainer>
          <CustomButton type='submit'>Sign in {/*children*/}</CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>{/*isGoogleSignIn = true by default*/}
                  Sign in with Google
            </CustomButton> 
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);