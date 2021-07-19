import styled from 'styled-components';
import { Text } from '../../../components';

export const Container = styled.View`
  flex: 1;
  background-color: #919dc2;
`;

export const Main = styled.View`
  margin: 84px 0;
`;

export const FeedContainer = styled.View`

`;

export const Feed = styled.FlatList`

`;

export const PostContainer = styled.View`
  margin: 16px 16px 0 16px;
  background-color: #ddd;
  border-radius: 10px;
  padding: 8px;
`;

export const PostHeaderContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
`;

export const PostProfilePhoto = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border-color: #fff;
  border-width: 1px;
`;

export const PostInfoContainer = styled.View`
  flex: 1;
  margin: 0 16px;
`;

export const Options = styled.View`
  position: relative;
  bottom: 16px;
  right: 8px;
`;

export const Post = styled.View`
  margin-left: 64px;
`;

export const PostPhoto = styled.Image`
  width: 90%;
  height: 125px;
  border-radius: 10px;
`;

export const PostDetails = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const PostLikes = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`;

export const PostComments = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

export const StatusBar = styled.StatusBar``;

