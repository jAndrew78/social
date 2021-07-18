import React from 'react';
import { Container, Main, Background, StatusBar } from "./styles/SignInScreen";
import BgImage from '../../../assets/SignInBg.png'

export default SignInScreen = () => {
  return (
    <Container>
      <Main></Main>
      <Background source={BgImage}>
      </Background>
      <StatusBar barStyle="light-content" />
    </Container>    
  );
}
