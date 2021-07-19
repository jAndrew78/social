import styled from 'styled-components';
import { Text } from '../../../components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Main = styled.View`
  margin-top: 72px;
`;

export const ProfilePhotoContainer = styled.View`
  shadow-opacity: .6;
  shadow-radius: 10px;
  shadow-color: #222;
`;

export const ProfilePhoto = styled.Image`
  width: 256px;
  height: 256px;
  border-width: 3px;
  border-color: #fff;
  border-radius: 128px;
`;

export const StatsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 32px;
`;

export const StatContainer = styled.View`
  align-items: center;
  flex: 1;
`;

export const LogOut = styled.TouchableOpacity`
  margin-bottom: 32px;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

export const StatusBar = styled.StatusBar``;

