import styled from 'styled-components/native';

import { Metrics } from '../../styles';

export const Card = styled.View<{ disabled: boolean }>`
  flex: 1;
  height: 260px;
  margin: ${Metrics.margin}px;
  border-radius: 8px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const ItemImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 150px;
`;

export const CardContainer = styled.View`
  height: 85px;
  padding: ${Metrics.internalPadding / 2}px ${Metrics.internalPadding}px;
`;

export const CardContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: ${Metrics.margin}px;
`;

const Text = styled.Text.attrs(({ numberOfLines = 1 }) => ({
  numberOfLines,
  lineBreakMode: 'tail',
  ellipsizeMode: 'tail',
}))``;

export const Title = styled(Text)`
  font-weight: 700;
  flex-wrap: wrap;
`;

export const Price = styled(Text)`
  font-weight: 800;
  font-size: 16px;
`;

export const BuyNow = styled(Text)`
  border-width: 1.7px;
  padding: 6px;
  border-radius: 20px;
  font-size: 10px;
  text-align: center;
  text-align-vertical: center;
  font-weight: 700;
  text-transform: uppercase;
`;
