import styled from 'styled-components/native';

import { Colors, Metrics } from '../../styles';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 ${Metrics.internalPadding}px ${Metrics.internalPadding / 2}px 0;
  align-self: flex-end;
`;

export const Comment = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${Colors.CARD_INACTIVE_CONTENT};
`;
