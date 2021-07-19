import React, { useState } from 'react';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { 
  Container,
  Main,
  FeedContainer,
  Feed,
  PostContainer,
  PostHeaderContainer,
  PostProfilePhoto,
  PostInfoContainer,
  Options,
  Post,
  PostPhoto,
  PostDetails,
  PostLikes,
  PostComments,
  Background,
  StatusBar,
} from "./styles/HomeScreen";

import BgImage from '../../../assets/SignInBg.png'
import { Text } from '../../components';
import tempData from '../../../tempData';

export default HomeScreen = () => {
  const renderPost = ({ item }) => (
    <PostContainer>
      <PostHeaderContainer>
        
        <PostProfilePhoto source={{ uri: item.user.profilePhotoUrl }} />
        
        <PostInfoContainer>
          <Text medium>{item.user.username}</Text>
          <Text tiny violet margin="4px 0 0">{item.postedAt}</Text>
        </PostInfoContainer>

        <Options>
          <Entypo name="dots-three-horizontal" size={16} color="#73788b" />
        </Options>

      </PostHeaderContainer>

      <Post>
        <Text medium margin="0 0 16px 0">{item.post}</Text>
        <PostPhoto source={{uri: item.photoUrl}} />

        <PostDetails>

          <PostLikes>
            <Ionicons name="ios-heart" size={24} color="#bbb" />
            <Text tiny margin="0 0 0 8px">
              {item.likes}
            </Text>
          </PostLikes>

          <PostComments>
            <Ionicons name="ios-chatbubbles" size={24} color="#bbb" />
            <Text tiny margin="0 0 0 8px">
              {item.comments}
            </Text>
          </PostComments>

        </PostDetails>

      </Post>
    </PostContainer>
  );

  return (
    <Container>
      
      <Main>
        <FeedContainer>
          <Text large light center>
            Feed
          </Text>

          <Feed 
            data={tempData} 
            renderItem={renderPost} 
            keyExtractor={(item) => item.id.toString()} 
          />
        </FeedContainer>
      </Main>

      {/* <Background source={BgImage}>
      </Background> */}
      
      <StatusBar barStyle="light-content" />
    </Container>
  );
}
