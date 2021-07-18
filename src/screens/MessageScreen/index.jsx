import React, { useState } from 'react';
import { 
  Container,
  Main,
  Background,
  StatusBar,
} from "./styles/MessageScreen";

import BgImage from '../../../assets/SignInBg.png'
import { Text } from '../../components';

export default MessageScreen = ({navigation}) => {
  return (
    <Container>
      
      <Main>
        <Text center title semi>
          Message Screen
        </Text>
      </Main>

      <Background source={BgImage}>
      </Background>
      
      <StatusBar barStyle="light-content" />
    </Container>
  );
}
