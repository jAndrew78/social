import React, { useState } from 'react';
import { 
  Container,
  Main,
  Background,
  StatusBar,
} from "./styles/ProfileScreen";

import BgImage from '../../../assets/SignInBg.png'
import { Text } from '../../components';

export default ProfileScreen = ({navigation}) => {
  return (
    <Container>
      
      <Main>
        <Text center title semi>
          Profile Screen
        </Text>
      </Main>

      <Background source={BgImage}>
      </Background>
      
      <StatusBar barStyle="light-content" />
    </Container>
  );
}
