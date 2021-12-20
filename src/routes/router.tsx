import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Menu } from '../components';
import { Products, Cart } from '../pages';
import { DarkTheme, DefaultTheme } from '../styles/themes';

export type RootStackParamList = {
  Products: undefined;
  Cart: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Router() {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <StatusBar
          backgroundColor={theme.colors.card}
          barStyle={!theme.dark ? 'dark-content' : 'light-content'}
          translucent
        />
        <Stack.Navigator
          initialRouteName='Products'
          screenOptions={{
            headerShown: true,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
          }}
        >
          <Stack.Screen
            name='Products'
            component={Products}
            options={{
              headerRight: ({ tintColor }) => <Menu color={tintColor} />,
              title: 'Produtos',
            }}
          />
          <Stack.Screen
            name='Cart'
            component={Cart}
            options={{
              title: 'Carrinho',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
