if (__DEV__) {
  import('./src/config/reactotron');
}

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import App from './src/App';

AppRegistry.registerComponent(appName, () => App);
