import { transparentize } from 'polished';
import styled from 'styled-components/native';

import { Metrics, Colors } from '../../styles';

export const Container = styled.View`
  width: 100%;
  height: 100px;
  border-width: 1px;
  border-radius: 10px;
  flex-direction: row;
`;

export const ImageProduct = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100px;
  height: 90%;
  overflow: hidden;
  padding: 10px 5px;
  align-self: center;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${Metrics.internalPadding / 2}px ${Metrics.internalPadding}px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  font-weight: 700;
`;

export const Body = styled.View`
  flex: 1;
  align-items: flex-end;
  margin-bottom: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Value = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: 400;
`;

export const Cod = styled.Text`
  font-size: 12px;
  font-weight: 500;
`;

export const UnitsContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #fff;
`;

export const UnitsText = styled.Text`
  color: #000;
  font-size: 12px;
  font-weight: 800;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<{
  isLeft?: boolean;
  isRight?: boolean;
}>`
  padding: 10px 0;
  min-width: 20px;
  background-color: ${({ disabled }) =>
    transparentize(!disabled ? 0 : 0.5, Colors.CONFIG_BUTTON_TITLE)};
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${({ isLeft }) => (isLeft ? 6 : 0)}px;
  border-top-right-radius: ${({ isRight }) => (isRight ? 6 : 0)}px;
  border-bottom-left-radius: ${({ isLeft }) => (isLeft ? 6 : 0)}px;
  border-bottom-right-radius: ${({ isRight }) => (isRight ? 6 : 0)}px;
`;
