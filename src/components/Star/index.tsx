import React, { memo, useMemo } from 'react';
import { Text, View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

type Props = {
  rate?: number;
  count?: number;
};

const Star: React.FC<Props> = ({ rate = 0, count = 0 }) => {
  const rates = useMemo(() => {
    return Array.from({ length: 5 }, () => 0).map(() => {
      // eslint-disable-next-line no-param-reassign
      const _rate = rate--;
      if (_rate >= 1) {
        return 1;
      } else if (_rate > 0) {
        return 0.5;
      }
      return 0;
    });
  }, [rate]);

  const starName = (value: number) => {
    if (value === 1) {
      return 'star';
    } else if (value > 0) {
      return 'star-half-full';
    }
    return 'star-o';
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: metrics.internalPadding / 2,
        marginRight: metrics.internalPadding,
        alignSelf: 'flex-end',
      }}
    >
      {rates.map((value, index) => (
        <FontAwesomeIcon
          key={String(index)}
          size={14}
          name={starName(value)}
          color={colors.ICON_ACTIVE}
        />
      ))}
      <Text
        style={{ fontSize: 12, fontWeight: '500', color: colors.CARD_INACTIVE_CONTENT }}
      >{`\t(${count})`}</Text>
    </View>
  );
};

export default memo(Star);
