import React from 'react';
import { 
  Container,
  Main,
  Auth,
  AuthContainer,
  AuthTitle,
  AuthField,
  SignInContainer,
  SignUp,
  Background,
  StatusBar,
} from "./styles/SignInScreen";

import BgImage from '../../../assets/SignInBg.png'
import { Text } from '../../components';

export default SignInScreen = () => {
  return (
    <Container>
      
      <Main>
        <Text center title semi>
          Welcome back
        </Text>
      </Main>

      <Auth>
        <AuthContainer>

          <AuthTitle small semi>Email Address</AuthTitle>
          <AuthField 
            autoCapitalize="none" 
            autoCompleteType="email" 
            autoCorrect={false} 
            autoFocus={true}
            keyboardType="email-address"
          />
          
          <AuthTitle small semi>Password</AuthTitle>
          <AuthField  
            autoCapitalize="none" 
            autoCompleteType="password" 
            autoCorrect={false} 
            autoFocus={true}
            secureTextEntry={true}
          />

        </AuthContainer>
      </Auth>

      <SignInContainer>
        <Text center bold medium white>Sign In</Text>
      </SignInContainer>

      <SignUp>
        <Text medium center> New to Social?{' '} 
          <Text violet medium>
            Sign Up
          </Text>
        </Text>
      </SignUp>
      
      <Background source={BgImage}>
      </Background>
      
      <StatusBar barStyle="light-content" />
    </Container>    
  );
}
