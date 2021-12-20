import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useTheme } from '@react-navigation/native';

import { transparentize } from 'polished';

import { Product } from '../../@types/products';

import { Star } from '..';

import { BuyNow, Card, CardContainer, CardContent, ItemImage, Price, Title } from './styles';

type Props = {
  data: Product;
  onPress: (_data: Product) => void;
};

const Item: React.FC<Props> = ({ data, onPress }) => {
  const { colors } = useTheme();

  return (
    <Card
      style={{
        backgroundColor: transparentize(0.5, colors.card),
      }}
      disabled={!(data.available > 0)}
    >
      <ItemImage
        source={{ uri: typeof data.image === 'string' ? data.image : data.image[0] }}
        style={{
          backgroundColor: colors.background,
        }}
      />
      <CardContainer>
        <Title numberOfLines={2} style={{ color: colors.text }}>
          {data.title}
        </Title>
        <CardContent>
          <Price style={{ color: colors.border }}>
            <Price style={{ fontSize: 14 }}>R$ </Price>
            {`${data.price.toFixed(2).replace('.', ',')}`}
          </Price>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              onPress(data);
            }}
            disabled={data.available < 1}
          >
            <BuyNow
              style={{
                borderColor: colors.text,
                color: colors.text,
              }}
            >
              Compre já
            </BuyNow>
          </TouchableOpacity>
        </CardContent>
      </CardContainer>
      <Star count={data.rating.count} rate={data.rating.rate} />
    </Card>
  );
};

export default Item;
