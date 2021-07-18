import React, { useState } from 'react';
import { 
  Container,
  Main,
  Auth,
  AuthContainer,
  AuthTitle,
  AuthField,
  SignUpContainer,
  SignIn,
  Loading,
  Background,
  StatusBar,
} from "./styles/SignUpScreen";

import BgImage from '../../../assets/SignInBg.png'
import { Text } from '../../components';

export default SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      
      <Main>
        <Text center title semi>
          Come and join us
        </Text>
      </Main>

      <Auth>

        <AuthContainer>
          <AuthTitle small semi>Username</AuthTitle>
          <AuthField 
            autoCapitalize="none" 
            autoCorrect={false} 
            autoFocus={false}
            onChangeText={username => setUsername(username.trim())}
            value={username}
          />
        </AuthContainer>

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
            autoFocus={false}
            secureTextEntry={true}
            onChangeText={password => setPassword(password.trim())}
            value={password}
          />
        </AuthContainer>

      </Auth>

      <SignUpContainer disabled={loading}>
        {loading ? (
          <Loading />
        ) : (
          <Text center bold medium white>
            Sign Up
          </Text>
        )}
      </SignUpContainer>

      <SignIn onPress={() => navigation.navigate('SignIn')}>
        <Text center small> Already Social?{' '} 
          <Text violet small>
            Sign In
          </Text>
        </Text>
      </SignIn>
      
      <Background source={BgImage}>
      </Background>
      
      <StatusBar barStyle="light-content" />
    </Container>    
  );
}
