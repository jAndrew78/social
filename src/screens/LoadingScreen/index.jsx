import React, { useContext, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { 
  Container,
  Main,
  Background,
  StatusBar,
} from "./styles/LoadingScreen";

import { UserContext } from '../../context/UserContext';
import { FirebaseContext } from '../../context/FirebaseContext';
import { Text } from '../../components';

export default LoadingScreen = ({navigation}) => {
  const [_, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    setTimeout(async () => {
      const user = firebase.getCurrentUser();
      if (user) {
        const userInfo = await firebase.getUserInfo(user.uid);

        setUser({
          isLoggedIn: true,
          email: userInfo.email,
          uid: user.uid,
          username: userInfo.username,
          profilePhotoUrl: userInfo.profilePhotoUrl,
        });
      } else {
        setUser((state) => ({ ...state, isLoggedIn: false }));
      }
    }, 1500)
  }, [])

  return (
    <Container>
      
      <Main>
        <Text center title white>
          Be Social
        </Text>

        <LottieView 
          source={require("../../../assets/loadingAnimation.json")}
          autoPlay
          loop
          style={{ width: "50%"}}
        />  
      </Main>
      
      <StatusBar barStyle="light-content" />
    </Container>
  );
}
