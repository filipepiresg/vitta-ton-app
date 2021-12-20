import { transparentize } from 'polished';
import styled from 'styled-components/native';

import { Metrics, Colors } from '../../styles';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 0 ${Metrics.margin}px ${Metrics.margin}px;
`;

export const Mode = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<{
  isSelected?: boolean;
  isLeft?: boolean;
  isRight?: boolean;
}>`
  height: 30px;
  width: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${({ isSelected }) =>
    transparentize(isSelected ? 0 : 0.5, Colors.CONFIG_BUTTON_TITLE)};
  border-top-left-radius: ${({ isLeft }) => (isLeft ? 6 : 0)}px;
  border-bottom-left-radius: ${({ isLeft }) => (isLeft ? 6 : 0)}px;
  border-top-right-radius: ${({ isRight }) => (isRight ? 6 : 0)}px;
  border-bottom-right-radius: ${({ isRight }) => (isRight ? 6 : 0)}px;
`;
