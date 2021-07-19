import React, { useContext } from 'react';
import { 
  Container,
  Main,
  ProfilePhotoContainer,
  ProfilePhoto,
  StatsContainer,
  StatContainer,
  LogOut,
  Background,
  StatusBar,
} from "./styles/ProfileScreen";

import { UserContext } from '../../context/UserContext';;
import { FirebaseContext } from '../../context/FirebaseContext';
import BgImage from '../../../assets/SignInBg.png'
import { Text } from '../../components';

export default ProfileScreen = ({navigation}) => {
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  return (
    <Container>
      
      <Main>
        <ProfilePhotoContainer>
          <ProfilePhoto 
            source={
              user.profilePhotoUrl === "default" 
                ? require("../../../assets/defaultProfilePhoto.png")
                : { uri: user.profilePhotoUrl }
            } 
          />
        </ProfilePhotoContainer>
      </Main>
      
      <Text medium bold margin="16px 0 32px">
        {user.username}
      </Text>

      <StatsContainer>
        <StatContainer>
          <Text large light>
            21
          </Text>
          <Text small bold violet>
            Posts
          </Text>
        </StatContainer>

        <StatContainer>
          <Text large light>
            981
          </Text>
          <Text small bold violet>
            Followers
          </Text>
        </StatContainer>

        <StatContainer>
          <Text large light>
            64
          </Text>
          <Text small bold violet>
            Following
          </Text>
        </StatContainer>
      </StatsContainer>

      <LogOut>
        <Text medium heavy violet>
          Log out
        </Text>
      </LogOut>
      

      <Background source={BgImage}>
      </Background>
      
      <StatusBar barStyle="light-content" />
    </Container>
  );
}
