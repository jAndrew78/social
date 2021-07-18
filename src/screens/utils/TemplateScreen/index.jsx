import React, { useState } from 'react';
import { 
  Container,
  Main,
  Background,
  StatusBar,
} from "./styles/TempletScreen";

import BgImage from '../../../assets/SignInBg.png'
import { Text } from '../../components';

export default TempletScreen = ({navigation}) => {
  return (
    <Container>
      
      <Main>
        <Text center title semi>
          Templet Screen
        </Text>
      </Main>

      <Background source={BgImage}>
      </Background>
      
      <StatusBar barStyle="light-content" />
    </Container>
  );
}
