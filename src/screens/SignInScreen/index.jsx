import React from 'react';
import { Container, Main, Auth, AuthContainer, AuthTitle, AuthField, Background, StatusBar } from "./styles/SignInScreen";

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

          <AuthTitle medium>Email Address</AuthTitle>
          <AuthField />
          
          <AuthTitle medium>Password</AuthTitle>
          <AuthField />

        </AuthContainer>
      </Auth>
      
      <Background source={BgImage}>
      </Background>
      
      <StatusBar barStyle="light-content" />
    </Container>    
  );
}
