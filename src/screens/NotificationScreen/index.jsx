import React, { useState } from 'react';
import { 
  Container,
  Main,
  Background,
  StatusBar,
} from "./styles/NotificationScreen";

import BgImage from '../../../assets/SignInBg.png'
import { Text } from '../../components';

export default NotificationScreen = ({navigation}) => {
  return (
    <Container>
      
      <Main>
        <Text center title semi>
          Notification Screen
        </Text>
      </Main>

      <Background source={BgImage}>
      </Background>
      
      <StatusBar barStyle="light-content" />
    </Container>
  );
}
