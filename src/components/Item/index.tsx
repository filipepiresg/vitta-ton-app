import React, { useContext } from 'react';
import { View } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import { useTheme } from '@react-navigation/native';

import { transparentize } from 'polished';

import { CartProduct } from '../../@types/cart';
import CartContext from '../../contexts/CartContext';
import {
  Body,
  Button,
  Cod,
  Container,
  Content,
  ImageProduct,
  Title,
  UnitsContainer,
  UnitsText,
  Value,
} from './styles';

type Props = {
  data: CartProduct;
};

const Item: React.FC<Props> = ({ data }) => {
  const { deleteProduct, addProduct } = useContext(CartContext);
  const { colors } = useTheme();

  const cardColor = transparentize(0.5, colors.card);

  return (
    <Container style={{ borderColor: cardColor }}>
      <ImageProduct source={{ uri: typeof data.image === 'string' ? data.image : data.image[0] }} />
      <Content style={{ backgroundColor: cardColor }}>
        <Title style={{ color: colors.text }}>{data.title}</Title>
        <Body>
          <View>
            <Value>{`R$ ${data.price.toFixed(2).replace('.', ',')}`}</Value>
            <Cod>{`Cód.: ${data.id}`}</Cod>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Button
              onPress={() => {
                deleteProduct(data.id, 1);
              }}
              disabled={data.quantity <= 0}
              isLeft
            >
              <FeatherIcons size={15} color='#fff' name='minus' />
            </Button>

            <UnitsContainer>
              <UnitsText>{data.quantity}</UnitsText>
            </UnitsContainer>

            <Button
              onPress={() => {
                addProduct(data, 1);
              }}
              disabled={data.available <= data.quantity}
              isRight
            >
              <FeatherIcons size={15} color='#fff' name='plus' />
            </Button>
          </View>
        </Body>
      </Content>
    </Container>
  );
};

export default Item;
