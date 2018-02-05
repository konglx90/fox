import App from './src/app';

import { Sentry } from 'react-native-sentry';

const sentryDsn = Platform.select({"ios":"https://44587f361c654dac89a556228bd0e0dd:9b16e4fe3c224d18b1ae40a4e1a69f9c@sentry.io/273686","android":"https://44587f361c654dac89a556228bd0e0dd:9b16e4fe3c224d18b1ae40a4e1a69f9c@sentry.io/273686"});
Sentry.config(sentryDsn).install();


export default App;
