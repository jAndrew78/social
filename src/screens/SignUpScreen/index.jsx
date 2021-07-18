import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { 
  Container,
  Main,
  ProfilePhotoContainer,
  DefaultProfilePhoto,
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
          Come join us
        </Text>
      </Main>

      <ProfilePhotoContainer>
        <DefaultProfilePhoto>
          <AntDesign name="plus" size={24} color="#fff" />
        </DefaultProfilePhoto>
      </ProfilePhotoContainer>

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
