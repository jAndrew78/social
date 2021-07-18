import React, { useState } from 'react';
import { 
  Container,
  Main,
  Background,
  StatusBar,
} from "./styles/PostScreen";

import BgImage from '../../../assets/SignInBg.png'
import { Text } from '../../components';

export default PostScreen = ({navigation}) => {
  return (
    <Container>
      
      <Main>
        <Text center title semi>
          Post Screen
        </Text>
      </Main>

      <Background source={BgImage}>
      </Background>
      
      <StatusBar barStyle="light-content" />
    </Container>
  );
}
