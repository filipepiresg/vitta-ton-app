import React, { useContext, useEffect, useState } from 'react';
import { Animated, Pressable } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import { useNavigation, useTheme } from '@react-navigation/native';

import CartContext from '../../contexts/CartContext';
import { Badge, Container } from './styles';

type Props = {
  color?: string;
};

const ContainerAnimated = Animated.createAnimatedComponent(Container);

const Menu: React.FC<Props> = ({ color = 'black' }) => {
  const [animateValue] = useState(new Animated.Value(0));
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [badgeShown, setBadgeShown] = useState(false);

  const {
    cart: { quantity: badges },
  } = useContext(CartContext);

  useEffect(() => {
    if (badgeShown && badges === 0) {
      setBadgeShown(false);
    } else if (!badgeShown && badges > 0) {
      setBadgeShown(true);
    }
  }, [badges, badgeShown]);

  useEffect(() => {
    Animated.timing(animateValue, {
      useNativeDriver: true,
      toValue: badgeShown ? 1 : 0,
      duration: 300,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [badgeShown]);

  const scaleBadge = animateValue.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });

  const handlePress = () => {
    navigation.navigate('Cart');
  };

  return (
    <Pressable onPress={handlePress}>
      <FeatherIcons name='shopping-cart' size={24} color={color} />
      <ContainerAnimated
        style={{
          transform: [
            {
              scale: scaleBadge,
            },
          ],
          backgroundColor: colors.notification,
        }}
      >
        <Badge numberOfLines={1} ellipsizeMode='tail' style={{ color: colors.text }}>
          {badges >= 10 ? '9+' : badges}
        </Badge>
      </ContainerAnimated>
    </Pressable>
  );
};

export default Menu;
