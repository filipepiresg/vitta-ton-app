import { Theme } from '@react-navigation/native';

import colors from './colors';

export const DefaultTheme: Theme = {
  dark: false,
  colors: {
    background: colors.TITLE,
    primary: colors.SECONDARY,
    text: colors.PRIMARY,
    border: colors.CARD_ACTIVE_TITLE,
    card: colors.CARD_ACTIVE,
    notification: colors.ICON_ACTIVE,
  },
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    background: colors.TITLE,
    primary: colors.SECONDARY,
    text: colors.PRIMARY,
    border: colors.CARD_ACTIVE_TITLE,
    card: colors.CARD_ACTIVE,
    notification: colors.ICON_ACTIVE,
  },
};
