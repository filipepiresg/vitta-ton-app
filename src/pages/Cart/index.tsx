import React, { useContext } from 'react';
import { Alert, FlatList, ListRenderItem } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useTheme } from '@react-navigation/native';

import { CartProduct } from '../../@types/cart';
import { Item } from '../../components';
import CartContext from '../../contexts/CartContext';
import { Colors, Metrics } from '../../styles';
import {
  ButtonPay,
  Container,
  ContentBalance,
  ContentValue,
  Separator,
  TextPay,
  TextValue,
} from './styles';

const Cart: React.FC = () => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const {
    cart: { products, amount, quantity },
    buyCart,
  } = useContext(CartContext);

  const handlePay = () => {
    Alert.alert('Pagar agora', 'Você deseja realizar esse pagamento?', [
      {
        onPress: buyCart,
        text: 'Sim',
        style: 'default',
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  };

  const renderItem: ListRenderItem<CartProduct> = ({ item }) => <Item data={item} />;

  return (
    <Container>
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        style={{ flex: 1 }}
        contentContainerStyle={{
          padding: Metrics.internalPadding,
        }}
      />

      <ContentBalance>
        <ContentValue style={{ backgroundColor: colors.card }}>
          <TextValue>
            Subtotal
            <TextValue style={{ fontWeight: '800' }}>{` R$ ${amount
              .toFixed(2)
              .replace('.', ',')}`}</TextValue>
          </TextValue>

          <ButtonPay
            style={{ paddingBottom: insets.bottom + 20 }}
            onPress={handlePay}
            disabled={quantity === 0}
          >
            <Ionicons size={25} name='card-outline' color={Colors.TITLE} />
            <TextPay>{`\tFechar pedido (${quantity} itens)`}</TextPay>
          </ButtonPay>
        </ContentValue>
      </ContentBalance>
    </Container>
  );
};

export default Cart;
