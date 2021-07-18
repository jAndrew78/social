import styled from 'styled-components';
import { Text } from '../../../components';

export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.View`
  margin-top: 160px;
`;

export const ProfilePhotoContainer = styled.TouchableOpacity`
  background-color: #e1e2e6;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  align-self: center;
  margin-top: 16px;
  overflow: hidden;
`;

export const DefaultProfilePhoto = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Auth = styled.View`
  margin: 24px 32px 32px; 
`;

export const AuthContainer = styled.View`
  margin-bottom: 32px;
`;

export const AuthTitle = styled(Text)`
  color: #333;
  text-transform: uppercase;
`;

export const AuthField = styled.TextInput`
  border-bottom-color: #333;
  border-bottom-width: .5px;
  height: 48px;
  font-size: 24px;
`;

export const SignUpContainer = styled.TouchableOpacity`
  margin: 0 32px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #919dc2;
  border-radius: 10px;
`;

export const SignIn = styled.TouchableOpacity`
  margin-top: 16px;
`;

export const Loading = styled.ActivityIndicator.attrs(props => ({
  color: "#fff",
  size: "small",
}))``;

export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

export const StatusBar = styled.StatusBar``;
