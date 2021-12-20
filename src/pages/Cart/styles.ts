import styled from 'styled-components/native';

import { Colors, Metrics } from '../../styles';

export const Container = styled.View`
  flex: 1;
`;

export const Separator = styled.View`
  margin-top: ${Metrics.internalPadding}px;
`;

export const ContentBalance = styled.View`
  height: ${Metrics.responsiveHeightPercentage(20)}px;
`;

export const ContentValue = styled.View`
  justify-content: space-between;
  flex: 1;
  padding-top: ${Metrics.internalPadding * 2}px;
`;

export const TextValue = styled.Text`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const ButtonPay = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.ICON_ACTIVE};
  flex-direction: row;
`;

export const TextPay = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  color: ${Colors.TITLE};
  font-weight: 700;
`;
