import 'babel-polyfill';
import { AppRegistry } from 'react-native';
import App from './App';

import { Sentry } from 'react-native-sentry';
Sentry.config('https://44587f361c654dac89a556228bd0e0dd:9b16e4fe3c224d18b1ae40a4e1a69f9c@sentry.io/273686').install();

AppRegistry.registerComponent('fox', () => App);
