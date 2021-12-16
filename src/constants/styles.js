import {Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');
const iconHeight = screenHeight * 0.7 * 0.4;

const sizes = {
  screenWidth,
  screenHeight,
  iconHeight,
  textDefault: 14,
};

const colors = {
  bg: '#f5f5f5',
  primary: '#323130',
  secondary: 'red',
  tertiary: '#9E537C',
  loading: '#0000ff',
  textDisabled: '#9EA3A7',
  textPoints: '#427486',
  white: '#ffffff',
  loginBtn: '#ff5c2c',
  whiteSmoke: '#edeef2',
  transparent: 'transparent',
};

export {sizes, colors};
