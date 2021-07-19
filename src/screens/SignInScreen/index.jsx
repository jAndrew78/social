import React, { useState, useContext } from 'react';
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

import { FirebaseContext } from '../../context/FirebaseContext';
import { UserContext } from '../../context/UserContext';
import BgImage from '../../../assets/SignInBg.png'
import { Text } from '../../components';

export default SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const firebase = useContext(FirebaseContext);
  const [_, setUser] = useContext(UserContext);

  const signIn = async () => {
    setLoading(true);

    try {
      await firebase.signIn(email, password);

      const uid = firebase.getCurrentUser().uid;

      const userInfo = await firebase.getUserInfo(uid);

      setUser({
        username: userInfo.username,
        email: userInfo.email,
        uid,
        profilePhotoUrl: userInfo.profilePhotoUrl,
        isLoggedIn: true,
      });
    } catch (err) {
      alert(err.message)
    } finally {
      setLoading(false)
    }
  };

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

      <SignInContainer onPress={signIn} disabled={loading}>
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
