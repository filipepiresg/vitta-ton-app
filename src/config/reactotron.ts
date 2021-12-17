/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Constants } from '../common';

declare global {
  interface Console {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tron: any;
  }
}

const { scriptURL } = NativeModules.SourceCode;
const [scriptHostname = ''] = scriptURL.split('://')[1].split(':');

const reactotron = Reactotron.configure({
  name: Constants.APP_NAME,
  host: scriptHostname,
  port: 9090,
}).setAsyncStorageHandler!(AsyncStorage)
  .useReactNative({
    networking: {
      ignoreUrls: /(\/logs|symbolicate)$/,
    },
  })
  .connect();

console.log('[REACTOTRON] IP for Reactotron:', scriptHostname);
console.tron = reactotron;

export default reactotron;
