import React, { useContext } from 'react';
import { Pressable } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import { useNavigation, useTheme } from '@react-navigation/native';

import CartContext from '../../contexts/CartContext';
import { Badge, Container } from './styles';

type Props = {
  color?: string;
};

const Menu: React.FC<Props> = ({ color = 'black' }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const {
    cart: { quantity: badges },
  } = useContext(CartContext);

  const handlePress = () => {
    navigation.navigate('Cart');
  };

  return (
    <Pressable onPress={handlePress}>
      <FeatherIcons name='shopping-cart' size={24} color={color} />
      {badges > 0 && (
        <Container
          style={{
            backgroundColor: colors.notification,
          }}
        >
          <Badge numberOfLines={1} ellipsizeMode='tail' style={{ color: colors.text }}>
            {badges > 10 ? '+10' : badges}
          </Badge>
        </Container>
      )}
    </Pressable>
  );
};

export default Menu;
