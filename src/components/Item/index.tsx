import React from 'react';
import { Text, View, Image } from 'react-native';

import { useTheme } from '@react-navigation/native';

import { Product } from '../../@types/products';
import metrics from '../../styles/metrics';

import { Star } from '..';

type Props = {
  data: Product;
};

const Item: React.FC<Props> = ({ data }) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        height: 275,
        margin: metrics.margin,
        borderRadius: 8,
        backgroundColor: colors.card,
      }}
    >
      <View>
        <Image
          source={{ uri: typeof data.image === 'string' ? data.image : data.image[0] }}
          style={{
            width: '100%',
            height: 150,
            backgroundColor: colors.background,
          }}
          resizeMode='contain'
        />
      </View>
      <View
        style={{
          height: 100,
          paddingVertical: metrics.internalPadding / 2,
          paddingHorizontal: metrics.internalPadding,
        }}
      >
        <Text
          numberOfLines={2}
          ellipsizeMode='tail'
          style={{ color: colors.text, fontWeight: '700', flexWrap: 'wrap' }}
        >
          {data.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: metrics.margin,
          }}
        >
          <Text
            numberOfLines={1}
            lineBreakMode='tail'
            ellipsizeMode='tail'
            style={{ color: colors.border, fontWeight: '800' }}
          >
            {`R$ ${data.price.toFixed(2).replace('.', ',')}`}
          </Text>
          <View>
            <Text
              style={{
                borderWidth: 2,
                borderColor: colors.text,
                padding: 6,
                borderRadius: 20,
                color: colors.text,
                fontSize: 10,
                textAlign: 'center',
                textAlignVertical: 'center',
                fontWeight: '700',
                textTransform: 'uppercase',
              }}
            >
              Compre já
            </Text>
          </View>
        </View>
      </View>
      <Star count={data.rating.count} rate={data.rating.rate} />
    </View>
  );
};

export default Item;
