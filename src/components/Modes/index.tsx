import React, { memo } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Colors } from '../../styles';
import { Container, Mode } from './styles';

type Props = {
  type: 'list' | 'grid';
  onPress: (_ncolumns: number) => void;
};

const Modes: React.FC<Props> = ({ type, onPress }) => {
  return (
    <Container>
      <Mode onPress={() => onPress(1)} isSelected={type === 'list'} isLeft>
        <Ionicons color={Colors.TITLE} size={20} name='menu' />
      </Mode>
      <Mode onPress={() => onPress(2)} isSelected={type === 'grid'} isRight>
        <Ionicons color={Colors.TITLE} size={13} name='grid' />
      </Mode>
    </Container>
  );
};

export default memo(Modes);
