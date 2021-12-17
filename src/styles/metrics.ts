import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const metrics = {
  screenWidth,
  screenHeight,
  externalPadding: 15,
  internalPadding: 10,
  margin: 10,
};

export default metrics;
