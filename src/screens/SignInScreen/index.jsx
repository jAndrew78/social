import React, { useState } from 'react';
import { 
  Container,
  Main,
  Auth,
  AuthContainer,
  AuthTitle,
  AuthField,
  SignInContainer,
  SignUp,
  Loading,
  Background,
  StatusBar,
} from "./styles/SignInScreen";

import BgImage from '../../../assets/SignInBg.png'
import { Text } from '../../components';

export default SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

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
            autoFocus={false}
            keyboardType="email-address"
            onChangeText={email => setEmail(email.trim())}
            value={email}
          />
        </AuthContainer>
          
        <AuthContainer>
          <AuthTitle small semi>Password</AuthTitle>
          <AuthField  
            autoCapitalize="none" 
            autoCompleteType="password" 
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={password => setPassword(password.trim())}
            value={password}
          />
        </AuthContainer>
      
      </Auth>

      <SignInContainer disabled={loading}>
        {loading ? (
          <Loading />
        ) : (
          <Text center bold medium white>
            Sign In
          </Text>
        )}
      </SignInContainer>

      <SignUp onPress={() => navigation.navigate('SignUp')}>
        <Text center small> New to Social?{' '} 
          <Text violet small>
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
