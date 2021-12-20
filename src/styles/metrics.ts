import { Dimensions, PixelRatio } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const responsiveWidthPercentage = (width: number | string) => {
  const elemWidth = typeof width === 'number' ? width : parseFloat(width);

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const responsiveHeightPercentage = (height: number | string) => {
  const elemHeight = typeof height === 'number' ? height : parseFloat(height);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const metrics = {
  screenWidth,
  screenHeight,
  externalPadding: 15,
  internalPadding: 10,
  margin: 10,
  responsiveHeightPercentage,
  responsiveWidthPercentage,
};

export default metrics;
