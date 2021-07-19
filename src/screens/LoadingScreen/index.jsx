import React, { useState } from 'react';
import { 
  Container,
  Main,
  Background,
  StatusBar,
} from "./styles/LoadingScreen";

import BgImage from '../../../assets/SignInBg.png'
import { Text } from '../../components';

export default LoadingScreen = ({navigation}) => {
  return (
    <Container>
      
      <Main>
        <Text center title semi>
          Loading Screen
        </Text>
      </Main>

      <Background source={BgImage}>
      </Background>
      
      <StatusBar barStyle="light-content" />
    </Container>
  );
}
