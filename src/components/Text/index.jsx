import React from 'react'
import { Text } from './styles/Text';

export default TextStyle = ({ children, ...restProps }) => {
  return (
    <Text {...restProps}>{children}</Text>
  );
}
