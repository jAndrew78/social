import React, { useState } from 'react';
import { Platform } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { 
  Container,
  Main,
  ProfilePhotoContainer,
  DefaultProfilePhoto,
  ProfilePhoto,
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
import { result } from 'lodash';

export default SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState();

  const getPermission = async () => {
    if (Platform.OS !== 'web') {
      const {status} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

      return status;
    }
  };

  const pickImage = async () => {
    try {
      let res = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: .5,
      });

      if (!res.cancelled) {
        setProfilePhoto(res.uri)
      };
    } catch (err) {
      console.log("Error @pickImage: ", err);
    }
  };
  
  const addProfilePhoto = async () => {
    const status = await getPermission();

    if (status !== "granted") {
      alert("Social needs permission to access your media library in order to set your profile picture.\n\n If the Permissions window no longer appears, you can allow permissions on your phone via Settings > Expo Go.")
      return;
    }

    pickImage();
  };

  return (
    <Container>
      
      <Main>
        <Text center title semi>
          Come join us
        </Text>
      </Main>

      <ProfilePhotoContainer onPress={addProfilePhoto}>
        {profilePhoto ? (
          <ProfilePhoto source={{uri: profilePhoto}} />
        ) : (
          <DefaultProfilePhoto>
            <AntDesign name="plus" size={24} color="#fff" />
          </DefaultProfilePhoto>
        )}
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
