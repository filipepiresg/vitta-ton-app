import React from 'react';
import { Text, Pressable, View } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import { useNavigation, useTheme } from '@react-navigation/native';

import useCart from '../../contexts/hooks/useCart';

type Props = {
  color?: string;
};

const Menu: React.FC<Props> = ({ color }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const {
    cart: { quantity },
  } = useCart();

  const handlePress = () => {
    navigation.navigate({ name: 'Cart' });
  };

  return (
    <Pressable onPress={handlePress}>
      <>
        <FeatherIcons name='shopping-cart' size={24} color={color || 'black'} />
        {quantity >= 0 && (
          <View
            style={{
              position: 'absolute',
              right: -8,
              bottom: 0,

              backgroundColor: colors.notification,
              height: 14,
              paddingHorizontal: 4,
              borderRadius: 7,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              ellipsizeMode='tail'
              style={{ fontSize: 8, fontWeight: '800', color: colors.text }}
            >
              {quantity > 10 ? '+10' : quantity}
            </Text>
          </View>
        )}
      </>
    </Pressable>
  );
};

export default Menu;
