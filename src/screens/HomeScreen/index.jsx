import React, { useState } from 'react';
import { 
  Container,
  Main,
  Background,
  StatusBar,
} from "./styles/HomeScreen";

import BgImage from '../../../assets/SignInBg.png'
import { Text } from '../../components';

export default HomeScreen = ({navigation}) => {
  return (
    <Container>
      
      <Main>
        <Text center title semi>
          Home Screen
        </Text>
      </Main>

      <Background source={BgImage}>
      </Background>
      
      <StatusBar barStyle="light-content" />
    </Container>
  );
}
