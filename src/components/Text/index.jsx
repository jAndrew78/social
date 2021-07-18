import React from 'react'
import { Text } from './styles/TextStyle';

export default TextStyle = ({ children, ...restProps }) => {
  return (
    <Text {...restProps}>{children}</Text>
  );
}

export default TextStyle;
